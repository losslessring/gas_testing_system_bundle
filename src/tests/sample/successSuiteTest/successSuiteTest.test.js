export function successSuiteTest() {
    describe("suite should succeed", () => {
        it("should succeed, true === true", () => {
            expect(true).toBe(true)
        })

        it("should succeed, 3 === 3", () => {
            expect(3).toBe(3)
        })
    })
}
