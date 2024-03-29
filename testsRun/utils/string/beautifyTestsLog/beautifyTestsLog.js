import { splitBySubstring } from "./../splitBySubstring/splitBySubstring.js"
import { removeTimeInfo } from "./../removeTimeInfo/removeTimeInfo.js"

export function beautifyTestsLog({ log, splitBy }) {
    return removeTimeInfo({
        log: splitBySubstring({ string: log, splitBy }),
        cutBeforeInclusive: "INFO: ",
    })
}
