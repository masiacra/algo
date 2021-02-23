import { Link, DoublyLinkedList } from './DoublyLinked';

class Deque {
	private list: DoublyLinkedList;
	
	constructor() {
		this.list = new DoublyLinkedList();
	}
	
	public insertLeft(elem: number): void {
		this.list.insertFirst(elem);
	}
	
	public insertRight(elem: number): void {
		this.list.insertLast(elem);
	}
	public removeLeft(): number {
		return this.list.deleteFirst().dData;
	}
	
	public removeRight(): number {
		return this.list.deleteLast().dData;
	}
	
	public isEmpty(): boolean {
		return this.list.isEmpty();
	}
	
	public size(): number {
		let current = this.list.getFirst();
		let limit = this.list.getLast();
		let counter = 1;
		
		while (current !== limit) {
			current = current.next;
			counter += 1;
		}
		
		return counter;
	}
	
	public displayDeque(): void {
		let current = this.list.getFirst();
		let limit = this.list.getLast();
		console.log("Deque is:");
		
		while (current !== limit) {
			current.displayLink();
			current = current.next;
		}
		current.displayLink();
	}
}

const deque = new Deque();
console.log("Is empty?", deque.isEmpty());
deque.insertLeft(1);
deque.insertLeft(2);
deque.insertLeft(3);
deque.insertRight(4);
deque.insertRight(5);
deque.displayDeque();

console.log("size: ", deque.size());
