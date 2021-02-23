class ArrayInsert {
	private a: number[];
	private nElems: number;
	
	constructor(max: number) {
		this.a = new Array(max);
		this.nElems = 0;
	}
	
	public insert(value: number): void {
		this.a[this.nElems] = value;
		this.nElems += 1;
	}
	
	public display(): void {
		for (let i = 0; i < this.nElems; i += 1) {
			console.log(this.a[i]);
		}
	}
	
	public insertionSort(): void {
		const set = {};
		set[this.a[0]] = true;
		let inner: number;
		let outer: number;
		let counter: number = 0;
		
		for (outer=1; outer < this.nElems; outer += 1) {
			if (set[this.a[outer]]) {
				this.a[outer] = -1;
				counter += 1;
			} else {
				set[this.a[outer]] = true;
			}
			let temp = this.a[outer];
			inner = outer;
			while (inner > 0 && this.a[inner-1] >= temp) {
				this.a[inner] = this.a[inner-1];
				inner -= 1;

			}
			this.a[inner] = temp;
		}
		if (counter !== 0) {
			for (let  i = counter; i < this.nElems; i += 1) {
				this.a[i-counter] = this.a[i];
			}		
			this.nElems -= counter;
		}
	}
	
	public median(): number {
		this.insertionSort();
		
		const middleIndex = Math.floor(this.nElems / 2);
				
		if (this.nElems % 2 !== 0) {
			return this.a[middleIndex];
		}
		
		return (this.a[middleIndex] + this.a[middleIndex-1]) / 2;
	}
	
	public noDups(): void {
		let j = 0;
		let counter = 0;
		for (let i = 0; i < this.nElems; i += 1) {
			if (this.a[i] !== this.a[i-1]) {
				this.a[j] = this.a[i];
				j += 1;
			} else {
				counter += 1;
			}
		}
	
		this.nElems -= counter;
	}
	
}

const arr = new ArrayInsert(100);

arr.insert(77);
arr.insert(99);
arr.insert(44);
arr.insert(55);
arr.insert(22);

arr.insert(88);
arr.insert(11);
arr.insert(0);
arr.insert(66);
arr.insert(33);

arr.display();
console.log('---------');

arr.insertionSort()
arr.display();

console.log('Median', arr.median())

console.log('test noDups by sort');
const arr2 = new ArrayInsert(100);
arr2.insert(2);
arr2.insert(1);
arr2.insert(2);
arr2.insert(1);
arr2.insert(3);
arr2.insert(3);
arr2.insert(5);
arr2.insert(4);
arr2.insert(5);

arr2.insertionSort();

arr2.display();
