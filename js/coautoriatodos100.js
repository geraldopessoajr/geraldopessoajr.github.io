am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [{
    "category": "Agrárias",
    "value1": 0,
    "value2": 110680,
    "value3": 26983,
    "value4": 40035,
    "value5": 4902,
    "value6": 5244,
    "value7": 20175,
    "value8": 315
}, {
    "category": "Biológicas",
    "value1": 110680,
    "value2": 0,
    "value3": 149228,
    "value4": 71224,
    "value5": 10312,
    "value6": 3327,
    "value7": 15419,
    "value8": 653
}, {
    "category": "Saúde",
    "value1": 26983,
    "value2": 149288,
    "value3": 0,
    "value4": 53047,
    "value5": 31448,
    "value6": 9648,
    "value7": 17665,
    "value8": 3750
}, {
    "category": "Exatas/Terra",
    "value1": 40035,
    "value2": 71224,
    "value3": 53047,
    "value4": 0,
    "value5": 13469,
    "value6": 5455,
    "value7": 117625,
    "value8": 949
}, {
    "category": "Humanas",
    "value1": 4902,
    "value2": 10312,
    "value3": 31448,
    "value4": 13469,
    "value5": 0,
    "value6": 16451,
    "value7": 4608,
    "value8": 10638
}, {
    "category": "Sociais/Aplicadas",
    "value1": 5244,
    "value2": 3327,
    "value3": 9684,
    "value4": 5455,
    "value5": 16451,
    "value6": 0,
    "value7": 7782,
    "value8": 2866
}, {
    "category": "Engenharias",
    "value1": 20175,
    "value2": 15419,
    "value3": 17665,
    "value4": 117625,
    "value5": 4608,
    "value6": 7782,
    "value7": 0,
    "value8": 564
}, {
    "category": "Linguistíca",
    "value1": 315,
    "value2": 653,
    "value3": 3750,
    "value4": 949,
    "value5": 10638,
    "value6": 2866,
    "value7": 564,
    "value8": 0
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
series1.name = "Ciências Agrárias";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";
series1.tooltip.dy = - 20;
series1.fill = "#F65582";
series1.cursorHoverEnabled = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.label.text = "{valueY.totalPercent.formatNumber('#.0')}%";
bullet1.locationY = 0.5;
bullet1.label.fill = am4core.color("#ffffff");
bullet1.interactionsEnabled = false;

var series2 = chart.series.push(series1.clone());
series2.name = "Ciências Biológicas";
series2.dataFields.valueY = "value2";
series2.fill = "#4D5048";
series2.stroke = series2.fill;
series2.cursorHoverEnabled = false;

var series3 = chart.series.push(series1.clone());
series3.name = "Ciências da Saúde";
series3.dataFields.valueY = "value3";
series3.fill = "#DD87FB";
series3.stroke = series3.fill;
series3.cursorHoverEnabled = false;

var series4 = chart.series.push(series1.clone());
series4.name = "Ciências Exatas e da Terra";
series4.dataFields.valueY = "value4";
series4.fill = "#3FC0FF";
series4.stroke = series4.fill;
series4.cursorHoverEnabled = false;

var series5 = chart.series.push(series1.clone());
series5.name = "Ciências Humanas";
series5.dataFields.valueY = "value5";
series5.fill = "#74BF00";
series5.stroke = series5.fill;
series5.cursorHoverEnabled = false;

var series6 = chart.series.push(series1.clone());
series6.name = "Ciências Sociais e Aplicadas";
series6.dataFields.valueY = "value6";
series6.fill = "#F88B16";
series6.stroke = series6.fill;
series6.cursorHoverEnabled = false;

var series7 = chart.series.push(series1.clone());
series7.name = "Engenharias";
series7.dataFields.valueY = "value7";
series7.fill = "#3BBE90";
series7.stroke = series7.fill;
series7.cursorHoverEnabled = false;

var series8 = chart.series.push(series1.clone());
series8.name = "Linguistíca, Letras e Artes";
series8.dataFields.valueY = "value8";
series8.fill = "#D1B7A9";
series8.stroke = series8.fill;
series8.cursorHoverEnabled = false;

//chart.scrollbarX = new am4core.Scrollbar();

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
