// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(shell) {
//     this.length = shell.length;
//     this.width = shell.width;
//     this.height = shell.height;
// }

// CuboidMaker.prototype.volume = function () {
// //     return total = length * width * height
// function Cuboid(cuboidshell) {
//     CuboidMaker.call(this, cuboidshell);
// }

// Cuboid.prototype = Object.create(CuboidMaker.prototype);
// Cuboid.prototype.area = function () {
//         return 2 * (
//                 length
//             }*
//             width
//     } +
//     length
// }*
// height
// } +
// width
// }* height
// });
// }

// }

class CubeMaker {
	constructor(shell) {
		this.newLength = shell.length;
		this.newWidth = shell.width;
		this.newHeight = shell.height;
	}
	volume() {
		return `${this.newLength} * ${this.newWidth} * ${this.newHeight}`;
	}
}

class Cuboid extends CubeMaker {
	constructor(cubshell) {
		super(cubshell);
		console.log(cubshell);
	}
	area() {
		return `2 * (${this.newLength} * ${this.newWidth} + ${this.newLength} * ${this.newHeight} + ${this
			.newWidth} * ${this.newHeight})`;
	}
}

const Key = new Cuboid({
	length: 4,
	width: 5,
	height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Key.volume()); // 100
console.log(Key.area()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
