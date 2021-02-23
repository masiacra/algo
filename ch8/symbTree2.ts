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
	let nodes: TreeNode[] = [];
	for (let i = 0; i < str.length; i += 1) {
		const symb = str[i];
		const plusNode = new TreeNode('+');
		const plusNode2 = new TreeNode('+');
		const symbNode = new TreeNode(symb);
		
		plusNode.left = plusNode2;
		plusNode.right = symbNode;
	
		nodes.push(plusNode);
	}
	while (nodes.length > 1) {
		const newNodes: TreeNode[] = [];
		for (let i = 0; i < nodes.length; i += 2) {
			if (i === nodes.length - 1) {
				newNodes.push(nodes[i]);
				continue;
			}
			const node1 = nodes[i];
			const node2 = nodes[i+1];
			const plusNode = new TreeNode('+');
			
			plusNode.left = node1;
			plusNode.right = node2;
			newNodes.push(plusNode);
		}
		nodes = newNodes;
	}
	return new Tree(nodes[0]);
}

const tree = getSymbTree("ABCDE");
tree.displayTree();


