class Person {
	private lastName: string;
	private firstName: string;
	private age: number;
	
	constructor(last: string, first: string, a: number) {
		this.lastName = last;
		this.firstName = first;
		this.age = a;
	}
	
	public displayPerson(): void {
		console.log(" Last name: " + this.lastName);
		console.log(" First name: " + this.firstName);
		console.log(" Age: " + this.age);
	}
	
	public getLast(): string {
		return this.lastName;
	}
}

class ClassDataArray {
	private a: Person[];
	private nElems: number;
	
	constructor(max: number) {
		this.a = new Array(max);
		this.nElems = 0;
	}
	
	public find(searchName: string): Person | null {
		let j: number;
		
		for (j = 0; j < this.nElems; j += 1) {
			if (this.a[j].getLast() === searchName) {
				break;
			}
		}
		if (j === this.nElems) {
			return null;
		}
		return this.a[j];
	}
	
	public insert(last: string, first: string, age: number): void {
		this.a[this.nElems] = new Person(last, first, age);
		this.nElems += 1;
	}
	
	public delete(searchName: string): boolean {
		let j: number;
		
		for (j = 0; j < this.nElems; j += 1) {
			if (this.a[j].getLast() === searchName) {
				break;
			}
		}
		if (j === this.nElems) {
			return false;
		}
		
		for (let k = j; k < this.nElems; k += 1) {
			this.a[k] = this.a[k+1];
		}
		this.nElems -= 1;
		return true;
	}
	
	public insertionSort(): void {
		let inner: number;
		let outer: number;
		
		for (outer = 1; outer < this.nElems; outer += 1) {
			let temp: Person = this.a[outer];
			inner = outer;
			
			while (inner > 0 && this.a[inner-1].getLast() >= temp.getLast()) {
				this.a[inner] = this.a[inner-1];
				inner -= 1;
			}
			
			this.a[inner] = temp;
		}
	}
	
	public displayA() {
		for (let j = 0; j < this.nElems; j += 1) {
			this.a[j].displayPerson();
		}
	}
}

const arr = new ClassDataArray(100);

arr.insert("Evans", "Patty", 24);
arr.insert("Smith", "Lorraine", 37);
arr.insert("Yee", "Tom", 43);
arr.insert("Adams", "Henry", 63);
arr.insert("Hashimoto", "Sato", 21);
arr.insert("Stimson", "Henry", 29);
arr.insert("Velasquez", "Jose", 72);
arr.insert("Lamarque", "Henry", 54);
arr.insert("Vang", "Minh", 22);
arr.insert("Creswell", "Lucinda", 18);

console.log("Before sorting");
arr.displayA();
arr.insertionSort();

console.log("After sorting");
arr.displayA();
