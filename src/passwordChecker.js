//password checker

//check if password is valid


function password_is_valid(password) {
    let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{9,}$/
        /*     /^
          (?=.*\d)          // should contain at least one digit
          (?=.*[a-z])       // should contain at least one lower case
          (?=.*[A-Z])       // should contain at least one upper case
          [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
        $/
         */
    let passwordChecker = validPassword.test(password);

    try {
        if (passwordChecker == false) throw "password must at least have 1digit, 1 lowercase, 1 uppercase and more than 8 characters";
    } catch (error) {
        console.log("Error : " + error);
    }
    return passwordChecker;
}

//password is ok

function password_is_ok(password) {

    let checkCharacter = /./g;
    let checkUppercase = /[A-Z]/g;
    let checkLowercase = /[a-z]/g;
    let checkNum = /[0-9]/g;

    let characterChecker = checkCharacter.test(password);
    let upCaseChecker = checkUppercase.test(password);
    let downCaseChecker = checkLowercase.test(password);
    let numberChecker = checkNum.test(password);

    let bool

    if (password.length > 8 && characterChecker) {
        if (numberChecker || upCaseChecker || downCaseChecker) {
            bool = true
        }
    } else {
        bool = false
    }

    return bool

}