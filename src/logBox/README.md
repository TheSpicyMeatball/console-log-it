<h2>logBox</h2>
<p>Log out a message in a box</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>config <span>(optional)</span></b></p>The configuration for the box</td><td>LogBoxConfig</td></tr></tbody>
    </table><p><b>Returns:</b> {(...lines: Array&lt;string | LogBoxLine&gt;) =&gt; void}</p><h4>Supporting Types</h4>

```
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

export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
```
<h4>Import</h4>

```
import { logBox, LogBoxConfig, LogBoxLine, Color } from 'console-log-it';
```

  <h4>Examples</h4>


```    
logBox()('I\'m in a box!');

logBox({ color: 'magenta' })('I\'m in a magenta box!');

logBox({ padding: 10, symbol: '-' })('I\'ve got 10 spaces of padding in a box with a symbol override!');

// More complex
logBox({ color: 'green', indent: 4, bufferLines: true })(
  'This box is indented 4 spaces.',
  'It also has buffer lines above and below the content.',
  '',
  { color: 'red', message: 'I\'m red in a green box!' },
  { color: 'cyan', message: '...and I\'m cyan! '},
);
```



![Status Logs](../../dist/images/boxes.png)



    