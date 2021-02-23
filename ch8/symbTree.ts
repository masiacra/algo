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
		
		const totalSymbs = getTotalSymbs(data.length - 1); 
		
		const displayedTree = data.map((arr, index) => {
			const totlSymbs = symbOnLvl(index);
			if (totlSymbs > arr.length) {
				while (totlSymbs > arr.length) {
					arr.push('-');
				}
			}
			return arr.join(' ');
		});
		
		console.log(displayedTree.join('\n'));
	}
}

function getTotalSymbs(lvls: number): number {
	if (lvls === 0) {
		return 1;
	}
	return 2 * getTotalSymbs(lvls-1) + 1;
}

function symbOnLvl(lvl: number): number {
	if (lvl === 0) return 1;
	
	return 2 * symbOnLvl(lvl-1);
}

function getSymbTree(str: string): Tree {
	const nodes: TreeNode[] = [];
	const symb1 = str[0];
	const symb2 = str[1];
	const node = new TreeNode('+');
	node.left = new TreeNode(symb1);
	node.right = new TreeNode(symb2);
	for (let i = 2; i < str.length; i += 1) {
		const symb = str[i];
		const newNode = new TreeNode(symb);
		const plusNode = new TreeNode('+');
		const rootNode = new TreeNode('+');
		rootNode.left = plusNode;
		rootNode.right = newNode;
		
		nodes.push(rootNode);
	}
	
	let prevNode = node;
	let currentNode: TreeNode;
	for (let i = 0; i < nodes.length; i += 1) {
		currentNode = nodes[i];
		currentNode.left = prevNode;
		prevNode = currentNode;
	}
	return new Tree(currentNode || prevNode);
}

const tree = getSymbTree("ABCDE");
tree.displayTree();

console.log(getTotalSymbs(2));
