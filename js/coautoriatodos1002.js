am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [{
    "category": "Agrarian\nSciences",
    "value2": 2.4,
    "value3": 53.1,
    "value4": 9.7,
    "value5": 19.2,
    "value6": 12.9,
    "value7": 2.4,
    "value8": 0.2
}, {
    "category": "Applied & Social\nSciences",
    "value1": 10.3,
    "value3": 6.6,
    "value4": 15.3,
    "value5": 10.7,
    "value6": 19.1,
    "value7": 32.4,
    "value8": 5.6
}, {
    "category": "Biological\nSciences",
    "value1": 30.7,
    "value2": 0.9,
    "value4": 4.3,
    "value5": 19.7,
    "value6": 41.4,
    "value7": 2.8,
    "value8": 0.2
}, {
    "category": "Engineering",
    "value1": 11.0,
    "value2": 4.2,
    "value3": 8.4,
    "value5": 64.0,
    "value6": 9.6,
    "value7": 2.5,
    "value8": 0.3
}, {
    "category": "Exact & Earth\nSciences",
    "value1": 13.3,
    "value2": 1.8,
    "value3": 23.7,
    "value4": 38.9,
    "value6": 17.6,
    "value7": 4.4,
    "value8": 0.3
}, {
    "category": "  Health\nSciences",
    "value1": 9.2,
    "value2": 3.3,
    "value3": 51.1,
    "value4": 6.1,
    "value5": 18.2,
    "value7": 10.8,
    "value8": 1.3
}, {
    "category": "Humanities",
    "value1": 5.3,
    "value2": 18.0,
    "value3": 11.2,
    "value4": 5.0,
    "value5": 14.7,
    "value6": 34.2,
    "value8": 11.6
}, {
    "category": "  Linguistics\nLetters, Arts",
    "value1": 1.6,
    "value2": 14.5,
    "value3": 3.3,
    "value4": 2.9,
    "value5": 4.8,
    "value6": 19.0,
    "value7": 53.9
}]

chart.colors.step = 2;
chart.padding(30, 30, 10, 30);

chart.legend = new am4charts.Legend();
chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.interactionsEnabled = false;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.calculateTotals = true;

valueAxis.renderer.minGridDistance = 20;
valueAxis.renderer.minWidth = 35;

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.tooltipText = "{name}: {valueY.totalPercent.formatNumber('#.0')}%";
series1.columns.template.column.strokeOpacity = 1;
series1.name = "Humanities";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value7";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";
series1.tooltip.dy = - 20;
series1.fill = "#74BF00";
series1.cursorHoverEnabled = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.label.text = "{valueY.totalPercent.formatNumber('#.0')}%";
bullet1.fontSize = 14;
bullet1.locationY = 0.5;
bullet1.label.truncate = false;
bullet1.label.fill = am4core.color("#ffffff");
bullet1.interactionsEnabled = false;

var series4 = chart.series.push(series1.clone());
series4.name = "Health Sciences";
series4.dataFields.valueY = "value6";
series4.fill = "#DD87FB";
series4.stroke = series4.fill;
series4.cursorHoverEnabled = false;

var series3 = chart.series.push(series1.clone());
series3.name = "Linguistics, Letters and Arts";
series3.dataFields.valueY = "value8";
series3.fill = "#D1B7A9";
series3.stroke = series3.fill;
series3.cursorHoverEnabled = false;

var series5 = chart.series.push(series1.clone());
series5.name = "Biological Sciences         ";
series5.dataFields.valueY = "value3";
series5.fill = "#4D5048";
series5.stroke = series5.fill;
series5.cursorHoverEnabled = false;

var series8 = chart.series.push(series1.clone());
series8.name = "Engineering";
series8.dataFields.valueY = "value4";
series8.fill = "#3BBE90";
series8.stroke = series8.fill;
series8.cursorHoverEnabled = false;

var series6 = chart.series.push(series1.clone());
series6.name = "Applied and Social Sciences";
series6.dataFields.valueY = "value2";
series6.fill = "#F88B16";
series6.stroke = series6.fill;
series6.cursorHoverEnabled = false;

var series2 = chart.series.push(series1.clone());
series2.name = "Agrarian Sciences";
series2.dataFields.valueY = "value1";
series2.fill = "#F65582";
series2.stroke = series2.fill;
series2.cursorHoverEnabled = false;

var series7 = chart.series.push(series1.clone());
series7.name = "Exact and Earth Sciences";
series7.dataFields.valueY = "value5";
series7.fill = "#3FC0FF";
series7.stroke = series7.fill;
series7.cursorHoverEnabled = false;
//chart.scrollbarX = new am4core.Scrollbar();

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
