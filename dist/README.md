[![Build Status](https://travis-ci.com/TheSpicyMeatball/console-log-it.svg?branch=main)](https://travis-ci.com/TheSpicyMeatball/console-log-it)
[![Coverage Status](https://coveralls.io/repos/github/TheSpicyMeatball/console-log-it/badge.svg?branch=main)](https://coveralls.io/github/TheSpicyMeatball/console-log-it?branch=main)
[![dependencies Status](https://status.david-dm.org/gh/TheSpicyMeatball/console-log-it.svg)](https://david-dm.org/TheSpicyMeatball/console-log-it)
[![npm version](https://badge.fury.io/js/console-log-it.svg)](https://badge.fury.io/js/console-log-it)

# console-log-it

> Console log colors, boxes, and more for the browser and terminal

<p><b>Version:</b> 1.1.0</p>

<h2>Summary of Utils</h2>

> Click on each function name for details and examples

<table>
    <thead>
    <tr>
      <th>function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logBox/README.md">logBox</a></td><td>Log out a message in a box</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logDebug/README.md">logDebug</a></td><td>Log out args based on a condition</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logError/README.md">logError</a></td><td>Log out an error message</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logInfo/README.md">logInfo</a></td><td>Log out an info message</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logStatus/README.md">logStatus</a></td><td>Log out a custom status message</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logStyle/README.md">logStyle</a></td><td>Log out a styled message</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logSuccess/README.md">logSuccess</a></td><td>Log out a success message</td></tr><tr><td><a href="https://github.com/TheSpicyMeatball/console-log-it/tree/main/src/logWarning/README.md">logWarning</a></td><td>Log out a warning message</td></tr></tbody>
  </table><hr />

<h2>Examples</h2>
<p>Here are some examples of things you can do with <code>console-log-it</code>:</p>

<h3>Boxes</h3>

![Status Logs](https://github.com/TheSpicyMeatball/console-log-it/blob/main/images/boxes.png?raw=true)

<h3>Core &amp; Custom Statuses</h3>

![Status Logs](https://github.com/TheSpicyMeatball/console-log-it/blob/main/images/status-logs.png?raw=true)

<h3>Change Your Line Style</h3>

![Status Logs](https://github.com/TheSpicyMeatball/console-log-it/blob/main/images/style.png?raw=true)

<h2>Interfaces &amp; Types</h2>
<p>
  These are importable if you are using TypeScript. If you're not using TypeScript, you can simply use 
  these as a reference to the shapes of the objects and the potential values to pass into the functions.
</p>

```
export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export type BackgroundColor = 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgGray';
export type Style = 'blink' | 'bright' | 'dim' | 'hidden' | 'reverse' | 'reset' | 'underscore';

export type LogBoxConfig = {
  color: Color,
  indent?: number,
  padding?: number,
  bufferLines?: boolean,
  symbol?: string,
};

export type LogBoxLine = {
  color: Color,
  message: string,
};

export type StatusConfig = {
  indent?: number,
  tagMessage?: string,
};

export type CustomStatusConfig = {
  indent?: number,
  tagColor: Color,
  tagMessage: string,
};
```

<a href="#package-contents"></a>
<h2>Package Contents</h2>

Within the module you'll find the following directories and files:

```html
package.json
CHANGELOG.md -- history of changes to the module
README.md -- this file
/lib
  └───/es5
      └───index.d.ts - 430 Bytes
      └───index.js - 1.48 KB
    └───/logBox
      └───index.d.ts - 1.33 KB
      └───index.js - 6.07 KB
    └───/logDebug
      └───index.d.ts - 519 Bytes
      └───index.js - 806 Bytes
    └───/logError
      └───index.d.ts - 558 Bytes
      └───index.js - 1.12 KB
    └───/logInfo
      └───index.d.ts - 560 Bytes
      └───index.js - 1.12 KB
    └───/logStatus
      └───index.d.ts - 760 Bytes
      └───index.js - 2.09 KB
    └───/logStyle
      └───index.d.ts - 926 Bytes
      └───index.js - 2.03 KB
    └───/logSuccess
      └───index.d.ts - 548 Bytes
      └───index.js - 1.12 KB
    └───/logWarning
      └───index.d.ts - 557 Bytes
      └───index.js - 1.13 KB
    └───/types
      └───index.d.ts - 800 Bytes
      └───index.js - 79 Bytes
    └───/_private
      └───index.d.ts - 561 Bytes
      └───index.js - 3.43 KB
  └───/es6
      └───index.d.ts - 430 Bytes
      └───index.js - 324 Bytes
    └───/logBox
      └───index.d.ts - 1.33 KB
      └───index.js - 5.84 KB
    └───/logDebug
      └───index.d.ts - 519 Bytes
      └───index.js - 676 Bytes
    └───/logError
      └───index.d.ts - 558 Bytes
      └───index.js - 1000 Bytes
    └───/logInfo
      └───index.d.ts - 560 Bytes
      └───index.js - 1002 Bytes
    └───/logStatus
      └───index.d.ts - 760 Bytes
      └───index.js - 1.95 KB
    └───/logStyle
      └───index.d.ts - 926 Bytes
      └───index.js - 1.91 KB
    └───/logSuccess
      └───index.d.ts - 548 Bytes
      └───index.js - 994 Bytes
    └───/logWarning
      └───index.d.ts - 557 Bytes
      └───index.js - 1004 Bytes
    └───/types
      └───index.d.ts - 800 Bytes
      └───index.js - 12 Bytes
    └───/_private
      └───index.d.ts - 561 Bytes
      └───index.js - 3.12 KB
```

<a href="#license"></a>
<h2>License</h2>

MIT


<a href="#author"></a>
<h2>Author</h2>
Michael Paravano




<a href="#dependencies"></a>
<h2>Dependencies</h2>



None
