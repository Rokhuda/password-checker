//password checker

//password is valid
describe('valid password', function () {

    it('password must at least have 1 digit, 1 lowercase, 1 uppercase and more than 8 characters and must not be null', function () {
        let errorChecker = password_is_valid("12rt78w45W");
        expect(errorChecker).toEqual(true);
    });
});

//password is ok

describe('is ok', function () {

    it('password should not be null,must have more than 8  and have at least 1 digit 01 1 lowercase/uppercase letter', function () {
        let errorChecker = password_is_ok("12rt78w45W");
        expect(errorChecker).toEqual("12rt78w45W");
    });


});