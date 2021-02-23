class TreeNode {
	public data: string;
	public left: TreeNode;
	public right: TreeNode;
	
	constructor(data = null) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	
	display(): void {
		console.log(`TreeNode: ${this.data}`);
	}
}

class Tree {
	private root: TreeNode;
	constructor(node: TreeNode) {
		this.root = node;
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
	
	public displayTree(): void {
		const data: string[][] = [];
		
		const aux = (root: TreeNode | null, lvl: number): void => {
			if (!root) {
				return;
			}
			const info = root.data
			if (data[lvl]) {
				const level = data[lvl];
				level.push(info);
			} else {
				const level = [info];
				data[lvl] = level;
			}
			aux(root.left, lvl + 1);
			aux(root.right, lvl + 1);
		};
		
		aux(this.root, 0);
 
		
		const displayedTree = data.map(arr => arr.join(' ')).join('\n');
		
		console.log(displayedTree);
	}
}


function getSymbTree(str: string): Tree {
	const arr: string[] = str.split('');
	
	const root = new TreeNode(arr[0]);
	
	const aux = (root: TreeNode | null, index: number): void => {
		if (!root || index >= arr.length) {
			return;
		}
		const leftIndex = 2 * index + 1;
		const rightIndex = 2 * index + 2;
		const left = new TreeNode(arr[leftIndex] || null);
		const right = new TreeNode(arr[rightIndex] || null);
		root.left = left;
		root.right = right;
		
		aux(left, leftIndex);
		aux(right, rightIndex);
	}
	
	aux(root, 0);
	return new Tree(root);
}

const tree = getSymbTree("ABCDEFGHIJ");
tree.displayTree();


