var check_number_ran;
var nickname;
var login = 0; //로그인 x

function checkonline() {
    nickname = document.getElementById('nickname').value;
    alert(nickname);
}

function number() {
    nickname = document.getElementById('nickname').value;
    check_number_ran = Math.floor(Math.random() * 10000);
    alert(check_number_ran);
}

function checknum() {
    var inpnum = document.getElementById('checknum').value;
    var true_false = inpnum - check_number_ran;
    if (true_false == 0) {
        login = 1; //로그인 o
        alert('ok');
        document.location.href='index.html';
    }
    else {
        alert('인증번호를 다시 확인해주세요');
    }
}