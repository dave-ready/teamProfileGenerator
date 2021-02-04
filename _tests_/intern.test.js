const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Will create a new Intern", () => {
        const int = new Intern();
        expect(typeOf(int)).toBe("object");
    });


    it("Will set Intern's school using constructor function", () => {
        const userSchool = "Columbia";
        const int = new Intern("Dylan", 25, "test_email@testmail.com", userSchool);
        expect(int.school).toBe(userSchool);
      });

describe("getRole", () => {
    it("Will return 'Intern' using getRole function", () => {
        const intRole = "Intern";
        const int = new Intern("Dylan", 25, "test_email@testmail.com", "Columbia");
        expect(int.getRole()).toBe(intRole);
    });
    
});
    
describe("getSchool", () => {
    it("Will get Intern's school using getSchool function", () => {
        const userSchool = "Columbia";
        const int = new Intern("Dylan", 25, "test_email@testmail.com", userSchool);
        expect(int.getSchool()).toBe(userSchool);
        });
    });
    
        
});

module.exports = Intern;





  
  