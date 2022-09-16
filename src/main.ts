// The entry file of your WebAssembly module.
import * as gc from "../gamercade/gamercade-raw";

let frameCounter: usize = 0;
let xPos: i32 = 0;
let yPos: i32 = 0;

export function init(): void {
  gc.consoleLog("Hello, from Assemblyscript!");
}
export function update(): void {}
export function draw(): void {
  gc.clearScreen(10);
  let color = gc.colorIndex(9);
  gc.setPixel(color, 10, 10);
  gc.circle(color, 30, 30, 5);
}

// export function draw(): void {
//   // Clear screen function takes a GraphicsParameters as a parameter,
//   // so let's make one.
//   let clearColor = gc.colorIndex(0);

//   // Now, we can clear the screen.
//   gc.clearScreen(clearColor);

//   // Let's draw a pixel.
//   let pixelColor = gc.colorIndex(16);
//   gc.setPixel(pixelColor, xPos, yPos);

//   // Let's draw a spinning pixel.
//   let spinningPixelColor = gc.colorIndex(9);

//   // Make it spin around
//   let frame = frameCounter as f32;
//   let x = Math.sin(frame * 0.1) * 25.0;
//   let y = Math.cos(frame * 0.1) * 25.0;

//   x += xPos as f32;
//   y += yPos as f32;

//   // Draw the spinning pixel
//   gc.setPixel(spinningPixelColor, x as i32, y as i32);
// }

// export function update(): void {
//   // Print a message if the user presses the A button.
//   // This defaults to the U key on the keyboard.
//   if (gc.buttonAPressed(0)) {
//     let buf = String.UTF8.encode("Pressed A.");
//     gc.consoleLog(changetype<usize>(buf), buf.byteLength);
//   }

//   // Let's move the pixel with the arrow keys
//   // Handle up/down motion
//   if (gc.buttonUpHeld(0)) {
//     yPos -= 1;
//   }

//   if (gc.buttonDownHeld(0)) {
//     yPos += 1;
//   }

//   // And repeat for left/right
//   if (gc.buttonLeftHeld(0)) {
//     xPos -= 1;
//   }

//   if (gc.buttonRightHeld(0)) {
//     xPos += 1;
//   }

//   // Update the frame counter to keep the animation looping
//   frameCounter += 1;
// }
