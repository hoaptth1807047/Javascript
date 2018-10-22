var celebrationNames = [
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
var showMore = document.getElementById("show-more");
showMore.onclick = function () {
    var listname = "";
    for (var i = 0; i < celebrationNames.length; i++) {
        listname += '<li>' + celebrationNames[i] + '</li>'
    }
    showMore.parentElement.innerHTML = (listname);
}
