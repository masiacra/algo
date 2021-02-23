class DArray {
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
		for (let j = 0; j < this.nElems; j += 1) {
			console.log(this.theArray[j]);
		}
	}
	
	public mergeSort(): void {
		const workSpace: number[] = new Array(this.nElems);
		
		this.recMergeSort(workSpace, 0, this.nElems - 1);
	}
	
	public recMergeSort(workspace: number[], lowerBound: number, upperBound: number): void {
		if (lowerBound === upperBound) {
			return;
		}
		const mid = Math.floor((lowerBound + upperBound)/2);
		
		this.recMergeSort(workspace, lowerBound, mid);
		this.recMergeSort(workspace, mid+1, upperBound);
		
		this.merge(workspace, lowerBound, mid+1, upperBound);
	}
	
	private merge(workspace: number[], lowPtr: number, highPtr: number, upperBound: number): void {
		let j = 0;
		let lowerBound = lowPtr;
		let mid = highPtr - 1;
		let n = upperBound - lowerBound + 1;
		
		while (lowPtr <= mid && highPtr <= upperBound) {
			if (this.theArray[lowPtr] < this.theArray[highPtr]) {
				workspace[j] = this.theArray[lowPtr];
				j += 1;
				lowPtr += 1;
			} else {
				workspace[j] = this.theArray[highPtr];
				j += 1;
				highPtr += 1;
			}
		}
		
		while (lowPtr <= mid) {
			workspace[j] = this.theArray[lowPtr];
			j += 1;
			lowPtr += 1;
		}
		while (highPtr <= upperBound) {
			workspace[j] = this.theArray[highPtr];
			j += 1;
			highPtr += 1;
		}
		
		for (let j = 0; j < n; j += 1) {
			this.theArray[lowerBound + j] = workspace[j];
		}
	}
}

const maxSize = 100;

const arr = new DArray(maxSize);

arr.insert(64);
arr.insert(21);
arr.insert(33);
arr.insert(70);
arr.insert(12);
arr.insert(85);
arr.insert(44);
arr.insert(3);
arr.insert(99);
arr.insert(0);
arr.insert(108);
arr.insert(36);

arr.display();

console.log('===========');

arr.mergeSort();
arr.display();
