class TreeNode {
	public data: string;
	public left: TreeNode;
	public right: TreeNode;
	
	constructor(data: string) {
		this.data = data;
	}
	
	displayNode(): void {
		console.log(this.data);
	}
}

class Tree {
	private root: TreeNode;
	private expression: string[];
	
	constructor(root: TreeNode) {
		this.root = root;
	}
	
	public traverse(traverseType: number): void {
		this.expression = [];
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
			default: {
				console.log("Postorder traverse");
				this.postOrder(this.root);
				break;
			}
		}
		console.log(this.expression.join(''));
		console.log("==================");
	}
	
	private preOrder(localRoot: TreeNode): void {
		if (localRoot) {
			this.expression.push(localRoot.data);
			this.preOrder(localRoot.left);
			this.preOrder(localRoot.right);
		}
	}
	
	private inOrder(localRoot: TreeNode): void {
		if (localRoot) {
			const containsLeftAndRight = localRoot.left && localRoot.right;
			if (containsLeftAndRight) {
				this.expression.push('(');
			}
			this.inOrder(localRoot.left);
			this.expression.push(localRoot.data);
			this.inOrder(localRoot.right);
			if (containsLeftAndRight) {
				this.expression.push(')');
			}
		}
	}
	
	private postOrder(localRoot: TreeNode): void {
		if (localRoot) {
			this.postOrder(localRoot.left);
			this.postOrder(localRoot.right);
			this.expression.push(localRoot.data);
		}
	}
}

class StackX {
	private maxSize: number;
	private stackArray: TreeNode[];
	private top: number
	constructor(size: number) {
		this.maxSize = size;
		this.stackArray = new Array(size);
		this.top = -1;
	}
	
	public push(j: TreeNode): void {
		this.top += 1;
		this.stackArray[this.top] = j;
	}
	
	public pop(): TreeNode {
		const value = this.stackArray[this.top];
		this.top -= 1;
		return value;
	}
	
	public peek(): TreeNode {
		return this.stackArray[this.top];
	}
	
	public isEmpty(): boolean {
		return this.top === -1;
	}
	
	public isFull(): boolean {
		return this.top === this.maxSize - 1;
	}
	
	public size(): number {
		return this.top + 1;
	}
	
	public peekN(n: number): TreeNode {
		return this.stackArray[n];
	}
	
	public displayStack(s: string): void {
		console.log(s, "Stack (bottom --> top):");
		for (let j = 0; j < this.size(); j += 1) {
			console.log(this.peekN(j));
		}
	}
}

class ParsePost {
	private theStack: StackX;
	private input: string;
	
	constructor(s: string) {
		this.input = s;
	}
	
	public doTree(): Tree {
		this.theStack = new StackX(20);
				
		for (let j = 0; j < this.input.length; j += 1) {
			const ch = this.input[j];
			if (ch >= "0" && ch <= "9") {
				this.theStack.push(new TreeNode(ch));
			} else {
				const leaf1 = this.theStack.pop();
				const leaf2 = this.theStack.pop();
				const root = new TreeNode(ch);
				
				root.left = leaf1;
				root.right = leaf2;
				
				this.theStack.push(root);
			}
		}
		const interAns = this.theStack.pop();
		
		return new Tree(interAns);
	}
}


const theTree = new ParsePost("123+*").doTree();

theTree.traverse(1);

theTree.traverse(2);

theTree.traverse(3);
