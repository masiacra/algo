class Link {
	public dData: number;
	public next: Link;
	
	constructor(dd: number) {
		this.dData = dd;
	}
	
	public displayLink(): void {
		console.log(this.dData);
	}
}

class LinkList {
	private first: Link;
	
	constructor() {
		this.first = null;
	}
	
	public getFirst(): Link {
		return this.first;
	}
	
	public setFirst(f: Link): void {
		this.first = f;
	}
	
	public isEmpty(): boolean {
		return !this.first;
	}
	
	public getIterator(): ListIterator {
		return new ListIterator(this);
	}
	
	public displayList(): void {
		let current: Link | null = this.first;
		while (current) {
			current.displayLink();
			current = current.next;
		}
	}
}


class ListIterator {
	private current: Link;
	private previous: Link;
	private ourList: LinkList;
	
	constructor(list: LinkList) {
		this.ourList = list;
		this.reset();
	}
	
	public reset(): void {
		this.current = this.ourList.getFirst();
		this.previous = null;
	}
	
	public atEnd(): boolean {
		return !this.current.next;
	}
	
	public nextLink(): void {
		this.previous = this.current;
		this.current = this.current.next;
	}
	
	public getCurrent(): Link {
		return this.current;
	}
	
	public insertAfter(dd: number): void {
		const newLink = new Link(dd);

		if (this.ourList.isEmpty()) {
			this.ourList.setFirst(newLink);
			this.current = newLink;
		} else {
			newLink.next = this.current.next;
			this.current.next = newLink;
			this.nextLink();
		}
	}
	
	public insertBefore(dd: number): void {
		const newLink = new Link(dd);
		if (!this.previous) {
			newLink.next = this.ourList.getFirst();
			this.ourList.setFirst(newLink);
			this.reset();
		} else {
			newLink.next = this.previous.next;
			this.previous.next = newLink;
			this.current = newLink;
		}
	}
	
	public deleteCurrent(): number {
		const value = this.current.dData;
		
		if (!this.previous) {
			this.ourList.setFirst(this.current.next);
			this.reset();
		} else {
			this.previous.next = this.current.next;
			if (this.atEnd()) {
				this.reset();
			} else {
				this.current = this.current.next;
			}
		}
		return value;
	}
}

const theList = new LinkList();
const iter1 = theList.getIterator();


iter1.insertAfter(20);
iter1.insertAfter(40);
iter1.insertAfter(80);
iter1.insertBefore(60);

theList.displayList();
console.log('-------');

iter1.reset();

iter1.nextLink();

console.log('after nextLink', iter1.getCurrent());

iter1.deleteCurrent();

console.log('After removing');
theList.displayList();
