import { AsciiCanvas } from "./models/AsciiCanvas";

interface DrawTextOptions {
  width: number;
  height: number;
  symbol?: string;
  existingCanvas?: HTMLCanvasElement | any;
}

/**
 * @description Generates an ASCII representation of the given text using a binary matrix.
 */
export function createAsciiArtString(
  text: string,
  options: DrawTextOptions
): string {
  const { symbol = "*" } = options;

  const asciiMatrix = renderTextToAsciiMatrix(text, options);
  return asciiMatrix.reduce((acc, row) => {
    const rowString = row.map((cell) => (cell ? symbol : " ")).join("");
    return acc + rowString + "\n";
  }, "");
}

interface GenerateImageOptions extends DrawTextOptions {
  scaleFactor?: number;
}

/**
 * @description Generates a scaled image of ASCII art and returns it as a data URL.
 */
export function generateAsciiImage(
  text: string,
  options: GenerateImageOptions
): string {
  const { symbol = "*", scaleFactor = 4 } = options;
  const { width, height, existingCanvas } = options;

  const scaledMatrix = renderTextToAsciiMatrix(text, {
    width: width / scaleFactor,
    height: height / scaleFactor,
    existingCanvas,
  });

  const asciiCanvas = new AsciiCanvas(width, height, existingCanvas);
  const ctx = asciiCanvas.getContext();
  if (!ctx) throw new Error("Failed to get canvas context.");

  ctx.clearRect(0, 0, width, height);
  const fontSize = Math.round(width / height) * scaleFactor;
  ctx.font = `${fontSize}px monospace`;

  scaledMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const x = colIndex * scaleFactor;
      const y = rowIndex * scaleFactor;

      if (cell) ctx.fillText(symbol, x, y);
    });
  });

  return asciiCanvas.getCanvas().toDataURL();
}

/**
 * @description Renders the given text to an ASCII matrix based on the provided options.
 */
export function renderTextToAsciiMatrix(
  text: string,
  options: Omit<DrawTextOptions, "symbol">
): number[][] {
  const { width, height, existingCanvas } = options;

  const asciiCanvas = new AsciiCanvas(width, height, existingCanvas);
  const ctx = asciiCanvas.getContext();
  if (!ctx) throw new Error("Failed to get canvas context.");

  const fontSize = Math.min(width, height) / 4;
  ctx.font = `${fontSize}px monospace`;
  ctx.clearRect(0, 0, width, height);
  ctx.fillText(text, 10, fontSize);

  const imageData = ctx.getImageData(0, 0, width, height);
  const pixelData = imageData.data;

  const asciiMatrix = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const pixelIndex = (y * width + x) * 4;
      const alpha = pixelData[pixelIndex + 3];
      row.push(alpha > 0 ? 1 : 0);
    }
    asciiMatrix.push(row);
  }

  return asciiMatrix;
}
