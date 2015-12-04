// Global disease selection
var globDisease;

$( document ).ready(function() {
//maps
var diseaseObj = {};
var regionMap = {};
var raceMap = {};
var genderMap = {};
var ageMap = {};

//showGauge();

var csvObj = [];

//Medical condition by age data (Detailed view)


var filteredTree;


//filter criterias
var gender="";
var isGender = false;
var region="";
var isRegion = false;
var age="";
var isAge = false;
var race="";
var isRace = false;
var filteredData = [];

//max and min
var max;
var min;

var minRange = '#c7e9c0';
var maxRange = '#00441b';

var allMale = 0;
var allFemale = 0;
var allNorthEast = 0;
var allMidWest = 0;
var allSouth = 0;
var allWest = 0;

var allMaleProportion = 0;
var allFemaleProportion = 0;

var allData = 0;
var mapShade = ["#238b45","#66c2a4","#b2e2e2","#edf8fb"];
var prev;
var prevBgColor;
var prevColor;

function parseCSV(){
	var cv = 0;
	buildHashMaps();
	buildFilterMaps();
	d3.csv("dataset/MedicalConditions.csv", function(data) {
		for(var i=0;i<data.length;i++){
			cv = cv + data[i].Chdev + data[i].Angev + data[i].Miev + data[i].Hrtev + data[i].Strev
			//populate csv to js object
			csvObj.push({
				Sex: data[i].Sex,
				Region: data[i].Region,
				Age_P: data[i].Age_P,
				Mracbpi2: data[i].Mracbpi2,
				Hypev: data[i].Hypev,
				Chlev: data[i].Chlev,
				Chdev: data[i].Chdev,
				Angev: data[i].Angev,
				Miev: data[i].Miev,
				Hrtev: data[i].Hrtev,
				Strev: data[i].Strev,
				Ephev: data[i].Ephev,
				Copdev: data[i].Copdev,
				Aasmev: data[i].Aasmev,
				Ulcev: data[i].Ulcev,
				Canev: data[i].Canev,
				Dibev: data[i].Dibev,
				Arth1: data[i].Arth1,
				Aflhca3 : data[i].Aflhca3, 
				Aflhca7 : data[i].Aflhca7,
				Aflhca8 : data[i].Aflhca8,
				Aflhca9 : data[i].Aflhca9,
				Aflhca10 : data[i].Aflhca10,
				Aflhca11 : data[i].Aflhca11,
				Aflhca12 : data[i].Aflhca12,
				Aflhca35 : data[i].Aflhca35,
				Aflhca36 : data[i].Aflhca36,
				Aflhca37 : data[i].Aflhca37,
				Aflhca38 : data[i].Aflhca38,
				Aflhca39 : data[i].Aflhca39,
				Anouspl1 : data[i].Anouspl1,
				Anouspl2 : data[i].Anouspl2,
				Anouspl3 : data[i].Anouspl3,
				Anouspl4 : data[i].Anouspl4,
				Anouspl5 : data[i].Anouspl5,
				Anouspl6 : data[i].Anouspl6,
				Anouspl7 : data[i].Anouspl7,
				Anouspl8 : data[i].Anouspl8,
				Anouspl9 : data[i].Anouspl9
			})
			buildDiseaseObj(data[i]);
			
			
		}
		calculateGenderProportion();
		//allGenderProportion();
		//scaleGenderSize(maleProportion,femaleProportion);
		//allMap();
		assignColorValues();
		
	});
}

function calculateGenderProportion(){
	
	for(var disease in diseaseObj){
		
		diseaseObj[disease].maleCount = Math.round(((diseaseObj[disease].maleCount/diseaseObj[disease].value)*100).toFixed(2));
		diseaseObj[disease].femaleCount = Math.round(((diseaseObj[disease].femaleCount/diseaseObj[disease].value)*100).toFixed(2));
		diseaseObj[disease].northEast = ((diseaseObj[disease].northEast/allNorthEast)*100).toFixed(2);
		diseaseObj[disease].midWest = ((diseaseObj[disease].midWest/allMidWest)*100).toFixed(2);
		diseaseObj[disease].south = ((diseaseObj[disease].south/allSouth)*100).toFixed(2);
		diseaseObj[disease].west = ((diseaseObj[disease].west/allWest)*100).toFixed(2);
	}
}

function allGenderProportion(){
	maleProportion = ((allMale/allData)*100).toFixed(2);
	femaleProportion = ((allFemale/allData)*100).toFixed(2);
	document.getElementById("maleCount").innerHTML = maleProportion + "%";
	document.getElementById("femaleCount").innerHTML = femaleProportion + "%";
}

function scaleGenderSize(male,female){
	
	document.getElementById("maleImage").style.height = male + "px";
	document.getElementById("maleDiv").style.height = male + "px";
	//document.getElementById("maleImage").style.width = male + "px";
	document.getElementById("femaleImage").style.height = female + "px";
	document.getElementById("femaleDiv").style.height = female + "px";
	//document.getElementById("femaleImage").style.width = female + "px";
}

// function allMap(){
	// var mapData=[];
	// var northEast = ((allNorthEast/allData)*100).toFixed(2);
	// var midWest = ((allMidWest/allData)*100).toFixed(2);
	// var south = ((allSouth/allData)*100).toFixed(2);
	// var west = ((allWest/allData)*100).toFixed(2);
	// mapData = [{count: northEast,region: "Northeast"},{count: midWest,region: "Midwest"},{count: south,region: "South"},{count: west,region: "West"}];
	// mapData.sort(function(a,b){
		// return b.count - a.count;
	// });
	// console.log(mapData);
	// buildMap(mapData,mapShade)
// }


function showSpecificMap(conditionData){
	var mapData=[];
	// var northEast = ((conditionData.northEast/allNorthEast)*100).toFixed(2)
	// var midWest = ((conditionData.midWest/allMidWest)*100).toFixed(2)
	// var south = ((conditionData.south/allSouth)*100).toFixed(2)
	// var west = ((conditionData.west/allWest)*100).toFixed(2)
	mapData = [{count: conditionData.northEast,region: "Northeast"},{count: conditionData.midWest,region: "Midwest"},{count: conditionData.south,region: "South"},{count: conditionData.west,region: "West"}];
	mapData.sort(function(a,b){
		return b.count - a.count;
	});
	
	buildMap(mapData,mapShade)
}



function buildMap(mapData,colorShades){
	$("#mapTip").remove();
	var width = 400;
	var height = 320;
	$("#detailedGraph").remove();
	
	var svg = d3.select("#graphContainerDetailed")
								.append("div").attr("id","detailedGraph")
								.append("svg")
								.attr("id","mapHolder")
								.attr("width", width)
								.attr("height", height)
								.style("margin-top","-15%")
								.style("margin-bottom","-35%")
								.style("margin-left","5%")


	//projecting 3D to 2D
	var projection = d3.geo.albersUsa()
                       .translate([width/2.4, height/2.4])
					   .scale([400]);
					   
	//defining the path
	var path = d3.geo.path()
                 .projection(projection);
				 
	
	var mapTip =  d3.select("#graphContainerDetailed").append("div")
				.attr("id","mapTip")
				.attr("class","mapTip")		
				.style("opacity", 0)
				.style("display","none")

				 
				 
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
		.on('mouseover',function(d,i){
		d3.select("#mapTip").style("display","block");
		var currentState = this;
		var region;
		var count = 0;
       for(var i=0;i<mapData.length;i++){
		   if(d.properties.region == mapData[i].region){
			   region = mapData[i].region;
			   count = mapData[i].count;
			   break;
		   }
	   }
	
		mapTip.transition()
		   .style("opacity","0.9")
		mapTip
		   .style("width","120px")
		   .style("border-radius","0.3px")
		   .style("height","20px")
		   .style("background","black");
		mapTip.html("<strong><span style='color: red'>"+region+"</span></strong>"+"<span style='color: white'> :"+ count+"%</span>") 
			.style("left", (d3.event.pageX) -820 + "px")
			.style("color","white")			
			.style("top", (d3.event.pageY - 400) + "px");
				
		})
		.on("mouseout",function(d,i){
			d3.select("#mapTip").style("display","none");
		});

		
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
}


function calculateImpact(conditionData){
	console.log(conditionData)
	var impact = csvObj.filter(function(d){
			return d[conditionData.impact] == "1";
		});
	
	console.log(conditionData.name)
	/*if(conditionData.name == "Hypertension"){
		impact = csvObj.filter(function(d){
			return d.Aflhca9 == "1";
		})
	}*/
	var percent = ((impact.length/conditionData.value)*100).toFixed(0);
	//console.log(impact.length);
	drawDonutChart(parseInt(percent));
	
	
}

function drawDonutChart(percent) {
  var element = "#impact";
  var width = 130;
  var height = 130;
  var text_y = "0.35em"
  var duration   = 1000,
    transition = 200;

  $(element).remove();
  d3.select("#impactContainer").append("div").attr("id","impact");		
  var dataset = {
        lower: calcPercent(0),
        upper: calcPercent(percent)
      },
      radius = Math.min(width, height) / 2,
      pie = d3.layout.pie().sort(null),
      format = d3.format(".0%");
  var arc = d3.svg.arc()
        .innerRadius(radius - 20)
        .outerRadius(radius);

  var svg = d3.select(element).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var path = svg.selectAll("path")
        .data(pie(dataset.lower))
        .enter().append("path")
        .attr("class", function(d, i) { console.log(d);return "color" + i })
        .attr("d", arc)
        .each(function(d) { this._current = d; }); // store the initial values

  var text = svg.append("text")
        .attr("text-anchor", "middle")
		.attr("class","impactCount")
        .attr("dy", text_y);

  if (typeof(percent) === "string") {
    text.text(percent);
  }
  else {
    var progress = 0;
    var timeout = setTimeout(function () {
      clearTimeout(timeout);
      path = path.data(pie(dataset.upper)); // update the data
      path.transition().duration(500).attrTween("d", function (a) {
        // Store the displayed angles in _current.
        // Then, interpolate from _current to the new angles.
        // During the transition, _current is updated in-place by d3.interpolate.
        var i  = d3.interpolate(this._current, a);
        var i2 = d3.interpolate(progress, percent)
        this._current = i(0);
        return function(t) {
          text.text( format(i2(t) / 100) );
          return arc(i(t));
        };
      }); // redraw the arcs
    }, 200);
  }
};
function calcPercent(percent) {
  return [percent, 100-percent];
};

function calculateReasons(){
	var reasonsArray = [
							{code: "Anouspl1",text:"Doesn't need doctor/haven't had problems",count: 0},
							{code: "Anouspl2",text:"Doesn't like/trust/believe in doctors",count: 0},
							{code: "Anouspl3",text: "Doesn't know where to go",count: 0},
							{code: "Anouspl4",text:"Previous doctor is not available/moved",count: 0},
							{code: "Anouspl5",text:"Too expensive/no insurance/cost",count: 0},
							{code: "Anouspl6",text:"Speak a different language",count: 0},
							{code: "Anouspl7",text:"No care available/too far away/not convenient",count: 0},
							{code: "Anouspl8",text:"Put if off/didn't get around to it",count: 0},
							{code: "Anouspl9",text:"Other reason no usual place of care",count: 0},
						   ]
}



function buildDiseaseObj(data){
	if(data.Hypev == "1"){
		diseaseObj['Hypev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Hypev'].maleCount++;
			allMale++;
		}
		if(data.Sex == "2"){
			diseaseObj['Hypev'].femaleCount++;
			allFemale++;
		}
		if(data.Region == "1"){
			diseaseObj['Hypev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Hypev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Hypev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Hypev'].west++;
			allWest++;
		}
		allData++;
	}
		
	if(data.Chlev == "1"){
		diseaseObj['Chlev'].value++;
		if(data.Sex == "1"){
			allMale++;
			diseaseObj['Chlev'].maleCount++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Chlev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Chlev'].northEast++;
			allNorthEast++
		}
		if(data.Region == "2"){
			diseaseObj['Chlev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Chlev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Chlev'].west++;
			allWest++;
		}
		allData++;	
	}
	if(data.Chdev == "1"){
		diseaseObj['Chdev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Chdev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Chdev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Chdev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Chdev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Chdev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Chdev'].west++;
			allWest++;
		}
		allData++;		
	}
	if(data.Angev == "1"){
		diseaseObj['Angev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Angev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Angev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Angev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Angev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Angev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Angev'].west++;
			allWest++;
		}
		allData++;	
	}
		
	if(data.Miev == "1"){
		diseaseObj['Miev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Miev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Miev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Miev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Miev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Miev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Miev'].west++;
			allWest++;
		}
		allData++;		
	}
	if(data.Hrtev == "1"){
		diseaseObj['Hrtev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Hrtev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Hrtev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Hrtev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Hrtev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Hrtev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Hrtev'].west++;
			allWest++;
		}
		allData++;	
	}
	if(data.Strev == "1"){
		diseaseObj['Strev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Strev'].maleCount++;
			allMale++;
		}
		if(data.Sex == "2"){
			diseaseObj['Strev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Strev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Strev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Strev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Strev'].west++;
			allWest++;
		}
		allData++;	
	}
	if(data.Ephev == "1"){
		diseaseObj['Ephev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Ephev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Ephev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Ephev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Ephev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Ephev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Ephev'].west++;
			allWest++;
		}
		allData++;		
	}
	if(data.Aasmev == "1"){
		diseaseObj['Aasmev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Aasmev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Aasmev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Aasmev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Aasmev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Aasmev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Aasmev'].west++;
			allWest++;
		}
		allData++;		
	}
	if(data.Ulcev == "1"){
		diseaseObj['Ulcev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Ulcev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Ulcev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Ulcev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Ulcev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Ulcev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Ulcev'].west++;
			allWest++;
		}
		allData++;
	}
	if(data.Copdev == "1"){
		diseaseObj['Copdev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Copdev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Copdev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Copdev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Copdev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Copdev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Copdev'].west++;
			allWest++;
		}
		allData++;	
		
	}
	if(data.Canev == "1"){
		diseaseObj['Canev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Canev'].maleCount++;
			allMale++;
		}
			
		if(data.Sex == "2"){
			diseaseObj['Canev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Canev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Canev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Canev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Canev'].west++;
			allWest++;
		}
		allData++;	
	}
	if(data.Dibev == "1"){
		diseaseObj['Dibev'].value++;
		if(data.Sex == "1"){
			diseaseObj['Dibev'].maleCount++;
			allMale++;
		}
		if(data.Sex == "2"){
			diseaseObj['Dibev'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Dibev'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Dibev'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Dibev'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Dibev'].west++;
			allWest++;
		}
		allData++;
	}
	if(data.Arth1 == "1"){
		diseaseObj['Arth1'].value++;
		if(data.Sex == "1"){
			diseaseObj['Arth1'].maleCount++;
			allMale++;
		}
		if(data.Sex == "2"){
			diseaseObj['Arth1'].femaleCount++;
			allFemale++;
		}
		
		if(data.Region == "1"){
			diseaseObj['Arth1'].northEast++;
			allNorthEast++;
		}
		if(data.Region == "2"){
			diseaseObj['Arth1'].midWest++;
			allMidWest++;
		}
		if(data.Region == "3"){
			diseaseObj['Arth1'].south++;
			allSouth++;
		}if(data.Region == "4"){
			diseaseObj['Arth1'].west++;
			allWest++;
		}
		allData++;
	}
}

function buildHashMaps(){
	//disease map
	diseaseObj['Hypev'] = {name: "Hypertension",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca9"};
	diseaseObj['Chlev'] = {name: "High Cholesterol",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca35"};
	diseaseObj['Chdev'] = {name: "Coronary Heart Disease",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca7"};
	diseaseObj['Angev'] = {name: "Angina Pectoris",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca38"};
	diseaseObj['Miev'] = {name: "Heart Attack",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca7"};
	diseaseObj['Hrtev'] = {name: "Heart Condition/Disease",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca7"};
	diseaseObj['Strev'] = {name: "Stroke",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca8"};
	diseaseObj['Ephev'] = {name: "Emphysema",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca36"};
	diseaseObj['Aasmev'] = {name: "Asthma",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca11"};
	diseaseObj['Ulcev'] = {name: "Ulcer",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca39"};
	diseaseObj['Canev'] = {name: "Cancer",value: 0,isChild: false,parent: "",isParent: true,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca12"};
	diseaseObj['Dibev'] = {name: "Diabetes",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca10"};
	diseaseObj['Arth1'] = {name: "Arthritis",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca3"};
	diseaseObj['Copdev'] = {name: "COPD",value: 0,isChild: false,parent: "",isParent: false,maleCount: 0,femaleCount: 0,northEast: 0,midWest:0,south:0,west:0,impact: "Aflhca37"};
}


function buildFilterMaps(){
	//region map
	regionMap['Northeast'] = {value:"1"};
	regionMap['Midwest'] = {value:"2"};
	regionMap['South'] = {value:"3"};
	regionMap['West'] = {value:"4"};
	
	//race map
	raceMap['White'] = {value: "1"};
	raceMap['Black/African American'] = {value: "2"};
	raceMap['Indian (American), Alaska Native'] = {value: "3"};
	raceMap['Chinese'] = {value: "6"};
	raceMap['Filipino'] = {value: "7"};
	raceMap['Asian Indian'] = {value: "12"};
	raceMap['Multiple race'] = {value: "17"};	
	
	//gender map
	genderMap['Male'] = {value: "1"};
	genderMap['Female'] = {value: "2"};
	
	//age map
	ageMap['Group1'] = {value: "18-24"};
	ageMap['Group2'] = {value: "25-34"};
	ageMap['Group3'] = {value: "35-44"};
	ageMap['Group4'] = {value: "45-54"};
	ageMap['Group5'] = {value: "55-64"};
	ageMap['Group'] = {value: "65+"};
}
function assignColorValues(){
	var treeData=[];
	var child = [];
	var drillDown = []
	//get the data in the format needed
	for(var disease in diseaseObj){
			var parent = null;
			//name = diseaseObj[disease].name + "( " + diseaseObj[disease].value + " )";
			if(diseaseObj[disease].isChild)
				parent = diseaseObj[disease].parent	
			treeData.push({
			id: diseaseObj[disease].name,
			name: diseaseObj[disease].name,
			value: diseaseObj[disease].value,
			parent: parent,
			colorValue: 0,
			maleCount: diseaseObj[disease].maleCount,
			femaleCount: diseaseObj[disease].femaleCount,
			northEast: diseaseObj[disease].northEast,
			midWest: diseaseObj[disease].midWest,
			south: diseaseObj[disease].south,
			west: diseaseObj[disease].west,
			impact: diseaseObj[disease].impact
			});

			
		
	var tree = {
		name: "tree",
		children: treeData
	}
			
		
	}
	
	//sorting the data
	treeData.sort(function(a,b){
		return a.value - b.value;
	})
	calculateExtremes(treeData)
	
	
	
	buildTreeMap(tree);
}

function buildTreeMap(tree){

	var margin = {top:0, right: 0, bottom: 0, left: 0},
    width = 540 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


	var colorScale = d3.scale.linear()
    .range([minRange, maxRange]) // or use hex values
    .domain([min, max]);

	var treemap = d3.layout.treemap()
    .size([width, height])
    //.sticky(true)
    .value(function(d) { return d.value; });

	var div = d3.select("#wrapper").append("div").attr("id","container")
    .style("position", "relative")
    .style("width", (width + margin.left + margin.right) + "px")
    .style("height", (height + margin.top + margin.bottom) + "px")
    .style("left", margin.left + "px")
    .style("top", margin.top + "px");
	
	var tip =  div.append("div")
				.attr("id","tooltip")	
				.attr("class", "tooltip")
				.style("opacity", 0);
	
     var node = div.datum(tree).selectAll(".node")
      .data(treemap.nodes)
    .enter().append("div")
      .attr("class", "node")
      .call(position)
      .style("background", function(d) { return colorScale(d.value) })
	  .style("font-weight","bold")
	  .style("color","black")
	  .style("font-size","10px")
	  .style("text-align","center")
	  .style("border","1px solid")
	  .style("cursor","pointer")
      .text(function(d) { return d.children ? null : d.name})
	  .on('mouseover',function(d,i){
			
		//for displaying the tool-tip
		d3.select(".tooltip").style("display","block");
		var currentState = this;													
		tip.transition()
		   .style("opacity","0.9")
		   .style("width","150px")
		   .style("height","30px")
		   .style("background","black");
		tip.html("<strong><span style='color: red'>"+d.name+"</span></strong>"+"<br><span style='color: white'> Count = "+ d.value+"</span>") 
			.style("left", d3.event.pageX - 500 +"px")
			.style("color","white")			
			.style("top", d3.event.pageY - 250 + "px");	
		
		})
		.on("mouseout",function(d,i){
			d3.select(".tooltip").style("display","none");
		}).on("click",function(d,i){
			document.getElementById("genderSection").setAttribute("style", "visibility:visible");
			document.getElementById("ageSection").setAttribute("style", "visibility:visible");
			document.getElementById("regionSection").setAttribute("style", "visibility:visible");
			document.getElementById("raceSection").setAttribute("style", "visibility:visible");
			document.getElementById("reasonsSection").setAttribute("style", "visibility:visible");
			document.getElementById("rangeslider").setAttribute("style", "visibility:visible");
			document.getElementById("rangeslider").value = "15";
			document.getElementById("rangeslider1").value = "60";
			
			//updateOutput($("#rangeslider").val(), false);
			mapShade = ["#88419d","#8c96c6","#b3cde3","#edf8fb"];
			if(prev !== undefined && prevBgColor !== undefined && prevColor!== undefined){
				d3.select(prev).style("background-color",prevBgColor);
				d3.select(prev).style("color",prevColor);
			}
			prev = this;
			prevBgColor = d3.select(this).style("background-color");
			prevColor = d3.select(this).style("color");
			d3.select(this).style("background-color","#3d0044");
			d3.select(this).style("color","white");
			//console.log(d);
			document.getElementById("maleCount").innerHTML = "";
			
			
			document.getElementById("femaleCount").innerHTML = "";
			$("#maleCount").css("background-color","#3d0044");
			$("#femaleCount").css("background-color","#3d0044");
			document.getElementById("maleCount").innerHTML = d.maleCount + "%";
			document.getElementById("femaleCount").innerHTML = d.femaleCount + "%";
			//document.getElementById("genderTitle").innerHTML = "GENDER (" + d.name + ")";
			//document.getElementById("regionTitle").innerHTML = "REGION (" + d.name + ")";
			//document.getElementById("diseaseTitle").innerHTML = "DISEASE ANALYSIS (" + d.name + ")";
			//scaleGenderSize(d.maleCount,d.femaleCount);
			//document.getElementById("genderTitle").innerHTML = "GENDER (" + d.name + ")";
			//document.getElementById("regionTitle").innerHTML = "REGION (" + d.name + ")";
			//document.getElementById("diseaseTitle").innerHTML = "DISEASE ANALYSIS (" + d.name + ")";
			scaleGenderSize(d.maleCount,d.femaleCount);
			
			
			calculateImpact(d);
			
			globDisease = d.id;
			showGauge(d.id);
			raceGauge();
			showSpecificMap(d);
			
		})
  
 /* d3.selectAll("#hiddenB").on("click", function() {
	  var colorScale = d3.scale.linear()
    .range([minRange,maxRange]) // or use hex values
    .domain([min, max]);
            var node = div.datum(filteredTree).selectAll(".node")
			    .data(treemap.nodes)
			.attr("class", "node");
            //console.log(node);
            node.transition().duration(1500).call(position)
			.style("background", function(d) { return colorScale(d.value) })
			.style("font-weight","bold")
			.style("font-size","12px")
			.style("text-align","center")
			.style("color","black")
			.text(function(d) { return d.children ? null : d.name})
			
			node.on('mouseover',function(d,i){
			
				//for displaying the tool-tip
				d3.select(".tooltip").style("display","block");
				var currentState = this		
				tip.transition()
				   .style("opacity","0.9")
				   .style("width","150px")
				   .style("height","30px")
				   .style("background","black");
				tip.html("<strong><span style='color: red'>"+d.name+"</span></strong>"+"<br><span style='color: white'> Count = "+ d.value+"</span>") 
					.style("left", d3.event.pageX - 500 +"px")
					.style("color","white")			
					.style("top", d3.event.pageY - 250 + "px");	
				})
			.on("mouseout",function(d,i){
				d3.select(".tooltip").style("display","none");
			});
			
		});

	
	
}
function applyFilter(criteria,filter){
	//console.log("criteria: "+criteria);
	//console.log("filter: "+filter);
	
	

	if(criteria == "Gender"){
		if(filter == "All")
			isGender = false;
		else
			isGender = true;
		gender = filter
	}else if(criteria == "Age"){
		if(filter == "All")
			isAge = false;
		else
			isAge = true;
		age = filter
	}else if(criteria == "Race"){
		if(filter == "All")
			isRace = false;
		else
			isRace = true;
		race = filter
	}else if(criteria == "Region"){
		if(filter == "All")
			isRegion = false;
		else
			isRegion = true;
		region = filter;
	}

	filterData();
}

function filterData(){
	//if(filteredData.length <= 0){
		filteredData = csvObj;
	//}
	
	if(isGender){
		filteredData = filteredData.filter(function(d){
			return parseInt(d.Sex) == parseInt(genderMap[gender].value);
		})
	}else{
//filteredData = csvObj;
	}
	
	if(isRegion){
		filteredData = filteredData.filter(function(d){
			return d.Region == regionMap[region].value;
		})
	}else{
		//filteredData = csvObj;
	}
	
	if(isRace){
		filteredData = filteredData.filter(function(d){
			return d.Mracbpi2 == raceMap[race].value;
		})
	}else{
		//filteredData = csvObj;
	}
	
	if(isAge){
		if (age == "Group1"){
			filteredData = filteredData.filter(function(d){
				return (parseInt(d.Age_P) >=18 && parseInt(d.Age_P) <= 24);
			})
		}else if (age == "Group2"){
			filteredData = filteredData.filter(function(d){
				return (parseInt(d.Age_P) >24 && parseInt(d.Age_P) <= 34);
			})
		}else if (age == "Group3"){
			filteredData = filteredData.filter(function(d){
				return (parseInt(d.Age_P) >34 && parseInt(d.Age_P) <= 44);
			})
		}else if (age == "Group4"){
			filteredData = filteredData.filter(function(d){
				return (parseInt(d.Age_P) >44 && parseInt(d.Age_P) <= 54);
			});
		}else if (age == "Group5"){
			filteredData = filteredData.filter(function(d){
				return (parseInt(d.Age_P) >54 && parseInt(d.Age_P) <= 64);
			})
		}else if (age == "Group6"){
			filteredData = filteredData.filter(function(d){
				return (parseInt(d.Age_P) >64);
			})
		}
		
	}else{
		//filteredData = csvObj;
	}
	
	//build diseaseObj
	buildHashMaps();
	for(var i=0;i<filteredData.length;i++){
		buildDiseaseObj(filteredData[i]);
	}
	/*diseaseObj['CV'].value = diseaseObj['Chdev'].value + diseaseObj['Angev'].value + diseaseObj['Miev'].value + diseaseObj['Hrtev'].value + diseaseObj['Strev'].value;*/
	//$("#container").remove();
	assignColorValuesF();
	infoText();
	//buildTreeMap();
}







function position() {
  this.style("left", function(d) { return d.x + "px"; })
      .style("top", function(d) { return d.y + "px"; })
      .style("width", function(d) {return Math.max(0, d.dx - 1) + "px"; })
      .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}
function assignColorValuesF(){
	var treeData=[];
	var child = [];
	var drillDown = []
	//get the data in the format needed
	for(var disease in diseaseObj){
			var parent = null;
			//name = diseaseObj[disease].name + "( " + diseaseObj[disease].value + " )";
			if(diseaseObj[disease].isChild)
				parent = diseaseObj[disease].parent	
			treeData.push({
			id: diseaseObj[disease].name,
			name: diseaseObj[disease].name,
			value: diseaseObj[disease].value,
			parent: parent,
			colorValue: 0
			});

			
		
	var tree = {
		name: "tree",
		children: treeData
	}
			
		
	}
	
	//sorting the data
	treeData.sort(function(a,b){
		return a.value - b.value;
	})
	
	calculateExtremes(treeData);
	//buildTreeMap(tree);
	filteredTree = tree;
	//document.getElementById("hiddenB").click();
}
parseCSV();
infoText();

d3.selectAll("button").on("click", function() {
	
	var parent = $(this).parent();
	var allChildren = $(parent).children();
	$(allChildren).removeClass("toggle-active toggle-primary");
	$(allChildren).addClass("toggle-primary");
	$(allChildren).css("color","black");
	$(this).addClass("toggle-active");
	$(this).removeClass("toggle-primary");
	$(this).css("color","white");
	
	var selectedCriteria = this.name;
	var selectedOption = this.innerHTML;
	if(selectedCriteria=="Age"){
		if(selectedOption=="All")
			selectedOption = "All";
		else if(selectedOption=="18-24")
			selectedOption = "Group1";
		else if(selectedOption=="25-34")
			selectedOption = "Group2";
		else if(selectedOption=="35-44")
			selectedOption = "Group3";
		else if(selectedOption=="45-54")
			selectedOption = "Group4";
		else if(selectedOption=="55-64")
			selectedOption = "Group5";
		else if(selectedOption=="65+")
			selectedOption = "Group6";
	}

	applyFilter(selectedCriteria,selectedOption);
})

function calculateExtremes(treeData){
	max = treeData[treeData.length - 1].value;
	min = treeData[0].value;
}

function infoText(){
	var finalText="Showing diseases for ";
	if(gender=="" || gender=="All"){
		finalText = finalText + "Both Genders , "
	}else{
		finalText = finalText + gender + ", ";
	}
	
	if(region=="" || region=="All"){
		finalText = finalText + "All Regions, "
	}else{
		finalText = finalText + region + " Region, ";
	}
	
	/*if(age=="" || age=="All"){
		finalText = finalText + "All Age Groups, ";
	}else{
		finalText = finalText + ageMap[age].value + " Group, ";
	}
	*/
	if(race == "" || race == "All"){
		finalText = finalText + "All Races ";
	}else{
		finalText = finalText + race + " Race ";
	}
	
	//document.getElementById("info").innerHTML = finalText;
}

});
/************* Age Analysis Code*****************/


/*



	diseaseObj['Hypev'] = "Hypertension"
	diseaseObj['Chlev'] = "High Cholesterol"
	diseaseObj['Chdev'] = "Coronary Heart Disease"
	diseaseObj['Angev'] = "Angina Pectoris"
	diseaseObj['Miev'] = "Heart Attack"
	diseaseObj['Hrtev'] = "Heart Condition/Disease"
	diseaseObj['Strev'] = "Stroke"
	diseaseObj['Ephev'] = "Emphysema"
	diseaseObj['Aasmev'] = "Asthma"
	diseaseObj['Ulcev'] = "Ulcer"
	diseaseObj['Canev'] = "Cancer"
	diseaseObj['Dibev'] = "Diabetes"
	diseaseObj['Arth1'] = "Arthritis"
	diseaseObj['Copdev'] = "COPD"




*/

var conditionByAge = {Hypev:0, Chlev:0, Angev:0, Miev:0, Hrtev:0, Strev:0, Ephev:0, Aasmev:0, Ulcev:0, Canev:0, Dibev:0, Arth1:0, Copdev:0};


function showGauge(disease){
	
	$(function () {

		var gaugeOptions = {

			chart: {
				type: 'solidgauge'
			},

			title: '',

			pane: {
				center: ['50%', '85%'],
				size: '140%',
				startAngle: -90,
				endAngle: 90,
				background: {
					backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
					innerRadius: '60%',
					outerRadius: '100%',
					shape: 'arc'
				}
			},

			tooltip: {
				enabled: false
			},

			// the value axis
			yAxis: {
				stops: [
					[0.1, '#55BF3B'], // green
					[0.5, '#DDDF0D'], // yellow
					[0.9, '#DF5353'] // red
				],
				lineWidth: 0,
				minorTickInterval: null,
				tickPixelInterval: 400,
				tickWidth: 0,
				title: {
					y: -70
				},
				labels: {
					y: 16
				}
			},

			plotOptions: {
				solidgauge: {
					dataLabels: {
						y: 5,
						borderWidth: 0,
						useHTML: true
					}
				}
			}
		};

		
		
		// Diabetes
		$('#gauge').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
				title: {
					text: ''
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: globDisease,
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:14px;color:silver">%</span></div>'
				},
				tooltip: {
					valueSuffix: globDisease
				}
			}]

		}));
				
		
		onMoveOverview();
		
	});
}

function onMoveOverview() {
			var age1 = $("#rangeslider").val();
			var age2 = $("#rangeslider1").val();
			
			console.log("*****"+age1+"=>"+age2);
			
			d3.csv("dataset/MedicalConditions.csv", function(data) {					
				
				// Diabetes slider	
				
					var currentAge = data.filter(function(d, i) { 
						if ( globDisease == "Diabetes" && d["Dibev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){	
							return d; 
						} 
						else if (globDisease == "High Cholesterol" && d["Chlev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Coronary Heart Disease" && d["Chdev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Angina Pectoris" && d["Angev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Heart Attack" && d["Miev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Heart Condition/Disease" && d["Hrtev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}		
						else if (globDisease == "Stroke" && d["Strev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Emphysema" && d["Ephev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Asthma" && d["Aasmev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Ulcer" && d["Ulcev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Cancer" && d["Canev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Arthritis" && d["Arth1"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "COPD" && d["Copdev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
						else if (globDisease == "Hypertension" && d["Hypev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
						}
					})
					
					var allAges = data.filter(function(d, i) { 
						if ( globDisease == "Diabetes" && d["Dibev"] == 1){	
							return d; 
						} 
						else if (globDisease == "High Cholesterol" && d["Chlev"] == 1){
							return d;
						}
						else if (globDisease == "Coronary Heart Disease" && d["Chdev"] == 1){
							return d;
						}
						else if (globDisease == "Angina Pectoris" && d["Angev"] == 1 ){
							return d;
						}
						else if (globDisease == "Heart Attack" && d["Miev"] == 1){
							return d;
						}
						else if (globDisease == "Heart Condition/Disease" && d["Hrtev"] == 1){
							return d;
						}		
						else if (globDisease == "Stroke" && d["Strev"] == 1 ){
							return d;
						}
						else if (globDisease == "Emphysema" && d["Ephev"] == 1 ){
							return d;
						}
						else if (globDisease == "Asthma" && d["Aasmev"] == 1 ){
							return d;
						}
						else if (globDisease == "Ulcer" && d["Ulcev"] == 1 ){
							return d;
						}
						else if (globDisease == "Cancer" && d["Canev"] == 1 ){
							return d;
						}
						else if (globDisease == "Arthritis" && d["Arth1"] == 1 ){
							return d;
						}
						else if (globDisease == "COPD" && d["Copdev"] == 1 ){
							return d;
						}
						else if (globDisease == "Hypertension" && d["Hypev"] == 1){
							return d;
						}
					})
					
					
					//var total  = cholestrolAge.length + cancerAge.length + heartAge.length + diabetesAge.length + hyperAge.length;
					var total  = allAges.length;
					
					if ( total == 0){
						total = 1;
					}
					
					
					currentAge = parseFloat(((currentAge.length/total) * 100).toFixed(1));
					
					// Connect slider to diabetes div
					conditionByAge["diabetes"] = currentAge;
					
					var val_diabetes = conditionByAge["diabetes"];
					
					// Diabetes
					var chart_diabetes = $('#gauge').highcharts(),
					point_diabetes,
					newVal_diabetes;
					//inc;

					if (chart_diabetes) {
						point_diabetes = chart_diabetes.series[0].points[0];
						//inc = 0;
						newVal_diabetes = val_diabetes;
			
						if (newVal_diabetes < 0 || newVal_diabetes > 100) {
							newVal_diabetes = val_diabetes;
						}

						point_diabetes.update(newVal_diabetes);
					}				
		});
	}


function getUpperLimit(d) { 						
	var min = Infinity, max = -Infinity, x;
	for( x in d) {
		//if( conditionByAge[x] < min) min = conditionByAge[x];
		if( d[x] > max) max = d[x];
	}
	return max;
}


/************* End of Age Analysis Code*****************/

/************* RACE Code************************/

function raceGauge (){
	var raceMap = {White:0.0, Black:0.0, Alaska:0.0, Chinese:0.0, Filipino:0.0, Asian:0.0, Multiple:0.0};
	d3.csv("dataset/MedicalConditions.csv", function(data) {
		var diseaseSelection ;
		data.filter(function(d, i) {
			if ( globDisease == "Diabetes" && d["Dibev"] == 1){	
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			} 
			else if (globDisease == "High Cholesterol" && d["Chlev"] == 1){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Coronary Heart Disease" && d["Chdev"] == 1){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Angina Pectoris" && d["Angev"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Heart Attack" && d["Miev"] == 1){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Heart Condition/Disease" && d["Hrtev"] == 1){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}		
			else if (globDisease == "Stroke" && d["Strev"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Emphysema" && d["Ephev"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Asthma" && d["Aasmev"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Ulcer" && d["Ulcev"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Cancer" && d["Canev"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "Arthritis" && d["Arth1"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
			else if (globDisease == "COPD" && d["Copdev"] == 1 ){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}		
			else if (globDisease == "Hypertension" && d["Hypev"] == 1){
				if (d["Mracbpi2"] == 1){
					 raceMap["White"]++; 
				}
				else if (d["Mracbpi2"] == 2){
					 raceMap["Black"]++; 
				}
				else if (d["Mracbpi2"] == 3){
					 raceMap["Alaska"]++; 
				}
				else if (d["Mracbpi2"] == 6){
					 raceMap["Chinese"]++; 
				}
				else if (d["Mracbpi2"] == 7){
					 raceMap["Filipino"]++; 
				}
				else if (d["Mracbpi2"] == 12){
					 raceMap["Asian"]++; 
				}
				else if (d["Mracbpi2"] == 17){
					 raceMap["Multiple"]++; 
				}
			}
		});
		
		var total = raceMap["White"]+ raceMap["Black"] + raceMap["Alaska"] + 
					raceMap["Chinese"] + raceMap["Filipino"] + 
					raceMap["Asian"] + raceMap["Multiple"];
		
		raceMap["White"] = ((raceMap["White"]/total)*100).toFixed(1);
		raceMap["Black"] = ((raceMap["Black"]/total)*100).toFixed(1);
		raceMap["Alaska"] = ((raceMap["Alaska"]/total)*100).toFixed(1);
		raceMap["Chinese"] = ((raceMap["Chinese"]/total)*100).toFixed(1);
		raceMap["Filipino"] = ((raceMap["Filipino"]/total)*100).toFixed(1);
		raceMap["Asian"] = ((raceMap["Asian"]/total)*100).toFixed(1);
		raceMap["Multiple"] = ((raceMap["Multiple"]/total)*100).toFixed(1);
		
		var dataArray = [parseFloat(raceMap["White"]), parseFloat(raceMap["Black"]), 
						parseFloat(raceMap["Alaska"]), parseFloat(raceMap["Chinese"]), 
						parseFloat(raceMap["Filipino"]), parseFloat(raceMap["Asian"]), 
						parseFloat(raceMap["Multiple"])];
		
		$(function () {
			$('#race').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: ''
				},
				subtitle: {
					text: ''
				},
				credits: {
					enabled: false
				},
				xAxis: {
					categories: ['White', 'Black', 'Alaska Native', 'Chinese', 'Filipino', 'Asian Indian', 'Multiple race']
				},
				tooltip:{
					shared: true
				},
				yAxis: {
					title: {
						text: 'Patient Population (%)'
					}
				},
				legend: {
					enabled: false
				},
				plotOptions: {
					line: {
						dataLabels: {
							enabled: true
						},
						enableMouseTracking: false
					}
				},
				series: [{
					name: globDisease,
					data: dataArray,
					color: '#44003D'
				}]
			});
		});
	});
}

/************* End of RACE Code*****************/
function getGaugeData(age){
	
	d3.csv("dataset/MedicalConditions.csv", function(data) {
		var hyperAge = data.filter(function(d, i) 
		{ 
            if (d["Hypev"] == 1 && d["Age_P"] == age){	
				return d; 
            } 
			

        })
		conditionByAge["hyper"] = hyperAge.length;
	});
	
}

function showPopUp(){
	$("#overlay").show();
	$("#frame").show();
}

function closeDetailedView(){
	$("#overlay").hide();
	$("#frame").hide();
}
