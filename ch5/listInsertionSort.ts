import { Link, SortedList } from './SortedList';

const size = 10;
const linkArray: Link[] = new Array(size);

for (let j = 0; j < size; j += 1) {
	let n = Math.random();
	const newLink = new Link(n);
	linkArray[j] = newLink;
}

console.log("Unsorted Array");

for (let j = 0; j < size; j += 1) {
	console.log(linkArray[j].dData);
}

const theSortedList = new SortedList();
for (let j = 0; j < size; j += 1) {
	theSortedList.insert(linkArray[j].dData);
}

for (let j = 0; j < size; j += 1) {
	linkArray[j] = theSortedList.remove();
}

console.log("Sorted Array:");
for (let j = 0; j < size; j += 1) {
	console.log(linkArray[j].dData);
}

