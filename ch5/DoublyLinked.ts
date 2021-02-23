export class Link {
	public dData: number;
	public next: Link;
	public previous: Link;
	
	constructor(d: number) {
		this.dData = d;
	}	
	
	public displayLink(): void {
		console.log(this.dData);
	}
}

export class DoublyLinkedList {
	private first: Link;
	private last: Link;
	
	constructor() {
		this.first = null;
		this.last = null;
	}
	
	public isEmpty(): boolean {
		return !this.first;
	}
	
	public insertFirst(dd: number): void {
		const newLink = new Link(dd);
		if (this.isEmpty()) {
			this.last = newLink;
		} else {
			this.first.previous = newLink;
		}
		newLink.next = this.first;
		this.first = newLink;
	}
	
	public insertLast(dd: number): void {
		const newLink = new Link(dd);
		if (this.isEmpty()) {
			this.first = newLink;
		} else {
			this.last.next = newLink;
			newLink.previous = this.last;
		}
		this.last = newLink;
	}
	
	public deleteFirst(): Link {
		let temp = this.first;
		if (!this.first.next) {
			this.last = null;
		} else {
			this.first.next.previous = null;
		}
		this.first = this.first.next;
		return temp;
	}
	
	public deleteLast(): Link {
		const temp = this.last;
		if (!this.first.next) {
			this.first = null;
		} else {
			this.last.previous.next = null;
		}
		this.last = this.last.previous;
		return temp;
	}
	
	public insertAfter(key: number, dd: number) {
		let current = this.first;
		
		while (current.dData !== key) {
			current = current.next;
			if (!current) {
				return false;
			}
		}
		
		const newLink = new Link(dd);
		
		if (current === this.last) {
			newLink.next = null;
			this.last = newLink;
		} else {
			newLink.next = current.next;
			current.next.previous = newLink;
		}
		
		newLink.previous = current;
		current.next = newLink;
		return true;
	}
	
	public deleteKey(key: number): Link | null {
		let current = this.first;
		
		while (current.dData !== key) {
			current = current.next;
			if (!current) {
				return null;
			}
		}
		
		if (current === this.first) {
			this.first = current.next;
		} else {
			current.previous.next = current.next;
		}
		
		if (current === this.last) {
			this.last = current.previous;
		} else {
			current.next.previous = current.previous;
		}
		return current;
	}
	
	public displayForward(): void {
		console.log("List (first --> last)");
		let current = this.first;
		while (current) {
			current.displayLink();
			current = current.next;
		}
	}
	
	public displayBackward(): void {
		console.log("List (last --> first)");
		let current = this.last;
			
		while (current) {
			current.displayLink();
			current = current.previous;
		}
	}
	
	public getFirst(): Link {
		return this.first;
	}
	
	public getLast(): Link {
		return this.last;
	}
}

/*
const theList = new DoublyLinkedList();

theList.insertFirst(22);
theList.insertFirst(44);
theList.insertFirst(66);

theList.insertLast(11);
theList.insertLast(33);
theList.insertLast(55);

theList.displayForward();
theList.displayBackward();

theList.deleteFirst();
theList.deleteLast();
theList.deleteKey(11);

console.log('----');

theList.displayForward();

theList.insertAfter(22, 77);
theList.insertAfter(33, 88);

theList.displayForward();
*/
