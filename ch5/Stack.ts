import { Link, CycleList } from './CycleList';

class Stack {
	private list: CycleList;
	private top: number | null;
	
	constructor() {
		this.list = new CycleList();
		this.top = null;
	}
	
	public push(j: number): void {
		this.list.insert(j);
		this.top = j;
	}
	
	public pop(): number {
		const link = this.list.remove();
		this.top = this.list.getSize() > 0? this.list.getCurrent().next.getData() : null;
		return link.getData();
	}
	
	public peek(): number | null {
		return this.top;
	}
	
	public isEmpty(): boolean {
		return this.list.getSize() === 0;
	}
	
}

const theStack = new Stack();
theStack.push(20);
theStack.push(40);
theStack.push(60);
theStack.push(80);

while (!theStack.isEmpty()) {
	const value = theStack.pop();
	console.log(value);
}

console.log('end of program');
