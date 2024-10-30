interface DrawTextOptions {
  width: number;
  height: number;
  symbol?: string;
}

export function generateAsciiMatrix(
  text: string,
  options: DrawTextOptions
): string {
  const { width, height, symbol = "*" } = options;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Failed to get canvas context.");

  // Set font size relative to canvas height
  const fontSize = Math.min(width, height) / 4;
  ctx.font = `${fontSize}px monospace`;

  // Clear canvas and draw text
  ctx.clearRect(0, 0, width, height);
  ctx.fillText(text, 10, fontSize);

  // Extract image data
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  // Generate ASCII matrix
  const asciiMatrix = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      const index = (i * width + j) * 4;
      const alpha = data[index + 3];
      row.push(alpha > 0 ? 1 : 0);
    }
    asciiMatrix.push(row);
  }

  return asciiMatrix.reduce((acc, row) => {
    const rowString = row.map((cell) => (cell ? symbol : " ")).join("");
    return acc + rowString + "\n";
  }, "");
}
