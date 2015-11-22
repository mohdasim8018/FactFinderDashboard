

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

var minRange = '#a8dd85';
var maxRange = '#084081'

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
				Cnkind1: data[i].Cnkind1,
				Cnkind2: data[i].Cnkind2,
				Cnkind3: data[i].Cnkind3,
				Cnkind4: data[i].Cnkind4,
				Cnkind5: data[i].Cnkind5,
				Cnkind6: data[i].Cnkind6,
				Cnkind7: data[i].Cnkind7,
				Cnkind8: data[i].Cnkind8,
				Cnkind9: data[i].Cnkind9,
				Cnkind10: data[i].Cnkind10,
				Cnkind11: data[i].Cnkind11,
				Cnkind12: data[i].Cnkind12,
				Cnkind13: data[i].Cnkind13,
				Cnkind14: data[i].Cnkind14,
				Cnkind15: data[i].Cnkind15,
				Cnkind16: data[i].Cnkind16,
				Cnkind17: data[i].Cnkind17,
				Cnkind18: data[i].Cnkind18,
				Cnkind19: data[i].Cnkind19,
				Cnkind20: data[i].Cnkind20,
				Cnkind21: data[i].Cnkind21,
				Cnkind22: data[i].Cnkind22,
				Cnkind23: data[i].Cnkind23,
				Cnkind24: data[i].Cnkind24,
				Cnkind25: data[i].Cnkind25,
				Cnkind26: data[i].Cnkind26,
				Cnkind27: data[i].Cnkind27,
				Cnkind28: data[i].Cnkind28,
				Cnkind29: data[i].Cnkind29,
				Cnkind30: data[i].Cnkind30,
				CV: cv
			})
			buildDiseaseObj(data[i]);
		}
		/*diseaseObj['CV'].value = diseaseObj['Chdev'].value + diseaseObj['Angev'].value + diseaseObj['Miev'].value + diseaseObj['Hrtev'].value + diseaseObj['Strev'].value;*/
		
		assignColorValues();
		
	});
}

function buildDiseaseObj(data){
	if(data.Hypev == "1")
		diseaseObj['Hypev'].value++;
	if(data.Chlev == "1")
		diseaseObj['Chlev'].value++;
	if(data.Chdev == "1")
		diseaseObj['Chdev'].value++;
	if(data.Angev == "1")
		diseaseObj['Angev'].value++;
	if(data.Miev == "1")
		diseaseObj['Miev'].value++;
	if(data.Hrtev == "1")
		diseaseObj['Hrtev'].value++;
	if(data.Strev == "1")
		diseaseObj['Strev'].value++;
	if(data.Ephev == "1")
		diseaseObj['Ephev'].value++;
	if(data.Aasmev == "1")
		diseaseObj['Aasmev'].value++;
	if(data.Ulcev == "1")
		diseaseObj['Ulcev'].value++;
	if(data.Copdev == "1")
		diseaseObj['Copdev'].value++;
	if(data.Canev == "1"){
		diseaseObj['Canev'].value++;
		/*if(data.Cnkind1 == "1")
			diseaseObj['Cnkind1'].value++
		if(data.Cnkind2 == "1")
			diseaseObj['Cnkind2'].value++
		if(data.Cnkind3 == "1")
			diseaseObj['Cnkind3'].value++
		if(data.Cnkind4 == "1")
			diseaseObj['Cnkind4'].value++
		if(data.Cnkind4 == "1")
			diseaseObj['Cnkind5'].value++
		if(data.Cnkind6 == "1")
			diseaseObj['Cnkind6'].value++
		if(data.Cnkind7 == "1")
			diseaseObj['Cnkind7'].value++
		if(data.Cnkind8 == "1")
			diseaseObj['Cnkind8'].value++
		if(data.Cnkind9 == "1")
			diseaseObj['Cnkind9'].value++
		if(data.Cnkind10 == "1")
			diseaseObj['Cnkind10'].value++
		if(data.Cnkind11 == "1")
			diseaseObj['Cnkind11'].value++
		if(data.Cnkind12 == "1")
			diseaseObj['Cnkind12'].value++
		if(data.Cnkind13 == "1")
			diseaseObj['Cnkind13'].value++
		if(data.Cnkind14 == "1")
			diseaseObj['Cnkind14'].value++
		if(data.Cnkind15 == "1")
			diseaseObj['Cnkind15'].value++
		if(data.Cnkind16 == "1")
			diseaseObj['Cnkind16'].value++
		if(data.Cnkind17 == "1")
			diseaseObj['Cnkind17'].value++
		if(data.Cnkind18 == "1")
			diseaseObj['Cnkind18'].value++
		if(data.Cnkind19 == "1")
			diseaseObj['Cnkind19'].value++
		if(data.Cnkind20 == "1")
			diseaseObj['Cnkind20'].value++
		if(data.Cnkind21 == "1")
			diseaseObj['Cnkind21'].value++
		if(data.Cnkind22 == "1")
			diseaseObj['Cnkind22'].value++
		if(data.Cnkind23 == "1")
			diseaseObj['Cnkind23'].value++
		if(data.Cnkind24 == "1")
			diseaseObj['Cnkind24'].value++
		if(data.Cnkind25 == "1")
			diseaseObj['Cnkind25'].value++
		if(data.Cnkind26 == "1")
			diseaseObj['Cnkind26'].value++
		if(data.Cnkind27 == "1")
			diseaseObj['Cnkind27'].value++
		if(data.Cnkind28 == "1")
			diseaseObj['Cnkind28'].value++
		if(data.Cnkind29 == "1")
			diseaseObj['Cnkind29'].value++
		if(data.Cnkind30 == "1")
			diseaseObj['Cnkind30'].value++*/
	}
	if(data.Dibev == "1")
		diseaseObj['Dibev'].value++;
	if(data.Arth1 == "1")
		diseaseObj['Arth1'].value++;
}

function buildHashMaps(){
	//disease map
	//diseaseObj['CV'] = {name: "Cardio Vascular",value: 0,isChild: false,parent: "",isParent: true};
	diseaseObj['Hypev'] = {name: "Hypertension",value: 0,isChild: false,parent: "",isParent: false};
	diseaseObj['Chlev'] = {name: "High Cholesterol",value: 0,isChild: false,parent: "",isParent: false};
	diseaseObj['Chdev'] = {name: "Coronary Heart Disease",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false};
	diseaseObj['Angev'] = {name: "Angina Pectoris",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false};
	diseaseObj['Miev'] = {name: "Heart Attack",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false};
	diseaseObj['Hrtev'] = {name: "Heart Condition/Disease",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false};
	diseaseObj['Strev'] = {name: "Stroke",value: 0,isChild: true,parent: "Cardio Vascular",isParent: false};
	diseaseObj['Ephev'] = {name: "Emphysema",value: 0,isChild: false,parent: "",isParent: false};
	diseaseObj['Aasmev'] = {name: "Asthma",value: 0,isChild: false,parent: "",isParent: false};
	diseaseObj['Ulcev'] = {name: "Ulcer",value: 0,isChild: false,parent: "",isParent: false};
	diseaseObj['Canev'] = {name: "Cancer",value: 0,isChild: false,parent: "",isParent: true};
	diseaseObj['Dibev'] = {name: "Diabetes",value: 0,isChild: false,parent: "",isParent: false};
	diseaseObj['Arth1'] = {name: "Arthritis",value: 0,isChild: false,parent: "",isParent: false};
	diseaseObj['Copdev'] = {name: "COPD",value: 0,isChild: false,parent: "",isParent: false};
	/*diseaseObj['Cnkind1'] = {name: "Bladder",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind2'] = {name: "Blood",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind3'] = {name: "Bone",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind4'] = {name: "Brain",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind5'] = {name: "Breast",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind6'] = {name: "Cervix",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind7'] = {name: "Colon",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind8'] = {name: "Esophagus",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind9'] = {name: "Gallbladder",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind10'] = {name: "Kidney",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind11'] = {name: "larynx-windpip",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind12'] = {name: "Leukemia",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind13'] = {name: "Liver",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind14'] = {name: "Lung",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind15'] = {name: "Lymphoma",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind16'] = {name: "Melanoma",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind17'] = {name: "mouth/tongue/lip",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind18'] = {name: "Ovary",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind19'] = {name: "Pancreas",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind20'] = {name: "Prostate",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind21'] = {name: "Rectum",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind22'] = {name: "skin (non-melanoma",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind23'] = {name: "skin (DK kind)",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind24'] = {name: "soft tissue (muscle or fat)",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind25'] = {name: "Stomach",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind26'] = {name: "Testis",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind27'] = {name: "throat - pharynx",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind28'] = {name: "Thyroid",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind29'] = {name: "Uterus",value: 0,isChild: true,parent:"Cancer",isParent: false};
	diseaseObj['Cnkind30'] = {name: "Other",value: 0,isChild: true,parent:"Cancer",isParent: false};*/
	
	
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
	calculateExtremes(treeData)
	
	
	
	buildTreeMap(tree);
}

/*function buildTreeMap(treeData){
	Highcharts.setOptions({
        lang: {
            drillUpText: ''
        }
    });
	d3.select("#wrapper").append("div").attr("id","container");
	 $('#container').highcharts({
        colorAxis: {
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
			allowDrillToNode: true,
			levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold'
                    }
                }
            }],
            data: treeData
			
        }],
        title: {
            text: 'Highcharts Treemap'
        }
    });
}*/
function buildTreeMap(tree){

	var margin = {top:0, right: 0, bottom: 10, left: 0},
    width = 850 - margin.left - margin.right,
    height = 380 - margin.top - margin.bottom;


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
	  .style("color","white")
	  .style("font-size","15px")
	  .style("text-align","center")
      .text(function(d) { return d.children ? null : d.name; })
	  .on('mouseover',function(d,i){
			
		//for displaying the tool-tip
		d3.select(".tooltip").style("display","block");
		var currentState = this;													
		tip.transition()
		   .style("opacity","0.9")
		   .style("width","150px")
		   .style("height","30px")
		   .style("background","black");
		tip.html("<strong><span style='color: red'>"+d.name+": "+"</span></strong>"+"<br><span style='color: white'>"+ d.value+"</span>") 
			.style("left", ((d3.event.pageX) - 350) + "px")
			.style("color","white")			
			.style("top", (d3.event.pageY - 120) + "px");	
		})
		.on("mouseout",function(d,i){
			d3.select(".tooltip").style("display","none");
		})
  
  d3.selectAll("#hiddenB").on("click", function() {
	  var colorScale = d3.scale.linear()
    .range([minRange,maxRange]) // or use hex values
    .domain([min, max]);
            var node = div.datum(filteredTree).selectAll(".node")
			    .data(treemap.nodes)
			.attr("class", "node");
            console.log(node);
            node.transition().duration(1500).call(position)
			.style("background", function(d) { return colorScale(d.value) })
			.style("font-weight","bold")
			.style("font-size","15px")
			.style("text-align","center")
			.style("color","white")
			.text(function(d) { return d.children ? null : d.name; })
			.on('mouseover',function(d,i){
			
				//for displaying the tool-tip
				d3.select(".tooltip").style("display","block");
				var currentState = this;													
				tip.transition()
				   .style("opacity","0.9")
				   .style("width","150px")
				   .style("height","30px")
				   .style("background","black");
				tip.html("<strong><span style='color: red'>"+d.name+": "+"</span></strong>"+"<br><span style='color: white'>"+ d.value+"</span>") 
					.style("left", ((d3.event.pageX) - 350) + "px")
					.style("color","white")			
					.style("top", (d3.event.pageY - 120) + "px");	
				})
			.on("mouseout",function(d,i){
				d3.select(".tooltip").style("display","none");
			});
		});

	
	
}
function applyFilter(criteria,filter){
	console.log("criteria: "+criteria);
	console.log("filter: "+filter);
	
	

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




function showGauge(){
	
	$(function () {

		var gaugeOptions = {

			chart: {
				type: 'solidgauge'
			},

			title: null,

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

		// The speed gauge
		$('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 100,
				title: {
					text: 'Speed'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Speed',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:12px;color:silver">km/h</span></div>'
				},
				tooltip: {
					valueSuffix: ' km/h'
				}
			}]

		}));
		
		var slide = document.getElementById('slide'),
		sliderDiv = document.getElementById("sliderAmount");
		console.log("slide: "+slide);
		
		
		
		// Bring life to the dials
		slide.oninput = function() {
		this.value = 18;
		getGaugeData(this.value);
		/*var upperLimit = function () {
							var min = Infinity, max = -Infinity, x;
							for( x in conditionByAge) {
								//if( conditionByAge[x] < min) min = conditionByAge[x];
								if( conditionByAge[x] > max) max = conditionByAge[x];
							}
							return max;
						}; */
		
		console.log(upperLimit);
		
		var val = conditionByAge["hyper"];
		
		console.log(val);
		
		// Speed
		var chart = $('#container-speed').highcharts(),
		point,
		//newVal,
		inc;

		if (chart) {
			point = chart.series[0].points[0];
			//inc = Math.round((Math.random() - 0.5) * 100);
			inc = 0;
			newVal = val;

			if (newVal < 0 || newVal > 100) {
				newVal = val;
			}

			point.update(newVal);
		}

	 


		}
	});
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
	console.log(filteredTree);
	document.getElementById("hiddenB").click();
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
	var finalText="Showing for ";
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
	
	if(age=="" || age=="All"){
		finalText = finalText + "All Age Groups, ";
	}else{
		finalText = finalText + ageMap[age].value + " Group, ";
	}
	
	if(race == "" || race == "All"){
		finalText = finalText + "All Races ";
	}else{
		finalText = finalText + race + " Race ";
	}
	
	document.getElementById("info").innerHTML = finalText;
}

});


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
