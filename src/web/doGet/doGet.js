function doGet(e) {
    runAllAutomatedTests()
    const response = Logger.getLog()
    // const response = { test: "test works" }

    return ContentService.createTextOutput(
        JSON.stringify(response)
    ).setMimeType(ContentService.MimeType.JSON)
}
