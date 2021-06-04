Shrinkifier exposes 3 functions: <code>processFromDir</code>, <code>mkdir</code>, and <code>rmdir</code>.
<code>processFromDir</code> takes one argument, an object with <code>start</code> and <code>finish</code> properties that are strings representing the location of the directory of images, and where the processed images will be placed, respectively. The default values are: <code>"./src/temp/unprocessed/"</code> & <code>"./src/temp/processed"</code>

```js
const { processFromDir, mkdir, rmdir } = require("shrinkifier");

// Use default directories
processFromDir({});

// Or make your own
mkdir("./some/example/path/");
mkdir("./new/image/path/");
processFromDir({ start: "./some/example/path/", finish: "./new/image/path/" });
```
