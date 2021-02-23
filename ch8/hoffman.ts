const getFrequencyTable = (str: string): {[key: string]: number} => {
	const table = Object.create(null);
	for (let i = 0; i < str.length; i += 1) {
		const symb = str[i];
		if (table[symb]) {
			const val = table[symb];
			table[symb] = val + 1;
		} else {
			table[symb] = 1;
		}
	}
	
	return table;
}

class TreeNode {
	public data: string;
	public addData: number;
	public left: TreeNode;
	public right: TreeNode;
	
	constructor(data = null, addData = 0) {
		this.data = data;
		this.addData = addData;
		this.left = null;
		this.right = null;
	}
	
	display(): void {
		console.log(`TreeNode: ${this.data}`);
	}
}

class Tree {
	private root: TreeNode;
	private table: {[key: string]: string};
	constructor(node: TreeNode) {
		this.root = node;
		this.table = {};
	}
	
	public traverse(traverseType: number): void {
		switch (traverseType) {
			case 1: {
				console.log("Preorder traverse");
				this.preOrder(this.root);
				break;
			}
			case 2: {
				console.log("Inorder traverse");
				this.inOrder(this.root);
				break;
			}
			defaul: {
				console.log("Postorder traverse");
				this.postOrder(this.root);
				break;
			}
		}
		
		console.log("==================");
	}
	
	private preOrder(localRoot: TreeNode): void {
		if (localRoot) {
			console.log(localRoot.data);
			this.preOrder(localRoot.left);
			this.preOrder(localRoot.right);
		}
	}
	
	private inOrder(localRoot: TreeNode): void {
		if (localRoot) {
			this.inOrder(localRoot.left);
			console.log(localRoot.data);
			this.inOrder(localRoot.right);
		}
	}
	
	private postOrder(localRoot: TreeNode): void {
		if (localRoot) {
			this.postOrder(localRoot.left);
			this.postOrder(localRoot.right);
			console.log(localRoot.data);
		}
	}
	
	public getCodeTable(): {[key: string]: string} {
		
		const getTable = (root: TreeNode | null, str: string): void => {
			if (!root) {
				return;
			}
			if (root.data !== '') {
				this.table[root.data] = str;
				return;
			}
			getTable(root.left, str + '0');
			getTable(root.right, str + '1');
		}
		
		getTable(this.root, '');
		
		return this.table;
	}
	
	public getRoot(): TreeNode {
		return this.root;
	}
}

const sortFn = (a: TreeNode, b: TreeNode): number => a.addData - b.addData;

const createTree = (str: string): Tree => {
	const table = getFrequencyTable(str);
	
	const priorityQueue: TreeNode[] = [];
	
	for (const key in table) {
		const val = table[key];
		
		const theNode = new TreeNode(key, val);
		priorityQueue.push(theNode);
	}
	
	priorityQueue.sort(sortFn);
	
	while (priorityQueue.length > 1) {
		const left = priorityQueue.shift();
		const right = priorityQueue.shift();
		
		const theRoot = new TreeNode('', left.addData + right.addData);
		theRoot.left = left;
		theRoot.right = right;
		priorityQueue.push(theRoot);
		priorityQueue.sort(sortFn);
	}
	
	return new Tree(priorityQueue[0]);
};

let tree: Tree;

const createCode = (str: string): string => {
	const theTree = createTree("SUSIE SAYS IT IS EASY\n");
	
	tree = theTree;
	
	const theTable = theTree.getCodeTable();
	
	let output = '';
	
	for (let i = 0; i < str.length; i += 1) {
		const symb = str[i];
		const codeSymb = theTable[symb];
		output += codeSymb;
	}
	
	return output;
};

const decode = (tree: Tree, code: string): string => {
	let output = '';
	const root = tree.getRoot();
	let current = root;
	for (let i = 0; i < code.length; i += 1) {
		if (!current) {
			throw new Error("Tree with error");
		}
		const currentBit = code[i];
		if (currentBit === '0') {
			current = current.left;
		} else {
			current = current.right;
		}
		const data = current.data;
		if (data !== '') {
			output += data;
			current = root;
		}
	}
	
	return output;
};

const code = createCode("SUSIE SAYS IT IS EASY\n");

console.log(decode(tree, code));
