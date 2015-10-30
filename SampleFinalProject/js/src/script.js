function d3Tutorial(){
  
	//var graphDataObject = {condition="",count=0};
	var graphDataArray = [{condition: "HyperTension",count: 0},{condition: "High Cholestorol",count: 0},{condition: "Diabetes",count: 0}];	
	var diabetesCount = 0;
	var hyperTensionCount = 0;
	var cholestorolCount = 0;
	
	
	var graphMargin = {top: 10, right: 10, bottom: 25, left: 80};
    var graphWidth = 500 - graphMargin.left - graphMargin.right;
    var graphHeight = 300 - graphMargin.top - graphMargin.bottom;

	var xAxisScale = d3.scale.ordinal()
    .rangeRoundBands([0, graphWidth], 0.35);

	var yAxisScale = d3.scale.linear()
    .range([graphHeight, 0]);

	var xAxis = d3.svg.axis()
    .scale(xAxisScale)
    .orient("bottom");

	var yAxis = d3.svg.axis()
    .scale(yAxisScale)
    .orient("left");
	
	



	var svg = d3.select("#graph")
    .attr("width", graphWidth + graphMargin.left + graphMargin.right)
    .attr("height", graphHeight + graphMargin.top + graphMargin.bottom)
	.append("g")
    .attr("transform", "translate(" + graphMargin.left + "," + graphMargin.top + ")");

	d3.csv("sampledata.csv", function(data) {	
		for(var i = 0;i<data.length;i++){
			  
			  if(data[i].Hypmdev2 == "1"){
				  hyperTensionCount ++;
			  }
			  if(data[i].Chlmdev2 == "1"){
				  cholestorolCount ++;
			  }
			  if(data[i].Dibpill == "1"){
				  diabetesCount ++;
			  }
		 }
		 graphDataArray[0].count = hyperTensionCount;
		 graphDataArray[1].count = cholestorolCount;
		 graphDataArray[2].count = diabetesCount;
		 
		 
		 $("#hypertensionCount").text(hyperTensionCount);
		 $("#highCholestorolCount").text(cholestorolCount);
		 $("#diabetesCount").text(diabetesCount);
		 
		 xAxisScale.domain(graphDataArray.map(function(d) { return d.condition; }));
		 yAxisScale.domain([0, d3.max(graphDataArray, function(d) { return d.count; })]);
		 
		 svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + graphHeight + ")")
		.call(xAxis);

		  svg.append("g")
			  .attr("class", "y axis")
			  .call(yAxis)
			.append("text")
			  .attr("transform", "rotate(-90)")
			  .attr("y", -60)
			  .attr("x", -100)
			  .attr("dy", ".71em")
			  .style("text-anchor", "end")
			  .text("Patient Count");

		  svg.selectAll("rect")
			  .data(graphDataArray)
			.enter().append("rect")
			  .attr("x", function(d) { return xAxisScale(d.condition); })
			  .attr("width",80)
			  .attr("y", function(d) { return yAxisScale(d.count); })
			  .attr("height", function(d) { return graphHeight - yAxisScale(d.count); })
			  .attr("fill","#0099FF");
		});
}


