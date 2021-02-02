const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Will create a new Engineer", () => {
        const eng = new Engineer();
        expect(typeOf(eng)).toBe("object");
    });


    it("Will get Github account using constructor function", () => {
        const userGithub = "Test_Github";
        const eng = new Engineer("Dylan", 25, "test_email@testmail.com", userGithub);
        expect(eng.github).toBe(userGithub);
      });

describe("getRole", () => {
    it("Will return 'Engineer' using getRole function", () => {
        const empRole = "Engineer";
        const emp = new Engineer("Dylan", 25, "test_email@testmail.com", "Test_Github");
        expect(emp.getRole()).toBe(empRole);
    });

});

describe("getGithub", () => {
    it("Will get employee's Github username using getGithub function", () => {
        const userGithub = "Test_Github";
        const eng = new Engineer("Dylan", 25, "test_email@testmail.com", "Test_Github" );
        expect(eng.getGithub()).toBe(userGithub);
    });
});

    
});



  
  