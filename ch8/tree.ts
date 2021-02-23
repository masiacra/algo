class MyNode {
	public iData: number;
	public dData: number;
	public leftChild: MyNode;
	public rightChild: MyNode;
	
	constructor() {}
	
	displayNode() {
		console.log(`{${this.iData}, ${this.dData}}`);
	}
}

class Tree {
	private root: MyNode;
	
	constructor() {
		this.root = null;
	}
	
	public find(key: number): MyNode | null {
		let current = this.root;
		while (current.iData !== key) {
			if (key < current.iData) {
				current = current.leftChild;
			} else {
				current = current.rightChild;
			}
			if (!current) {
				return null;
			}
		}
	}
	
	public insert(id: number, dd: number): void {
		const newNode = new MyNode();
		newNode.iData = id;
		newNode.dData = dd;
		
		if (!this.root) {
			this.root = newNode;
		} else {
			let current = this.root;
			let parent: MyNode | null = null;
			while (true) {
				parent = current;
				if (id < current.iData) {
					current = current.leftChild;
					if (!current) {
						parent.leftChild = newNode;
						return;
					}
				} else {
					current = current.rightChild;
					if (!current) {
						parent.rightChild = newNode;
						return;
					}
				}
			}
		}
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
	
	private preOrder(localRoot: MyNode): void {
		if (localRoot) {
			console.log(localRoot.iData);
			this.preOrder(localRoot.leftChild);
			this.preOrder(localRoot.rightChild);
		}
	}
	
	private inOrder(localRoot: MyNode): void {
		if (localRoot) {
			this.inOrder(localRoot.leftChild);
			console.log(localRoot.iData);
		}
	}
	
	private postOrder(localRoot: MyNode): void {
		if (localRoot) {
			this.postOrder(localRoot.leftChild);
			this.postOrder(localRoot.rightChild);
			console.log(localRoot.iData);
		}
	}
	
	public delete(key: number): boolean {
		let current: MyNode = this.root;
		let parent: MyNode = this.root;
		let isLeftChild = true;
		
		while (current.iData !== key) {
			parent = current;
			
			if (key < current.iData) {
				isLeftChild = true;
				current = current.leftChild;
			} else {
				isLeftChild = false;
				current = current.rightChild;
			}
			if (!current) {
				return false;
			}
		}
		
		if (!current.leftChild && !current.rightChild) {
			if (current === this.root) {
				this.root = null;
			} else if (isLeftChild) {
				parent.leftChild = null;
			} else {
				parent.rightChild = null;
			}
		} else if (!current.rightChild) {
			if (current === this.root) {
				this.root = current.leftChild;
			} else if (isLeftChild) {
				parent.leftChild = current.leftChild
			} else {
				parent.rightChild = current.rightChild;
			}
		} else if (!current.leftChild) {
			if (current === this.root) {
				this.root = current.rightChild;
			} else if (isLeftChild) {
				parent.leftChild = current.rightChild;
			} else {
				parent.rightChild = current.rightChild;
			}
		} else {
			const successor = this.getSuccessor(current);
			if (current === this.root) {
				this.root = successor;
			} else if (isLeftChild) {
				parent.leftChild = successor;
			} else {
				parent.rightChild = successor;
			}
			successor.leftChild = current.leftChild;
		}
		return true;
	}
	
	private getSuccessor(delNode: MyNode): MyNode {
		let successorParent = delNode;
		let successor = delNode;
		let current = delNode.rightChild;
		while (current) {
			successorParent = successor;
			successor = current;
			current = current.leftChild;
		}
		if (successor !== delNode.rightChild) {
			successorParent.leftChild = successor.rightChild;
			successor.rightChild = delNode.rightChild;
		}
		
		return successor;
	}
}

const theTree = new Tree();
theTree.insert(50, 1.5);
theTree.insert(25, 1.2);
theTree.insert(75, 1.7);
theTree.insert(12, 1.5);
theTree.insert(37, 1.2);
theTree.insert(43, 1.7);
theTree.insert(30, 1.5);
theTree.insert(33, 1.2);
theTree.insert(87, 1.7);
theTree.insert(93, 1.5);
theTree.insert(97, 1.5);

theTree.traverse(1);



console.log("After deleted 75");
theTree.delete(75);
theTree.traverse(1);
