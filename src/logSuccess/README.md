<h2>logSuccess</h2>
<p>Log out a success message</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>config <span>(optional)</span></b></p>The configuration</td><td>StatusConfig</td></tr></tbody>
    </table><p><b>Returns:</b> {(...args: unknown[]) =&gt; void}</p><h4>Supporting Types</h4>

```
export type StatusConfig = {
  indent?: number,
  tagMessage?: string,
};
```
<h4>Import</h4>

```
import { logSuccess } from 'console-log-it';
```

  <h4>Examples</h4>


```    
logSuccess()('You did it!');

const success = logSuccess({ indent: 2, tagMessage: 'GREAT' });
success('You did it!');
```



![Status Logs](../../images/logSuccess.png)



    