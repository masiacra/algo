const arr = [421, 240, 135, 532, 305, 430, 124];

const flatten = (arr: number[][]): number[] => {
	const res: number[] = [];
	
	for (let nums of arr) {
		nums.forEach(num => res.push(num));
	}
	
	return res;
};

const getNum = (target: number, pos: number): number => {
	if (pos < 0) {
		throw new Error("Can't apply to non-positive pos");
	}
	while (target > 9 && pos > 1) {
		target = Math.floor(target / 10);
		pos -= 1;
	}
	return target % 10;
};

const radixSort = (arr: number[]): number[] => {
	const maxDischarge = String(arr[0]).length;
	let newArr: number[][] = [];
	let res: number[] = arr.slice(0);
	
	for (let i = 1; i <= maxDischarge; i += 1) {
		for (let j = 0; j <= 9; j += 1) {
			newArr.push(res.filter(num => getNum(num, i) === j));
		}
		res = flatten(newArr);
		newArr = [];
	}
	
	return res;
};

console.log(radixSort(arr));
