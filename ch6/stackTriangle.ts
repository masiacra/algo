class Params {
	public n: number;
	public returnAddress: number;
	
	constructor(nn: number, ra: number) {
		this.n = nn;
		this.returnAddress = ra;
	}
}

class StackX {
	private maxSize: number;
	private stackArray: Params[];
	private top: number;
	
	constructor(s: number) {
		this.maxSize = s;
		this.stackArray = new Array(s);
		this.top = -1;
	}
	
	public push(p: Params): void {
		this.top += 1;
		this.stackArray[this.top] = p;
	}
	
	public pop(): Params {
		const value = this.stackArray[this.top];
		this.top -= 1;
		return value;
	}
	
	public peek(): Params {
		return this.stackArray[this.top];
	}
}

let counter = 1;

class StackTriangleApp {
	static theNumber: number;
	static theAnswer: number;
	static theStack: StackX;
	static codePart: number;
	static theseParams: Params;
	
	public static recTriangle(): void {
		StackTriangleApp.theStack = new StackX(1000);
		StackTriangleApp.codePart = 1;
		
		while (StackTriangleApp.step() === false) {
		}
	}
	
	public static step(): boolean {
		switch (StackTriangleApp.codePart) {
			case 1: {
				StackTriangleApp.theseParams = new Params(StackTriangleApp.theNumber, 6);
				StackTriangleApp.theStack.push(StackTriangleApp.theseParams);
				StackTriangleApp.codePart = 2;
				return false;
			}
			case 2: {
				StackTriangleApp.theseParams = StackTriangleApp.theStack.peek();
				if (StackTriangleApp.theseParams.n === 1) {
					StackTriangleApp.theAnswer = 1;
					StackTriangleApp.codePart = 5;
				} else {
					StackTriangleApp.codePart = 3;
				}
				return false;
			}
			case 3: {
				const newParams = new Params(StackTriangleApp.theseParams.n - 1, 4);
				StackTriangleApp.theStack.push(newParams);
				StackTriangleApp.codePart = 2;
				return false;
			}
			case 4: {
				StackTriangleApp.theseParams = StackTriangleApp.theStack.peek();
				StackTriangleApp.theAnswer = StackTriangleApp.theAnswer + StackTriangleApp.theseParams.n;
				StackTriangleApp.codePart = 5;
				return false;
			}
			case 5: {
				StackTriangleApp.theseParams = StackTriangleApp.theStack.pop();
				StackTriangleApp.codePart = StackTriangleApp.theseParams.returnAddress;
				return false;
			}
			case 6: {
				return true;
			}
		}
	}
}

const num = 5;
console.log("Entered number", num);
StackTriangleApp.theNumber = num;
StackTriangleApp.recTriangle();
console.log("Triangle", StackTriangleApp.theAnswer);
