class ArrayBub {
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
	
	public bubbleSort(): void {
		//версия без использования обратного хода
		/*let inner: number;
		let outer: number;
		
		for (outer = this.nElems - 1; outer > 1; outer -= 1) {
			for (inner = 0; inner < outer; inner += 1) {
				if (this.a[inner] > this.a[inner+1]) {
					this.swap(inner, inner+1);
				}
			}
		}*/
		let inner: number;
		let outer: number;
		let aux: number = 0;
		
		for (outer = this.nElems - 1; outer > Math.floor(this.nElems/2); outer -= 1) {
			for (inner = aux; inner < outer; inner += 1) {
				if (this.a[inner] > this.a[inner+1]) {
					this.swap(inner, inner+1);
				}
			}
			while (inner > aux) {
				if (this.a[inner] < this.a[inner-1]) {
					this.swap(inner, inner-1);
				}
				inner -= 1;
			}
			aux += 1;
		}
		
	}
	
	public oddEvenSort(): void {
		let flag: boolean = true;
		
		for (let i = 0; i < this.nElems; i += 1) {
			for (let j = i % 2 === 0 ? 0 : 1; j < this.nElems; j += 2) {
				if (this.a[j] > this.a[j+1]) {
					this.swap(j, j+1);
				}
			}
		}
	}
	
	private swap(one: number, two: number) {
		let temp = this.a[one];
		this.a[one] = this.a[two];
		this.a[two] = temp;
	}
}

const arr = new ArrayBub(100);

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

arr.oddEvenSort()
arr.display();
