class Deque<T> {
	private dequeArr: T[];
	private maxSize: number;
	private left: number;
	private right: number;
	private nElems: number;
	
	constructor(s: number) {
		this.maxSize = s;
		this.dequeArr = new Array(s);
		this.left = -1;
		this.right = -1;
		this.nElems = 0;
	}
	
	public insertLeft(elem: T): void {
		if (this.isFull()) {
			console.log("Sorry, we can't insert in full deque!");
			return;
		}
		if (this.left === -1) {
			this.left = this.maxSize;
		}
		this.left -= 1;
		this.dequeArr[this.left] = elem;
		this.nElems += 1;
	}
	
	public insertRight(elem: T): void {
		if (this.isFull()) {
			console.log("Sorry, we can't insert in full deque!");
			return;
		}
		if (this.right === this.maxSize - 1) {
			this.right = -1;
		}
		this.right += 1;
		this.dequeArr[this.right] = elem;
		this.nElems += 1;
	}
	
	public removeLeft(): T {
		if (this.isEmpty()) {
			console.log("Sorry we can't remove from empty deque");
			return;
		}
		const value = this.dequeArr[this.left];
		this.left += 1;
		if (this.left === this.maxSize) {
			this.left = 0;
		}
		this.nElems -= 1;
		return value;
	}
	
	public removeRight(): T {
		if (this.isEmpty()) {
			console.log("Sorry we can't remove from empty deque");
			return;
		}
		this.nElems -= 1;
		const value = this.dequeArr[this.right];
		this.right -= 1;
		if (this.right === -1) {
			this.right = this.maxSize - 1;
		}
		return value;
	}
	
	public isEmpty(): boolean {
		return this.nElems === 0;
	}
	
	public isFull(): boolean {
		return this.maxSize === this.nElems;
	}
	
	public size(): number {
		return this.nElems;
	}
	
	public display(): void {
		if (this.isEmpty()) {
			console.log("Deque is empty");
			return;
		}
		let i = this.left;
		let output = "Deque from left to right: ";
		while (i != this.right) {
			output += `${String(this.dequeArr[i])} `;
			i += 1;
			if (i === this.maxSize) {
				i = 0;
			}
		}
		output += String(this.dequeArr[i]);
		console.log(output);
	}
}

class Stack<T> extends Deque<T> {
	private hasLeft: boolean;
	constructor(s: number) {
		super(s);
		this.hasLeft = false;
	}
	
	push(elem: T): void {
		if (this.hasLeft) {
			this.insertRight(elem);
			return;
		}
		this.insertLeft(elem);
		this.hasLeft = true;
	}
	
	peek(): T {
		const value = this.removeRight();
		this.insertRight(value);
		return value;
	}
	
	pop(): T {
		return this.removeRight();
	}
}

const deque = new Deque<number>(5);
console.log("Is empty?", deque.isEmpty());
deque.insertLeft(1);
deque.insertLeft(2);
deque.insertLeft(3);
deque.insertRight(4);
deque.insertRight(5);
console.log("Is full?", deque.isFull());
deque.display();
console.log("removing ----");
deque.removeLeft();
deque.display();
deque.removeLeft();
deque.display();
deque.removeRight();
deque.display();

console.log("test of Stack");
const theStack = new Stack<number>(10);
console.dir(theStack);
theStack.push(20);
console.dir(theStack);
theStack.push(40);
theStack.push(60);
theStack.push(80);
console.log("see here");
console.dir(theStack);
console.log("Peek:", theStack.peek());
theStack.display();

console.log("display stack");
console.log("stack value", theStack.pop());
console.log("stack value", theStack.pop());
console.log("stack value", theStack.pop());
console.log("stack value", theStack.pop());
console.dir(theStack);
