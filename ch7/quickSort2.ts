class ArrayIns {
	private theArray: number[];
	private nElems: number;
	private numOfCopies: number;
	private numOfCompares: number;
	
	constructor(max: number) {
		this.theArray = new Array(max);
		this.nElems = 0;
		this.numOfCopies = 0;
		this.numOfCompares = 0;
	}
	
	public insert(value: number): void {
		this.theArray[this.nElems] = value;
		this.nElems += 1;
	}
	
	public display(): void {
		let result: string = "A=";
		for (let j = 0; j < this.nElems; j += 1) {
			result += String(this.theArray[j]);
			if (j !== this.nElems - 1) {
				result += ' ';
			}
		}
		console.log(result);
	}
	
	public quickSort(): void {
		this.recQuickSort(0, this.nElems - 1);
		console.log("Number of copies", this.numOfCopies);
		console.log("Number of compares", this.numOfCompares);
	}
	
	public recQuickSort(left: number, right: number): void {
		const size = right - left + 1;
		if (size <= 3) {
			this.manualSort(left, right);
		} else {
			const median = this.medianOf3(left, right);
			const partion = this.partionIt(left, right, median);
			this.recQuickSort(left, partion-1);
			this.recQuickSort(partion+1, right);
		}
	}
	
	public medianOf3(left: number, right: number): number {
		const center = Math.floor((left+right)/2);
		if (this.theArray[left] > this.theArray[center]) {
			this.swap(left, center);
		}
		if (this.theArray[left] > this.theArray[right]) {
			this.swap(left, right);
		}
		if (this.theArray[center] > this.theArray[right]) {
			this.swap(center, right);
		}
		this.swap(center, right-1);
		this.numOfCompares += 3;
		return this.theArray[right-1];
	}
	
	public swap(dex1: number, dex2: number): void {
		[this.theArray[dex1], this.theArray[dex2]] = 
		  [this.theArray[dex2], this.theArray[dex1]];
		
		this.numOfCopies += 3;
	}
	
	public partionIt(left: number, right: number, pivot: number): number {
		let leftPtr = left;
		let rightPtr = right - 1;
		
		while (true) {
			while (this.theArray[++leftPtr] < pivot) {
				this.numOfCompares += 1;
			}
			this.numOfCompares += 1;
			while (this.theArray[--rightPtr] > pivot) {
				this.numOfCompares += 1;
			}
			this.numOfCompares += 1;
			if (leftPtr >= rightPtr) {
				break;
			} else {
				this.swap(leftPtr, rightPtr);
			}
		}
		
		this.swap(leftPtr, right - 1);
		return leftPtr;
	}
	
	public manualSort(left: number, right: number): void {
		const size = right - left + 1;
		if (size <= 1) {
			return;
		}
		if (size === 2) {
			if (this.theArray[left] > this.theArray[right]) {
				this.swap(left, right);
			}
			this.numOfCompares += 1;
			return;
		}
		if (this.theArray[left] > this.theArray[right-1]) {
			this.swap(left, right-1);
		}
		if (this.theArray[left] > this.theArray[right]) {
			this.swap(left, right);
		}
		if (this.theArray[right-1] > this.theArray[right]) {
			this.swap(right-1, right);
		}
		this.numOfCompares += 3;
	}
}

const maxSize = 16;

const arr = new ArrayIns(maxSize);


arr.insert(69);
arr.insert(0);
arr.insert(70);
arr.insert(6);
arr.insert(38);
arr.insert(35);
arr.insert(24);
arr.insert(56);
arr.insert(44);
arr.insert(26);
arr.insert(73);
arr.insert(77);
arr.insert(30);
arr.insert(45);
arr.insert(97);
arr.insert(65);


arr.display();
console.log("after sort");
arr.quickSort();
arr.display();
