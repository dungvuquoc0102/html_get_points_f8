async function fetchAllDayPoints() {
	let result = await fetch("https://quiet-wildwood-57342-43872186abf1.herokuapp.com/api/points");
	let allDayPoints = await result.json();
	return allDayPoints;
}
function remove_unicode(str, c = " ", isKeepCase = true) {
	if (!isKeepCase) {
		str = str.toLowerCase();
	}
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");

	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
	str = str.replace(/Đ/g, "D");

	str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|_/g, c);

	return str;
}
function calculateAndSortAveragePoints(allDayPoints) {
	const totalPoints = {};
	let validDayCount = 0; // Count of valid days (days with non-zero points)
	// Loop through each day and sum the points for each person if the day is valid
	allDayPoints.forEach((day) => {
		const dayData = day.pointsOfDay; // Get the data for the day
		let hasValidPoints;
		if (dayData == undefined) {
			hasValidPoints = false;
		} else {
			hasValidPoints = Object.values(dayData).some((point) => point > 0); // Check if the day has any valid points
		}
		if (hasValidPoints) {
			validDayCount++; // Increment valid day count only if the day has valid points
			for (let person in dayData) {
				if (totalPoints[person]) {
					totalPoints[person] += dayData[person];
				} else {
					totalPoints[person] = dayData[person];
				}
			}
		}
	});
	// Ensure all participants have data for the valid days
	const allParticipants = new Set(Object.keys(totalPoints));
	allDayPoints.forEach((day) => {
		if (day.pointsOfDay != undefined) {
			Object.keys(day.pointsOfDay).forEach((person) => allParticipants.add(person));
		}
	});
	// Calculate averages over the valid days for each participant
	const averagePoints = Array.from(allParticipants).map((person) => {
		const total = totalPoints[person] || 0; // If no score, treat as 0
		return [person, (total / validDayCount).toFixed(2)]; // Calculate average points over validDayCount
	});
	// Sort by average points
	averagePoints.sort((a, b) => b[1] - a[1]);
	// Return the results
	return averagePoints;
}

(async () => {
	let allDayPoints = await fetchAllDayPoints();
	let averagePoints = calculateAndSortAveragePoints(allDayPoints);
	const ulTag = document.getElementById("ranking-list");
	for (let i = 0; i < averagePoints.length; i++) {
		const liTag = document.createElement("li");
		liTag.innerHTML = `<div class="ranking-number">${i + 1}</div>
  <div class="ranking-avatar">
    <img src="images/${remove_unicode(averagePoints[i][0], "")}.png" alt="avatar">
  </div>
  <div class="ranking-name">${remove_unicode(averagePoints[i][0])}</div>
  <div class="ranking-point">${averagePoints[i][1]}</div>`;
		ulTag.appendChild(liTag);
	}
	const spanTag = document.getElementById("ranking-total-user");
	spanTag.innerHTML = averagePoints.length || 13;
})();
// const averagePoints = [
// 	["Lê Hữu Trọng", "9.46"],
// 	["Vũ Quốc Dũng", "9.30"],
// 	["Nguyễn Thành An", "9.27"],
// 	["Mạnh Phan Tuấn", "8.92"],
// 	["Nguyễn Trường Giang", "8.34"],
// 	["Hoàng Thanh Huy", "8.19"],
// 	["Nguyễn Thế Hân", "7.48"],
// 	["Vũ Anh Tuấn", "7.02"],
// 	["Nguyễn Hải Dương", "6.32"],
// 	["Nguyễn Trung Hiếu", "5.83"],
// 	["Trần Ngọc Duy", "4.74"],
// 	["Hoàng Nguyễn Huy", "3.63"],
// 	["Anh Trần Tuấn", "1.04"]
// ];
