export class Link<T, K> {
	public iData: T;
	public dData: K;
	public next: Link<T, K>;
	
	constructor(id: T, dd: K) {
		this.iData = id;
		this.dData = dd;
		this.next = null;
		this.displayLink = this.displayLink.bind(this);
	}
	
	public displayLink() {
		console.log(`{${this.iData}, ${this.dData}}`);
	}
}
