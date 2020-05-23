const Manager = require("../lib/Manager");

test('Create office number', () => {
    const testValue = 512512512;
    const member = new Manager("Melissa", 1, "email@test.com", testValue);
    expect(member.officeNumber).toBe(testValue);
});

test('getRole() to return \"Manager\"', () => {
    const testValue = "Manager";
    const member = new Manager("Melissa", 1, "email@test.com", 512512512);
    expect(member.getRole()).toBe(testValue);
});

test('getOffice() to return office number', () => {
    const testValue = 512512512;
    const member = new Manager("Melissa", 1, "email@test.com", testValue);
    expect(member.getOfficeNumber()).toBe(testValue);
});
