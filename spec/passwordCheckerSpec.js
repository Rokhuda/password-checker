//password checker

//password is valid
describe('valid password', function() {

    it('password must at least have 1 digit, 1 lowercase, 1 uppercase and more than 8 characters and must not be null', function() {
        let errorChecker = password_is_valid("12rt78w45W");
        expect(errorChecker).toEqual(true);
    });
    it('should throw an error/exception if password is invalid', function() {
        expect(function() { throw ('password must at least have 1digit, 1 lowercase, 1 uppercase and more than 8 characters') }).toThrow()
    })
});

//password is ok

describe('is ok', function() {

    it('it should return true if password is ok', function() {
        let errorChecker = password_is_ok("12rt78w45W");
        expect(errorChecker).toBe(true);
    });
    it('it should return false if password is not ok', function() {
        let errorChecker = password_is_ok("");
        expect(errorChecker).toBe(false);
    });
});