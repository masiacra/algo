class ArrayIns {
	private theArray: number[];
	private nElems: number;
	
	constructor(max: number) {
		this.theArray = new Array(max);
		this.nElems = 0;
	}
	
	public insert(value: number): void {
		this.theArray[this.nElems] = value;
		this.nElems += 1;
	}
	
	public display(): void {
		let result: string = "A=";
		for (let i = 0; i < this.nElems; i += 1) {
			result += String(this.theArray[i]);
			if (i !== this.nElems - 1) {
				result += ' ';
			}
		}
		console.log(result);
	}
	
	public quickSort(): void {
		this.recQuickSort(0, this.nElems - 1);
	}
	
	private recQuickSort(left: number, right: number): void {
		if (right - left <= 0) {
			return;
		}
		let pivot = this.theArray[right];
		let partion = this.partionIt(left, right, pivot);
		this.recQuickSort(left, partion-1);
		this.recQuickSort(partion+1, right);
	}
	
	public partionIt(left: number, right: number, pivot: number): number {
		let leftPtr = left - 1;
		let rightPtr = right;
		
		while (true) {
			while (this.theArray[++leftPtr] < pivot) {
			}
			while (rightPtr > 0 && this.theArray[--rightPtr] > pivot) {
			}
			
			if (leftPtr >= rightPtr) {
				break;
			} else {
				this.swap(leftPtr, rightPtr);
			}

		}
		this.swap(leftPtr, right);
		return leftPtr;
	}
	
	public swap(dex1: number, dex2: number): void {
		[this.theArray[dex1], this.theArray[dex2]] = 
		  [this.theArray[dex2], this.theArray[dex1]];
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
