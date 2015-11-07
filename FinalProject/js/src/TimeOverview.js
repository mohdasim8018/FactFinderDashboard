
	
	//for table data;
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
						
	var legendData = [
					{condition: "Hypertension",color: "#A48AD4"},
					{condition: "High Cholestorol",color: "#AEC785"},
					{condition: "Diabetes",color: "#FDD752"},
					{condition: "Heart Disease",color: "#EFB3E6"},
					{condition: "Cancer",color: "#FA8564"}
				   ];

	
						
	var diabetesCount = 0;
	var hyperTensionCount = 0;
	var cholestorolCount = 0;
	var heartDiseaseCount = 0;
	var cancerCount = 0;
	
	var WIDTH = 400,
	HEIGHT = 200,
	MARGINS = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 35
	};
	
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
	var merger = "legendData[0].condition";
	

function parseData(){
	console.log(merger);
	d3.csv("../dataset/OriginalDataset.csv", function(data) {	
		for(var i = 0;i<data.length;i++){
			  
			  // Hypertension each category data
			  if(data[i].Hypev == "1" && data[i].Aldurb9 == "1"){
				  hypertension2D[0].count ++;
			  }
			  if(data[i].Hypev == "1" && data[i].Aldurb9 == "2"){
				  hypertension2D[1].count ++;
			  }
			  if(data[i].Hypev == "1" && data[i].Aldurb9 == "3"){
				  hypertension2D[2].count ++;
			  }
			  if(data[i].Hypev == "1" && data[i].Aldurb9 == "4"){
				  hypertension2D[3].count ++;
			  }
			  
			  //  Diabetes each category data
			  if(data[i].Dibev == "1" && data[i].Aldurb10 == "1"){
				  diabetes2D[0].count ++;
			  }
			  if(data[i].Dibev == "1" && data[i].Aldurb10 == "2"){
				  diabetes2D[1].count ++;
			  }
			  if(data[i].Dibev == "1" && data[i].Aldurb10 == "3"){
				  diabetes2D[2].count ++;
			  }
			  if(data[i].Dibev == "1" && data[i].Aldurb10 == "4"){
				  diabetes2D[3].count ++;
			  }
			  
			  // Cancer each category data
			  if(data[i].Canev == "1" && data[i].Aldurb12 == "1"){
				  cancer2D[0].count ++;
			  }
			  if(data[i].Canev == "1" && data[i].Aldurb12 == "2"){
				  cancer2D[1].count ++;
			  }
			  if(data[i].Canev == "1" && data[i].Aldurb12 == "3"){
				  cancer2D[2].count ++;
			  }
			  if(data[i].Canev == "1" && data[i].Aldurb12 == "4"){
				  cancer2D[3].count ++;
			  }
			  
			  // Heart disease each category data
			  if(data[i].Chdev == "1" && data[i].Aldurb7 == "1"){
				  cancer2D[0].count ++;
			  }
			  if(data[i].Chdev == "1" && data[i].Aldurb7 == "2"){
				  cancer2D[1].count ++;
			  }
			  if(data[i].Chdev == "1" && data[i].Aldurb7 == "3"){
				  cancer2D[2].count ++;
			  }
			  if(data[i].Chdev == "1" && data[i].Aldurb7 == "4"){
				  cancer2D[3].count ++;
			  }
		}	  
		buildMultiLineGraph(hypertension2D, cancer2D, heart2D, diabetes2D);
		buildLegend(legendData)
	 
		
	
	});
		

}

function buildMultiLineGraph(hypertension2D, cancer2D, heart2D, diabetes2D){
	var vis = d3.select("body").select("#visualisation"),	
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
		.call(yAxis);
							
	vis.append('svg')
		.append('g')	
		.attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
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
		.attr('stroke', 'FDD752')
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

function buildLegend(legendData){

		var legend = d3.select("#legend");
		 
		var legendXPadding = WIDTH- (MARGINS.left) - (MARGINS.right);
		
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

function filterSwitch(filter){
	if (filter.value == "age"){
		// Clear dynamic filters
		clearDynamicContent();
		
		// Generate dropdown menu for sub section filter
		dropdown(age);
	}
	else if (filter.value == "sex"){
		// Clear dynamic filters
		clearDynamicContent();
		
		// Generate dropdown menu for sub section filter
		dropdown(sex);
	}
	else if (filter.value == "race"){
		// Clear dynamic filters
		clearDynamicContent();
		
		// Generate dropdown menu for sub section filter
		dropdown(race);
	}
	else if (filter.value == "region"){
		// Clear existing sub-section filters
		clearDynamicContent();
		
		// Generate dropdown menu for sub section filter
		dropdown(region);
	}
	
}

function clearDynamicContent(){
	// Clear already existing sub section filter
	d3.selectAll("#dropdown").remove();
	d3.selectAll(".btn-group").remove();
}

function dropdown(optionData){
	var select  = d3.selectAll("#unique").append("select").attr("id","dropdown"),
		options = select.selectAll('option').data(optionData);
		options.enter().append("option").text(function(d) { return d;});
		
	var button = d3.selectAll("#unique").append("button")
					.on("click", detailedWindow)
					.attr("class","btn-group");
}

function detailedWindow(){
	
	window.open("TimeDetailed.html",'',"width=800,height=600");
	//var section = d3.selectAll("#filterId").property("value");
	//var sub = d3.selectAll("#dropdown").property("value"); 
}