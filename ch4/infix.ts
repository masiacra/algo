class StackX {
	private maxSize: number;
	private stackArray: string[];
	private top: number;
	constructor(s: number) {
		this.maxSize = s;
		this.stackArray = new Array(s);
		this.top = -1;
	}
	
	public push(j: string): void {
		this.top += 1;
		this.stackArray[this.top] = j;
	}
	
	public peek(): string {
		return this.stackArray[this.top];
	}
	
	public pop(): string {
		const value = this.stackArray[this.top];
		this.top -= 1;
		
		return value;
	}
	
	public isEmpty(): boolean {
		return this.top === -1;
	}
	
	public size(): number {
		return this.top + 1;
	}
	
	public peekN(n: number):string {
		return this.stackArray[n];
	}
	
	public displayStack(s: string): void {
		console.log(s);
		console.log("Stack (bottom -> top):");
		for (let j = 0; j < this.size(); j += 1) {
			console.log(this.peekN(j));
		}
	}
}

class InToPost {
	private theStack: StackX;
	private input: string;
	private output: string = "";
	
	constructor(input: string) {
		this.input = input;
		this.theStack = new StackX(input.length);
	}
	
	public doTrans(): string {
		for (let j = 0; j < this.input.length; j += 1) {
			const ch = this.input[j];
			this.theStack.displayStack(`For ${ch}:`);
			switch (ch) {
				case "+":
				case "-": {
					this.gotOper(ch, 1);
					break;
				}
				case "*":
				case "/": {
					this.gotOper(ch, 2);
					break;
				}
				case "(": {
					this.theStack.push(ch);
					break;
				}
				case ")": {
					this.gotParen(ch);
					break;
				}
				default: {
					this.output += ch;
					break;
				}
			}
		}
		while (!this.theStack.isEmpty()) {
			this.theStack.displayStack("While ");
			this.output += this.theStack.pop();
		}
		this.theStack.displayStack("End");
		return this.output;
	}
	
	public gotOper(opThis: string, prec1: number): void {
		while (!this.theStack.isEmpty()) {
			const opTop: string = this.theStack.pop();
			if (opTop === "(") {
				this.theStack.push(opTop);
				break;
			} else {
				let prec2: number;
				if (opTop === "+" || opTop === "-") {
					prec2 = 1;
				} else {
					prec2 = 2;
				}
				if (prec2 < prec1) {
					this.theStack.push(opTop);
					break;
				} else {
					this.output += opTop;
				}
			}
		}
		this.theStack.push(opThis);
	}
	
	public gotParen(_: string): void {
		while (!this.theStack.isEmpty()) {
			const chx = this.theStack.pop();
			if (chx === "(") {
				break;
			} else {
				this.output += chx;
			}
		}
	}
}

console.log("Enter infix:");
const tst: string = "A*(B+C)-D/(E+F)"
console.log("Got", tst);

const theTrans = new InToPost(tst);
const output = theTrans.doTrans();
console.log("Postfix is", output);
