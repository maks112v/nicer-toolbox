# Nicer Toolbox

## asyncForEach

Allows await inside of a foreach loop.

```js
// For Node
const { asyncForEach } = require("nicer-toolbox");
// For React
import { asyncForEach } from "nicer-toolbox";

// Basic Usage
asyncForEach(arrayOfItems, callBackFunction);

// Example
const contacts = ["zzsvrqyalq", "fz12nawb3g", "ugfqduns16", "0bulps6hrb"];

asyncForEach(contacts, async (id) => {
  return await getUserData(id);
});
```
