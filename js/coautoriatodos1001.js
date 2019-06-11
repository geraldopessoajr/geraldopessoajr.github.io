am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [{
    "category": "Ciências\nAgrárias",
    "value2": 53.1,
    "value3": 12.9,
    "value4": 19.2,
    "value5": 2.4,
    "value6": 2.4,
    "value7": 9.7,
    "value8": 0.2
}, {
    "category": " Ciências\nBiológicas",
    "value1": 30.7,
    "value3": 41.4,
    "value4": 19.7,
    "value5": 2.8,
    "value6": 0.9,
    "value7": 4.3,
    "value8": 0.2
}, {
    "category": " Ciências\nda Saúde",
    "value1": 9.2,
    "value2": 51.1,
    "value4": 18.2,
    "value5": 10.8,
    "value6": 3.3,
    "value7": 6.1,
    "value8": 1.3
}, {
    "category": "Ciências Exatas\n\te da Terra",
    "value1": 13.3,
    "value2": 23.7,
    "value3": 17.6,
    "value5": 4.4,
    "value6": 1.8,
    "value7": 38.9,
    "value8": 0.3
}, {
    "category": " Ciências\nHumanas",
    "value1": 5.3,
    "value2": 11.2,
    "value3": 34.2,
    "value4": 14.7,
    "value6": 18.0,
    "value7": 5.0,
    "value8": 11.6
}, {
    "category": "Ciências Sociais\n    e Aplicadas",
    "value1": 10.3,
    "value2": 6.6,
    "value3": 19.1,
    "value4": 10.7,
    "value5": 32.4,
    "value7": 15.3,
    "value8": 5.6
}, {
    "category": "Engenharias",
    "value1": 11.0,
    "value2": 8.4,
    "value3": 9.6,
    "value4": 64.0,
    "value5": 2.5,
    "value6": 4.2,
    "value8": 0.3
}, {
    "category": "  Linguistíca,\nLetras e Artes",
    "value1": 1.6,
    "value2": 3.3,
    "value3": 19.0,
    "value4": 4.8,
    "value5": 53.9,
    "value6": 14.5,
    "value7": 2.9
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
series1.name = "Ciências Humanas";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value5";
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

var series3 = chart.series.push(series1.clone());
series3.name = "Ciências da Saúde";
series3.dataFields.valueY = "value3";
series3.fill = "#DD87FB";
series3.stroke = series3.fill;
series3.cursorHoverEnabled = false;

var series8 = chart.series.push(series1.clone());
series8.name = "Linguistíca, Letras e Artes";
series8.dataFields.valueY = "value8";
series8.fill = "#D1B7A9";
series8.stroke = series8.fill;
series8.cursorHoverEnabled = false;

var series2 = chart.series.push(series1.clone());
series2.name = "Ciências Biológicas";
series2.dataFields.valueY = "value2";
series2.fill = "#4D5048";
series2.stroke = series2.fill;
series2.cursorHoverEnabled = false;

var series7 = chart.series.push(series1.clone());
series7.name = "Engenharias";
series7.dataFields.valueY = "value7";
series7.fill = "#3BBE90";
series7.stroke = series7.fill;
series7.cursorHoverEnabled = false;

var series6 = chart.series.push(series1.clone());
series6.name = "Ciências Sociais e Aplicadas";
series6.dataFields.valueY = "value6";
series6.fill = "#F88B16";
series6.stroke = series6.fill;
series6.cursorHoverEnabled = false;

var series5 = chart.series.push(series1.clone());
series5.name = "Ciências Agrárias";
series5.text = "Ciências Agrárias\t";
series5.dataFields.valueY = "value1";
series5.fill = "#F65582";
series5.stroke = series5.fill;
series5.cursorHoverEnabled = false;

var series4 = chart.series.push(series1.clone());
series4.name = "Ciências Exatas e da Terra";
series4.dataFields.valueY = "value4";
series4.fill = "#3FC0FF";
series4.stroke = series4.fill;
series4.cursorHoverEnabled = false;

//chart.scrollbarX = new am4core.Scrollbar();

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
