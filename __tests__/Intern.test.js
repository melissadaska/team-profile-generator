const Intern = require("../lib/Intern");

test('Create school', () => {
    const testValue = "UT of Austin";
    const member = new Intern("Dean", 1, "email@test.com", testValue);
    expect(member.school).toBe(testValue);
});

test('getRole() to return \"Intern\"', () => {
    const testValue = "Intern";
    const member = new Intern("Dean", 1, "email@test.con", "UT of Austin");
    expect(member.getRole()).toBe(testValue);
});

test('getSchool()', () => {
    const testValue = "UT of Austin";
    const member = new Intern("Dean", 1, "email@test.com", testValue);
    expect(member.getSchool()).toBe(testValue);
});
