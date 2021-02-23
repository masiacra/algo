import { FirstLastList } from './firstLastList';

export class LinkQueue {
	private theList: FirstLastList<number>;
	
	constructor() {
		this.theList = new FirstLastList();
	}
	
	public isEmpty(): boolean {
		return this.theList.isEmpty();
	}
	
	public insert(j: number): void {
		this.theList.insertLast(j);
	}
	
	public remove(): number {
		return this.theList.deleteFirst();
	}
	
	public displayQueue(): void {
		console.log("Queue (front --> rear)");
		this.theList.displayList();
	}
}

const theQueue = new LinkQueue();
theQueue.insert(20);
theQueue.insert(40);

theQueue.displayQueue();

theQueue.insert(60);
theQueue.insert(80);

theQueue.displayQueue();

theQueue.remove();
theQueue.remove();

theQueue.displayQueue();
