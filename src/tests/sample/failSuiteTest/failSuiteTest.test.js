export function failSuiteTest() {
    describe("suite should fail", () => {
        it("should fail, true to be false", () => {
            expect(true).toBe(false)
        })

        it("tests numbers, 3 === 3", () => {
            expect(3).toBe(3)
        })
    })
}
