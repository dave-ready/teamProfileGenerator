const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Will create a new Engineer", () => {
        const eng = new Engineer();
        expect(typeOf(eng)).toBe("object");
    });

});



  
  