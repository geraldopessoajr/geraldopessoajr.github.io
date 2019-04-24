am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "category": "Linguistics",
    "value1": 89.3,
    "value2": 10.7,
    "value3": 84.1,
    "value4": 15.9,
    "value5": 79.9,
    "value6": 20.1
}, {
    "category": "Humanities",
    "value1": 81.1,
    "value2": 18.9,
    "value3": 70.5,
    "value4": 29.5,
    "value5": 66.4,
    "value6": 33.6
}, {
    "category": "Health",
    "value1": 32.4,
    "value2": 67.6,
    "value3": 24.9,
    "value4": 75.1,
    "value5": 27.5,
    "value6": 72.5
},  {
    "category": "Exact and Earth ",
    "value1": 52.5,
    "value2": 47.5,
    "value3": 34.6,
    "value4": 65.4,
    "value5": 35.4,
    "value6": 64.6
}, {
    "category": "Engineering",
    "value1": 56.7,
    "value2": 43.3,
    "value3": 44.4,
    "value4": 55.6,
    "value5": 42.9,
    "value6": 57.1
}, {
    "category": "Biological",
    "value1": 24.8,
    "value2": 75.2,
    "value3": 15.8,
    "value4": 84.2,
    "value5": 17.9,
    "value6": 82.1
}, {
    "category": "Applied and Social",
    "value1": 74.5,
    "value2": 25.5, 
    "value3": 62.7,
    "value4": 37.3,
    "value5": 68,
    "value6": 32
}, {
    "category": "Agrarian",
    "value1": 25.5,
    "value2": 74.5,
    "value3": 16.2,
    "value4": 83.8,
    "value5": 16.6,
    "value6": 83.4
}]

chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();

chart.colors.step = 2;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.interactionsEnabled = false;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.5;
valueAxis.renderer.minGridDistance = 20;
valueAxis.interactionsEnabled = false;
valueAxis.min = 0;
valueAxis.visible = false;
valueAxis.renderer.minWidth = 35;


var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.tooltipText = "{name}: {valueX.value}";
series1.columns.template.column.strokeOpacity = 1;
series1.name = "|0,10| Non-Inter";
series1.dataFields.categoryY = "category";
series1.dataFields.valueX = "value1";
series1.stacked = true;
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";
series1.tooltip.dy = - 20;
series1.fill = "#A50026";
series1.cursorHoverEnabled = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.label.text = "{valueX.value}%";
bullet1.fontSize = 12;
bullet1.locationX = 0.5;
bullet1.label.fill = am4core.color("#ffffff");
bullet1.interactionsEnabled = false;

var series2 = chart.series.push(series1.clone());
series2.name = "|0,10| Inter";
series2.dataFields.valueX = "value2";
series2.fill = "#313695";
series2.stroke = series2.fill;
series2.cursorHoverEnabled = true;

var series3 = chart.series.push(series1.clone());
series3.name = "(10,20| Non-Inter";
series3.dataFields.valueX = "value3";
series3.fill = "#d73027";
series3.stroke = series3.fill;
series3.cursorHoverEnabled = false;

var series4 = chart.series.push(series1.clone());
series4.name = "(10,20| Inter";
series4.dataFields.valueX = "value4";
series4.fill = "#4575b4";
series4.stroke = series4.fill;
series4.cursorHoverEnabled = false;

var series5 = chart.series.push(series1.clone());
series5.name = ">20 Non-Inter";
series5.dataFields.valueX = "value5";
series5.fill = "#f46d43";
series5.stroke = series5.fill;
series5.cursorHoverEnabled = false;

var series6 = chart.series.push(series1.clone());
series6.name = ">20 Inter";
series6.dataFields.valueX = "value6";
series6.fill = "#74add1";
series6.stroke = series6.fill;
series6.cursorHoverEnabled = false;
