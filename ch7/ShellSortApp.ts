class ArraySh {
	private theArray: number[];
	private nElems: number;

	constructor(maxSize: number) {
		this.theArray = new Array(maxSize);
		this.nElems = 0;
	}
	
	public insert(value: number): void {
		this.theArray[this.nElems] = value;
		this.nElems += 1;
	}
	
	public display(): void {
		for (let i = 0; i < this.nElems; i += 1) {
			console.log(this.theArray[i]);
		}
	}
	
	public shellSort(): void {
		let inner: number;
		let outer: number;
		let temp: number;
		
		let h = 1;
		
		while (h <= Math.floor(this.nElems / 3)) {
			h = h * 3 + 1;
		}
		
		while (h > 0) {
			for (outer = h; outer < this.nElems; outer += 1) {
				temp = this.theArray[outer];
				inner = outer;
				
				while (inner > h - 1 && this.theArray[inner-h] >= temp) {
					this.theArray[inner] = this.theArray[inner-h];
					inner -= h;
				}
				this.theArray[inner] =  temp;
			}
			h = (h - 1)/3;
		}
	}
}

const maxSize = 10;

const arr = new ArraySh(maxSize);

for (let i = 0; i < maxSize; i += 1) {
	arr.insert(Math.random() * 99);
}

arr.display();
console.log('=========');
arr.shellSort();
arr.display();
