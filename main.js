function transformNumber(num) {
	let numStr = num.toString();
	switch (numStr) {
		case '0':
			return 'Zero';
		case '1':
			return 'One';
		case '2':
			return 'Two';
		case '3':
			return 'Three';
		case '4':
			return 'Four';
		case '5':
			return 'Five';
		case '6':
			return 'Six';
		case '7':
			return 'Seven';
		case '8':
			return 'Eight';
		case '9':
			return 'Nine';
		default:
			console.warn('ivalid argument!');
	}
}

export function convertArray(arr) {
	if (!arr.length) return arr;
	else {
		return arr.map((elem) => {
			return transformNumber(elem);
		});
	}
}
