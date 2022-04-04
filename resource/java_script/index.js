var name = getParam("name")

setpage();

function setpage() {
    if(name == "") {
        document.write('<a href="login.html">로그인<a/>');
    }
    else {
        document.write('' + name + "님 환영합니다!<br>");
    }
}

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}