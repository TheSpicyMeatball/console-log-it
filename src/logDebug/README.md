<h2>logDebug</h2>
<p>Log out args based on a condition</p>
<blockquote><p>Helpful for targeted logging to reduce log noise in complex or repetitive code such as loops.</p></blockquote><p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>condition</b></p>If true, the {args} will be logged</td><td>boolean</td></tr><tr><td><p><b>args <span>(optional)</span></b></p>The args to log</td><td>...*</td></tr></tbody>
    </table><p><b>Returns:</b> void</p>
<h4>Import</h4>

```
import { logDebug } from 'console-log-it';
```

  <h4>Examples</h4>


```    
// Log item only when the id === 42
for (const item of array) {
  logDebug(item.id === 42, item);
}
```



    