
	//for table data;
	var graphDataArray = [ 
							{condition: "Hypertension",count: 0,duration1: 0,duration2: 0,duration3: 0,duration4: 0},
							{condition: "High Cholestorol",count: 0,duration1: 0,duration2: 0,duration3: 0,duration4: 0},
							{condition: "Diabetes",count: 0,duration1: 0,duration2: 0,duration3: 0,duration4: 0},
							{condition: "Heart Disease",count: 0,duration1: 0,duration2: 0,duration3: 0,duration4: 0},
							{condition: "Cancer",count: 0,duration1: 0,duration2: 0,duration3: 0,duration4: 0}
						];

						
	var diabetesCount = 0;
	var hyperTensionCount = 0;
	var cholestorolCount = 0;
	var heartDiseaseCount = 0;
	var cancerCount = 0;

	
	
	var graphMargin = {top: 10, right: 10, bottom: 10, left: 80};
    var graphWidth = 400 - graphMargin.left - graphMargin.right;
    var graphHeight = 250 - graphMargin.top - graphMargin.bottom;

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





function d3Tutorial(){

	
	

	d3.csv("dataset/OriginalDataset.csv", function(data) {	
		for(var i = 0;i<data.length;i++){
			  
			  if(data[i].Hypev == "1"){
				  graphDataArray[0].count ++;
				  if(data[i].Aldurb9 == "1")
					  graphDataArray[0].duration1 ++;
				  else if(data[i].Aldurb9 == "2")
					  graphDataArray[0].duration2 ++;
				  else if(data[i].Aldurb9 == "3")
					  graphDataArray[0].duration3 ++;
				  else if(data[i].Aldurb9 == "4")
					  graphDataArray[0].duration4 ++;
					  
			  }
			  if(data[i].Chlev == "1"){
				  graphDataArray[1].count ++;
			  }
			  if(data[i].Dibev == "1"){
				  graphDataArray[2].count ++;
				  if(data[i].Aldurb10 == "1")
					 graphDataArray[2].duration1 ++; 
				  else if(data[i].Aldurb10 == "2")
					 graphDataArray[2].duration2 ++;
				  else if(data[i].Aldurb10 == "3")
					 graphDataArray[2].duration3 ++;	
				  else if(data[i].Aldurb10 == "4")
					 graphDataArray[2].duration4 ++; 	
			  }
			  if(data[i].Chdev == "1"){
				  graphDataArray[3].count ++;
				  if(data[i].Aldurb7 == "1")
					graphDataArray[3].duration1 ++; 
				  else if(data[i].Aldurb7 == "2")
					graphDataArray[3].duration2 ++;
                  else if(data[i].Aldurb7 == "3")
					graphDataArray[3].duration3 ++;
                  else if(data[i].Aldurb7 == "4")
					graphDataArray[3].duration4 ++;				
			  }
			  if(data[i].Canev == "1"){
				  graphDataArray[4].count ++;
				  if(data[i].Aldurb12 == "1")
					  graphDataArray[4].duration1 ++;
				  else if(data[i].Aldurb12 == "2")
					  graphDataArray[4].duration2 ++;
				  else if(data[i].Aldurb12 == "3")
					  graphDataArray[4].duration3 ++;
				  else if(data[i].Aldurb12 == "4")
					  graphDataArray[4].duration4 ++;				  
			  }
		 }
		 	
	 hypertensionCount = (graphDataArray[0].count/data.length)*100;
	 cholestorolCount = (graphDataArray[1].count/data.length)*100;
	 diabetesCount = (graphDataArray[2].count/data.length)*100;
	 heartDiseaseCount = (graphDataArray[3].count/data.length)*100;
	 cancerCount = (graphDataArray[4].count/data.length)*100;
		 
	 var barData = [
					{condition: "Hypertension",count: hypertensionCount,color: "#A48AD4"},
					{condition: "High Cholestorol",count: cholestorolCount,color: "#AEC785"},
					{condition: "Diabetes",count: diabetesCount,color: "#FDD752"},
					{condition: "Heart Disease",count: heartDiseaseCount,color: "#EFB3E6"},
					{condition: "Cancer",count: cancerCount,color: "#FA8564"}
				   ]

			
	 $("#hypertensionCount").text(((graphDataArray[0].count/data.length)*100).toFixed(2) + " %");
	 $("#highCholestorolCount").text(((graphDataArray[1].count/data.length)*100).toFixed(2) + " %");
	 $("#diabetesCount").text(((graphDataArray[2].count/data.length)*100).toFixed(2) + " %");
	 $("#heartDiseaseCount").text(((graphDataArray[3].count/data.length)*100).toFixed(2) + " %");
	 $("#cancerCount").text(((graphDataArray[4].count/data.length)*100).toFixed(2) + " %");
	 
	 $("#hypertensionCount1").text(graphDataArray[0].duration1);
	 $("#hypertensionCount2").text(graphDataArray[0].duration2);
	 $("#hypertensionCount3").text(graphDataArray[0].duration3);
	 $("#hypertensionCount4").text(graphDataArray[0].duration4);
	 
	 $("#diabetesCount1").text(graphDataArray[2].duration1);
	 $("#diabetesCount2").text(graphDataArray[2].duration2);
	 $("#diabetesCount3").text(graphDataArray[2].duration3);
	 $("#diabetesCount4").text(graphDataArray[2].duration4);
	 
	 $("#heartDiseaseCount1").text(graphDataArray[3].duration1);
	 $("#heartDiseaseCount2").text(graphDataArray[3].duration2);
	 $("#heartDiseaseCount3").text(graphDataArray[3].duration3);
	 $("#heartDiseaseCount4").text(graphDataArray[3].duration4);
	 
	 $("#cancerCount1").text(graphDataArray[4].duration1);
	 $("#cancerCount2").text(graphDataArray[4].duration2);
	 $("#cancerCount3").text(graphDataArray[4].duration3);
	 $("#cancerCount4").text(graphDataArray[4].duration4);

		 
	 buildBarChart(barData);
	 buildLegend(barData)		 
		
	
	});
		

}

function buildBarChart(barData){
	var svg = d3.select("#graph")
	.append("svg")
    .attr("width", graphWidth + graphMargin.left + graphMargin.right)
    .attr("height", graphHeight + graphMargin.top + graphMargin.bottom)
	.append("g")
    .attr("transform", "translate(" + graphMargin.left + "," + graphMargin.top + ")");
	
	
	var tip =  d3.select("#graph")
				.append("div")
				.attr("id","tooltip")	
				.attr("class", "tooltip")
				.style("opacity", 0); 

		xAxisScale.domain(barData.map(function(d) { return d.condition; }));
		 yAxisScale.domain([0, d3.max(barData, function(d) { return d.count; })]);
		 
		 svg.append("g")
		.attr("class", "line")
		.attr("transform", "translate(0," + graphHeight + ")")
		.call(xAxis)
		.selectAll("text")
			.attr("y", 7)
			.attr("x", 3)
			.attr("dy", ".35em")
			.attr("transform", "rotate(45)")
			.style("stroke-width","1px")
			.style("text-anchor", "start")
			.style("display","none");
			
			

		  svg.append("g")
			  .attr("class", "line")
			  .call(yAxis)
			.append("text")
			  .attr("transform", "rotate(-90)")
			  .attr("y", -60)
			  .attr("x", -100)
			  .attr("dy", ".71em")
			  .style("text-anchor", "end")
			  .text("Patient Count");

		  svg.selectAll("rect")
			  .data(barData)
			.enter().append("rect")
			  .attr("x", function(d) { return xAxisScale(d.condition); })
			  .attr("width",40)
			  .attr("y", function(d) { return yAxisScale(d.count); })
			  .attr("height", function(d) { return graphHeight - yAxisScale(d.count); })
			  .style("stroke-width",1.0)
			  .attr("fill",function(d){
				return d.color;
			  })
			  .on('mouseover',function(d,i){
			
				//for displaying the tool-tip
				d3.select(".tooltip").style("display","block");
				var currentState = this;													
				tip.transition()
				   .style("opacity","0.7")
				   .style("background","#1FB5AD")
				   .style("fill","white");
				tip.html(d.condition+": "+"<br>"+ d.count.toFixed(2) + "%") 
					.style("left", xAxisScale(d.condition) + 60 +"px")
					.style("color","white")			
					.style("top", yAxisScale(d.count) - 30 + "px");	
				})
				.on("mouseout",function(d,i){
					d3.select(".tooltip").style("display","none");
				});

}

function buildLegend(barData){

		 var legend = d3.select("#legend");
		
		var legendRect = legend.selectAll('rect').data(barData)
				.enter()
				.append("rect")
				.attr("x", graphWidth - 250)
				.attr("width", 10)
				.attr("height", 10)
				.attr("y", function(d, i) {
					return (i * 20);
				})
				.style("fill", function(d) {
					return d.color;
				});
				
		var label = legend.selectAll("text").data(barData)
			.enter()
			.append("text")
			.attr("x",graphWidth - 230)
			.attr("y", function(d, i) {
				return (i * 20) +9;
			})
			.style("font-family","verdana, arial, 'sans-serif'")
			.style("font-size","13px")
			.style("fill","#1FB5AD")
			.text(function(d){
				return d.condition;
			});

}




function switchView(view){
	
	if(view == "Table"){
		$('#tableContainer').show();
		$('#graphContainer').hide();
		$("#Table").css("border-bottom","2px solid #1FB5AD");
		$("#Graph").css("border-bottom","");
	}
	if(view == "Graph"){
		$('#tableContainer').hide();
		$('#graphContainer').show();
		$("#Graph").css("border-bottom","2px solid #1FB5AD");
		$("#Table").css("border-bottom","");
	}
}




function closeDetailedView(){
	document.getElementById("detailContainer").innerHTML = "";
	document.getElementById("graphContainerDetailed").innerHTML = "";
	$("#overlay").hide();
	$("#frame").hide();
	$("#TableDetailed").css("border-bottom","2px solid #1FB5AD");
	$("#GraphDetailed").css("border-bottom","");
	
}


