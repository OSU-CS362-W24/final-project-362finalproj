/**
* @jest-environment ./src/fixjsdomenvironment.js
*/

require("whatwg-fetch")

const generateChartImg = require("../generateChartImg");

const fs = require("fs");

function initDomFromFiles(htmlPath, jsPath){
    const html = fs.readFileSync(htmlPath, "utf-8");
    document.open();
    document.write(html);
    document.close();
    jest.isolateModules(() => require(jsPath));
}

// Regex to match the format of the returned url (8 characters, followed by 3 groups of 4 characters, followed by 12 characters)
const format = new RegExp(/^blob:nodedata:[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/);

test("generateChartImg returns a url given valid inputs for 'bar' type", async () => {
    initDomFromFiles(
        `${__dirname}/../../index.html`,
        `${__dirname}/../generateChartImg.js`
    );
    // Arrange

    // Act
    const url = await generateChartImg('bar', [{x: 50, y:50}, {x: 100, y: 100}, {x: 150, y: 150}], "label 1", "label 2", "title", "#000000");
    
    // Assert
    expect(url).not.toBe(null);
    expect(url).toContain("blob:nodedata");
    expect(url).toMatch(format);
});

test("generateChartImg returns a url given valid inputs for 'line' type", async () => {
    initDomFromFiles(
        `${__dirname}/../../index.html`,
        `${__dirname}/../generateChartImg.js`
    );
    // Arrange

    // Act
    const url = await generateChartImg('line', [{x: 50, y:50}, {x: 100, y: 100}, {x: 150, y: 150}], "label 1", "label 2", "title", "#000000");

    // Assert
    expect(url).not.toBe(null);
    expect(url).toContain("blob:nodedata");
    expect(url).toMatch(format);
});

test("generateChartImg returns a url given valid inputs for 'scatter' type", async () => {
    initDomFromFiles(
        `${__dirname}/../../index.html`,
        `${__dirname}/../generateChartImg.js`
    );
    // Arrange
    
    // Act
    const url = await generateChartImg('scatter', [{x: 50, y:50}, {x: 100, y: 100}, {x: 150, y: 150}], "label 1", "label 2", "title", "#000000");
    
    // Assert
    expect(url).not.toBe(null);
    expect(url).toContain("blob:nodedata");
    expect(url).toMatch(format);
});

test("generateChartImg returns a url when title and color are not provided", async () => {
    initDomFromFiles(
        `${__dirname}/../../index.html`,
        `${__dirname}/../generateChartImg.js`
    );
    // Arrange

    // Act
    const url = await generateChartImg('scatter', [{x: 50, y:50}, {x: 100, y: 100}, {x: 150, y: 150}], "label 1", "label 2");

    // Assert
    expect(url).not.toBe(null);
    expect(url).toContain("blob:nodedata");
    expect(url).toMatch(format);
});
