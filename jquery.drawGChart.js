(function($) {
	$.fn.drawGChart = function(chartConfigObject){
		targetDivID = this.attr('id')
		targetDivObject = this
		$(function() {
			if (chartConfigObject.showDataTable) {
				google.load('visualization', '1.0', {'packages':['corechart', 'table'], callback:drawChart});
			}else{
				google.load('visualization', '1.0', {'packages':['corechart'], callback:drawChart});
			}

			// Set a callback to run when the Google Visualization library is loaded.


			function drawChart() {
				var chartReference = targetDivID,
					chartType = chartConfigObject.chartType,
					dataObject = chartConfigObject.dataObject,
					options = chartConfigObject.options,
					showDataTable = chartConfigObject.showDataTable
					dataURL = dataObject.url;

				var jsonData = $.ajax({
					url: dataURL,
					dataType: "json",
					async: false
				})
				.done(function(jsonData){
					switch(chartType)
					{
					case "Line":
					  var chartData = new google.visualization.DataTable(jsonData)
					  var chart = new google.visualization.LineChart(document.getElementById(chartReference));
					  break;
					case "Bar":
					  var chartData = new google.visualization.DataTable(jsonData)
					  var chart = new google.visualization.BarChart(document.getElementById(chartReference));
					  break;
					case "Column":
					  var chartData = new google.visualization.DataTable(jsonData)
					  var chart = new google.visualization.ColumnChart(document.getElementById(chartReference));
					  break;
					case "GeoChart":
					  var chartData = new google.visualization.DataTable(jsonData)
					  var chart = new google.visualization.GeoChart(document.getElementById(chartReference));
					  break;
					case "Pie":
						var chartData = new google.visualization.DataTable(jsonData);
						var chart = new google.visualization.PieChart(document.getElementById(chartReference));
						break;
					case "Donut":
					  var chartData = new google.visualization.DataTable(jsonData)
					  var chart = new google.visualization.PieChart(document.getElementById(chartReference));
					  break;
					default:
					  var chartData = new google.visualization.DataTable(jsonData)
					  var chart = new google.visualization.ColumnChart(document.getElementById(chartReference));
					}
					chart.draw(chartData, options);
					
					if (showDataTable){
						$("#tableDiv").remove()
						$(targetDivObject).after('<div id="tableDiv" style="margin-top:20px;"></div>');
						var table = new google.visualization.Table(document.getElementById('tableDiv'));
		        		table.draw(chartData, {showRowNumber: true});
			        	
					}
				})
				.fail(function( jqXHR, textStatus ) {
					return;
				})
				
			}
		})
	};
}(jQuery));