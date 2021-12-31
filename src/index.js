// Move the mouse across the screen as a sine wave.
const robot = require("robotjs");
// import robot from 'robotjs';

// Speed up the mouse.
robot.setMouseDelay(2);

const twoPI = Math.PI * 2.0;
const screenSize = robot.getScreenSize();
const height = (screenSize.height / 2) - 10;
const width = screenSize.width;

for (const x = 0; x < width; x++) {
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}

// Type "Hello World".
robot.typeString("Hello World");

// Press enter.
// robot.keyTap("enter");

// Get mouse position.
const mouse = robot.getMousePos();

// Get pixel color in hex format.
const hex = robot.getPixelColor(mouse.x, mouse.y);

console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
