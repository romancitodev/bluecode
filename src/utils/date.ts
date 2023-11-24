export const substractYears = (years: number, date = new Date()): Date => {
	const res = new Date();
	res.setFullYear(date.getFullYear() - years);
	return res;
};
