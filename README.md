# Generate ASCII Matrix

`ascii-textify` is a TypeScript function that generates an ASCII representation of text scaled to fit a specified width and height. The output is a string representation of the text where each character is replaced by a customizable symbol.

## Installation

To install the package, use `pnpm` (or `npm`):

```bash
pnpm add ascii-textify
# or
npm i ascii-textify
```

### Import

```typescript
import { generateAsciiMatrix } from "generate-ascii-matrix";

const text = "PPROGER";
const options = {
  width: 200,
  height: 100,
  symbol: "*",
};

const asciiArt = generateAsciiMatrix(text, options);
console.log(asciiArt);
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


