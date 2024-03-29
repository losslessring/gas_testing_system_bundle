function runAllAutomatedTests() {
    const testFunctions = Object.values(tests.tests)
    testFunctions.forEach((testFunction) => {
        testFunction()
    })
}
