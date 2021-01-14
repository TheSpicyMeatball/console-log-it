/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const ejs = require('ejs');
const { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');
const dirTree = require('directory-tree');
const { parseTags, removeTags } = require('jsdoc-parse-plus');
const htmlEncode = require('js-htmlencode').htmlEncode;
const { logStatus, logStyle, logSuccess } = require('../dist/lib/es5/index');
const { first, isNotNilOrEmpty } = require('@paravano/utils');

/**
 * Available docgen tags:
 * @docgen_types - code wrapped display of supported types
 * @docgen_note - note about the util (blockquote)
 * @docgen_details - Any extra details to say about the function that you don't want in a note blockquote
 * @docgen_import - override for the import
 * @docgen_import_note - note about imports
 */
const docgenTags = [
  '@docgen_types', 
  '@docgen_note',
  '@docgen_description_note',
  '@docgen_details',
  '@docgen_import',
  '@docgen_import_note',
];

const index = async () => {
  logStyle('bgWhite')(' Generating README.md ');
  console.log();
  
  const root = join(__dirname, '..');
  const src = join(__dirname, '..', 'src');
  const dist = join(__dirname, '..', 'dist');
  const lib = join(__dirname, '..', 'dist', 'lib');
  const es5 = join(__dirname, '..', 'dist', 'lib', 'es5');
  const es6 = join(__dirname, '..', 'dist', 'lib', 'es6');

  const reading = logStatus({
    indent: 2,
    tagColor: 'blue',
    tagMessage: 'Reading',
  });

  const writing = logStatus({
    indent: 2,
    tagColor: 'magenta',
    tagMessage: 'Writing',
  });

  reading('Interfaces & types... ' + join(src, 'types', 'index.ts'));
  const interfaces = existsSync(join(src, 'types', 'index.ts')) ? readFileSync(join(src, 'types', 'index.ts'), 'utf8') : '';
  reading('Source directories...');
  const dirs = readdirSync(src).filter(x => !x.includes('.') && !x.startsWith('_') && x !== 'types');
  let utils = [];

  const tags = [
    '@description',
    '@since',
    '@param', 
    '@returns', 
    '@example', 
    '@see', 
    '@deprecated',
    ...docgenTags,
  ];

  console.log();
  for (const dir of dirs) {
    logStyle('cyan')('    ' + dir);
    const functions = Array.from(readFileSync(join(src, dir, 'index.ts'), 'utf8').toString().matchAll(/\/\*\*(\n|\r\n)( \*(.*)(\n|\r\n))* \*\/(\n|\r\n)(.*)/gm)).reduce((accumulator, item) => [...accumulator, item[0]] , []);
    for (const func of functions) {
      utils = [...utils, { ...getFunctionNameFromExpression(func), ...parseTags(func, tags) }];
    }
  }
  console.log();
  
  reading('package.json: ' + join(dist, 'package.json...'));
  const packageData = require(join(dist, 'package.json'));
  const tree = dirTree(lib);
  
  const formatBytes = function(a, b) {
    if (a === 0) return '0 Bytes';
    const c = 1024,
      d = b || 2,
      e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
  };

  const templateData = {
    interfaces,
    utils,
    fileTree: tree,
    package: packageData,
    formatBytes,
    generateTable,
    generateSummaryTable,
  };

  const file = await resolve(__dirname, './readme.ejs');

  writing('README.md files...');
  ejs.renderFile(file, templateData, (err, output) => {
    if (err) {
      console.log(err);
    }
    writeFileSync(join(dist, 'README.md'), output);
    writeFileSync(join(root, 'README.md'), output);
  });

  generateIndividualReadMes(utils, packageData.name);

  sanitizeDTS(dirs, es5);
  sanitizeDTS(dirs, es6);

  if (existsSync(join(__dirname, '..', 'LICENSE'))) {
    copyFileSync(join(__dirname, '..', 'LICENSE'), join(__dirname, '..', 'dist', 'LICENSE'));
  }

  if (existsSync(join(__dirname, '..', 'CHANGELOG.md'))) {
    copyFileSync(join(__dirname, '..', 'CHANGELOG.md'), join(__dirname, '..', 'dist', 'CHANGELOG.md'));
  }

  console.log();
  logSuccess()('Compiled & README.md generated');
};

const generateIndividualReadMes = (utils, packageName) => utils.forEach(util => {
  const src = join(__dirname, '..', 'src', util.name, 'README.md');
  writeFileSync(src, generateTable(util, packageName));
});

const generateTable = (util, packageName) => {
  const getValue = key => {
    if (util[key]?.value?.length > 0) {
      const startsWithTag = new RegExp(/^ *<.*?>/g);
      const endsWithTag = new RegExp(/<\/.*?>$/g);
      return startsWithTag.test(util[key].value) && endsWithTag.test(util[key].value) ? util[key].value : `<p>${util[key].value}</p>\n`;
    }

    return '';
  };

  const getNotes = key => {
    if (util[key] && Array.isArray(util[key])) {
      return util[key].map(note => `<blockquote><p>${note.value}</p></blockquote>`).join('');
    } else if (util[key]) {
      return `<blockquote><p>${util[key].value}</p></blockquote>`;
    }

    return '';
  };

  const description = getValue('description');
  const since = util.since ? `<p>Since ${util.since.value}</p>\n` : '';
  const hasDefault = util.param.some(x => x.defaultValue !== undefined);
  const types = util.docgen_types ? `<h4>Supporting Types</h4>\n\n\`\`\`\n${util.docgen_types.value}\n\`\`\`` : '';
  const details = getValue('docgen_details');

  const notes = getNotes('docgen_note');
  const descriptionNote = getNotes('docgen_description_note');
  const importNote = getNotes('docgen_import_note');

  let examples = existsSync(join(__dirname, '..', 'src', util.name, 'EXAMPLES.md')) ? '\n\n' + readFileSync(join(__dirname, '..', 'src', util.name, 'EXAMPLES.md'), 'utf8') + '\n\n' : '';

  if (isNotNilOrEmpty(util.example)) {
    examples = `

\`\`\`    
${util.example.map(x => x.value).join('\n')}
\`\`\`

${examples}

    `;
  }

  if (isNotNilOrEmpty(examples)) {
    examples = '<h4>Examples</h4>\n' + examples;
  }

  const _import = `
<h4>Import</h4>

\`\`\`
import ${isNotNilOrEmpty(util.docgen_import) ? util.docgen_import.value : `{ ${util.name} }`} from '${packageName}';
\`\`\`

  `;

  return (
    `<h2>${util.name}${util.generic ? `&lt;${htmlEncode(util.generic)}&gt;` : ''}</h2>` +
    '\n' +
    description +
    descriptionNote +
    since +
    `<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th>` +
        (hasDefault ? '<th>Default</th>' : '') +
      `</tr>
      </thead>
      <tbody>` +
      util.param.map(x => (
        `<tr><td><p><b>${x.name}${x.optional ? ' <span>(optional)</span>' : ''}</b></p>${x.description}</td>` +
        `<td>${htmlEncode(x.type)}</td>` + 
        (hasDefault ? `<td>${x.optional && x.defaultValue !== undefined ? x.defaultValue : ''}</td>` : '') + 
        '</tr>'
      )).join('') +
    `</tbody>
    </table>` +
    `<p><b>Returns:</b> ${isNotNilOrEmpty(util.returns) ? htmlEncode(util.returns.raw.replace('@returns', '').trim()) : 'void'}</p>` +
    notes +
    types +
    details +
    _import +
    importNote +
    examples
  );
};

const generateSummaryTable = utils => (
  '\n\n' +
  `<h2>Summary of Utils</h2>` +
  '\n' +
  '<p>For detailed information on each util, see below this table.</p>' +
  '\n' +
  `<table>
    <thead>
    <tr>
      <th>function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>` +
    utils.map(x => (
      `<tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/${x.name}/README.md">${x.name}</a></td>` +
      `<td>${x.description ? x.description.value : ''}</td></tr>`
    ))
    .join('') +
  `</tbody>
  </table><hr />`
);

/**
 * Remove anything from jsdoc comments that is used for documentation generation only
 *
 * @param {string[]} dirs The directory names
 * @param {string} path The path to the directories
 */
const sanitizeDTS = (dirs, path) => {
  logStatus({
    indent: 2,
    tagColor: 'magenta',
    tagMessage: 'Sanitizing',
  })('*.d.ts: ' + path + '...');
  // console.log('Sanitizing *.d.ts: ' + path + '...');

  for (const dir of dirs) {
    let file = readFileSync(join(path, dir, 'index.d.ts'), 'utf8');
    const matches = Array.from(file.matchAll(/@docgen_default +(.*)/g));

    for (const match of matches) {
      file = file.replace(match[0], ' ');
    }

    file = removeTags(file, docgenTags);
    writeFileSync(join(path, dir, 'index.d.ts'), file);
  }
};

/**
 * Gets the function name from a function expression string
 * @param {string} func - The function expression string
 * @returns {{name: string, generic?: string}}
 */
const getFunctionNameFromExpression = func => {
  const name = first(first(func.match(/export const (.*) =/), '').split('='), '').replace('export const ', '').trim();
  const genericMatch = func.match(/export const (.*?) = <(.*?)>/);
  const generic = genericMatch && genericMatch[2] || undefined;

  return { name, generic };
};

index();