export class StackX<T> {
	private maxSize: number;
	private stackArray: T[];
	private top: number;
	
	constructor(s: number) {
		this.maxSize = s;
		this.stackArray = new Array(s);
		this.top = -1;
	}
	
	public push(j: T): void {
		this.top += 1;
		this.stackArray[this.top] = j;
	}
	
	public pop(): T {
		const returnValue = this.stackArray[this.top];
		this.top -= 1;
		
		return returnValue;
	}
	
	public peek(): T {
		return this.stackArray[this.top];
	}
	
	public isEmpty(): boolean {
		return this.top === -1;
	}
	
	public isFull(): boolean {
		return this.top === this.maxSize - 1;
	}
}

const theStack = new StackX<number>(10);
theStack.push(20);
theStack.push(40);
theStack.push(60);
theStack.push(80);

while (!theStack.isEmpty()) {
	const value = theStack.pop();
	console.log(value);
}

console.log('end of program');
