const userid = document.querySelector("#userid");
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const level = document.querySelector("#level");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const submitButton = document.querySelector("#submit_button");

submitButton.addEventListener('click', function(){
    let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()]
    let chkFlag = true

    for (const chk of chkArray){
        if(!chk){//함수의 리턴값이 false 일때
            chkFlag = false
        }
    }

    if (chkFlag){
        document.signup.submit()
    }
    /* // 아이디 공백여부 ,종복여부
    const idConf = idConfirm()
    //비밀번호:공백여부/특수문자,문자,숫자 포함 형태의 8-15자리를 입력하세요.
    const pwd1Conf = pwd1Confirm()
    //비밀번호 확인: 공백여부/ 비밀번호와 같은지 안겉은지
    const pwd2Conf = pwd2Confirm()
    //이름:공백여부
    const fullnameConf = fullnameConfirm()
    //메일 주소:공백여부/메일 형식에 맞는지(test@test.com)
    const emailConf = emailConfirm()
    //연락처(필수x):연락처 형식에 맞은지(010-2222-3333)
    const telConf = telConfirm()


    if (idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf){
        document.signup.submit();
    } */
})

function idConfirm(){
    const mustId = document.querySelector(".must_id")
    const overlap = document.querySelector(".overlap")

    //텍스트가 남아있는길 방지하기 위해
    mustId.style.display = "none"
    overlap.style.display = "none"

     //null,undefined,空格，0은 false.
    //userid가 빈문자열이 됐을때
    //if(userid.value===""){}也是对的
    //공백확인: userid.value.replace(/ |0/g,"")
    if(!userid.value.replace(/ |0/g,"")){
        mustId.getElementsByClassName.display = "block"
        return false
    }else {
        //if(idCheck(userid.value)===false){}也是对的
        if(!idCheck(userid.value)){  //아이디가 종복이라면
            overlap.getElementsByClassName.display = "block"
            return false
        }
    }

    return true

}



function pwd1Confirm(){
    const mustPwd1 = document.querySelector(".must_pwd1")
    const regPwd = document.querySelector(".reg_pwd")

    mustPwd1.style.display = "none"
    regPwd.style.display = "none"

    //pwd1공백이라면
    if(!pwd1.value.replace(/ |0/g,"")){
        mustPwd1.style.display = "block"
        return false
    }else {
        if(!pwdCheck(pwd1.value)){
            regPwd.style.display = "block"
            return false
        }
    }

    return true
}



function pwd2Confirm(){
    const mustPwd2 = document.querySelector(".must_pwd2")
    const same = document.querySelector(".same")

    mustPwd2.style.display = "none"
    same.style.display = "none"

    //pwd1공백이라면
    if(!pwd2.value.replace(/ /g,"")){
        mustPwd2.style.display = "block"
        return false
    }else {
        if(pwd1.value.replace(/ /g,"") && pwd2.value.replace(/ /g,"")){  //두 password 값이 있는지 확인
            if(pwd1.value !== pwd2.value){  //같지 않다면.
                same.style.display = "block"
                return false 
            }
        }
    }

    return true
}

function fullnameConfirm(){
    const mustFullname = document.querySelector(".must_fullname")
    mustFullname.style.display = "none"

    if(!fullname.value.replace(/ /g,"")){
        mustFullname.style.display = "block"
        return false
    }
    return true
}


function emailConfirm(){
    const mustEmail = document.querySelector(".must_email")
    const regEmail = document.querySelector(".reg_email")

    if(!email.value.replace(/ /g,"")){
        mustEmail.style.display = "block"
        return falae
    }else{
        if(!emailCheck(email.value.replace(/ /g,""))){
            regEmail.style.display = "block"
            return false
        }
    }
    return true
}



function telConfirm(){
    const regTel = document.querySelector(".re_tel")
    regTel.style.display = "none"

    //전화번호가 있고 정규식 체크(유효성)에 통과하지 못했을 때.
    if(!telCheck(tel.value.replace(/ /g,"")) && tel.value.replace(/ /g,"")){
        regTel.style.display = "block"
        return false
    }

    return true
}


//종복된 아이디 체크
function idCheck(id){
    return true
}

// https://tjddnjs625.tistory.com/28
//정규식 테스트 사이트: https://regexr.com/
function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
  }


  function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
  }
  
  function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  }