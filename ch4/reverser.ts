import { StackX } from './stack';

class Reverser {
	private input: string;
	private output: string;
	
	constructor(input: string) {
		this.input = input;
	}
	
	public doRev(): string {
		const stackSize = this.input.length;
		const theStack = new StackX<string>(stackSize);
		this.output = "";
		
		for (let i = 0; i < this.input.length; i += 1) {
			const ch: string = this.input[i];
			theStack.push(ch);
		}
		
		while (!theStack.isEmpty()) {
			const ch: string = theStack.pop();
			this.output += ch;
		}
		
		return this.output;
		
	}
}

// TODO: сделать интерактивным этот пример

console.log("Enter a string: part");
console.log("Reversed:", new Reverser("part").doRev());
