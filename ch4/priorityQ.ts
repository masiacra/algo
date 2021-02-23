class PriorityQ {
	private maxSize: number;
	private queArray: number[];
	private nItems: number;
	
	public constructor(s: number) {
		this.maxSize = s;
		this.queArray = new Array(s);
		this.nItems = 0;
	}
	
	public insert(item: number): void {
		let j: number;
		
		if (this.nItems === 0) {
			this.queArray[0] = item;
			this.nItems += 1;
		} else {
			for (j = this.nItems - 1; j >= 0; j -= 1) {
				if (item > this.queArray[j]) {
					this.queArray[j+1] = this.queArray[j];
				} else {
					break;
				}
			}
			this.queArray[j+1] = item;
			this.nItems += 1;
		}
	}
	
	public remove(): number {
		this.nItems -= 1;
		return this.queArray[this.nItems];
	}
	
	public peekMin(): number {
		return this.queArray[this.nItems-1];
	}
	
	public isEmpty(): boolean {
		return this.nItems === 0;
	}
	
	public isFull(): boolean {
		return this.nItems === this.maxSize;
	}
}

const thePQ = new PriorityQ(5);
thePQ.insert(30);
thePQ.insert(50);
thePQ.insert(10);
thePQ.insert(40);
thePQ.insert(20);

while (!thePQ.isEmpty()) {
	const item = thePQ.remove();
	console.log(item);
}
