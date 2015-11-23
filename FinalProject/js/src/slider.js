
var conditionByAge = {hyper:0, cancer:0, heart:0, diabetes:0, cholestrol:0};


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

		// Hypertension
		$('#hyper').highcharts(Highcharts.merge(gaugeOptions, {
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
				name: 'Hypertension',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:14px;color:silver">%</span></div>'
				},
				tooltip: {
					valueSuffix: 'Hypertension'
				}
			}]

		}));
		
		
		// Diabetes
		$('#diabetes').highcharts(Highcharts.merge(gaugeOptions, {
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
				name: 'diabetes',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:14px;color:silver">%</span></div>'
				},
				tooltip: {
					valueSuffix: 'diabetes'
				}
			}]

		}));
		
		
		// Heart
		$('#heart').highcharts(Highcharts.merge(gaugeOptions, {
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
				name: 'heart',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:14px;color:silver">%</span></div>'
				},
				tooltip: {
					valueSuffix: 'heart'
				}
			}]

		}));
		
		// Cancer
		$('#cancer').highcharts(Highcharts.merge(gaugeOptions, {
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
				name: 'cancer',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:14px;color:silver">%</span></div>'
				},
				tooltip: {
					valueSuffix: 'cancer'
				}
			}]

		}));
		
		
		// Cholestrol
		$('#cholestrol').highcharts(Highcharts.merge(gaugeOptions, {
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
				name: 'cholestrol',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:14px;color:silver">%</span></div>'
				},
				tooltip: {
					valueSuffix: 'cholestrol'
				}
			}]

		}));
		
		
		onMove(20);
		
		
		var rangeslider = document.getElementById('rangeslider'),
		sliderDiv = document.getElementById("sliderAmount");
		
		
		var rangeslider = document.getElementById('rangeslider'),
		sliderDiv = document.getElementById("sliderAmount");
		
		
		
		
		
		// Connect slider to the hypertension dial
		//rangeslider.oninput = function(){
		//					onMove(this.value);
		//}
		
		
		
		
	});
}

function onMove(value) {
			d3.select("#sliderAmount").text(value);
			var age = value;
			d3.csv("dataset/MedicalConditions.csv", function(data) {
				var hyperAge = data.filter(function(d, i) { 
					if (d["Hypev"] == 1 && d["Age_P"] == age){	
						return d; 
					} 
				})
				
				
				var diabetesAge = data.filter(function(d, i) { 
					if (d["Dibev"] == 1 && d["Age_P"] == age){	
						return d; 
					} 
				})
				
				
				var heartAge = data.filter(function(d, i) { 
					if (d["Chdev"] == 1 && d["Age_P"] == age){	
						return d; 
					} 
				})				

				var cancerAge = data.filter(function(d, i) { 
					if (d["Canev"] == 1 && d["Age_P"] == age){	
						return d; 
					} 
				})
				
				var cholestrolAge = data.filter(function(d, i) { 
					if (d["Chlev"] == 1 && d["Age_P"] == age){	
						return d; 
					} 
				})
				
				var total  = cholestrolAge.length + cancerAge.length + heartAge.length + diabetesAge.length + hyperAge.length;
				
				if ( total == 0){
					total = 1;
				}
				
				cholestrolAge = parseFloat(((cholestrolAge.length/total) * 100).toFixed(1));
				cancerAge = parseFloat(((cancerAge.length/total) * 100).toFixed(1));
				heartAge = parseFloat(((heartAge.length/total) * 100).toFixed(1));
				diabetesAge = parseFloat(((diabetesAge.length/total) * 100).toFixed(1));
				hyperAge = parseFloat(((hyperAge.length/total) * 100).toFixed(1));
				
				cholestrolAge = parseFloat(cholestrolAge.toFixed(1));
				
				
				console.log(cholestrolAge);
				
				conditionByAge["hyper"] = hyperAge;
				//console.log('Value=>'+conditionByAge["hyper"]);
				
				var val = conditionByAge["hyper"];
	
				
				// Hypertension
				var chart = $('#hyper').highcharts(),
				point,
				newVal;
				//inc;

				if (chart) {
					point = chart.series[0].points[0];
					//inc = 0;
					newVal = val;

					if (newVal < 0 || newVal > 100) {
						newVal = val;
					}

					point.update(newVal);
				}
		
			
			// Connect slider to diabetes div
		
			
			
			
			conditionByAge["diabetes"] = diabetesAge;
			//console.log('Value=>'+conditionByAge["diabetes"]);
			
			var val_diabetes = conditionByAge["diabetes"];
			
			//console.log('Dia =>'+val_diabetes);
			
			// Diabetes
			var chart_diabetes = $('#diabetes').highcharts(),
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
			
			
			// Connect slider to heart div

			
			
			conditionByAge["heart"] = heartAge;
			//console.log('Value=>'+conditionByAge["heart"]);
			
			var val_heart = conditionByAge["heart"];
			
			//console.log('Dia =>'+val_heart);
			
			// Heart
			var chart_heart = $('#heart').highcharts(),
			point_heart,
			newVal_heart;
			//inc;

			if (chart_heart) {
				point_heart = chart_heart.series[0].points[0];
				//inc = 0;
				newVal_heart = val_heart;
	
				if (newVal_heart < 0 || newVal_heart > 100) {
					newVal_heart = val_heart;
				}

				point_heart.update(newVal_heart);
			}
			
			
			
			// Connect slider to cancer div

			
			
			conditionByAge["cancer"] = cancerAge;
			//console.log('Value=>'+conditionByAge["cancer"]);
			
			var val_cancer = conditionByAge["cancer"];
			
			//console.log('Dia =>'+val_cancer);
			
			// Cancer
			var chart_cancer = $('#cancer').highcharts(),
			point_cancer,
			newVal_cancer;
			//inc;

			if (chart_cancer) {
				point_cancer = chart_cancer.series[0].points[0];
				//inc = 0;
				newVal_cancer = val_cancer;
	
				if (newVal_cancer < 0 || newVal_cancer > 100) {
					newVal_cancer = val_cancer;
				}

				point_cancer.update(newVal_cancer);
			}
			
			
			// Connect slider to cholestrol div

			
			
			conditionByAge["cholestrol"] = cholestrolAge;
			//console.log('Value=>'+conditionByAge["cholestrol"]);
			
			var val_cholestrol = conditionByAge["cholestrol"];
			
			//console.log('Dia =>'+val_cholestrol);
			
			// Cholestrol
			var chart_cholestrol = $('#cholestrol').highcharts(),
			point_cholestrol,
			newVal_cholestrol;
			//inc;

			if (chart_cholestrol) {
				point_cholestrol = chart_cholestrol.series[0].points[0];
				//inc = 0;
				newVal_cholestrol = val_cholestrol;
	
				if (newVal_cholestrol < 0 || newVal_cholestrol > 100) {
					newVal_cholestrol = val_cholestrol;
				}
				
				//console.log(point_cholestrol);

				point_cholestrol.update(newVal_cholestrol);
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

function toFixedX(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}