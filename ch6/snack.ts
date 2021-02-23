class BackpackCalculator {
	private backpack: number[];
	private subjects: number[];
	private mass: number;
	
	constructor(subjects: number[], mass: number) {
		this.subjects = subjects;
		this.mass = mass;
		this.backpack = [];
	}
	
	private snack(m: number, index: number): boolean {
		if (m === 0) {
			return true;
		}
		for (let i = index; i < this.subjects.length; i += 1) {
			const subject = this.subjects[i];
			if (this.snack(m - subject, i + 1)) {
				this.backpack.push(subject);
				return true;
			}
		}
		return false;
	}
	
	public calculate(): void {
		this.snack(this.mass, 0);
	}
	
	public displayBackpack(): void {
		console.log("backpack:", this.backpack);
	}
}

const items = [11, 8, 7, 6, 5];
const backpackCalculator = new BackpackCalculator(items, 20);
backpackCalculator.calculate();

backpackCalculator.displayBackpack();

