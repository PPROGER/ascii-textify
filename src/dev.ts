import { createCanvas } from 'canvas'
import {generateAsciiMatrix} from "./index";

const text = "PPROGER";
const options = {
  width: 200,
  height: 100,
  symbol: "*",
	existingCanvas: createCanvas(200, 100)
};

const asciiArt = generateAsciiMatrix(text, options);
console.log(asciiArt);