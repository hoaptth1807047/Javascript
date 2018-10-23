var student1 = {
    rollNumber: 'A001',
    name: 'Nguyễn Phương Minh',
    avatar: 'img.jpg/img1.jpg',
    phone: '01215361094',
    address: '11 Hoàng Quốc Việt',
};
var student2 = {
    rollNumber: 'A002',
    name: 'Phạm Bảo Ngọc',
    avatar: 'img.jpg/img2.jpg',
    phone: '0938678359',
    address: '16/3/58 Trần Quốc Hoàn',
};
var student3 = {
    rollNumber: 'A003',
    name: 'Hoàng Kim Phụng',
    avatar: 'img.jpg/img3.jpg',
    phone: '0365234973',
    address: '158 Tây Hồ',
};
var student4 = {
    rollNumber: 'A004',
    name: 'Phạm Phương Mai',
    avatar: 'img.jpg/img4.jpg',
    phone: '01629538259',
    address: '3 Nguyễn Công Trứ',
};
var student5 = {
    rollNumber: 'A005',
    name: 'Trần Huyền Trang',
    avatar: 'img.jpg/img5.jpg',
    phone: '0994513114',
    address: '28/8 Bà Triệu',
};
var student6 = {
    rollNumber: 'A006',
    name: 'Nguyễn Quỳnh Trang',
    avatar: 'img.jpg/img6.jpg',
    phone: '0326111589',
    address: '78/124 Tô Hiệu',
};
var listStudent = new Array();
    listStudent.push(student1);
    listStudent.push(student2);
    listStudent.push(student3);
    listStudent.push(student4);
    listStudent.push(student5);
    listStudent.push(student6);

classMainContent = document.getElementsByClassName('main-content');
if (classMainContent != null && classMainContent.length > 0) {
    var mainContent = classMainContent[0];
    for (var i = 0; i < listStudent.length; i++) {
        var itemContent = '<div class = "personal-infor">';
        itemContent += '<div class = "avatar" style = "background-image: url(\'' + listStudent[i].avatar + '\'); background-size: cover">';
        itemContent += '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Rollnumber</label>';
        itemContent += '<div>' + listStudent[i].rollNumber + '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Name</label>';
        itemContent += '<div>' + listStudent[i].name + '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Phone</label>';
        itemContent += '<div>' + listStudent[i].phone + '</div>';
        itemContent += '<div class = "line-infor">';
        itemContent += '<label>Address</label>';
        itemContent += '<div>' + listStudent[i].address + '</div>';
        itemContent += '</div>';
    itemContent += '</div>';
    mainContent.innerHTML += itemContent;
    }
}