import { Link } from './Link';
import { LinkList } from './LinkList';

export class LinkStack {
	private theList: LinkList<number, null>;
	
	constructor() {
		this.theList = new LinkList<number, null>();
	}
	
	public push(j: number): void {
		this.theList.insertFirst(j, null);
	}
	
	public pop(): Link<number, null> {
		return this.theList.deleteFirst();
	}
	
	public isEmpty(): boolean {
		return this.theList.isEmpty();
	}
	
	public displayStack(): void {
		console.log("Stack (top --> bottom)");
		
		this.theList.displayList();
	}
}

const theStack = new LinkStack();
theStack.push(20);
theStack.push(40);
theStack.displayStack();

theStack.push(60);
theStack.push(80);

theStack.displayStack();

theStack.pop();
theStack.pop();

theStack.displayStack();


