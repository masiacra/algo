class StackX {
	private maxSize: number;
	private stackArray: number[];
	private top: number
	constructor(size: number) {
		this.maxSize = size;
		this.stackArray = new Array(size);
		this.top = -1;
	}
	
	public push(j: number): void {
		this.top += 1;
		this.stackArray[this.top] = j;
	}
	
	public pop(): number {
		const value = this.stackArray[this.top];
		this.top -= 1;
		return value;
	}
	
	public peek(): number {
		return this.stackArray[this.top];
	}
	
	public isEmpty(): boolean {
		return this.top === -1;
	}
	
	public isFull(): boolean {
		return this.top === this.maxSize - 1;
	}
	
	public size(): number {
		return this.top + 1;
	}
	
	public peekN(n: number): number {
		return this.stackArray[n];
	}
	
	public displayStack(s: string): void {
		console.log(s, "Stack (bottom --> top):");
		for (let j = 0; j < this.size(); j += 1) {
			console.log(this.peekN(j));
		}
	}
}

class ParsePost {
	private theStack: StackX;
	private input: string;
	
	constructor(s: string) {
		this.input = s;
	}
	
	public doParse(): number {
		this.theStack = new StackX(20);
		let ch: string;
		let j: number;
		let num1: number;
		let num2: number;
		let interAns: number;
		
		for (j = 0; j < this.input.length; j += 1) {
			ch = this.input[j];
			this.theStack.displayStack(" "+ch+" ");
			if (ch >= "0" && ch <= "9") {
				this.theStack.push(Number(ch));
			} else {
				num2 = this.theStack.pop();
				num1 = this.theStack.pop();
				switch (ch) {
					case "+": {
						interAns = num1 + num2;
						break;
					}
					case "-": {
						interAns = num1 - num2;
						break;
					}
					case "*": {
						interAns = num1 * num2;
						break;
					}
					case "/": {
						interAns = num1 / num2;
						break;
					}
					default:
						interAns = 0;
				}
				this.theStack.push(interAns);
			}
		}
		interAns = this.theStack.pop();
		
		return interAns;
	}
}

const parsePost = new ParsePost("345+*612+/-");
console.log("Answer:", parsePost.doParse());
