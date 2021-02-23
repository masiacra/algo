class DataItem {
	public dData: number;
	
	constructor(dd: number) {
		this.dData = dd;
	}
	
	public displayItem(): string {
		return `\\${this.dData}`;
	}
}

class TreeNode {
	private static ORDER = 4;
	private numItems: number = 0;
	private childArray: TreeNode[] = new Array(TreeNode.ORDER);
	private itemArray: DataItem[] = new Array(TreeNode.ORDER - 1);
	
	public parent: TreeNode;
	
	public connectChild(childNum: number, child: TreeNode | null): void {
		this.childArray[childNum] = child;
		if (child) {
			child.parent = this;
		}
	}
	
	public disconnectChild(childNum: number): TreeNode {
		const tempNode = this.childArray[childNum];
		this.childArray[childNum] = null;
		
		return tempNode;
	}
	
	public getChild(childNum: number): TreeNode {
		return this.childArray[childNum];
	}
	
	public getParent(): TreeNode {
		return this.parent;
	}
	
	public isLeaf(): boolean {
		return !Boolean(this.childArray[0]);
	}
	
	public getNumItems(): number {
		return this.numItems;
	}
	
	public getItem(index: number): DataItem {
		return this.itemArray[index];
	}
	
	public isFull(): boolean {
		return this.numItems === TreeNode.ORDER - 1;
	}
	
	public findItem(key: number): number {
		for (let i = 0; i < TreeNode.ORDER - 1; i += 1) {
			if (!this.itemArray[i]) {
				break;
			} else if (this.itemArray[i].dData === key) {
				return i
			}
		}
		return -1;
	}
	
	public insertItem(newItem: DataItem): number {
		this.numItems += 1;
		const newKey = newItem.dData;
		
		
		for (let j = TreeNode.ORDER - 2; j >= 0; j -= 1) {
			if (!Boolean(this.itemArray[j])) {
				continue;
			} else {
				const itsKey = this.itemArray[j].dData;
				if (newKey < itsKey) {
					this.itemArray[j+1] = this.itemArray[j];
				} else {
					this.itemArray[j+1] = newItem;
					return j + 1;
				}
			}
		}
		
		this.itemArray[0] = newItem;
		return 0;
	}
	
	public removeItem(): DataItem {
		const temp = this.itemArray[this.numItems-1];
		this.itemArray[this.numItems-1] = null;
		this.numItems -= 1;
		return temp;
	}
	
	public displayNode(): void {
		let result: string = '';
		
		for (let i = 0; i < this.numItems; i += 1) {
			result += this.itemArray[i].displayItem();
		}
		console.log(result + '/');
	}
}

const node = new TreeNode();

const item = new DataItem(1);
node.insertItem(item);

node.displayNode();


class Tree234 {
	private root: TreeNode = new TreeNode();
	
	public find(key: number): number {
		let curNode = this.root;
		let childNumber: number;
		
		while (true) {
			childNumber = curNode.findItem(key);
			if (childNumber !== -1) {
				return childNumber;
			} else if (curNode.isLeaf()) {
				return -1;
			} else {
				curNode = this.getNextChild(curNode, key);
			}
		}
	}
	
	public insert(dValue: number): void {
		let curNode: TreeNode = this.root;
		const tempItem: DataItem = new DataItem(dValue);
		
		while (true) {
			if (curNode.isFull()) {
				this.split(curNode);
				curNode = curNode.getParent();
				
				curNode = this.getNextChild(curNode, dValue);
			} else if (curNode.isLeaf()) {
				break;
			} else {
				curNode = this.getNextChild(curNode, dValue);
			}
		}
		curNode.insertItem(tempItem);
	}
	
	public split(thisNode: TreeNode): void {
		let itemB: DataItem;
		let itemC: DataItem;
		let parent: TreeNode;
		let child2: TreeNode;
		let child3: TreeNode;
		let itemIndex: number;
		
		itemC = thisNode.removeItem();
		itemB = thisNode.removeItem();
		child2 = thisNode.disconnectChild(2);
		child3 = thisNode.disconnectChild(3);
		const newRight = new TreeNode();
		
		if (thisNode === this.root) {
			this.root = new TreeNode();
			parent = this.root;
			this.root.connectChild(0, thisNode);
		} else {
			parent = thisNode.getParent();
		}
		itemIndex = parent.insertItem(itemB);
		const n = parent.getNumItems();
		
		for (let j=n-1; j > itemIndex; j -= 1) {
			const temp = parent.disconnectChild(j);
			parent.connectChild(j+1, temp);
		}
		parent.connectChild(itemIndex+1, newRight);
		
		newRight.insertItem(itemC);
		newRight.connectChild(0, child2);
		newRight.connectChild(1, child3);
	}
	
	public getNextChild(theNode: TreeNode, theValue: number): TreeNode {
		let j: number;
		
		let numItems = theNode.getNumItems();
		
		for (j = 0; j < numItems; j += 1) {
			if (theValue < theNode.getItem(j).dData) {
				return theNode.getChild(j);
			}
		}
		return theNode.getChild(j);
	}
	
	public displayTree(): void {
		this.recDisplayTree(this.root, 0, 0);
	}
	
	private recDisplayTree(thisNode: TreeNode, level: number, childNumber: number): void {
		console.log(`level=${level} child=${childNumber}`);
		thisNode.displayNode();
		
		const numItems = thisNode.getNumItems();
		for (let j = 0; j < numItems+1; j += 1) {
			const nextNode = thisNode.getChild(j);
			if (nextNode) {
				this.recDisplayTree(nextNode, level+1, j);
			} else {
				return;
			}
		}
	}
}

const theTree = new Tree234();

theTree.insert(50);
theTree.insert(40);
theTree.insert(60);
theTree.insert(30);
theTree.insert(70);

theTree.displayTree();


