const Engineer = require("../lib/Engineer")

test('Create GitHub account', () => {
    const testValue = "GitHubUser";
    const member = new Engineer("Dean", 1, "email@test.com", testValue);
    expect(member.gitHub).toBe(testValue);
});

test("getRole() to return \"Engineer\"", () => {
    const testValue = "Engineer";
    const member = new Engineer("Dean", 1, "email@test.com", "GitHubUser");
    expect(member.getRole()).toBe(testValue);
});

test("getGithub() to return GitHub username", () => {
    const testValue = "GitHubUser";
    const member = new Engineer("Dean", 1, "email@test.com", testValue);
    expect(member.getGithub()).toBe(testValue);
});
