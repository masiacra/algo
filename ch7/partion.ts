class ArrayPar {
	private theArray: number[];
	private nElems: number;
	
	constructor(maxSize: number) {
		this.theArray = new Array(maxSize);
		this.nElems = 0;
	}
	
	public insert(n: number): void {
		this.theArray[this.nElems] = n;
		this.nElems += 1;
	}
	
	public size(): number {
		return this.nElems;
	}
	
	public display(): void {
		console.log("A=");
		let result = '';
		
		for (let i = 0; i < this.nElems; i += 1) {
			result += `${this.theArray[i]}`;
			if (i !== this.nElems - 1) {
				result += ' ';
			}
		}
		console.log(result);
	}
	
	public partionIt(left: number, right: number): number {
		const pivot = this.theArray[right];
		let leftPtr = left-1;
		let rightPtr = right;
		
		while (true) {
			while (leftPtr < right-1 && this.theArray[++leftPtr] < pivot) {
			}
			
			while (rightPtr > left && this.theArray[--rightPtr] > pivot) {
			}
			
			if (leftPtr >= rightPtr) {
				break;
			} else {
				this.swap(leftPtr, rightPtr);
			}
		}
		return leftPtr;
	}
	
	public swap(dex1: number, dex2: number): void {
		let temp = this.theArray[dex1];
		this.theArray[dex1] = this.theArray[dex2];
		this.theArray[dex2] = temp;
	}
}

const maxSize = 16;

const arr = new ArrayPar(maxSize);

arr.insert(149);
arr.insert(192);
arr.insert(47);
/*
arr.insert(152);
arr.insert(159);
arr.insert(195);
arr.insert(61);
arr.insert(66);
arr.insert(17);
arr.insert(167);
arr.insert(118);
arr.insert(64);
arr.insert(27);
arr.insert(80);
arr.insert(30);
arr.insert(105);
*/
arr.display();

const pivot = 99;
console.log(`Pivot is ${pivot}`);

const size = arr.size();

const partDex = arr.partionIt(0, size-1);

console.log(`Partion index at ${partDex}`);
arr.display();
