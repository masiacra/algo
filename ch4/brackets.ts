import { StackX } from './stack';

class BracketChecker {
	private input: string;
	
	constructor(inp: string) {
		this.input = inp;
	}
	
	public check(): void {
		const stackSize = this.input.length;
		const theStack = new StackX<string>(stackSize);
		
		for (let j = 0; j < this.input.length; j += 1) {
			const ch: string = this.input[j];
			
			switch(ch) {
				case '{':
				case '[':
				case '(':
					theStack.push(ch);
					break;
				case '}':
				case ']':
				case ')':
					if (!theStack.isEmpty()) {
						const chx: string = theStack.pop();
						if ((ch === '}' && chx !== '{') ||
							(ch === ']' && chx !== '[') ||
							(ch === ')' && chx !== '(')) {
							
							console.log(`Error: ${ch} at ${j}`);
						}
					} else {
						console.log(`Error: stack is empty but we've got ${ch} at ${j}`); 
					}
					break;
				default:
					break;
			}
		}
		if (!theStack.isEmpty()) {
			console.log("Error: missing right delimiter");
		}
	}
}

const checkValue = "a{b(c]d}e";

console.log(`When check ${checkValue}, we will get:`);
const checker = new BracketChecker(checkValue).check(); 
