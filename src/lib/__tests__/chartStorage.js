/**
 * @jest-environment jsdom
 */

const {
    loadAllSavedCharts,
    saveChart,
    loadSavedChart,
    updateCurrentChartData,
    loadCurrentChartData
} = require("../chartStorage.js");

describe("chart storage", () => {

    beforeEach(() => {
        window.localStorage.clear();
    })

    test("saves single chart to local storage", () => {
        // Arrange
        const chart = { title: 'Test Chart', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}]};
        // Act 
        saveChart(chart);
        const chartFromLocalStorage = JSON.parse(window.localStorage.getItem('savedCharts'));
        // Assert
        expect(chartFromLocalStorage).toHaveLength(1);
        expect(chartFromLocalStorage[0]).toEqual(chart);
    });

    test("saves multiple charts to local storage", () => {
        // Arrange
        const chart1 = { title: 'Chart 1', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        const chart2 = { title: 'Chart 2', data: [{'x': 0, 'y': 2}, {'x': 1, 'y': 3}, {'x': 2, 'y': 4}] };
        // Act
        saveChart(chart1);
        saveChart(chart2);
        const chartsFromLocalStorage = JSON.parse(window.localStorage.getItem('savedCharts'));
        // Assert
        expect(chartsFromLocalStorage).toHaveLength(2);
        expect(chartsFromLocalStorage[0]).toEqual(chart1);
        expect(chartsFromLocalStorage[1]).toEqual(chart2);
    });

    test("saveChart called with index > length saved at end of array", () => {
        // Arrange
        const chart1 = { title: 'Chart 1', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        //Act
        saveChart(chart1, 3);
        const chartsFromLocalStorage = JSON.parse(window.localStorage.getItem('savedCharts'));
        // Assert
        expect(chartsFromLocalStorage).toHaveLength(1);
        expect(chartsFromLocalStorage[0]).toEqual(chart1);
    });
    
    test("saveChart called with index < length overwrites chart at index", () => {
        // Arrange
        const chart1 = { title: 'Chart 1', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        const chart2 = { title: 'Chart 2', data: [{'x': 1, 'y': 2}, {'x': 5, 'y': 3}, {'x': 2, 'y': 4}] };
        const chart3 = { title: 'Chart 3', data: [{'x': 0, 'y': 2}, {'x': 1, 'y': 3}, {'x': 2, 'y': 4}] };
        // Act
        saveChart(chart1);
        saveChart(chart2);
        saveChart(chart3, 1);
        const chartsFromLocalStorage = JSON.parse(window.localStorage.getItem('savedCharts'));
        // Assert
        expect(chartsFromLocalStorage).toHaveLength(2);
        expect(chartsFromLocalStorage[0]).toEqual(chart1);
        expect(chartsFromLocalStorage[1]).not.toEqual(chart2);
        expect(chartsFromLocalStorage[1]).toEqual(chart3);
    });

    test("loadAllSavedCharts returns empty array if no charts saved", () => {
        // Act
        const chartsFromLocalStorage = loadAllSavedCharts();
        // Assert
        expect(chartsFromLocalStorage).toHaveLength(0);
    });

    test("loadAllSavedCharts returns array of saved charts", () => {
        // Arrange
        const chart1 = { title: 'Chart 1', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        const chart2 = { title: 'Chart 2', data: [{'x': 0, 'y': 2}, {'x': 1, 'y': 3}, {'x': 2, 'y': 4}] };
        // Act
        saveChart(chart1);
        saveChart(chart2);
        const chartsFromLocalStorage = loadAllSavedCharts();
        // Assert
        expect(chartsFromLocalStorage).toHaveLength(2);
        expect(chartsFromLocalStorage[0]).toEqual(chart1);
        expect(chartsFromLocalStorage[1]).toEqual(chart2);
    });

    test("loadSavedChart returns null object if no charts saved", () =>{
        // Arrange
        //Act
        const chartFromLocalStorage = loadSavedChart(0);
        expect(chartFromLocalStorage).toBeNull;
    });

    test("loadSavedChart returns null object if given invalid index", () => {
        // Arrange
        const chart1 = { title: 'Chart 1', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        const chart2 = { title: 'Chart 2', data: [{'x': 0, 'y': 2}, {'x': 1, 'y': 3}, {'x': 2, 'y': 4}] };
        // Act
        saveChart(chart1);
        saveChart(chart2);
        const chartFromLocalStorage1 = loadSavedChart(-1)
        const chartFromLocalStorage2 = loadSavedChart(10)
        // Assert
        expect(chartFromLocalStorage1).toBeNull;
        expect(chartFromLocalStorage2).toBeNull;
    });

    test("loadSavedChart returns correct object for index argument", () => {
        // Arrange
        const chart1 = { title: 'Chart 1', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        const chart2 = { title: 'Chart 2', data: [{'x': 0, 'y': 2}, {'x': 1, 'y': 3}, {'x': 2, 'y': 4}] };
        // Act
        saveChart(chart1);
        saveChart(chart2);
        const chartFromLocalStorage = loadSavedChart(1)
        // Assert
        expect(chartFromLocalStorage).toEqual(chart2);
        expect(chartFromLocalStorage).not.toEqual(chart1);
    });

    test("updateCurrentChartData correctly stores data in localStorage", () => {
        // Arrange
        let chart = { title: 'Chart', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        // Act
        updateCurrentChartData(chart);
        const chartFromLocalStorage = JSON.parse(window.localStorage.getItem('currentChartData'));
        // Assert
        expect(chartFromLocalStorage).toEqual(chart);
    });

    test("updateCurrentChartData stores empty object in localStorage", () => {
        // Arrange
        let emptyObj = {};
        // Act
        updateCurrentChartData(emptyObj);
        const chartFromLocalStorage = JSON.parse(window.localStorage.getItem('currentChartData'));
        // Assert
        expect(chartFromLocalStorage).toEqual(emptyObj);
    });

    test("loadCurrentChartData returns null object if no charts are saved", () =>{
        // Arrange
        // Act
        const chartFromLocalStorage = loadCurrentChartData();
        // Assert
        expect(chartFromLocalStorage).toBeNull;
    });

    test("loadCurrentChartData loads chart from localStorage", () => {
        // Arrange
        const chart = { title: 'Chart', data: [{'x': 2, 'y': 2}, {'x': 3, 'y': 3}, {'x': 4, 'y': 4}] };
        window.localStorage.setItem("currentChartData", JSON.stringify(chart));
        // Act
        const chartFromLocalStorage = loadCurrentChartData();
        // Assert
        expect(chartFromLocalStorage).toEqual(chart);
    });

})