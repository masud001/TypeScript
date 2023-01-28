let fileName: string = 'Basic Type';
let album: any;

// unian type
let isActive: number | boolean;

isActive = true;

const sum = (a: number, b: number) => {
	console.log(a + b);
	return a + b;
};

sum(10, 15);
album = 'Masudur';
album = 12;

console.log(fileName);
