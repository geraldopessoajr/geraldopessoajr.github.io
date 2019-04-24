am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [ {
    "category": "  Linguistics\nLetters, Arts",
    "value1": 315,
    "value2": 2866,
    "value3": 653,
    "value4": 564,
    "value5": 949,
    "value6": 3750,
    "value7": 10638
}, {
    "category": "Humanities",
    "value1": 4902,
    "value2": 16451,
    "value3": 10312,
    "value4": 4608,
    "value5": 13469,
    "value6": 31448,
    "value8": 10638
}, {
    "category": "  Health\nSciences",
    "value1": 26983,
    "value2": 9648,
    "value3": 149288,
    "value4": 17665,
    "value5": 53047,
    "value7": 31448,
    "value8": 3750
}, {
    "category": "Exact & Earth\nSciences",
    "value1": 40035,
    "value2": 5455,
    "value3": 71224,
    "value4": 117625,
    "value6": 53047,
    "value7": 13469,
    "value8": 949
}, {
    "category": "Engineering",
    "value1": 20175,
    "value2": 7782,
    "value3": 15419,
    "value5": 117625,
    "value6": 17665,
    "value7": 4608,
    "value8": 564
}, {
    "category": "Biological\nSciences",
    "value1": 110680,
    "value2": 3327,
    "value4": 15419,
    "value5": 71224,
    "value6": 149228,
    "value7": 10312,
    "value8": 653
}, {
    "category": "Applied & Social\nSciences",
    "value1": 5244,
    "value3": 3327,
    "value4": 7782,
    "value5": 5455,
    "value6": 9684,
    "value7": 16451,
    "value8": 2866
}, {
    "category": "Agrarian\nSciences",
    "value2": 5244,
    "value3": 110680,
    "value4": 20175,
    "value5": 40035,
    "value6": 26983,
    "value7": 4902,
    "value8": 315
}, ]

chart.colors.step = 2;
chart.padding(30, 30, 10, 0);

chart.legend = new am4charts.Legend();
chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.interactionsEnabled = false;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.calculateTotals = true;

valueAxis.renderer.minGridDistance = 20;
valueAxis.renderer.minWidth = 35;

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.tooltipText = "{name}: {valueX.totalPercent.formatNumber('#.0')}%";
series1.columns.template.column.strokeOpacity = 1;
series1.name = "Humanities";
series1.dataFields.categoryY = "category";
series1.dataFields.valueX = "value7";
series1.dataFields.valueXShow = "totalPercent";
series1.dataItems.template.locations.categoryY = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";
series1.tooltip.dy = - 20;
series1.fill = "#74BF00";
series1.cursorHoverEnabled = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.label.text = "{valueX.totalPercent.formatNumber('#.0')}";
bullet1.fontSize = 12;
bullet1.locationX = 0.5;
bullet1.label.truncate = false;
bullet1.label.fill = am4core.color("#ffffff");
bullet1.interactionsEnabled = false;

var series4 = chart.series.push(series1.clone());
series4.name = "Health Sciences";
series4.dataFields.valueX = "value6";
series4.fill = "#DD87FB";
series4.stroke = series4.fill;
series4.cursorHoverEnabled = false;

var series3 = chart.series.push(series1.clone());
series3.name = "Linguistics, Letters and Arts";
series3.dataFields.valueX = "value8";
series3.fill = "#D1B7A9";
series3.stroke = series3.fill;
series3.cursorHoverEnabled = false;

var series5 = chart.series.push(series1.clone());
series5.name = "Biological Sciences         ";
series5.dataFields.valueX = "value3";
series5.fill = "#4D5048";
series5.stroke = series5.fill;
series5.cursorHoverEnabled = false;

var series8 = chart.series.push(series1.clone());
series8.name = "Engineering";
series8.dataFields.valueX = "value4";
series8.fill = "#3BBE90";
series8.stroke = series8.fill;
series8.cursorHoverEnabled = false;

var series6 = chart.series.push(series1.clone());
series6.name = "Applied and Social Sciences";
series6.dataFields.valueX = "value2";
series6.fill = "#F88B16";
series6.stroke = series6.fill;
series6.cursorHoverEnabled = false;

var series2 = chart.series.push(series1.clone());
series2.name = "Agrarian Sciences";
series2.dataFields.valueX = "value1";
series2.fill = "#F65582";
series2.stroke = series2.fill;
series2.cursorHoverEnabled = false;

var series7 = chart.series.push(series1.clone());
series7.name = "Exact and Earth Sciences";
series7.dataFields.valueX = "value5";
series7.fill = "#3FC0FF";
series7.stroke = series7.fill;
series7.cursorHoverEnabled = false;
//chart.scrollbarX = new am4core.Scrollbar();

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
