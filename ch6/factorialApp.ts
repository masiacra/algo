class FactorialApp {
	static factorial(n: number): number {
		if (n === 0) {
			return 1;
		} else {
			return n * FactorialApp.factorial(n - 1);
		}
	}
}

let m = 6;

console.log(`For m = ${m} factorial:`, FactorialApp.factorial(m));
