import { createCanvas } from 'canvas'
import {createAsciiArtString, generateAsciiImage} from "./index";

const text = "PPROGER";
const options = {
  width: 200,
  height: 100,
  symbol: "*",
	existingCanvas: createCanvas(200, 100)
};

const asciiArt = createAsciiArtString(text, options);
const asciiImage = generateAsciiImage(text, {
	...options,
	scaleFactor: 2
});

console.log(asciiArt);
console.log(asciiImage);