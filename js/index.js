import cloneAllDayPoints from "./data.js";

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
function calcPointsOfEachPerson(allDayPoints) {
	const peopleArr = [];
	allDayPoints.forEach((day) => {
		const dayData = day.pointsOfDay;
		if (dayData) {
			Object.keys(dayData).forEach((person) => {
				if (!peopleArr.includes(person)) {
					peopleArr.push(person);
				}
			});
		}
	});
	let pointsOfEachPerson = {};
	allDayPoints.forEach((day) => {
		const dayName = day.day;
		const dayData = day.pointsOfDay;
		for (let person of peopleArr) {
			if (!pointsOfEachPerson[person]) {
				pointsOfEachPerson[person] = {};
			}
			if (!dayData) {
				pointsOfEachPerson[person][dayName] = 0;
			} else if (!dayData[person]) {
				pointsOfEachPerson[person][dayName] = 0;
			} else {
				pointsOfEachPerson[person][dayName] = dayData[person];
			}
		}
	});
	const newPointsOfEachPerson = {};
	for (let person in pointsOfEachPerson) {
		let newName = remove_unicode(person);
		newPointsOfEachPerson[newName] = pointsOfEachPerson[person];
	}
	return newPointsOfEachPerson;
}
(async () => {
	let allDayPoints;
	try {
		allDayPoints = await fetchAllDayPoints();
	} catch (error) {
		allDayPoints = cloneAllDayPoints;
	}
	let averagePoints = calculateAndSortAveragePoints(allDayPoints);
	let pointsOfEachPerson = calcPointsOfEachPerson(allDayPoints.reverse());
	//add data to ranking list
	const ulTag = document.getElementById("ranking-list");
	for (let i = 0; i < averagePoints.length; i++) {
		const liTag = document.createElement("li");
		let itemTagString = `
		<div class="ranking-item">
			<div class="ranking-number">${i + 1}</div>
  		<div class="ranking-avatar">
    		<img src="images/${remove_unicode(averagePoints[i][0], "")}.png" alt="avatar">
  		</div>
  		<div class="ranking-name"><div>${remove_unicode(averagePoints[i][0])}</div></div>
  		<div class="ranking-point">${averagePoints[i][1]}</div>
		</div>
		`;
		let itemDetailTagString = `
		<div class="ranking-item-detail">
      <div class="item-detail-header">
				<div class="item-detail-header-day">Day</div>
				<div class="item-detail-header-point">Point</div>
			</div><ul class='item-detail-list'>`;
		for (let day in pointsOfEachPerson[remove_unicode(averagePoints[i][0])]) {
			itemDetailTagString += `
			<li>
				<div class="item-detail-day">${day.slice(3)}</div>
				<div class="item-detail-point">${pointsOfEachPerson[remove_unicode(averagePoints[i][0])][day]}</div>
			</li>
			`;
		}
		itemDetailTagString += `</ul></div>`;
		liTag.innerHTML = itemTagString + itemDetailTagString;
		ulTag.appendChild(liTag);
	}
	//add total user
	const spanTag = document.getElementById("ranking-total-user");
	spanTag.innerHTML = averagePoints.length || 13;
	//add last day
	const lastDayTag = document.getElementById("ranking-last-day");
	lastDayTag.innerHTML = allDayPoints.length || 0;
	//show detail item
	const rankingItemTags = document.querySelectorAll(".ranking-item");
	rankingItemTags.forEach((rankingItemTag, index) => {
		const rankingItemDetailTag = rankingItemTag.nextElementSibling;
		rankingItemTag.addEventListener("click", function () {
			rankingItemDetailTag.classList.toggle("show");
			if (index === rankingItemTags.length - 1) {
				rankingItemTag.classList.toggle("none-border-radius");
				rankingItemDetailTag.classList.toggle("border-radius");
			}
		});
	});
})();
(async () => {
	//add count of visit
	const apiNinjasResult = await fetch("https://api.api-ninjas.com/v1/counter?id=ranking.com&hit=true&value=0", {
		method: "GET",
		headers: {
			"X-Api-Key": "MfgAkmIwKtRZ5ApDjy5HTw==Nq0czuPhxnqILN4F"
		}
	});
	const visitNumber = await apiNinjasResult.json();
	document.getElementById("ranking-visit").innerText = visitNumber.value || 0;
})();
//change theme when click
const headerAppearanceTag = document.querySelector(".header-appearance");
const headerAppearanceBgTag = document.querySelector(".header-appearance-bg");
const headerAppearanceBtnTag = document.querySelector(".header-appearance-btn");
headerAppearanceTag.addEventListener("click", function () {
	document.querySelector("html").classList.toggle("dark");
});
//change theme follow system
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.querySelector("html").classList.toggle("dark");
}
//change theme when system change
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
	document.querySelector("html").classList.toggle("dark");
});
//add animation follow sound
// const headerSoundTag = document.querySelector(".header-sound");
const headerSoundBtnTag = document.querySelector(".header-sound-btn");
const ulTag = document.getElementById("ranking-list");
headerSoundBtnTag.addEventListener("click", function () {
	// if (headerSoundTag.paused) {
	// 	headerSoundTag.play();
	// } else {
	// 	headerSoundTag.pause();
	// }
	ulTag.classList.toggle("animation");
	headerSoundBtnTag.classList.toggle("play");
});
// headerSoundTag.addEventListener("ended", function () {
// 	ulTag.classList.toggle("animation");
// 	headerSoundBtnTag.classList.remove("play");
// });
