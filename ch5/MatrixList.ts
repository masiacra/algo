class Link {
	public dData: number;
	public right: Link | null;
	public bottom: Link | null;
	
	constructor(d: number | null) {
		this.dData = d;
		this.right = null;
		this.bottom = null;
	}
	
	public displayLink(): void {
		console.log(this.dData);
	}
}

class MatrixList {
	private readonly first: Link | null;
	private rows: number;
	private columns: number;
	
	constructor(r: number, c: number) {
		this.rows = r;
		this.columns = c;
		this.first = new Link(null);
		let prev = null;
		let current = this.first;
		let currentFirst = null;
		for (let i = 0; i < this.rows; i += 1) {
			for (let j = 0; j < this.columns - 1; j += 1) {
				const next = new Link(null);
				current.right = next;
				if (prev) {
					prev.bottom = next;
					prev = prev.right;
				}
				if (j === 0) {
					currentFirst = current;
				}
				current = next;
			}
			prev = currentFirst.right;
			if (i < this.rows - 1) {
				currentFirst.bottom = new Link(null);
			}
			current = currentFirst.bottom;
		}
	}
	
	public insert(posX: number, posY: number, num: number): void {
		if (posX > this.columns - 1 || posY > this.rows - 1) {
			console.error("Can't insert: matrix doesn't contain this position");
		} else {
			let current = this.first;
			for (let i = 0; i <= posY - 1; i += 1) {
				current = current.bottom;
			}
			for (let j = 0; j <= posX - 1; j += 1) {
				current = current.right;
			}
			current.dData = num;
		}
	}
	
	public remove(posX: number, posY: number): number | null {
		if (posX > this.columns - 1 || posY > this.rows - 1) {
			console.error("Can'r remove: indexes otut of scope");
			return null;
		}
		let current = this.first;
		for (let i = 0; i <= posY-1; i += 1) {
			current = current.bottom;
		}
		for (let j = 0; j <= posX-1; j += 1) {
			current = current.right;
		}
		return current.dData;
	}
	
	public displayMatrix(): void {
		let result = '';
		let current = this.first;
		let currentFirst = null;
		for (let i = 0; i < this.rows; i += 1) {
			currentFirst = current;
			for (let j = 0; j < this.columns; j += 1) {
				result += String(current.dData);
				current = current.right;
			}
			result += '\n';
			current = currentFirst.bottom;
		}
		
		console.log('matrix:');
		console.log(result);
	}
}

const matr = new MatrixList(3,3);
matr.insert(0, 0, 0);
matr.insert(0, 1, 1);
matr.insert(0, 2, 2);
matr.insert(1, 0, 3);
matr.insert(1, 1, 4);
matr.insert(1, 2, 5);
matr.insert(2, 0, 6);
matr.insert(2, 1, 7);
matr.insert(2, 2, 8);
matr.displayMatrix();

console.dir(matr);
