
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
	var WIDTH = 400,
	HEIGHT = 280,
	MARGINS = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 35
	};
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

	var legendData = [
					{condition: "Hypertension",color: "#A48AD4"},
					{condition: "Diabetes",color: "#FDD752"},
					{condition: "Heart Disease",color: "#EFB3E6"},
					{condition: "Cancer",color: "#FA8564"}
				   ];

	var age = ["below 1","above 85"];
	var sex = ["male","female"];
	var region = ["Northeast","Midwest","South","West"];	
	var race = [ "White",
                 "Black/African American",
                 "Indian (American)",
                 "Chinese",
                 "Filipino",
                 "Asian Indian",
				 "Multiple race"];


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

function switchViewForDuration(view){
	
	if(view == "Table"){
		$('#timeDurationOverviewTable').show();
		$('#graphContainerTimeDuration').hide();
		$("#tableTimeDurationIcon").css("border-bottom","2px solid #1FB5AD");
		$("#graphTimeDurationIcon").css("border-bottom","");
	}
	if(view == "Graph"){
		$('#timeDurationOverviewTable').hide();
		$('#graphContainerTimeDuration').show();
		$("#graphTimeDurationIcon").css("border-bottom","2px solid #1FB5AD");
		$("#tableTimeDurationIcon").css("border-bottom","");
		buildLineGraphData();
	}
}




function closeDetailedView(){
	isRegion = false;
	document.getElementById("detailContainer").innerHTML = "";
	document.getElementById("graphContainerDetailed").innerHTML = "";
	$("#dropDownContainer").hide();
	$("#overlay").hide();
	$("#frame").hide();
	$("#TableDetailed").css("border-bottom","2px solid #1FB5AD");
	$("#GraphDetailed").css("border-bottom","");
	
}

function buildLineGraphData(){
	var diabetes2D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
						
	var hypertension2D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
						
	var heart2D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
						
	var cancer2D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
	for(var i=0;i<graphDataArray.length;i++){
		if(graphDataArray[i].condition=="Hypertension"){
			hypertension2D[0].count = graphDataArray[i].duration1;
			hypertension2D[1].count = graphDataArray[i].duration2;
			hypertension2D[2].count = graphDataArray[i].duration3;
			hypertension2D[3].count = graphDataArray[i].duration4;
			
		}else if(graphDataArray[i].condition=="Diabetes"){
			diabetes2D[0].count = graphDataArray[i].duration1;
			diabetes2D[1].count = graphDataArray[i].duration2;
			diabetes2D[2].count = graphDataArray[i].duration3;
			diabetes2D[3].count = graphDataArray[i].duration4;
			
		}else if(graphDataArray[i].condition=="Heart Disease"){
			heart2D[0].count = graphDataArray[i].duration1;
			heart2D[1].count = graphDataArray[i].duration2;
			heart2D[2].count = graphDataArray[i].duration3;
			heart2D[3].count = graphDataArray[i].duration4;
			
		}else if(graphDataArray[i].condition=="Cancer"){
			cancer2D[0].count = graphDataArray[i].duration1;
			cancer2D[1].count = graphDataArray[i].duration2;
			cancer2D[2].count = graphDataArray[i].duration3;
			cancer2D[3].count = graphDataArray[i].duration4;
		}
	}
	buildMultiLineGraph(hypertension2D, cancer2D, heart2D, diabetes2D);
	buildLegendTimeDuration(legendData);
}


function buildMultiLineGraph(hypertension2D, cancer2D, heart2D, diabetes2D){
	
	d3.selectAll("#visualisation").remove();
	d3.select("#graphTimeDuration").style("margin-top","-10%");
	var vis = d3.select("#graphTimeDuration").append("svg").attr("id","visualisation").attr("height",HEIGHT).attr("width",WIDTH);	
	
	// Make scales for X&Y
	xScale = d3.scale.ordinal()
		.rangePoints([MARGINS.left, WIDTH], 0.5)
		.domain(hypertension2D.map(function(d) { return d.period;})),
	yScale = d3.scale.linear()
		.range([HEIGHT - MARGINS.top, MARGINS.bottom])
		.domain([0,d3.max(hypertension2D, function(d) {return d.count;})]),
						
	// Create X & Y Axes
	xAxis = d3.svg.axis()
		.scale(xScale),
	yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");
				
	// Transform X&Y axis to get proper axes alignment
				
	vis.append('svg')
		.append('g')
		.attr("transform", "translate(" + (MARGINS.left) + ",0)")
		.attr("class","line")
		.call(yAxis)
		.append("text")
			  .attr("transform", "rotate(-90)")
			  .attr("y", -60)
			  .attr("x", -100)
			  .attr("dy", ".71em")
			  .style("text-anchor", "end")
			  .style("color","black")
			  .style("margin-left","-10%")
			  .text("Patient Count");
							
	vis.append('svg')
		.append('g')	
		.attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
		.attr("class","line")
		.call(xAxis);
						
	// Draw a line
	var lineGen = d3.svg.line()
	    .x(function(d) {
			return xScale(d.period);
		})
		.y(function(d) {
			return yScale(d.count);
		});
						  
	// draw data points line  
	vis.append('svg:path')
	    .attr('d', lineGen(hypertension2D))
		.attr('stroke', '#A48AD4')
		.attr('stroke-width', 2)
		.attr('fill', 'none');
		
	vis.append('svg:path')
	    .attr('d', lineGen(diabetes2D))
		.attr('stroke', '#FDD752')
		.attr('stroke-width', 2)
		.attr('fill', 'none');
		
	vis.append('svg:path')
	    .attr('d', lineGen(cancer2D))
		.attr('stroke', '#FA8564')
		.attr('stroke-width', 2)
		.attr('fill', 'none');
	
	vis.append('svg:path')
	    .attr('d', lineGen(heart2D))
		.attr('stroke', '#EFB3E6')
		.attr('stroke-width', 2)
		.attr('fill', 'none');

}

function buildLegendTimeDuration(legendData){

		var legend = d3.select("#legendTimeDuration");
		 
		var legendXPadding = WIDTH - (MARGINS.left) - (MARGINS.right);
		
		var legendRect = legend.selectAll('rect').data(legendData)
				.enter()
				.append("rect")
				.attr("x", legendXPadding-200)
				.attr("width", 10)
				.attr("height", 10)
				.attr("y", function(d, i) {
					return (i * 20);
				})
				.style("fill", function(d) {
					return d.color;
				});
				
		var label = legend.selectAll("text").data(legendData)
			.enter()
			.append("text")
			.attr("x",legendXPadding-180)
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



