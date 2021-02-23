class HighArray {
	private a: number[];
	private nElems: number;
	
	constructor(max: number) {
		this.a = new Array(max);
		this.nElems = 0;
	}
	
	public find(searchKey: number): boolean {
		for (let j = 0; j < this.nElems; j += 1) {
			if (this.a[j] === searchKey) {
				return true;
			}
		}
		return false;
	}
	
	public insert(value: number): void {
		this.a[this.nElems] = value;
		this.nElems += 1;
	}
	public delete(value: number): boolean {
		let j: number;
		
		for (j = 0; j < this.nElems; j += 1) {
			if (value === this.a[j]) {
				break;
			}
		}
		if (j === this.nElems) {
			return false;
		} else {
			for (let k = j; k < this.nElems; k += 1) {
				this.a[k] = this.a[k+1];
			}
			this.nElems -= 1;
			return true;
		}
	}
	
	public display(): void {
		for (let j = 0; j < this.nElems; j += 1) {
			console.log(this.a[j]);
		}
	}
	
	public getMax(): number {
		let max: number = -1;
		for (let i = 0; i < this.nElems; i += 1) {
			if (this.a[i] > max) {
				max = this.a[i];
			}
		}
		return max;
	}
	
	public removeMax(): number {
		let max = this.getMax();
		if (max === -1) {
			return max;
		}
		
		this.delete(max);
		
		return max;
	}
	
	public noDups(): void {
		const map: number[] = [];
		for (let i = 0; i < this.nElems; i += 1) {
			if (map.indexOf(this.a[i]) > -1) {
				this.a[i] = null;
			} else {
				map.push(this.a[i]);
			}
		}
		while (true) {
			if (!this.delete(null)) {
				break;
			}
		}
		
	}

}

const maxSize = 100;

const arr: HighArray = new HighArray(maxSize);

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

let searchKey: number = 35;
if (arr.find(searchKey)) {
	console.log("Found " + searchKey);
} else {
	console.log("Can't find " + searchKey);
}

arr.delete(0);
arr.delete(55);
arr.delete(99);
arr.display();

console.log('maximum value: ', arr.getMax());

arr.removeMax();
arr.display();

console.log('сортируем массив');

const copyOfArray: number[] = [];

while (arr.getMax() !== -1) {
	copyOfArray.push(arr.removeMax());
}

console.log(copyOfArray);

console.log('-----------------');

const arr2 = new HighArray(10);
arr2.insert(1);
arr2.insert(1);
arr2.insert(3);
arr2.insert(2);
arr2.insert(1);
arr2.insert(3);

arr2.noDups();

arr2.display();


