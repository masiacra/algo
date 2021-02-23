class OrdArray {
	private a: number[];
	private nElems: number;
	
	constructor(max: number) {
		this.a = new Array(max);
		this.nElems = 0;
	}
	
	private findIndex(searchKey: number): [number, boolean] {
		let lowerBound: number = 0;
		let upperBound: number = this.nElems - 1;
		let curIn: number;
		
		while (true) {
			curIn = Math.floor((lowerBound + upperBound) / 2);
			
			if (this.a[curIn] === searchKey) {
				return [curIn, true];
			}
			if (lowerBound > upperBound) {
				return [curIn, false];
			}
			
			if (this.a[curIn] < searchKey) {
				lowerBound = curIn + 1;
			} else {
				upperBound = curIn - 1;
			}
		}
	}
	
	public size(): number {
		return this.nElems;
	}
	

	
	public find(searchKey: number): number {
		const [curIn, ok] = this.findIndex(searchKey);
		if (!ok) {
			return this.nElems;
		}
		
		return curIn; 
	}
	
	public insert(value: number): void {
		const [j] = this.findIndex(value);
		let i: number;
		if (value < this.a[j]) {
			i = j;
		} else {
			i = j + 1;
		}
		for (let k = this.nElems; k > i; k -= 1) {
			this.a[k] = this.a[k-1];
		}
		this.a[i] = value;
		this.nElems += 1;
	}
	
	public delete(value: number): boolean {
		const [j, ok] = this.findIndex(value);
		
		if (!ok) {
			return false;
		}
		
		for (let k = j; k < this.nElems; k += 1) {
			this.a[k] = this.a[k+1];
		}
		this.nElems -= 1;
		return true;
	}
	
	public display(): void {
		for (let i = 0; i < this.nElems; i += 1) {
			console.log(this.a[i]);
		}
	}
	
	static merge(arr1: number[], arr2: number[]): number[] {
		const result: number[] = [];
		
		while (arr1.length !== 0 && arr2.length !== 0) {
			let value: number;
			if (arr1[0] < arr2[0]) {
				value = arr1.shift();
			} else {
				value = arr2.shift();
			}
			result.push(value);
		}
		while (arr1.length !== 0) {
			result.push(arr1.shift());
		}
		while(arr2.length !== 0) {
			result.push(arr2.shift());
		}
		return result;
	}
}

const maxSize = 100;

const arr: OrdArray = new OrdArray(maxSize);

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


const searchKey: number = 55;
if (arr.find(searchKey) !== arr.size()) {
	console.log("Found " + searchKey);
} else {
	console.log("Can't find " + searchKey);
}

arr.display();


console.log('---------');

arr.delete(00);


console.log('delete', arr.delete(55));
arr.delete(99);
arr.display();

console.log(OrdArray.merge([1,2,3], [4,5,6]));
