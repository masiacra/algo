class PriorityQueue<T> {
	private maxSize: number;
	private nElems: number;
	private queArray: T[];
	
	constructor(s: number) {
		this.maxSize = s;
		this.queArray = new Array(s);
		this.nElems = 0;
	}
	
	public insert(j: T): void {
		this.queArray[this.nElems] = j;
		this.nElems += 1;
	}
	
	public isEmpty(): boolean {
		return this.nElems === 0;
	}
	
	public isFull(): boolean {
		return this.nElems === this.maxSize;
	}
	
	public remove(): T {
		let minPos = 0;
		let minValue = this.queArray[minPos];
		
		for (let i = 1; i < this.nElems; i += 1) {
			if (minValue > this.queArray[i]) {
				minValue = this.queArray[i];
				minPos = i;
			}
		}
		
		for (let i = minPos; i < this.nElems - 1; i += 1) {
			this.queArray[i] = this.queArray[i+1];
		}
		this.nElems -= 1;
		
		return minValue;
	}
	
	public peekMin(): T {
		let minValue = this.queArray[0];
		
		for (let i = 1; i < this.nElems; i += 1) {
			if (minValue > this.queArray[i]) {
				minValue = this.queArray[i];
			}
		}
		
		return minValue;
	}
}

const thePQ = new PriorityQueue<number>(5);
thePQ.insert(30);
thePQ.insert(50);
thePQ.insert(10);
thePQ.insert(40);
thePQ.insert(20);

while (!thePQ.isEmpty()) {
	const item = thePQ.remove();
	console.log(item);
}
