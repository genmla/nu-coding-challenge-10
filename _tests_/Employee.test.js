const Employee = require('../lib/employee');

describe("Employee", () => {
  
    describe("getName", () => {
      // First test for '.isPalindrome()'
      it("should log name as string", () => {
        const str = "Barb";
        
        const result = new Employee.getName(str);
  
        expect(result).toEqual('Barb');
      });
    //   // Second test for '.isPalindrome()'
    //   it("should return false if a string is not a palindrome", () => {
    //     const str = "neon";
  
    //     const result = new Algo().isPalindrome(str);
  
    //     expect(result).toEqual(false);
    //   });
    });
  
    // describe("getId", () => {
    //   it("should take a string and return a new string with the first letter of each word capitalized", () => {
    //     const str = "capitalize every first word of the string.";
    //     const capitalized = "Capitalize Every First Word Of The String.";
  
    //     const result = new Algo().capitalize(str);
  
    //     expect(result).toEqual(capitalized);
    //   });
    // });
    // describe("getRole", () => {
    //     it("should take a string and return a new string with the first letter of each word capitalized", () => {
    //       const str = "capitalize every first word of the string.";
    //       const capitalized = "Capitalize Every First Word Of The String.";
    
    //       const result = new Algo().capitalize(str);
    
    //       expect(result).toEqual(capitalized);
    //     });
    //   });
    //   describe("generateEmployeeCard", () => {
    //     it("should take a string and return a new string with the first letter of each word capitalized", () => {
    //       const str = "capitalize every first word of the string.";
    //       const capitalized = "Capitalize Every First Word Of The String.";
    
    //       const result = new Algo().capitalize(str);
    
    //       expect(result).toEqual(capitalized);
    //     });
    //   });
  });