export class AsciiCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;

  constructor(
    width: number,
    height: number,
    existingCanvas?: HTMLCanvasElement
  ) {
    this.canvas = existingCanvas ?? document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
    if (!this.ctx) throw new Error("Failed to get canvas context.");
  }

  public getContext(): CanvasRenderingContext2D | null {
    return this.ctx;
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }
}
