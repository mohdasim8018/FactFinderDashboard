
	//for table data;
	var diabetes2D_D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
						
	var hypertension2D_D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
						
	var heart2D_D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
						
	var cancer2D_D = [ 
							{period: "Less 3",count: 0},
							{period: "3 to 5",count: 0},
							{period: "6 to 12",count: 0},
							{period: "12 plus",count: 0},
						];
						
	var legendData_D = [
					{condition: "Hypertension",color: "#A48AD4"},
					{condition: "High Cholestorol",color: "#AEC785"},
					{condition: "Diabetes",color: "#FDD752"},
					{condition: "Heart Disease",color: "#EFB3E6"},
					{condition: "Cancer",color: "#FA8564"}
				   ];

	
						
	var diabetesCount_D = 0;
	var hyperTensionCount_D = 0;
	var cholestorolCount_D = 0;
	var heartDiseaseCount_D = 0;
	var cancerCount_D = 0;
	
	var WIDTH_D = 400,
	HEIGHT_D = 200,
	MARGINS_D = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 35
	};
	
	var category_D = ["age","sex", "region", "race"];
	
	var age_D = [{data:"below 1", code:"00"},
			   {data:"above 85", code:"85"}];
			   
	var sex_D = [{data:"male", code:"1"},
			   {data:"female", code:"2"}];
			   
	var region_D = [{data:"Northeast", code:"1"},
		          {data:"Midwest", code:"2"},
				  {data:"South", code:"3"},
				  {data:"West", code:"4"}];	
				  
	var race_D = [ {data:"White",code:"01"},
		         {data:"Black/African American", code:"02"},
			     {data:"Indian (American)", code:"03"},
				 {data:"Chinese", code:"06"},
			     {data:"Filipino", code:"07"},
			     {data:"Asian Indian", code:"12"},
			     {data:"Multiple race_D", code:"17"}];
				 
	var finalSection_D;
	var finalSub_D;
	
function dataEncoding_D(section, sub){
	var result = [section,""];
	
	if (section == "age_D"){
		finalSection_D = age_D;
	}
	else if (section == "sex_D"){
		finalSection_D = sex_D;
	}
	else if (section == "region_D"){
		finalSection_D = region_D;
	}
	else if (section == "race_D"){
		finalSection_D = race_D;
	}
	
	for (var i=0; i<finalSection_D.length; i++){
		if (finalSection_D[i].data == sub){
			finalSub_D = finalSection_D[i].code;
			//console.log(finalSub_D);
		}
	}
	
	//var temp = finalSection_D+'[i]';
	
}


function parseData_D(section, sub){
	d3.csv("../dataset/OriginalDataset.csv", function(data) {	
	
		dataEncoding_D("sex_D", "male");
		section = "sex_D";
		if (section == "sex_D"){
			for(var i = 0;i<data.length;i++){
				  // Hypertension each category_D data
				  if(data[i].Aldurb9 == "1" && data[i].Sex == finalSub_D){
					  hypertension2D_D[0].count ++;
				  }
				  if(data[i].Aldurb9 == "2" && data[i].Sex == finalSub_D){
					  hypertension2D_D[1].count ++;
				  }
				  if(data[i].Aldurb9 == "3" && data[i].Sex == finalSub_D){
					  hypertension2D_D[2].count ++;
				  }
				  if(data[i].Aldurb9 == "4" && data[i].Sex == finalSub_D){
					  hypertension2D_D[3].count ++;
				  }
				  
				  //  Diabetes each category_D data
				  if(data[i].Aldurb10 == "1" && data[i].Sex == finalSub_D){
					  diabetes2D_D[0].count ++;
				  }
				  if(data[i].Aldurb10 == "2" && data[i].Sex == finalSub_D){
					  diabetes2D_D[1].count ++;
				  }
				  if(data[i].Aldurb10 == "3" && data[i].Sex == finalSub_D){
					  diabetes2D_D[2].count ++;
				  }
				  if(data[i].Aldurb10 == "4" && data[i].Sex == finalSub_D){
					  diabetes2D_D[3].count ++;
				  }
				  
				  // Cancer each category_D data
				  if(data[i].Aldurb12 == "1" && data[i].Sex == finalSub_D){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb12 == "2" && data[i].Sex == finalSub_D){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb12 == "3" && data[i].Sex == finalSub_D){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb12 == "4" && data[i].Sex == finalSub_D){
					  cancer2D_D[3].count ++;
				  }
				  
				  // Heart disease each category_D data
				  if(data[i].Aldurb7 == "1" && data[i].Sex == finalSub_D){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Sex == finalSub_D){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Sex == finalSub_D){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Sex == finalSub_D){
					  cancer2D_D[3].count ++;
				  }
			}	 
		
		}
		
		
		if (section == "race_D"){
			for(var i = 0;i<data.length;i++){
				  
				  // Hypertension each category_D data
				  if(data[i].Aldurb9 == "1" && data[i].Mracbpi2 == finalSub_D){
					  hypertension2D_D[0].count ++;
				  }
				  if(data[i].Aldurb9 == "2" && data[i].Mracbpi2 == finalSub_D){
					  hypertension2D_D[1].count ++;
				  }
				  if(data[i].Aldurb9 == "3" && data[i].Mracbpi2 == finalSub_D){
					  hypertension2D_D[2].count ++;
				  }
				  if(data[i].Aldurb9 == "4" && data[i].Mracbpi2 == finalSub_D){
					  hypertension2D_D[3].count ++;
				  }
				  
				  //  Diabetes each category_D data
				  if(data[i].Aldurb10 == "1" && data[i].Mracbpi2 == finalSub_D){
					  diabetes2D_D[0].count ++;
				  }
				  if(data[i].Aldurb10 == "2" && data[i].Mracbpi2 == finalSub_D){
					  diabetes2D_D[1].count ++;
				  }
				  if(data[i].Aldurb10 == "3" && data[i].Mracbpi2 == finalSub_D){
					  diabetes2D_D[2].count ++;
				  }
				  if(data[i].Aldurb10 == "4" && data[i].Mracbpi2 == finalSub_D){
					  diabetes2D_D[3].count ++;
				  }
				  
				  // Cancer each category_D data
				  if(data[i].Aldurb12 == "1" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb12 == "2" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb12 == "3" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb12 == "4" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[3].count ++;
				  }
				  
				  // Heart disease each category_D data
				  if(data[i].Aldurb7 == "1" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Mracbpi2 == finalSub_D){
					  cancer2D_D[3].count ++;
				  }
			}	 
		
		}
		
		
		if (section == "age_D"){
			for(var i = 0;i<data.length;i++){
				  
				  // Hypertension each category_D data
				  if(data[i].Aldurb9 == "1" && data[i].Age_P == finalSub_D){
					  hypertension2D_D[0].count ++;
				  }
				  if(data[i].Aldurb9 == "2" && data[i].Age_P == finalSub_D){
					  hypertension2D_D[1].count ++;
				  }
				  if(data[i].Aldurb9 == "3" && data[i].Age_P == finalSub_D){
					  hypertension2D_D[2].count ++;
				  }
				  if(data[i].Aldurb9 == "4" && data[i].Age_P == finalSub_D){
					  hypertension2D_D[3].count ++;
				  }
				  
				  //  Diabetes each category_D data
				  if(data[i].Aldurb10 == "1" && data[i].Age_P == finalSub_D){
					  diabetes2D_D[0].count ++;
				  }
				  if(data[i].Aldurb10 == "2" && data[i].Age_P == finalSub_D){
					  diabetes2D_D[1].count ++;
				  }
				  if(data[i].Aldurb10 == "3" && data[i].Age_P == finalSub_D){
					  diabetes2D_D[2].count ++;
				  }
				  if(data[i].Aldurb10 == "4" && data[i].Age_P == finalSub_D){
					  diabetes2D_D[3].count ++;
				  }
				  
				  // Cancer each category_D data
				  if(data[i].Aldurb12 == "1" && data[i].Age_P == finalSub_D){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb12 == "2" && data[i].Age_P == finalSub_D){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb12 == "3" && data[i].Age_P == finalSub_D){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb12 == "4" && data[i].Age_P == finalSub_D){
					  cancer2D_D[3].count ++;
				  }
				  
				  // Heart disease each category_D data
				  if(data[i].Aldurb7 == "1" && data[i].Age_P == finalSub_D){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Age_P == finalSub_D){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Age_P == finalSub_D){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Age_P == finalSub_D){
					  cancer2D_D[3].count ++;
				  }
			}	 
		
		}
		
		
		if (section == "region_D"){
			for(var i = 0;i<data.length;i++){
				  
				  // Hypertension each category_D data
				  if(data[i].Aldurb9 == "1" && data[i].Region == sub){
					  hypertension2D_D[0].count ++;
				  }
				  if(data[i].Aldurb9 == "2" && data[i].Region == sub){
					  hypertension2D_D[1].count ++;
				  }
				  if(data[i].Aldurb9 == "3" && data[i].Region == sub){
					  hypertension2D_D[2].count ++;
				  }
				  if(data[i].Aldurb9 == "4" && data[i].Region == sub){
					  hypertension2D_D[3].count ++;
				  }
				  
				  //  Diabetes each category_D data
				  if(data[i].Aldurb10 == "1" && data[i].Region == sub){
					  diabetes2D_D[0].count ++;
				  }
				  if(data[i].Aldurb10 == "2" && data[i].Region == sub){
					  diabetes2D_D[1].count ++;
				  }
				  if(data[i].Aldurb10 == "3" && data[i].Region == sub){
					  diabetes2D_D[2].count ++;
				  }
				  if(data[i].Aldurb10 == "4" && data[i].Region == sub){
					  diabetes2D_D[3].count ++;
				  }
				  
				  // Cancer each category_D data
				  if(data[i].Aldurb12 == "1" && data[i].Region == sub){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb12 == "2" && data[i].Region == sub){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb12 == "3" && data[i].Region == sub){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb12 == "4" && data[i].Region == sub){
					  cancer2D_D[3].count ++;
				  }
				  
				  // Heart disease each category_D data
				  if(data[i].Aldurb7 == "1" && data[i].Region == sub){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Region == sub){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Region == sub){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Region == sub){
					  cancer2D_D[3].count ++;
				  }
			}	 
		
		}
		
		
		buildMultiLineGraph_D(hypertension2D_D, cancer2D_D, heart2D_D, diabetes2D_D);
		buildLegend_D(legendData_D)
	 
		
	
	});
		

}

function buildMultiLineGraph_D(hypertension2D_D, cancer2D_D, heart2D_D, diabetes2D_D){
	var vis = d3.select("body").select("#visualisation"),
	
				
	// Make scales for X&Y
	xScale = d3.scale.ordinal()
		.rangePoints([MARGINS_D.left, WIDTH_D], 0.5)
		.domain(hypertension2D_D.map(function(d) { return d.period;})),
	yScale = d3.scale.linear()
		.range([HEIGHT_D - MARGINS_D.top, MARGINS_D.bottom])
		.domain([0,d3.max(hypertension2D_D, function(d) {return d.count;})]),
						
	// Create X & Y Axes
	xAxis = d3.svg.axis()
		.scale(xScale),
	yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");
				
	// Transform X&Y axis to get proper axes alignment
				
	vis.append('svg')
		.append('g')
		.attr("transform", "translate(" + (MARGINS_D.left) + ",0)")
		.call(yAxis);
							
	vis.append('svg')
		.append('g')	
		.attr("transform", "translate(0," + (HEIGHT_D - MARGINS_D.bottom) + ")")
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
	    .attr('d', lineGen(hypertension2D_D))
		.attr('stroke', '#A48AD4')
		.attr('stroke-width', 2)
		.attr('fill', 'none');
		
	vis.append('svg:path')
	    .attr('d', lineGen(diabetes2D_D))
		.attr('stroke', '#FDD752')
		.attr('stroke-width', 2)
		.attr('fill', 'none');
		
	vis.append('svg:path')
	    .attr('d', lineGen(cancer2D_D))
		.attr('stroke', '#FA8564')
		.attr('stroke-width', 2)
		.attr('fill', 'none');
	
	vis.append('svg:path')
	    .attr('d', lineGen(heart2D_D))
		.attr('stroke', '#EFB3E6')
		.attr('stroke-width', 2)
		.attr('fill', 'none');

}

function buildLegend_D(legendData_D){

		 var legend = d3.select("#legend");
		 
		 var legendXPadding = WIDTH_D- (MARGINS_D.left) - (MARGINS_D.right);
		
		var legendRect = legend.selectAll('rect').data(legendData_D)
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
				
		var label = legend.selectAll("text").data(legendData_D)
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


