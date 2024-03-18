/**
 * @jest-environment jsdom
 */
const fs = require("fs")
const domTesting = require('@testing-library/dom')
require('@testing-library/jest-dom')
const userEvent = require("@testing-library/user-event").default
const ChartBuilder = require("../chartBuilder/chartBuilder")

function initDomFromFiles(htmlPath, jsPath) {
    const html = fs.readFileSync(htmlPath, 'utf8')
    document.open()
    document.write(html)
    document.close()
    jest.isolateModules(function() {
        require(jsPath)
    }) 
}

test("Check that each time the user clicks the add values button it adds a new pair of x y input fields and not change already entered data", async function(){
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)
    
    const xValueInputs = document.getElementsByClassName("x-value-input")
    const yValueInputs = document.getElementsByClassName("y-value-input")
    const addValues = document.getElementById("add-values-btn")

    const user = userEvent.setup()
    await user.type(xValueInputs[0], "1")
    await user.type(yValueInputs[0], "2")
    await user.click(addValues)

    expect(xValueInputs[0].value).toBe("1")
    expect(yValueInputs[0].value).toBe("2")
    expect(xValueInputs[1]).not.toBeNull()
    expect(yValueInputs[1]).not.toBeNull()

    await user.type(xValueInputs[1], "3")
    await user.type(yValueInputs[1], "4")
    await user.click(addValues)

    expect(xValueInputs[1].value).toBe("3")
    expect(yValueInputs[1].value).toBe("4")
    expect(xValueInputs[2]).not.toBeNull()
    expect(yValueInputs[2]).not.toBeNull()

    await user.type(xValueInputs[2], "5")
    await user.type(yValueInputs[2], "6")
    await user.click(addValues)
    await user.click(addValues)
    await user.click(addValues)

    expect(xValueInputs[2].value).toBe("5")
    expect(yValueInputs[2].value).toBe("6")
    expect(xValueInputs[3]).not.toBeNull()
    expect(yValueInputs[3]).not.toBeNull()
    expect(xValueInputs[4]).not.toBeNull()
    expect(yValueInputs[4]).not.toBeNull()
    expect(xValueInputs[5]).not.toBeNull()
    expect(yValueInputs[5]).not.toBeNull()
})

test("Check that the correct alert is displayed when user tries to generate chart without labels or data", async function(){
    initDomFromFiles(`${__dirname}/line.html`, `${__dirname}/line.js`)
    
    const genChart = document.getElementById("generate-chart-btn")
    const xLabel = domTesting.getByText(document, "X label")
    const yLabel = domTesting.getByText(document, "Y label")
    const clrChart = document.getElementById("clear-chart-btn")
    const xValueInputs = document.getElementsByClassName("x-value-input")
    const yValueInputs = document.getElementsByClassName("y-value-input")
    const addValues = document.getElementById("add-values-btn")
    const spy = jest.spyOn(window, 'alert')
    
    const user = userEvent.setup()
    await user.click(addValues)
    await user.click(addValues)
    await user.type(xValueInputs[3], "7")
    await user.type(yValueInputs[3], "8")
    await user.type(xValueInputs[4], "9")
    await user.type(yValueInputs[4], "10")
    await user.click(genChart)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith("Error: Must specify a label for both X and Y!")

    await user.click(clrChart)
    await user.type(xLabel, "Cats")
    await user.type(yLabel, "Dogs")
    await user.click(genChart)

    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy).toHaveBeenCalledWith("Error: No data specified!")
    
    spy.mockRestore()
})