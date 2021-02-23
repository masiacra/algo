class Tree {
	private view: string[];
	private numberOfLines: number;
	
	constructor(numberOfLines: number) {
		this.view = [];
		this.numberOfLines = numberOfLines;
	}
	
	public makeBranches(): void {
		this._makeBranches(this.numberOfLines - 1, 0);
	}
	
	private _makeBranches(right: number, numberOfLine: number): void {
		if (right === 0) {
			if (this.view[numberOfLine]) {
				this.view[numberOfLine] += 'X';
			} else {
				this.view[numberOfLine] = 'X';
			}
			return;
		}
		let str: string = '';
		const middle = Math.ceil(right / 2);
		for (let i = 0; i <= right; i += 1) {
			if (i === middle) {
				str += 'X';
			} else {
				str += '-';
			}
		}
		if (this.view[numberOfLine]) {
			this.view[numberOfLine] += str;
		} else {
			this.view[numberOfLine] = str;
		}
		
		const newBranchLen = Math.floor(right / 2);
		
		this._makeBranches(newBranchLen, numberOfLine + 1);
		this._makeBranches(newBranchLen, numberOfLine + 1);
	}
	
	public display(): void {
		console.log(this.view.join('\n'));
	}
}

const tree = new Tree(16);
tree.makeBranches();
tree.display();

console.log('=============');

const anotherTree = new Tree(64);
anotherTree.makeBranches();
anotherTree.display();
