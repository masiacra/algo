class DoAnagramApp {
	static size: number;
	static count: number;
	static arrChar: string[] = new Array(100);
	
	static doAnagram(newSize: number): void {
		if (newSize === 1) {
			return;
		}
		for (let j = 0; j < newSize; j += 1) {
			DoAnagramApp.doAnagram(newSize-1);
			if (newSize === 2) {
				DoAnagramApp.displayWord();
			}
			DoAnagramApp.rotate(newSize);
		}
	}
	
	static rotate(newSize: number): void {
		let j;
		let position = DoAnagramApp.size - newSize;
		let temp = DoAnagramApp.arrChar[position];
		for (j = position; j < DoAnagramApp.size; j += 1) {
			DoAnagramApp.arrChar[j-1] = DoAnagramApp.arrChar[j]
		}
		DoAnagramApp.arrChar[j-1] = temp;
	}
	
	static displayWord(): void {
		console.log(DoAnagramApp.count);
		for (let j = 0; j < DoAnagramApp.size; j += 1) {
			console.log(DoAnagramApp.arrChar[j]);
		}
	}
}

const word = "cats";
DoAnagram.size = word.length;
DoAnagramApp.count = 0;
for (let j = 0; j < DoAnagramApp.size; j += 1) {
	DoAnagramApp.charArr[j] = word[j];
	DoAnagramApp.doAnagram(size);
}
