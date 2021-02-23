import { Link } from './Link';

export class LinkList<T, K> {
	private first: Link<T, K> | null;
	
	constructor() {
		this.first = null;
	}
	
	public isEmpty(): boolean {
		return !Boolean(this.first);
	}
	
	public insertFirst(id: T, dd: K): void {
		const link = new Link<T, K>(id, dd);
		link.next = this.first;
		this.first = link;
	}
	
	public deleteFirst(): Link<T, K> {
		const link = this.first;
		this.first = this.first.next;

		return link;
	}
	
	public displayList(): void {
		// console.log("List (first --> last): ");
		let current: Link<T, K> = this.first;
		while (current) {
			current.displayLink();
			current = current.next;
		}
	}
	
	public find(key: T): Link<T, K> | null {
		let current = this.first;
		while (current.iData !== key) {
			if (!current.next) {
				return null;
			} else {
				current = current.next;
			}
		}
		return current;
	}
	
	public deleteLink(key: T): Link<T, K> | null {
		let current = this.first;
		let previous = this.first;
		
		while (current.iData !== key) {
			if (!current.next) {
				return null;
			} else {
				previous = current;
				current = current.next;
			}
		}
		
		if (current === this.first) {
			this.first = current.next;
		} else {
			previous.next = current.next;
		}
		return current;
	}
}

const theList = new LinkList<number, number>();
theList.insertFirst(22, 2.99);
theList.insertFirst(44, 4.99);
theList.insertFirst(66, 6.99);
theList.insertFirst(88, 8.99);

theList.displayList();
console.log('------');
const f: Link<number, number> = theList.find(44);
if (!!f) {
	console.log(`Found link with key ${f.iData}`);
} else {
	console.log("Can't find link");
}

const d: Link<number, number> = theList.deleteLink(66);
if (d) {
	console.log(`Deleted link with key ${d.iData}`);
} else {
	console.log("Can't delete link");
}

console.log("After transformation");
theList.displayList();
