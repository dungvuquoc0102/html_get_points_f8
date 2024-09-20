async function fetchAllDayPoints() {
  let result = await fetch(
    "https://quiet-wildwood-57342-43872186abf1.herokuapp.com/api/points"
  );
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

  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|_/g,
    c
  );

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
      Object.keys(day.pointsOfDay).forEach((person) =>
        allParticipants.add(person)
      );
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
    _id: "66e3e6a2a080b86241863fcf",
    day: "day13",
    pointsOfDay: {
      "Hoàng Nguyễn Huy": 0,
      "Nguyễn Trường Giang": 7.5,
      "Mạnh Phan Tuấn": 8,
      "Vũ Quốc Dũng": 7,
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
    _id: "66e3e6a7a080b86241863fd1",
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
    _id: "66e3e6aca080b86241863fd3",
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
    _id: "66e3e6aea080b86241863fd5",
    day: "day16",
    __v: 0
  },
  {
    _id: "66e3e6b2a080b86241863fd7",
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
    _id: "66e3e6b7a080b86241863fd9",
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
    _id: "66e3e6bca080b86241863fdb",
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
    _id: "66e6f751661db0a6220d64ba",
    day: "day20",
    pointsOfDay: {
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
    _id: "66ebfc0f707ac1801f8fe528",
    day: "day21",
    pointsOfDay: {
      "Hoàng Thanh Huy": 9.5,
      "Nguyễn Hải Dương": 0,
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
  }
];
function calcPointsOfEachPerson(allDayPoints) {
  const peopleArr = [
    "Trần Ngọc Duy",
    "Anh Trần Tuấn",
    "Hoàng Nguyễn Huy",
    "Hoàng Thanh Huy",
    "Nguyễn Hải Dương",
    "Nguyễn Thế Hân",
    "Nguyễn Thành An",
    "Vũ Anh Tuấn",
    "Mạnh Phan Tuấn",
    "Vũ Quốc Dũng",
    "Nguyễn Trung Hiếu",
    "Nguyễn Trường Giang",
    "Lê Hữu Trọng"
  ];
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
  let pointsOfEachPerson = calcPointsOfEachPerson(allDayPoints);
  //add data to ranking list
  const ulTag = document.getElementById("ranking-list");
  for (let i = 0; i < averagePoints.length; i++) {
    const liTag = document.createElement("li");
    let itemTagString = `
		<div class="ranking-item">
			<div class="ranking-number">${i + 1}</div>
  		<div class="ranking-avatar">
    		<img src="images/${remove_unicode(
          averagePoints[i][0],
          ""
        )}.png" alt="avatar">
  		</div>
  		<div class="ranking-name">${remove_unicode(averagePoints[i][0])}</div>
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
				<div class="item-detail-point">${
          pointsOfEachPerson[remove_unicode(averagePoints[i][0])][day]
        }</div>
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
  rankingItemTags.forEach((rankingItemTag) => {
    const rankingItemDetailTag = rankingItemTag.nextElementSibling;
    rankingItemTag.addEventListener("click", function () {
      rankingItemDetailTag.classList.toggle("show");
    });
  });
  //change theme
  const headerAppearanceTag = document.querySelector(".header-appearance");
  const headerAppearanceBgTag = document.querySelector(".header-appearance-bg");
  const headerAppearanceBtnTag = document.querySelector(
    ".header-appearance-btn"
  );
  headerAppearanceTag.addEventListener("click", function () {
    document.querySelector("html").classList.toggle("dark");
    headerAppearanceBgTag.classList.toggle("header-appearance-bg-dark");
    headerAppearanceBtnTag.classList.toggle("header-appearance-btn-dark");
  });
})();
