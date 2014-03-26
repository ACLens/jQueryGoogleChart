
function DrawChart(ChartObj) {
	var chartReference = ChartObj.chartReference
	var chartType = ChartObj.chartType
	var data = ChartObj.data
	var options = ChartObj.options

	//Get context with jQuery - using jQuery's .get() method.
	var ctx = $(chartReference).get(0).getContext("2d");
	//This will get the first returned node in the jQuery collection.
	var myNewChart = new Chart(ctx);

	switch(chartType)
	{
	case "Line":
	  new Chart(ctx).Line(data,options);
	  break;
	case "Bar":
	  new Chart(ctx).Bar(data,options);
	  break;
	case "Radar":
	  new Chart(ctx).Radar(data,options);
	  break;
	case "PolarArea":
	  new Chart(ctx).PolarArea(data,options);
	  break;
	case "Pie":
	  new Chart(ctx).Pie(data,options);
	  break;
	case "Doughnut":
	  new Chart(ctx).Doughnut(data,options);
	  break;
	default:
	  new Chart(ctx).PolarArea(data,options);
	}
	
}