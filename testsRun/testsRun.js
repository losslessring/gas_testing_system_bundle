import axios from "axios"
import { beautifyTestsLog } from "./utils/string/beautifyTestsLog/beautifyTestsLog.js"
import { readFile } from "fs/promises"

async function testRun({ configFilePath }) {
    const config = JSON.parse(await readFile(configFilePath, "utf8"))

    axios
        .get(
            `${config.developmentDeployUrl}?access_token=${config.accessToken}`
        )

        .then((response) => {
            console.log(
                beautifyTestsLog({
                    log: response.data,
                    splitBy: "\n",
                }).join("\n")
            )
        })
        .catch((error) => {
            console.log(error)
        })
}

testRun({ configFilePath: "./tests-run-config.json" })
