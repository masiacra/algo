import { Link } from './Link';

export class FirstLastList<T> {
	private first: Link<T, null> | null;
	private last: Link<T, null> | null;
	
	constructor() {
		this.first = null;
		this.last = null;
	}
	
	public isEmpty(): boolean {
		return !Boolean(this.first);
	}
	
	public insertFirst(dd: T): void {
		const newLink = new Link(dd, null);
		if (this.isEmpty()) {
			this.last = newLink;
		}
		newLink.next = this.first;
		this.first = newLink;
	}
	
	public insertLast(dd: T) {
		const newLink = new Link<T, null>(dd, null);
		if (this.isEmpty()) {
			this.first = newLink;
		} else {
			this.last.next = newLink;
		}
		this.last = newLink;
	}
	
	public deleteFirst(): T {
		const temp = this.first.dData;
		if (!this.first.next) {
			this.last = null;
		}
		this.first = this.first.next;
		return temp;
	}
	
	public displayList(): void {
		// console.log("List (first --> last)");
		let current = this.first;
		while (current) {
			current.displayLink();
			current = current.next;
		}
	}
}

/*
const theList = new FirstLastList<number>();
theList.insertFirst(22);
theList.insertFirst(44);
theList.insertFirst(66);

theList.insertLast(11);
theList.insertLast(33);
theList.insertLast(55);

theList.displayList();

theList.deleteFirst();
theList.deleteFirst();
console.log("After removing");
theList.displayList();
*/
