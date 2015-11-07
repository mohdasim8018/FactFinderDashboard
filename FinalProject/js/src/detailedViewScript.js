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



			
var colorData = [
					{condition: "Hypertension",color: "#A48AD4"},
					{condition: "High Cholestorol",color: "#FDD752"},
					{condition: "Diabetes",color: "#AEC785"},
					{condition: "Heart Disease",color: "#EFB3E6"},
					{condition: "Cancer",color: "#FA8564"}
				]

var tableheaders = ["text","hypertensionCount","highCholestorolCount","diabetesCount","heartDiseaseCount","cancerCount"];


var filteredData = new Array();

var searchBy;

function detailLoad(filterCrieria){
	$("#overlay").show();
	// filterCrieria = "Sex";
	searchBy = filterCrieria;
	//parsing csv file
	d3.csv("dataset/OriginalDataset.csv", function(data) {
		
		//filter data
		if(filterCrieria == "Gender"){
			filteredData = filterData(data,genderObj,"Gender");
		}else if(filterCrieria == "Region"){
			filteredData = filterData(data,regionObj,"Region");
		}else if(filterCrieria == "Race"){
			filteredData = filterData(data,raceObj,"Race");
		}else if(filterCrieria == "Age"){
			filteredData = filterData(data,ageObj,"Age");
		}
		
		$("#frame").show();
		$("#detailedtitle").html("Medical Condition By "+filterCrieria);
		createTable(filteredData);
		//buildStackBarChart(filteredData);

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
	var table = container.append("table").attr("id","detailedTable").attr("class","table table-striped").style("margin-top","10px");
					
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
	
	//buildStackedBarData(filteredData);
	
}

function buildStackedBarData(filteredData){
	var barData = [];
	
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
	for (var i=0;i<barData.length;i++){
		console.log(barData[i].text + "," + barData[i].condition + "," + barData[i].count)
	}
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
      .attr("height", outerHeight);
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
		   console.log(d.condition);
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

	
	
	var legend = d3.select("#graphContainerDetailed").append("div").attr("class","col-md-5").attr("id","legendDetailed").style("margin-top","30px").append("svg");
	
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

function switchDetailedView(view){
	if(view == "Table"){
		$('#detailContainer').show();
		$('#graphContainerDetailed').hide();
		$("#TableDetailed").css("border-bottom","2px solid #1FB5AD");
		$("#GraphDetailed").css("border-bottom","");
	}
	if(view == "Graph"){
		document.getElementById("graphContainerDetailed").innerHTML = "";
		$('#detailContainer').hide();
		$('#graphContainerDetailed').show();
		buildStackedBarData(filteredData);
		$("#GraphDetailed").css("border-bottom","2px solid #1FB5AD");
		$("#TableDetailed").css("border-bottom","");
	}
}


	




