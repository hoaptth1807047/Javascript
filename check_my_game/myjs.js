var btn = document.forms["favourite-form"]["btn-submit"];
btn.onclick =function () {
    var checkbox = document.forms["favourite-form"]["favourite[]"];
    var result="";
    for (var i =0; i <checkbox.length;i++)
    {
        if(checkbox[i].checked == true)
        {
            result += checkbox[i].value + " ";
        }
    }
    alert("Các game yêu thich: " + result);
}