class RecMultApp {
	public static mult(x: number, y: number): number {
		if (x === 1) {
			return y;
		}
		if (y === 1) {
			return x;
		}
		return y + RecMultApp.mult(x - 1, y);
	}
}

console.log(RecMultApp.mult(4, 3));
console.log(RecMultApp.mult(6, 6));
