am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [{
    "category": "Central-West",
    "value1": 9730,
    "value2": 11316,
    "value3": 873,
    "value4": 35225,
    "value5": 14763
}, {
    "category": "North",
    "value1": 873,
    "value2": 2025,
    "value3": 1171,
    "value4": 5622,
    "value5": 2400
}, {
    "category": "Northeast",
    "value1": 11316,
    "value2": 39767,
    "value3": 2025,
    "value4": 84163,
    "value5": 36632
}, {
    "category": "South",
    "value1": 17763,
    "value2": 36632,
    "value3": 2400,
    "value4": 107154,
    "value5": 60210
}, {
    "category": "Southeast",
    "value1": 35225,
    "value2": 84163,
    "value3": 5622,
    "value4": 242057,
    "value5": 107154
}]

chart.colors.step = 2;
chart.padding(30, 30, 10, 0);

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
series1.name = "Central-West";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";
series1.tooltip.dy = - 20;
series1.fill = "#E41A1C";
series1.cursorHoverEnabled = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.label.text = "{valueY.totalPercent.formatNumber('#.0')}%";
bullet1.fontSize = 12;
bullet1.locationX = 0.5;
bullet1.label.truncate = false;
bullet1.label.fill = am4core.color("#ffffff");
bullet1.interactionsEnabled = false;

var series3 = chart.series.push(series1.clone());
series3.name = "North";
series3.dataFields.valueY = "value3";
series3.fill = "#4DAF4A";
series3.stroke = series3.fill;
series3.cursorHoverEnabled = false;

var series2 = chart.series.push(series1.clone());
series2.name = "Northeast";
series2.dataFields.valueY = "value2";
series2.fill = "#377EB8";
series2.stroke = series2.fill;
series2.cursorHoverEnabled = false;

var series5 = chart.series.push(series1.clone());
series5.name = "South";
series5.dataFields.valueY = "value5";
series5.fill = "#FF7F00";
series5.stroke = series5.fill;
series5.cursorHoverEnabled = false;

var series4 = chart.series.push(series1.clone());
series4.name = "Southeast";
series4.dataFields.valueY = "value4";
series4.fill = "#984EA3";
series4.stroke = series4.fill;
series4.cursorHoverEnabled = false;

//chart.scrollbarX = new am4core.Scrollbar();

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
