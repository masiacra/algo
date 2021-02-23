export class Link {
	private readonly dData: number;
	public next: Link | null;
	
	constructor(dd: number) {
		this.dData = dd;
		this.next = null;
	}
	
	public getData(): number {
		return this.dData;
	}
	
	public displayLink(): void {
		console.log(this.dData);
	}
}

export class CycleList {
	private current: Link;
	private size: number;
	
	constructor() {
		this.current = null;
		this.size = 0;
	}
	
	public insert(j: number): void {
		const newLink = new Link(j);
		if (this.size === 0) {
			this.current = newLink;
			newLink.next = newLink;
		} else if (this.size === 1) {
			this.current.next = newLink;
			newLink.next = this.current;
		} else {
			const temp = this.current.next;
			this.current.next = newLink;
			newLink.next = temp;
		}
		this.size += 1;
	}
	
	public remove(): Link | null {
		let value: Link | null = null;
		if (this.size === 0) {
			console.error("Can't remove from empty list");
		} else if (this.size === 1) {
			value = this.current;
			this.current = null;
		} else {
			value = this.current.next;
			this.current.next = value.next;
		}
		this.size -= 1;

		return value;
	}
	
	public find(key: number): Link | null {
		let result: Link | null = null;
		if (this.size === 0) {
			console.error("Can't find key in empty list");
		} else {
			let current = this.current;
			while (current.getData() !== key) {
				current = current.next;
				if (current = this.current) {
					break;
				}
			}
			result = current.getData() === key ? current : null;
		}
		
		return result;
	}
	
	public step(): void {
		if (this.size === 0) {
			console.error("CycleList is empty");
		} else {
			this.current = this.current.next;
		}
	}
	
	public displayList(): void {
		if (this.size === 0) {
			console.log("List is empty");
		} else {
			console.log("List: ");
			this.current.displayLink();
			let current = this.current.next;
			while (current !== this.current) {
				current.displayLink();
				current = current.next;
			}
		}
	}
	
	public getSize(): number {
		return this.size;
	}
	
	public getCurrent(): Link {
		return this.current;
	}
}

/*
const list = new CycleList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
console.log("Before removing");
list.displayList();

list.remove();


console.log("After 1");

list.displayList();
list.remove();


console.log("After 2");

list.displayList();
list.remove();


console.log("After 3");

list.displayList();
list.remove();


console.log("After 4");

list.displayList();
*/
