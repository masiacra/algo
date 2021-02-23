class TowersApp {
	static nDisks = 3;
	
	public static doTowers(topN: number, from: string, inter: string, to: string): void {
		if (topN === 1) {
			console.log(`Disk 1 from ${from} to ${to}`); 
		} else {
			TowersApp.doTowers(topN-1, from, to, inter);
			console.log(`Disk ${topN} from ${from} to ${to}`);
			TowersApp.doTowers(topN-1, inter, from, to);
		}
	}
}

TowersApp.doTowers(TowersApp.nDisks, 'A', 'B', 'C');
