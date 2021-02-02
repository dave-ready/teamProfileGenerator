const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Will create a new Manager", () => {
        const mgr = new Manager();
        expect(typeOf(mgr)).toBe("object");
    });


    it("Will set Manager's office number using constructor function", () => {
        const mgrOffice = 237;
        const mgr = new Manager("Dylan", 25, "test_email@testmail.com", mgrOffice);
        expect(mgr.school).toBe(mgrffice);
      });

describe("getRole", () => {
    it("Will return 'Manager' using getRole function", () => {
        const mgrRole = "Intern";
        const mgr = new Manager("Dylan", 25, "test_email@testmail.com", "237");
        expect(mgr.getRole()).toBe(mgrRole);
    });
    
});
    
describe("getOfficeNumber", () => {
    it("Will get Manager's office number using getOfficeNumber function", () => {
        const mgrOffice = 237;
        const mgr = new Manager("Dylan", 25, "test_email@testmail.com", mgrOffice);
        expect(mgr.getOfficeNumber()).toBe(mgrOffice);
        });
    });
    
        
});





  