export const checkOnlyNumber = (value: string) => {
	const reg = new RegExp("^[0-9]*$");
	return reg.test(value);
};