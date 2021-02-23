export class Link {
	public dData: number;
	public next: Link;
	
	constructor(dd: number) {
		this.dData = dd;
	}
	
	public displayLink(): void {
		console.log(this.dData);
	}
}

export class SortedList {
	private first: Link | null;
	
	constructor() {
		this.first = null;
	}
	
	public insert(key: number): void {
		const newLink = new Link(key);
		let previous: Link | null = null;
		let current = this.first;
		
		while (current && key > current.dData) {
			previous = current;
			current = current.next;
		}
		
		if (!previous) {
			this.first = newLink;
		} else {
			previous.next = newLink;
		}
		newLink.next = current;
	}
	
	public remove(): Link {
		let temp = this.first;
		this.first = this.first.next;
		return temp;
	}
	
	public displayList(): void {
		console.log("List (first --> last):");
		let current: Link | null = this.first;
		while (current) {
			current.displayLink();
			current = current.next;
		}
	}
}

/*
const theSortedList = new SortedList();
theSortedList.insert(20);
theSortedList.insert(40);

theSortedList.displayList();

theSortedList.insert(10);
theSortedList.insert(30);
theSortedList.insert(50);
theSortedList.displayList();
console.log('After removing----');
theSortedList.remove()
theSortedList.displayList();
*/
