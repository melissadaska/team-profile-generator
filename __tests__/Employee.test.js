const Employee = require("../lib/Employee");

test('Create new employee instance', () => {
    const member = new Employee();
    expect(typeof(member)).toBe("object");
});

test('Create name of team member', () => {
    const name = "Melissa";
    const member = new Employee(name);
    expect(member.name).toBe(name);
});

test('Create id of employee', () => {
    const testValue = 10;
    const member = new Employee("Dean", testValue);
    expect(member.id).toBe(testValue);
});

test('Create email of team member', () => {
    const testValue = "email@test.com";
    const member = new Employee("Dean", 1, testValue);
    expect(member.email).toBe(testValue);
});

test('Create getName()', () => {
    const testValue = "Melissa";
    const member = new Employee(testValue);
    expect(member.getName()).toBe(testValue);
});

test('Create getId()', () => {
    const testValue = 10;
    const member = new Employee("Dean", testValue);
    expect(member.getId()).toBe(testValue);
});

test('Create getEmail()', () => {
    const testValue = "email@test.com";
    const member = new Employee("Dean", 1, testValue);
    expect(member.getEmail()).toBe(testValue);
});

test('Create getRole()', () => {
    const testValue = "Employee";
    const member = new Employee("Melissa", 1, "email@test.com");
    expect(member.getRole()).toBe(testValue);
});
