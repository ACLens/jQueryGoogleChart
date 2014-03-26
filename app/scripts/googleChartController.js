// Load the Visualization API and the piechart package.
google.load('visualization', '1', {'packages':['corechart']});

// Set a callback to run when the Google Visualization library is loaded.
google.setOnLoadCallback(googleReady);

function googleReady(){
	var googleReady = true;
}


function DrawChart(ChartObj){
	if (googleReady) {
		var chartReference = ChartObj.chartReference
		var chartType = ChartObj.chartType
		var data = ChartObj.data
		var options = ChartObj.options

		// Instantiate and draw our chart, passing in some options.
		console.log(chartReference)
		switch(chartType)
		{
		case "Line":
		  var chartData = new google.visualization.DataTable(data)
		  var chart = new google.visualization.LineChart(document.getElementById(chartReference));
		  break;
		case "Bar":
		  var chartData = new google.visualization.DataTable(data)
		  var chart = new google.visualization.BarChart(document.getElementById(chartReference));
		  break;
		case "Column":
		  var chartData = new google.visualization.DataTable(data)
		  var chart = new google.visualization.ColumnChart(document.getElementById(chartReference));
		  break;
		case "GeoChart":
		  var chartData = new google.visualization.DataTable(data)
		  var chart = new google.visualization.GeoChart(document.getElementById(chartReference));
		  break;
		case "Pie":
			var chartData = new google.visualization.DataTable(data);
			var chart = new google.visualization.PieChart(document.getElementById(chartReference));
			break;
		case "Donut":
		  var chartData = new google.visualization.DataTable(data)
		  var chart = new google.visualization.PieChart(document.getElementById(chartReference));
		  break;
		default:
		  var chartData = new google.visualization.DataTable(data)
		  var chart = new google.visualization.ColumnChart(document.getElementById(chartReference));
		}
		
			
		chart.draw(chartData, options);
	}
}