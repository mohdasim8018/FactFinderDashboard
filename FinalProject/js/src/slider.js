
var conditionByAge = {hyper:0, cancer:0, heart:0, diabetes:0, cholestrol:0};


	
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
					text: 'Hypertension'
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
					text: 'Diabetes'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'diabetes',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center; paddingBottom:0px"><span style="font-size:25px;color:' +
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
					text: 'Heart'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'heart',
				data: [0],
				dataLabels: {
					format: '<br><div style="text-align:center"><span style="font-size:25px;color:' +
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
					text: 'Cancer'
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
					text: 'cholestrol'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Cholestrol',
				data: [0],
				dataLabels: {
					format: '<div style="text-align:center;"><span style="font-size:25px;color:' +
						((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
						   '<span style="font-size:14px;color:silver">%</span></div>'
				},
				tooltip: {
					valueSuffix: 'cholestrol'
				}
			}]

		}));
		
		document.getElementById("rangeslider").value = "15";
		document.getElementById("rangeslider1").value = "60";
		onMove();
		
		
	});

function onMove() {
			var age1 = $("#rangeslider").val();
			var age2 = $("#rangeslider1").val();
			
			console.log("****"+age1+"**"+age2);
			
			d3.csv("dataset/MedicalConditions.csv", function(data) {				
					
				
				var diabetesAge = data.filter(function(d, i) { 
					if (d["Dibev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){	
						return d; 
					} 
				})
				
				
				var heartAge = data.filter(function(d, i) { 
					if (d["Hrtev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){	
						return d; 
					} 
				})
				
				var cancerAge = data.filter(function(d, i) { 
					if (d["Canev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){	
						return d; 
					} 
				})
				
				
				var cholestrolAge = data.filter(function(d, i) {	
					if (d["Chlev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
							return d;
					}
				})	
					
				var hyperAge = data.filter(function(d, i) {	
					if (d["Hypev"] == 1 && d["Age_P"] >= age1 && d["Age_P"] <= age2){
						return d;
					}
				})
					
				var total  = cholestrolAge.length + cancerAge.length + heartAge.length + diabetesAge.length + hyperAge.length;
				//var total  = diabetesAge.length;
				if ( total == 0){
					total = 1;
				}
				
				cholestrolAge = parseFloat(((cholestrolAge.length/total) * 100).toFixed(1));
				cancerAge = parseFloat(((cancerAge.length/total) * 100).toFixed(1));
				heartAge = parseFloat(((heartAge.length/total) * 100).toFixed(1));
				diabetesAge = parseFloat(((diabetesAge.length/total) * 100).toFixed(1));
				hyperAge = parseFloat(((hyperAge.length/total) * 100).toFixed(1));
				
				
				// Connect slider to diabetes div
				conditionByAge["diabetes"] = diabetesAge;
				conditionByAge["heart"] = heartAge;
				conditionByAge["hyper"] = hyperAge;
				conditionByAge["cancer"] = cancerAge;
				conditionByAge["cholestrol"] = cholestrolAge;
					
				var val_diabetes = conditionByAge["diabetes"];
				var val_heart = conditionByAge["heart"];
				var val_hyper = conditionByAge["hyper"];
				var val_cancer = conditionByAge["cancer"];
				var val_cholestrol = conditionByAge["cholestrol"];
				
				console.log("----"+val_diabetes);
				
					
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
					point_cholestrol.update(newVal_cholestrol);
				}
				
				// Hyper
				var chart_hyper = $('#hyper').highcharts(),
				point_hyper,
				newVal_hyper;
				//inc;

				if (chart_hyper) {
					point_hyper = chart_hyper.series[0].points[0];
					//inc = 0;
					newVal_hyper = val_hyper;
			
					if (newVal_hyper < 0 || newVal_hyper > 100) {
						newVal_hyper = val_hyper;
					}
					point_hyper.update(newVal_hyper);
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