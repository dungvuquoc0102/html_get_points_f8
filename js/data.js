const cloneAllDayPoints = [
	{
		_id: "66e3e664a080b86241863fb7",
		day: "day1",
		pointsOfDay: {
			"Hoàng Nguyễn Huy": 8.2,
			"Nguyễn Thế Hân": 8.83,
			"Vũ Quốc Dũng": 8.25,
			"Lê Hữu Trọng": 8.92,
			"Nguyễn Trường Giang": 8.85,
			"Hoàng Thanh Huy": 6.85,
			"Trần Ngọc Duy": 7.75,
			"Nguyễn Thành An": 8.5,
			"Nguyễn Hải Dương": 6.2,
			"Vũ Anh Tuấn": 8,
			"Mạnh Phan Tuấn": 8.5
		},
		__v: 0
	},
	{
		_id: "66e3e66aa080b86241863fb9",
		day: "day2",
		pointsOfDay: {
			"Nguyễn Thế Hân": 8.1,
			"Nguyễn Trung Hiếu": 9,
			"Nguyễn Trường Giang": 7.65,
			"Hoàng Thanh Huy": 9.4,
			"Lê Hữu Trọng": 9.13,
			"Nguyễn Hải Dương": 8.13,
			"Trần Ngọc Duy": 8.5,
			"Nguyễn Thành An": 9,
			"Vũ Quốc Dũng": 9.5,
			"Mạnh Phan Tuấn": 7.95,
			"Vũ Anh Tuấn": 10
		},
		__v: 0
	},
	{
		_id: "66e3e66fa080b86241863fbb",
		day: "day3",
		pointsOfDay: {
			"Hoàng Nguyễn Huy": 6,
			"Nguyễn Thế Hân": 9.25,
			"Nguyễn Hải Dương": 8.5,
			"Nguyễn Trung Hiếu": 5.63,
			"Trần Ngọc Duy": 8.65,
			"Hoàng Thanh Huy": 8.25,
			"Lê Hữu Trọng": 8.4,
			"Vũ Quốc Dũng": 8.875,
			"Nguyễn Trường Giang": 8.6,
			"Nguyễn Thành An": 8.5,
			"Vũ Anh Tuấn": 8.75,
			"Mạnh Phan Tuấn": 8.2
		},
		__v: 0
	},
	{
		_id: "66e3e674a080b86241863fbd",
		day: "day4",
		pointsOfDay: {
			"Trần Ngọc Duy": 8.625,
			"Nguyễn Thế Hân": 7.875,
			"Nguyễn Trung Hiếu": 7.5,
			"Nguyễn Trường Giang": 8.625,
			"Hoàng Thanh Huy": 9.25,
			"Lê Hữu Trọng": 9,
			"Vũ Quốc Dũng": 10,
			"Nguyễn Hải Dương": 9.125,
			"Nguyễn Thành An": 10,
			"Vũ Anh Tuấn": 9.625,
			"Hoàng Nguyễn Huy": 6.75,
			"Mạnh Phan Tuấn": 9.75
		},
		__v: 0
	},
	{
		_id: "66e3e67aa080b86241863fbf",
		day: "day5",
		pointsOfDay: {
			"Nguyễn Thế Hân": 7.67,
			"Trần Ngọc Duy": 6.33,
			"Nguyễn Trung Hiếu": 6,
			"Hoàng Thanh Huy": 9,
			"Nguyễn Trường Giang": 9,
			"Vũ Quốc Dũng": 10,
			"Nguyễn Hải Dương": 8.67,
			"Lê Hữu Trọng": 8.67,
			"Hoàng Nguyễn Huy": 7.67,
			"Nguyễn Thành An": 9.67,
			"Vũ Anh Tuấn": 9.33,
			"Mạnh Phan Tuấn": 8.33
		},
		__v: 0
	},
	{
		_id: "66e3e67fa080b86241863fc1",
		day: "day6",
		pointsOfDay: {
			"Trần Ngọc Duy": 6.5,
			"Nguyễn Trung Hiếu": 5.67,
			"Nguyễn Hải Dương": 6.67,
			"Nguyễn Thế Hân": 8,
			"Hoàng Thanh Huy": 7.83,
			"Nguyễn Thành An": 9.583,
			"Nguyễn Trường Giang": 7,
			"Vũ Quốc Dũng": 9.25,
			"Vũ Anh Tuấn": 7.75,
			"Lê Hữu Trọng": 9.42,
			"Hoàng Nguyễn Huy": 8,
			"Mạnh Phan Tuấn": 7.75
		},
		__v: 0
	},
	{
		_id: "66e3e685a080b86241863fc3",
		day: "day7",
		pointsOfDay: {
			"Trần Ngọc Duy": 4.75,
			"Hoàng Nguyễn Huy": 8.5,
			"Nguyễn Trung Hiếu": 5.5,
			"Nguyễn Hải Dương": 6.25,
			"Hoàng Thanh Huy": 7.5,
			"Nguyễn Thế Hân": 7.75,
			"Nguyễn Trường Giang": 8.125,
			"Vũ Quốc Dũng": 10,
			"Nguyễn Thành An": 9,
			"Lê Hữu Trọng": 9.75,
			"Vũ Anh Tuấn": 6.5,
			"Mạnh Phan Tuấn": 9.75
		},
		__v: 0
	},
	{
		_id: "66e3e68aa080b86241863fc5",
		day: "day8",
		pointsOfDay: {
			"Trần Ngọc Duy": 7.75,
			"Nguyễn Trung Hiếu": 7.67,
			"Nguyễn Thế Hân": 8,
			"Nguyễn Trường Giang": 8.2,
			"Nguyễn Hải Dương": 6.83,
			"Hoàng Thanh Huy": 8.67,
			"Vũ Quốc Dũng": 9.25,
			"Vũ Anh Tuấn": 6.9,
			"Lê Hữu Trọng": 9,
			"Mạnh Phan Tuấn": 9.67,
			"Hoàng Nguyễn Huy": 7.75,
			"Nguyễn Thành An": 9.33
		},
		__v: 0
	},
	{
		_id: "66e3e68fa080b86241863fc7",
		day: "day9",
		pointsOfDay: {
			"Nguyễn Trung Hiếu": 5.7,
			"Trần Ngọc Duy": 6.3,
			"Nguyễn Thế Hân": 7.5,
			"Nguyễn Hải Dương": 6.4,
			"Hoàng Thanh Huy": 9.25,
			"Vũ Quốc Dũng": 9,
			"Nguyễn Thành An": 9.33,
			"Nguyễn Trường Giang": 8,
			"Lê Hữu Trọng": 9.33,
			"Hoàng Nguyễn Huy": 8.4,
			"Mạnh Phan Tuấn": 9.6
		},
		__v: 0
	},
	{
		_id: "66e3e694a080b86241863fc9",
		day: "day10",
		pointsOfDay: {
			"Trần Ngọc Duy": 4.4,
			"Nguyễn Trung Hiếu": 9,
			"Nguyễn Thế Hân": 8.6,
			"Nguyễn Thành An": 9.16,
			"Nguyễn Hải Dương": 6.67,
			"Hoàng Thanh Huy": 6.8,
			"Lê Hữu Trọng": 10,
			"Nguyễn Trường Giang": 8.25,
			"Vũ Anh Tuấn": 8.5,
			"Vũ Quốc Dũng": 9.83,
			"Mạnh Phan Tuấn": 10
		},
		__v: 0
	},
	{
		_id: "66e3e699a080b86241863fcb",
		day: "day11",
		pointsOfDay: {
			"Vũ Anh Tuấn": 5,
			"Nguyễn Trung Hiếu": 5,
			"Hoàng Thanh Huy": 7.5,
			"Mạnh Phan Tuấn": 9,
			"Nguyễn Thế Hân": 6,
			"Nguyễn Hải Dương": 3,
			"Nguyễn Trường Giang": 8,
			"Vũ Quốc Dũng": 9.25,
			"Nguyễn Thành An": 9,
			"Lê Hữu Trọng": 9
		},
		__v: 0
	},
	{
		_id: "66e3e69ea080b86241863fcd",
		day: "day12",
		pointsOfDay: {
			"Hoàng Nguyễn Huy": 0,
			"Vũ Anh Tuấn": 0,
			"Nguyễn Trung Hiếu": 3,
			"Nguyễn Thế Hân": 5,
			"Nguyễn Trường Giang": 8.75,
			"Vũ Quốc Dũng": 10,
			"Nguyễn Thành An": 9.25,
			"Hoàng Thanh Huy": 8,
			"Lê Hữu Trọng": 10,
			"Mạnh Phan Tuấn": 8.5
		},
		__v: 0
	},
	{
		_id: "66f4ddd2ad49adf4a46bfd94",
		day: "day13",
		pointsOfDay: {
			"Hoàng Nguyễn Huy": 0,
			"Nguyễn Trường Giang": 7.5,
			"Mạnh Phan Tuấn": 8,
			"Vũ Quốc Dũng": 7.5,
			"Nguyễn Thế Hân": 7,
			"Nguyễn Hải Dương": 4,
			"Vũ Anh Tuấn": 6.5,
			"Nguyễn Thành An": 8.5,
			"Hoàng Thanh Huy": 7.5,
			"Lê Hữu Trọng": 10,
			"Anh Trần Tuấn": 9.25
		},
		__v: 0
	},
	{
		_id: "66f4deae3cecef66d902a072",
		day: "day14",
		pointsOfDay: {
			"Nguyễn Hải Dương": 0,
			"Hoàng Thanh Huy": 5,
			"Nguyễn Thế Hân": 7,
			"Nguyễn Trung Hiếu": 5.5,
			"Vũ Anh Tuấn": 6,
			"Mạnh Phan Tuấn": 8,
			"Nguyễn Trường Giang": 8,
			"Anh Trần Tuấn": 9.5,
			"Nguyễn Thành An": 10,
			"Vũ Quốc Dũng": 9.75,
			"Lê Hữu Trọng": 9.75
		},
		__v: 0
	},
	{
		_id: "66f4deb33cecef66d902a074",
		day: "day15",
		pointsOfDay: {
			"Hoàng Nguyễn Huy": 4,
			"Nguyễn Trung Hiếu": 4,
			"Nguyễn Hải Dương": 5,
			"Mạnh Phan Tuấn": 9.5,
			"Nguyễn Thế Hân": 9,
			"Vũ Quốc Dũng": 9.5,
			"Vũ Anh Tuấn": 8.75,
			"Lê Hữu Trọng": 10,
			"Nguyễn Trường Giang": 6.75,
			"Hoàng Thanh Huy": 7,
			"Nguyễn Thành An": 9
		},
		__v: 0
	},
	{
		_id: "66f4deb53cecef66d902a076",
		day: "day16",
		__v: 0
	},
	{
		_id: "66f4deb93cecef66d902a078",
		day: "day17",
		pointsOfDay: {
			"Mạnh Phan Tuấn": 0,
			"Vũ Anh Tuấn": 0,
			"Nguyễn Thành An": 0,
			"Vũ Quốc Dũng": 0,
			"Nguyễn Trường Giang": 0,
			"Lê Hữu Trọng": 0,
			"Hoàng Thanh Huy": 0
		},
		__v: 0
	},
	{
		_id: "66f4debe3cecef66d902a07a",
		day: "day18",
		pointsOfDay: {
			"Trần Ngọc Duy": 9.8,
			"Nguyễn Thế Hân": 9.2,
			"Hoàng Thanh Huy": 10,
			"Lê Hữu Trọng": 10,
			"Nguyễn Hải Dương": 10,
			"Nguyễn Trường Giang": 9.8,
			"Nguyễn Trung Hiếu": 9.2,
			"Vũ Quốc Dũng": 9.6,
			"Nguyễn Thành An": 9.4,
			"Vũ Anh Tuấn": 9,
			"Mạnh Phan Tuấn": 9
		},
		__v: 0
	},
	{
		_id: "66f4dec33cecef66d902a07c",
		day: "day19",
		pointsOfDay: {
			"Trần Ngọc Duy": 6,
			"Mạnh Phan Tuấn": 9,
			"Nguyễn Trung Hiếu": 6.6,
			"Nguyễn Thế Hân": 9.9,
			"Nguyễn Trường Giang": 9,
			"Nguyễn Thành An": 9.6,
			"Vũ Anh Tuấn": 6.7,
			"Vũ Quốc Dũng": 8.4,
			"Lê Hữu Trọng": 10,
			"Nguyễn Hải Dương": 8.4,
			"Hoàng Thanh Huy": 9.55
		},
		__v: 0
	},
	{
		_id: "66f4dec73cecef66d902a07e",
		day: "day20",
		pointsOfDay: {
			"Trần Ngọc Duy": 0,
			"Nguyễn Thế Hân": 9,
			"Nguyễn Trường Giang": 10,
			"Mạnh Phan Tuấn": 10,
			"Hoàng Thanh Huy": 10,
			"Nguyễn Trung Hiếu": 10,
			"Vũ Anh Tuấn": 9,
			"Vũ Quốc Dũng": 10,
			"Lê Hữu Trọng": 10,
			"Nguyễn Hải Dương": 10,
			"Nguyễn Thành An": 10
		},
		__v: 0
	},
	{
		_id: "66f4decc3cecef66d902a080",
		day: "day21",
		pointsOfDay: {
			"Hoàng Thanh Huy": 9.5,
			"Nguyễn Hải Dương": 8.5,
			"Nguyễn Thế Hân": 9.5,
			"Nguyễn Thành An": 9.5,
			"Vũ Anh Tuấn": 8.5,
			"Mạnh Phan Tuấn": 8.75,
			"Vũ Quốc Dũng": 10,
			"Nguyễn Trung Hiếu": 6,
			"Nguyễn Trường Giang": 8,
			"Lê Hữu Trọng": 9.875
		},
		__v: 0
	},
	{
		_id: "66f4ded03cecef66d902a082",
		day: "day22",
		pointsOfDay: {
			"Nguyễn Thế Hân": 9.7,
			"Nguyễn Hải Dương": 9.7,
			"Vũ Anh Tuấn": 9.8,
			"Nguyễn Trung Hiếu": 6.5,
			"Hoàng Thanh Huy": 9,
			"Nguyễn Trường Giang": 8,
			"Vũ Quốc Dũng": 9.7,
			"Lê Hữu Trọng": 9.83,
			"Mạnh Phan Tuấn": 9.4,
			"Nguyễn Thành An": 9.84
		},
		__v: 0
	},
	{
		_id: "66f4ded43cecef66d902a084",
		day: "day23",
		pointsOfDay: {
			"Nguyễn Trung Hiếu": 7.7,
			"Nguyễn Thế Hân": 9.2,
			"Mạnh Phan Tuấn": 7.8,
			"Vũ Anh Tuấn": 8.7,
			"Hoàng Thanh Huy": 8.3,
			"Nguyễn Trường Giang": 9.84,
			"Vũ Quốc Dũng": 10,
			"Nguyễn Hải Dương": 8.7,
			"Nguyễn Thành An": 8.4,
			"Lê Hữu Trọng": 9.5
		},
		__v: 0
	},
	{
		_id: "66f966faa32c69e4d3d76989",
		day: "day24",
		pointsOfDay: {
			"Vũ Quốc Dũng": 9.5,
			"Mạnh Phan Tuấn": 8.9,
			"Vũ Anh Tuấn": 9,
			"Nguyễn Thế Hân": 0,
			"Hoàng Thanh Huy": 8.7,
			"Nguyễn Trường Giang": 9,
			"Nguyễn Hải Dương": 9.4,
			"Nguyễn Trung Hiếu": 8.4,
			"Nguyễn Thành An": 9.4,
			"Lê Hữu Trọng": 9.2
		},
		__v: 0
	},
	{
		_id: "66ff578bec22741c6e6b5dfd",
		day: "day25",
		pointsOfDay: {
			"Mạnh Phan Tuấn": 9.25,
			"Nguyễn Trung Nguyên": 7.5,
			"Nguyễn Thế Hân": 9.25,
			"Nguyễn Hải Dương": 9.25,
			"Nguyễn Trung Hiếu": 8.875,
			"Vũ Anh Tuấn": 8.875,
			"Vũ Quốc Dũng": 9.94,
			"Nguyễn Trường Giang": 9.375,
			"Hoàng Thanh Huy": 8.625,
			"Nguyễn Thành An": 9.5,
			"Lê Hữu Trọng": 9
		},
		__v: 0
	}
];

export default cloneAllDayPoints;
