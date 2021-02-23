export class Link {
	public dData: number;
	public next: Link;
	
	constructor(dd: number) {
		this.dData = dd;
		this.next = null;
	}
	
	displayLink(): void {
		console.log(this.dData);
	}
}

export class LinkList {
	public first: Link;
	
	constructor() {
		this.first = null;
	}
	
	public isEmpty(): boolean {
		return !this.first;
	}
	
	public insertFirst(link: Link): void {
		if (this.isEmpty()) {
			this.first = link;
		} else {
			let current = this.first;
			while (current.next) {
				current = current.next;
			}
			current.next = link;
		}
	}	
	
	public deleteFirst(): Link {
		const link = this.first;
		this.first = this.first.next;
		return link;
	}
	
	public displayList(): void {
		let current = this.first;
		while (current) {
			current.displayLink();
			current = current.next;
		}
	}
	
	public find(key: number): Link | null {
		let current = this.first;
		while (current) {
			if (current.dData = key) {
				break;
			}
			current = current.next;
		}
		return current;
	}
	
	public deleteLink(key: number): Link | null {
		let current: Link | null = this.first;
		let previous: Link | null = null;
		while (current) {
			if (current.dData === key) {
				break;
			}
			previous = current;
			current = current.next;
		}
		if (!current) {
			return null;
		}
		if (current === this.first) {
			this.first = current.next;
		} else {
			previous.next = current.next;
		}
		return current;
	}
	
}

class PriorityQueue {
	private list: LinkList;
	
	constructor() {
		this.list = new LinkList();
	}
	
	public insert(j: number): void {
		this.list.insertFirst(new Link(j));
	}
	
	public isEmpty(): boolean {
		return this.list.isEmpty();
	}
	
	public remove(): number {
		let current: Link | null = this.list.first;
		let min = current.dData;
		while (current) {
			if (current.dData < min) {
				min = current.dData;
			}
			current = current.next;
		}
		return this.list.deleteLink(min).dData;
	}
	
	public peekMin(): number {
		let current: Link | null = this.list.first;
		let min = current.dData;
		while (current) {
			if (current.dData < min) {
				min = current.dData;
			}
			current = current.next;
		}
		return min;
	}
}

const thePQ = new PriorityQueue();
thePQ.insert(30);
thePQ.insert(50);
thePQ.insert(10);
thePQ.insert(40);
thePQ.insert(20);

while (!thePQ.isEmpty()) {
	const item = thePQ.remove();
	console.log(item);
}
