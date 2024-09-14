// async function main() {
// 	let result = await fetch("https://quiet-wildwood-57342-43872186abf1.herokuapp.com/");
// 	let data = await result.json();
// 	return data;
// }
const data = [
	["Lê Hữu Trọng", "9.46"],
	["Vũ Quốc Dũng", "9.30"],
	["Nguyễn Thành An", "9.27"],
	["Mạnh Phan Tuấn", "8.92"],
	["Nguyễn Trường Giang", "8.34"],
	["Hoàng Thanh Huy", "8.19"],
	["Nguyễn Thế Hân", "7.48"],
	["Vũ Anh Tuấn", "7.02"],
	["Nguyễn Hải Dương", "6.32"],
	["Nguyễn Trung Hiếu", "5.83"],
	["Trần Ngọc Duy", "4.74"],
	["Hoàng Nguyễn Huy", "3.63"],
	["Anh Trần Tuấn", "1.04"]
];
function remove_unicode(str, c = "", isKeepCase = true) {
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

	str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, c);

	str = str.replace(`/${c}+${c}/g`, c);
	str = str.replace(`/^${c}+|${c}+$/g`, "");

	return str;
}
const ulTag = document.getElementById("ranking-list");
const liTag = document.createElement("li");
for (let i = 0; i < data.length; i++) {
	const liTag = document.createElement("li");
	liTag.innerHTML = `<div class="ranking-number">${i + 1}</div>
  <div class="ranking-avatar">
    <img src="images/${remove_unicode(data[i][0])}.png" alt="avatar">
  </div>
  <div class="ranking-name">${remove_unicode(data[i][0], " ")}</div>
  <div class="ranking-point">${data[i][1]}</div>`;
	ulTag.appendChild(liTag);
}
const spanTag = document.getElementById("ranking-total-user");
spanTag.innerHTML = data.length || 13;
