jQueryGChart
============

This is a jQuery Plugin that allows the user to easily add Google Charts to their reports.

The syntax is pretty straight-forward:

$('#demoChart').drawGChart({
    "chartType": "Line",
    "showDataTable": false,
    "dataObject":{
        "url": "stub.json"
    },
    options:{
        "title":"Orders in 2013",
        "width":800,
        "height":500
    }
})

Currently you can use the following "chartTypes":

Line,
Bar,
Column,
Pie

We will be adding additional charTypes in upcoming releases.

The "options" object can be populated with config options per the Google Chart API.

The "dataObject" should include "url" at a minimum. This is the location of the data and can point to a static data source or any dynamic script that returns valid JSON.

showDataTable controls whether the underlying data is shown below the chart and should be set to true or false.
