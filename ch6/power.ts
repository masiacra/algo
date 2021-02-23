class PowerApp {
	public static power(x: number, y: number): number {
		if (y === 1) {
			return x;
		}
		if (y % 2 !== 0) {
			return x * PowerApp.power(x * x, Math.floor(y / 2));
		}
		return PowerApp.power(x * x, Math.floor(y / 2));
	}
}

console.log("power(2, 8) ===", PowerApp.power(2, 8));
console.log("power(3, 18) ===", PowerApp.power(3, 18));
