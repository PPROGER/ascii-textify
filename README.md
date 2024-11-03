# Generate ASCII Art from Text

`ascii-textify` is a TypeScript utility that creates an ASCII art representation of a text string, scaling it to fit specified dimensions. Each character in the text is replaced by a customizable symbol in the output.

## Installation

To install the package, use `pnpm` (or `npm`):

```bash
pnpm add ascii-textify
# or
npm i ascii-textify
```

## Usage
### Basic Import
```typescript
import { createAsciiArtString } from "ascii-textify";

const text = "PPROGER";
const options = {
  width: 200,
  height: 100,
  symbol: "*",
};

const asciiArtString = createAsciiArtString(text, options);
console.log(asciiArtString);
```

### Generating ASCII Art as an Image
#### If you'd like the ASCII art as an image, use the generateAsciiImage function:
```typescript
import { generateAsciiImage } from "ascii-textify";

const text = "PPROGER";
const options = {
  width: 800,
  height: 400,
  symbol: "*",
  scaleFactor: 4
};

const asciiArtImage = generateAsciiImage(text, options);
console.log(asciiArtImage);
```

## Options
### The following options can be passed to both `createAsciiArtString` and `generateAsciiImage`:
* `width`: The width of the canvas in pixels.
* `height`: The height of the canvas in pixels.
* `symbol`: (optional): The character used to create the ASCII art. Default is `"*"`.
* `existingCanvas`: (optional): An existing `HTMLCanvasElement` instance. Useful for server-side usage with `node-canvas` or similar libraries. If not provided, a new canvas will be created in the browser using `document`.

### For `generateAsciiImage`, you can also pass:
* `scaleFactor` (optional): Scaling factor to increase or decrease the pixel density of the ASCII art. Default is `4`.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


