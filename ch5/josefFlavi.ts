import { Link, CycleList } from './CycleList';

function solve(numOfPeople: number, period: number): void {
	const list = new CycleList;
	for (let i = 1; i <= numOfPeople; i += 1) {
		list.insert(i);
		list.step();
	}
	console.log("Cycle");
	list.displayList();
	while (list.getSize() > 1) {
		for (let i = 1; i < period; i += 1) {
			list.step();
		}
		list.remove();
		console.log("After removing");
		list.displayList();
	}
	
}

solve(10, 2);
