class TriangleApp {
	static triangle(n: number): number {
		console.log("Entering: n=", n);
		if (n === 1) {
			console.log("Returning 1");
			return 1;
		} else {
			const temp = n + TriangleApp.triangle(n-1);
			console.log("Returning ", temp);
			return temp;
		}
	}
}

console.log("Triangle for 5 = ", TriangleApp.triangle(5));
