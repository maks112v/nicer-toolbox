# Nicer Toolbox

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8c01ae16d131496f9dd5eef6ce629209)](https://app.codacy.com/manual/maks112v/nicer-toolbox?utm_source=github.com&utm_medium=referral&utm_content=maks112v/nicer-toolbox&utm_campaign=Badge_Grade_Dashboard)

A toolbox of useful functions.

## List of functions

- [asyncForEach](https://www.npmjs.com/package/nicer-toolbox#asyncforeach)
- [preventWidows](https://www.npmjs.com/package/nicer-toolbox#preventwidows)

### asyncForEach

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

asyncForEach(contacts, async id => {
  return await getUserData(id);
});
```

### preventWidows

Add as NBSP (non-breaking space) between the last to words to prevent unwanted word wraps.

```js
import { preventWidows } from "nicer-toolbox";

// Basic Usage
preventWidows("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
```
