const logColors = {
    Reset: "\x1b[0m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgWhite: "\x1b[37m",
    FgGray: "\x1b[90m",
}

const loggerFn = Logger.log

class TestMatchers {
    constructor({ actual, logColors, logFn = console.log }) {
        this.actual = actual
        this.logFn = logFn
        this.logColors = logColors
    }

    toBe(expected) {
        if (R.equals(expected, this.actual)) {
            this.logFn(
                `${this.logColors.FgGreen}Succeeded${this.logColors.Reset}`
            )
        } else {
            this.logFn(
                `${this.logColors.FgRed}Test failed\nActual:\n${JSON.stringify(
                    this.actual
                )}
                \nExpected:\n${JSON.stringify(expected)}\n${
                    this.logColors.Reset
                }`
            )

            throw new Error()
        }
    }

}

function expect(actual) {
    return new TestMatchers({ actual, logColors, logFn: loggerFn })
}

function describe(suiteName, fn, logFn = loggerFn) {
    try {
        logFn(`suite: ${suiteName}`)
        fn()
    } catch (err) {
        logFn(`${logColors.FgRed}${err.message}${logColors.Reset}`)
    }
}

function it(testName, fn, logFn = loggerFn) {
    logFn(`test: ${testName}`)
    try {
        fn()
    } catch (err) {
        // logFn(err)
        throw new Error("Test run failed")
    }
}
