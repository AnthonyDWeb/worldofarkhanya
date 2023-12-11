export const getCurrentDate = () => {
    const date = new Date().getDate(); const month = new Date().getMonth(); const year = new Date().getFullYear();
    const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Décembre"];
    return (date < 10 ? `0${date}` : date) + ' ' + months[month] + ' ' + year;  //format: dd-mm-yyyy;
};
export const getTimeBetween = (value: number) => {
	let timeLaps;
	if (value) {
		const today = new Date().getTime();
		const minute = 60;
		const heure = 60 * minute;
		const jour = 24 * heure;
		const timeDelay = (today - value) / 1000;
		let nbMinutes;
		let nbHours;
		let nbDays;

		switch (true) {
			case timeDelay < minute:
				timeLaps = `${Math.floor(timeDelay)} secondes`;
				break;
			case timeDelay > minute && timeDelay < heure:
				nbMinutes = Math.floor(timeDelay / minute);
				timeLaps = `${nbMinutes} ${nbMinutes > 1 ? "minutes" : "minute"}`;
				break;
			case timeDelay > minute && timeDelay < heure:
				nbHours = Math.floor(timeDelay / heure);
				nbMinutes = Math.floor((timeDelay - nbHours * heure) / minute);
				timeLaps = `${nbHours}h ${nbMinutes}m`;
				break;
			case timeDelay > jour:
				nbDays = Math.floor(timeDelay / jour);
				nbHours = Math.floor((timeDelay - nbDays * jour) / heure);
				nbMinutes = Math.floor(
					(timeDelay - nbDays * jour - nbHours * heure) / minute
				);
				timeLaps = `${nbDays}j ${nbHours}h ${nbMinutes}m`;
				break;

			default:
				timeLaps = "à l'instant";
				break;
		}
	}
	return value ? `Il y a ${timeLaps}` : timeLaps;
};