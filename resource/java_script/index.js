var name = getParam("name")

setpage();

function setpage() {
    if(name == "") {
        document.write('<p><a href="login.html">로그인<a/></p>');
    }
    else {
        document.write('<p><a href="myinfo.html">' + name + "님</a>" + " 환영합니다!<br></p>");
        document.write('<p><img src="https://cravatar.eu/helmavatar/' + name + "/200.png\" alt=\"minecraft skin\" width=\"200\" height=\"200\">");
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