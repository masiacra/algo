class Queue {
	private maxSize: number;
	private queArray: number[];
	private front: number;
	private rear: number;
	private nItems: number;
	
	constructor(size: number) {
		this.maxSize = size;
		this.queArray = new Array(size);
		this.front = 0;
		this.rear = -1;
		this.nItems = 0;
	}
	
	public insert(j: number): void {
		if (this.rear === this.maxSize - 1) {
			this.rear = -1;
		}
		this.rear += 1;
		this.queArray[this.rear] = j;
		this.nItems += 1;
	}
	
	public remove(): number {
		const temp = this.queArray[this.front];
		this.front += 1;
		if (this.front === this.maxSize) {
			this.front = 0;
		}
		this.nItems -= 1;
		
		return temp;
	}
	
	public peekFront(): number {
		return this.queArray[this.front];
	}
	
	public isEmpty(): boolean {
		return this.nItems === 0;
	}
	
	public isFull(): boolean {
		return this.nItems === this.maxSize;
	}
	
	public size(): number {
		return this.nItems;
	}
	
	public display(): void {
		let i = this.front;
		let output: string = '';
		while (i !== this.rear) {
			output += `${String(this.queArray[i])} `;
			i += 1;
			if (i === this.maxSize) {
				i = 0;
			}
		}
		output += String(this.queArray[this.rear]);
		
		console.log("The queue is", output);
	}
}

const theQueue = new Queue(5);

theQueue.insert(10);
theQueue.insert(20);
theQueue.insert(30);
theQueue.insert(40);
theQueue.display();

theQueue.remove();
theQueue.remove();
theQueue.remove();
console.log("After removing");
theQueue.display();

theQueue.insert(50);
theQueue.insert(60);
theQueue.insert(70);
theQueue.insert(80);
console.log("After insertion");
theQueue.display();

