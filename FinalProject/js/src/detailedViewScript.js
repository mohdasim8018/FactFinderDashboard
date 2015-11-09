var medicalConditionObj = [
					"Hypertension",
					"High Cholestorol",,
					"Diabetes",
					"Heart Disease",
					"Cancer"
				   ];
var genderObj = [
					{code: "1",text:"Male",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"2",text:"Female",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0}
				];
				
var regionObj = [
					{code: "1",text:"Northeast",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"2",text:"Midwest",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code: "3",text:"South",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"4",text:"West",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0}
				];
				
var raceObj = [
					{code: "1",text:"White",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"2",text:"Black/African American",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code: "3",text:"Indian (American), Alaska Native",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"12",text:"Asian Indian",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"6",text:"Chinese",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"7",text:"Filipino",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0}
				];
				
var ageObj = [
					{code: "1",text:"18-29 Age Group",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"2",text:"30-39 Age Group",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code: "3",text:"40-49 Age Group",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"4",text:"50-59 Age Group",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"5",text:"60-69 Age Group",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0},
					{code:"6",text:"70-85 Age Group",hypertensionCount:0,highCholestorolCount:0,diabetesCount:0,heartDiseaseCount:0,cancerCount:0}
				];



var colorData = [
					{condition: "Hypertension",color: "#A48AD4"},
					{condition: "High Cholestorol",color: "#AEC785"},
					{condition: "Diabetes",color: "#FDD752"},
					{condition: "Heart Disease",color: "#EFB3E6"},
					{condition: "Cancer",color: "#FA8564"}
				]



			
var hypertensionColorShade = ["#6a51a3","#9e9ac8","#cbc9e2","#f2f0f7"];
var highCholestorolColorShade = ["#cc4c02","#fe9929","#fed98e","#ffffd4"];
var diabetesColorShade = ["#238b45","#74c476","#bae4b3","#edf8e9"];
var heartDiseaseColorShade = ["#ce1256","#df65b0","#d7b5d8","#f1eef6"];
var cancerColorShade = ["#cb181d","#fb6a4a","#fcae91","#fee5d9"];

var tableheaders = ["text","hypertensionCount","highCholestorolCount","diabetesCount","heartDiseaseCount","cancerCount"];


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
		right: 0,
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
				  
	var race_D = [ {data:"White",code:"1"},
		         {data:"Black/African American", code:"2"},
			     {data:"Indian (American)", code:"3"},
				 {data:"Chinese", code:"6"},
			     {data:"Filipino", code:"7"},
			     {data:"Asian Indian", code:"12"},
			     {data:"Multiple race_D", code:"17"}];
				 
	var finalSection_D;
	var finalSub_D;



var filteredData = new Array();

var searchBy;
var isRegion = false;


function detailLoad(){
	var filterCrieria = $("#filterCategory").val();
	if(filterCrieria == "Select"){
		alert("Please select an option from the dropdown");
		return false;
	}
	$("#overlay").show();
	
	
	console.log("filterCrieria: "+filterCrieria);
	// filterCrieria = "Sex";
	searchBy = filterCrieria;
	//parsing csv file
	d3.csv("dataset/OriginalDataset.csv", function(data) {
		
		//filter data
		if(filterCrieria == "Gender"){
			filteredData = filterData(data,genderObj,"Gender");
		}else if(filterCrieria == "Region"){
			filteredData = filterData(data,regionObj,"Region");
			isRegion = true;
		}else if(filterCrieria == "Race"){
			filteredData = filterData(data,raceObj,"Race");
		}else if(filterCrieria == "Age"){
			filteredData = filterData(data,ageObj,"Age");
		}
		
		$("#frame").show();
		$("#detailedtitle").html("Medical Condition By "+filterCrieria);
		
		createTable(filteredData);
		console.log(isRegion);
		
	});
	
	
}


//function for filtering data 
function filterData(data,criteria,filter){
	for(var i=0;i<criteria.length;i++){
		
		var temp = data.filter(function(d){
			
			if(filter == "Gender"){
				return d.Sex == criteria[i].code ;
			}else if(filter == "Region"){
				return d.Region == criteria[i].code;
			}else if(filter == "Race"){
				return d.Mracbpi2 == criteria[i].code;
			}else if(filter == "Age"){
				if(criteria[i].code == "1")
					return (d.Age_P >= 18 && d.Age_P < 30);
				else if(criteria[i].code == "2")
					return (d.Age_P >= 30 && d.Age_P < 40);
				else if(criteria[i].code == "3")
					return (d.Age_P >= 40 && d.Age_P < 50);
				else if(criteria[i].code == "4")
					return (d.Age_P >= 50 && d.Age_P < 60);
				else if(criteria[i].code == "5")
					return (d.Age_P >= 60 && d.Age_P < 70);
				else if(criteria[i].code == "6")
					return (d.Age_P >= 80 && d.Age_P <= 85);
			}
			
		});
	
		criteria[i].hypertensionCount = temp.filter(function(d){
			return d.Hypev == "1";
		}).length;
		
		criteria[i].highCholestorolCount = temp.filter(function(d){
			return d.Chlev == "1";
		}).length
		
		criteria[i].diabetesCount = temp.filter(function(d){
			return d.Dibev == "1";
		}).length
		
		criteria[i].heartDiseaseCount = temp.filter(function(d){
			return d.Chdev == "1";
		}).length
		
		criteria[i].cancerCount = temp.filter(function(d){
			return d.Canev == "1";
		}).length
		
		var total = criteria[i].hypertensionCount + criteria[i].highCholestorolCount + criteria[i].diabetesCount + criteria[i].heartDiseaseCount + criteria[i].cancerCount; 
		
		criteria[i].hypertensionCount = ((criteria[i].hypertensionCount/total)*100).toFixed(2) + "%";
		
		criteria[i].highCholestorolCount = ((criteria[i].highCholestorolCount/total)*100).toFixed(2) + "%";
		
		criteria[i].diabetesCount = ((criteria[i].diabetesCount/total)*100).toFixed(2) + "%";
		
		criteria[i].heartDiseaseCount = ((criteria[i].heartDiseaseCount/total)*100).toFixed(2) + "%";
		
		criteria[i].cancerCount = ((criteria[i].cancerCount/total)*100).toFixed(2) + "%";
		
	}
	return criteria;
}


//function for creating table
function createTable(filteredData){
	//setting up table headers
	/*document.getElementById('detailContainer').innerHTML ='<div class="row">'+
																	'<div class="col-md-10"></div>'+
																	'<div class="col-md-2" style="margin: 0px -20px 10px 0px">'+
																		'<span id="TableDetailed" style="border-bottom: 2px solid #1FB5AD"><a href="#" '+ 'onclick="switchDetailedView("Table");"><img src="images/table.png" height="20px" '+ 'width="20px"></img></a></span>'+ 
																		'<img src="images/separator.png" height="20px" width="20px">'+
																		'<span id="GraphDetailed"><a href="#" onclick="switchDetailedView("Graph");"><img '+ 'src="images/graph.png" height="20px" width="20px"></img></a></span>'+
																	'</div>'+
																	'</div>';*/
	
	var container = d3.select("#detailContainer").style("display","block").style("margin-top","5px");
	var table = container.append("table").attr("id","detailedTable").attr("class","table table-hover").style("margin-top","10px");
					
	var thead = table.append("thead");
      var  tbody = table.append("tbody");
	  
	  thead.append("tr")
		.attr("class","info")
        .selectAll("th")
        .data(tableheaders)
        .enter()
        .append("th")
            .text(function(column) { 
				if(column == "hypertensionCount")
					return "Hypertension"; 
				else if(column == "highCholestorolCount")
					return "High Cholestorol";
				else if(column == "diabetesCount")
					return "Diabetes";
				else if(column == "diabetesCount")
					return "Diabetes";
				else if(column == "heartDiseaseCount")
					return "Heart Disease";
				else if(column == "cancerCount")
					return "Cancer";
				else 
					return column;
			});
	var rows = tbody.selectAll("tr")
					.data(filteredData)
					.enter()
					.append("tr");

	
	var cells = rows.selectAll("td")
				.data(function(row){
					
					return tableheaders.map(function(column) {
						return {column: column, value: row[column]};
					})
				})
			.enter()
				.append("td")
				.attr("style", "border: 2px solid #F0FCFC")
				.html(function(d) { 
				return d.value; });
	
	
	

	
}

function buildStackedBarData(filteredData){
	var barData = [];
	console.log(filteredData.length);
	for(var i=0;i<filteredData.length;i++){
		filteredData[i].hypertensionCount =  filteredData[i].hypertensionCount.replace("%","");
		filteredData[i].highCholestorolCount =  filteredData[i].highCholestorolCount.replace("%","");
		filteredData[i].diabetesCount =  filteredData[i].diabetesCount.replace("%","");
		filteredData[i].heartDiseaseCount =  filteredData[i].heartDiseaseCount.replace("%","");
		filteredData[i].cancerCount =  filteredData[i].cancerCount.replace("%","");
	}
	
	
	for(var i=0;i<filteredData.length;i++){
		for(var j=0;j<tableheaders.length;j++){
			
			if(tableheaders[j] == "hypertensionCount"){
				var count = +filteredData[i].hypertensionCount;
				var header = "Hypertension";
				barData.push({
					code: filteredData[i].code, 
					text: filteredData[i].text,
					condition: header,
					count: count,
					color: colorData[0].color
				});
			}else if(tableheaders[j] == "highCholestorolCount"){
				var count = +filteredData[i].highCholestorolCount;
				var header = "High Cholesterol";
				barData.push({
					code: filteredData[i].code, 
					text: filteredData[i].text,
					condition: header,
					count: count,
					color: colorData[1].color
				});
			}else if(tableheaders[j] == "diabetesCount"){
				var count = +filteredData[i].diabetesCount;
				var header = "Diabetes";
				barData.push({
					code: filteredData[i].code, 
					text: filteredData[i].text,
					condition: header,
					count: count,
					color: colorData[2].color
				});
			}else if(tableheaders[j] == "heartDiseaseCount"){
				var count = +filteredData[i].heartDiseaseCount;
				var header = "Heart Disease";
				barData.push({
					code: filteredData[i].code, 
					text: filteredData[i].text,
					condition: header,
					count: count,
					color: colorData[3].color
				});
			}else if(tableheaders[j] == "cancerCount"){
				var count = +filteredData[i].cancerCount;
				var header = "Cancer";
				barData.push({
					code: filteredData[i].code, 
					text: filteredData[i].text,
					condition: header,
					count: count,
					color: colorData[4].color
				});
			}
			
			
			
		}
	}

	buildStackBarChart(barData);

	
	buildLegendDetailed(colorData);
}






function buildStackBarChart(barData){

	var tip =  d3.select("#graphContainerDetailed")
				.append("div")
				.attr("id","tooltipDetail")	
				.attr("class", "tooltip")
				.style("opacity", 0);
	var outerWidth = 500;
    var outerHeight = 350;
    var margin = { left: 90, top: 30, right: 30, bottom: 130 };
	
	if(searchBy!="Race"){
		margin.bottom = 100;
	}
	
    var barPadding = 0.2;
    var xColumn = "text";
    var yColumn = "count";
    var colorColumn = "condition";
    var layerColumn = colorColumn;
    var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;
    var svg = d3.select("#graphContainerDetailed").append("div").attr("class","col-md-6").attr("id","detailedGraph").append("svg")
      .attr("width",  outerWidth)
      .attr("height", outerHeight)
	  .style("margin-left","-5%");
    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var xAxisG = g.append("g")
      .attr("class", "x axis")
	  .attr("class", "line")
      .attr("transform", "translate(0," + innerHeight + ")");
    var yAxisG = g.append("g")
      .attr("class", "y axis");
    var xScale = d3.scale.ordinal().rangeBands([0, innerWidth], barPadding);
    var yScale = d3.scale.linear().range([innerHeight, 0]);
    var colorScale = d3.scale.ordinal()
  .domain(["hypertensionCount", "highCholestorolCount", "diabetesCount","heartDiseaseCount","cancerCount"])
  .range([colorData[0].color, colorData[1].color , colorData[2].color,colorData[3].color,colorData[4].color]);
    // Use a modified SI formatter that uses "B" for Billion.
    var siFormat = d3.format("s");
    var customTickFormat = function (d){
      return siFormat(d).replace("G", "B");
    };
    var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
      .outerTickSize(0);
    var yAxis = d3.svg.axis().scale(yScale).orient("left")
      .ticks(5)
      .tickFormat(customTickFormat)
      .outerTickSize(0);
	
	var nested = d3.nest()
        .key(function (d){ return d[layerColumn]; })
        .entries(barData)
    var stack = d3.layout.stack()
        .y(function (d){ return d[yColumn]; })
        .values(function (d){ return d.values; });
    var layers = stack(nested);
      xScale.domain(layers[0].values.map(function (d){
      return d[xColumn];
    }));
	yScale.domain([
	  0,
	  d3.max(layers, function (layer){
		return d3.max(layer.values, function (d){
		  return d.y0 + d.y;
		});
	  })
	]);
	colorScale.domain(layers.map(function (layer){
	  return layer.key;
	}));
	xAxisG.call(xAxis).selectAll("text") 
		.style("text-anchor", "end")
		.attr("dx", "-.8em")
		.attr("dy", ".30em")
		.style("stroke-width","1px")
		.attr("transform", "rotate(-45)" );
	yAxisG.call(yAxis).attr("class", "line");
	
	var layerGroups = g.selectAll(".layer").data(layers);
	layerGroups.enter().append("g").attr("class", "layer");
	layerGroups.exit().remove();
	layerGroups.style("fill", function (d){
	  return colorScale(d.key);
	});
	//layerGroups.style("stroke","black");
	var bars = layerGroups.selectAll("rect").data(function (d){
	  return d.values;
	});
	bars.enter().append("rect")
	bars.exit().remove();
	bars
	  .attr("x", function (d){ return xScale(d[xColumn]); })
	  .attr("y", function (d){ return yScale(d.y0 + d.y); })
	  .attr("width", xScale.rangeBand())
	  .attr("height", function (d){ return innerHeight - yScale(d.y); })
	  .on('mouseover',function(d,i){	
		d3.select(".tooltip").style("display","block");
		var currentState = this;	
		tip.transition()
		   .style("opacity","0.7")
		   .style("background",d.color)
		   .style("fill","white");
		tip.html("<strong>"+d.condition+"</strong>: "+"<br>"+ d.count + "%") 
			.style("left", xScale(d[xColumn]) + 60 +"px")
			.style("color","black")			
			.style("top", innerHeight - 148 + "px");	
		})
	   .on("mouseout",function(d,i){
			d3.select(".tooltip").style("display","none");
		});  
};


function buildLegendDetailed(colorData){

	
	
	var legend = d3.select("#graphContainerDetailed").append("div").attr("class","col-md-5").attr("id","legendDetailed").style("margin-top","30px").append("svg").style("margin-left","-5%");
	
	var legendRect = legend.selectAll('rect').data(colorData)
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
			
	var label = legend.selectAll("text").data(colorData)
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
	$("#overlay").show();
	d3.csv("dataset/OriginalDataset.csv", function(data) {	
		section = "race_D";
		var subC = "Asian Indian";
		dataEncoding_D(section, subC);

		
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
					  heart2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Sex == finalSub_D){
					  heart2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Sex == finalSub_D){
					  heart2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Sex == finalSub_D){
					  heart2D_D[3].count ++;
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
					  heart2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Mracbpi2 == finalSub_D){
					  heart2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Mracbpi2 == finalSub_D){
					  heart2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Mracbpi2 == finalSub_D){
					  heart2D_D[3].count ++;
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
					  heart2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Age_P == finalSub_D){
					  heart2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Age_P == finalSub_D){
					  heart2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Age_P == finalSub_D){
					  heart2D_D[3].count ++;
				  }
			}	 
		
		}
		
		
		if (section == "region_D"){
			for(var i = 0;i<data.length;i++){
				  
				  // Hypertension each category_D data
				  if(data[i].Aldurb9 == "1" && data[i].Region == finalSub_D){
					  hypertension2D_D[0].count ++;
				  }
				  if(data[i].Aldurb9 == "2" && data[i].Region == finalSub_D){
					  hypertension2D_D[1].count ++;
				  }
				  if(data[i].Aldurb9 == "3" && data[i].Region == finalSub_D){
					  hypertension2D_D[2].count ++;
				  }
				  if(data[i].Aldurb9 == "4" && data[i].Region == finalSub_D){
	
					  hypertension2D_D[3].count ++;
				  }
				  
				  //  Diabetes each category_D data
				  if(data[i].Aldurb10 == "1" && data[i].Region == finalSub_D){
					  diabetes2D_D[0].count ++;
				  }
				  if(data[i].Aldurb10 == "2" && data[i].Region == finalSub_D){
					  diabetes2D_D[1].count ++;
				  }
				  if(data[i].Aldurb10 == "3" && data[i].Region == finalSub_D){
					  diabetes2D_D[2].count ++;
				  }
				  if(data[i].Aldurb10 == "4" && data[i].Region == finalSub_D){
					  diabetes2D_D[3].count ++;
				  }
				  
				  // Cancer each category_D data
				  if(data[i].Aldurb12 == "1" && data[i].Region == finalSub_D){
					  cancer2D_D[0].count ++;
				  }
				  if(data[i].Aldurb12 == "2" && data[i].Region == finalSub_D){
					  cancer2D_D[1].count ++;
				  }
				  if(data[i].Aldurb12 == "3" && data[i].Region == finalSub_D){
					  cancer2D_D[2].count ++;
				  }
				  if(data[i].Aldurb12 == "4" && data[i].Region == finalSub_D){
					  cancer2D_D[3].count ++;
				  }
				  
				  // Heart disease each category_D data
				  if(data[i].Aldurb7 == "1" && data[i].Region == finalSub_D){
					  heart2D_D[0].count ++;
				  }
				  if(data[i].Aldurb7 == "2" && data[i].Region == finalSub_D){
					  heart2D_D[1].count ++;
				  }
				  if(data[i].Aldurb7 == "3" && data[i].Region == finalSub_D){
					  heart2D_D[2].count ++;
				  }
				  if(data[i].Aldurb7 == "4" && data[i].Region == finalSub_D){
					  
					  heart2D_D[3].count ++;
				  }
			}	 
		
		}
		
		$("#frame").show();
		var title = "Time Duration for ";
		if(section == "sex_D"){
			title = title + "Gender: " + subC;
		}else if(section == "region_D"){
			title = title + "Region: " + subC;
		}else if(section == "race_D"){
			title = title + "Race: " + subC;
		}
		$("#detailedtitle").html(title);
		buildMultiLineGraph_D(hypertension2D_D, cancer2D_D, heart2D_D, diabetes2D_D);
		buildLegend_D(legendData_D)
	 
		
	
	});
		

}

function buildMultiLineGraph_D(hypertension2D_D, cancer2D_D, heart2D_D, diabetes2D_D){
	
	$("#graphContainerDetailed").show();
	$("#detailContainer").hide();
	
	var vis = d3.select("#graphContainerDetailed").append("div").attr("class","col-md-5").attr("id","detailedGraph").append("svg").attr("id","#visualisationDetail").attr("height","350").attr("width","500").style("margin-left","10%").style("margin-bottom","-20%");
	
				
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
		.attr("class","line")
		.call(yAxis);
							
	vis.append('svg')
		.append('g')	
		.attr("transform", "translate(0," + (HEIGHT_D - MARGINS_D.bottom) + ")")
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

		var legend = d3.select("#graphContainerDetailed").append("div").attr("class","col-md-3").attr("id","legend").style("margin-top","30px").append("svg").style("margin-left","-30%");	


		//var legend = d3.select("#legend");
		 
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
	$("#unique1").hide();
}

function dropdown(optionData){
	var select  = d3.selectAll("#unique").append("select").attr("id","dropdown"),
		options = select.selectAll('option').data(optionData);
		options.enter().append("option").text(function(d) { return d;});
		
	$("#unique1").show();
		
	/*var button = d3.selectAll("#unique1").append("button")
					.on("click", parseData_D)
					.attr("id","btn-group")
					.attr("value","Search")
					.attr("height","10px")
					//.style({stroke: "black", "stroke-width": "2px"});*/
}

function buildMapData(filteredData,criteria){
	var mapData = [];
	var colorShades;
	if(criteria == "Hypertension"){
		colorShades = hypertensionColorShade;
	}else if(criteria == "High Cholesterol"){
		colorShades = highCholestorolColorShade;
	}
	else if(criteria == "Diabetes"){
		colorShades = diabetesColorShade;
	}else if(criteria == "Heart Disease"){
		colorShades = heartDiseaseColorShade;
	}else if(criteria == "Cancer"){
		colorShades = cancerColorShade;
	}
	for(var i=0;i<filteredData.length;i++){
		if(criteria == "Hypertension"){
			$("#detailedtitle").html("Hypertension By Region");
			var count =parseFloat(filteredData[i].hypertensionCount);
			mapData.push({
				region: filteredData[i].text,
				count: count
			});
		}else if(criteria == "High Cholesterol"){
			$("#detailedtitle").html("High Cholesterol By Region");
			var count = parseFloat(filteredData[i].highCholestorolCount);
			mapData.push({
				region: filteredData[i].text,
				count: count
			});
		}else if(criteria == "Diabetes"){
			$("#detailedtitle").html("Diabetes By Region");
			var count = parseFloat(filteredData[i].diabetesCount);
			mapData.push({
				region: filteredData[i].text,
				count: count
			});
		}else if(criteria == "Heart Disease"){
			$("#detailedtitle").html("Heart Disease By Region");
			var count = parseFloat(filteredData[i].heartDiseaseCount);
			mapData.push({
				region: filteredData[i].text,
				count: count
			});
		}else if(criteria == "Cancer"){
			$("#detailedtitle").html("Cancer By Region");
			var count = parseFloat(filteredData[i].cancerCount);
			mapData.push({
				region: filteredData[i].text,
				count: count
			});
		}
	}
	mapData.sort(function(a,b){
		return b.count - a.count;
	});
	buildMap(mapData,colorShades);
}

function buildMap(mapData,colorShades){
	
	console.log(mapData);
								
	//setting width and height of the map
	var width = 550;
	var height = 500;
	var svg = d3.select("#graphContainerDetailed")
								.append("div").attr("class","col-md-6").attr("id","detailedGraph")
								.append("svg")
								.attr("id","mapHolder")
								.attr("width", width)
								.attr("height", height)
								.style("margin-top","-25%")
								.style("margin-bottom","-25%")
								.style("margin-left","5%");

	//projecting 3D to 2D
	var projection = d3.geo.albersUsa()
                       .translate([width/2, height/2])
					   .scale([650]);
					   
	//defining the path
	var path = d3.geo.path()
                 .projection(projection);
	//loading the json file
	d3.json("dataset/us-states.json", function(json) {
	//binding GeoJson to path element
		svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("fill",function(d){	
			if(d.properties.region == mapData[0].region){
				return colorShades[0];
			}else if(d.properties.region == mapData[1].region){
				return colorShades[1];
			}else if(d.properties.region == mapData[2].region){
				return colorShades[2];
			}else if(d.properties.region == mapData[3].region){
				return colorShades[3];
			}else{
				return "orange";
			}
		})
		.attr("stroke",function(d){
			/*if(d.properties.region == "Midwest"){
				return "red";
			}else if(d.properties.region == "Northeast"){
				return "green";
			}else if(d.properties.region == "West"){
				return "yellow";
			}else if(d.properties.region == "South"){
				return "blue";
			}else{
				return "orange";
			}*/
			return "black";
		})
		.attr("d", path)

		
	//building the map	
		svg.selectAll("text")
		.data(json.features)
		.enter()
		.append("svg:text")
		/*.text(function(d){
			//return d.properties.abbr;
		})
		.attr("x", function(d){
			return path.centroid(d)[0];
		})
		.attr("y", function(d){
			return  path.centroid(d)[1];
		})*/
		.attr("fill","orange")
		.attr("text-anchor","middle")
		.attr('font-size','8pt')
		.attr("font-family","Arial")
		.attr("font-weight","bold");
	});
	d3.select("#graphContainerDetailed").append("div").attr("class","col-md-5").attr("id","legendDetailed").style("margin-top","30px").append("svg").style("margin-left","-5%");
	//buildLegendDetailed(colorData);
}

function detailedRegionWise(filter){
	$("#detailedGraph").remove();
	$("#legendDetailed").remove();
	buildMapData(filteredData,filter.value.trim());
	
}
function switchDetailedView(view){
	if(view == "Table"){
		$('#detailContainer').show();
		$('#graphContainerDetailed').hide();
		$("#TableDetailed").css("border-bottom","2px solid #1FB5AD");
		$("#GraphDetailed").css("border-bottom","");
		$("#dropDownContainer").hide();
	}
	if(view == "Graph"){
		document.getElementById("graphContainerDetailed").innerHTML = "";
		$('#detailContainer').hide();
		$('#graphContainerDetailed').show();
		if(isRegion){
			buildMapData(filteredData,"Hypertension");
			$("#dropDownContainer").show();
		}else{
			buildStackedBarData(filteredData);
		}	
		$("#GraphDetailed").css("border-bottom","2px solid #1FB5AD");
		$("#TableDetailed").css("border-bottom","");
	}
}	




