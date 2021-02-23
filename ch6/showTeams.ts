class ShowTeamApp {
	private group: number;
	private team: number;
	private combinations: string[];
	
	constructor() {
	}
	
	showTeam(group: number, team: number, members: string): string | null {
		if (group < team) {
			return null;
		}
		if (group === team) {
			return members;
		}
		return show
	}
	
	
}
