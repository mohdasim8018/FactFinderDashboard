function d3Tutorial(){
  
  
 	//setting up colors
	var mapColor = "#e0f3db";
	var mapText = "125946";
	var mapBorder = "#464646";
	var mapMarker = "red";
	var male_color = "#2D4C39";
	var female_color = "#000088";
	var all_color = "#A00000";
	var tipFillColor;
	
	//getting value of radio button
	var radioButton = d3.select('input[name="gender"]:checked').node().value;
	
	//setting width and height of the map
	var width = 1300;
	var height = 700;
	
	//projecting 3D to 2D
	var projection = d3.geo.albersUsa()
                       .translate([width/2, height/2])
					   .scale([1400]);
					   
	//defining the path
	var path = d3.geo.path()
                 .projection(projection);
				 
				 
	
	//place holder for map
	var svg = d3.select("#map").append("svg")
								.attr("id","mapHolder")
								.attr("width", width)
								.attr("height", height)
								
								
								
	
	// Define 'div' for tooltips
	var tip =  d3.select("#map")
				.append("div")
				.attr("id","tooltip")	
				.attr("class", "tooltip")
				.style("opacity", 0);                
	
	
	
	//start reading the csv file
	d3.csv("sgd.csv", function(data) {
	

	//for townwise
	var nested_townwise = null;
	
	//check values of radio buttons
	if(radioButton == "male"){
		tipFillColor = male_color;
		var male_data = data.filter(function(d){return d.gender == "M"});
		nested_townwise = d3.nest()
						.key(function(d){return d.city})
						.entries(male_data);					
	}else if(radioButton == "female"){
		tipFillColor = female_color;
		var female_data = data.filter(function(d){return d.gender == "F"});
		nested_townwise = d3.nest()
						.key(function(d){return d.city})
						.entries(female_data);	
	}else{
		tipFillColor = all_color;
		nested_townwise = d3.nest()
						.key(function(d){return d.city})
						.entries(data);
	}
	
	
	
	
	
	
	
	
	
	//for radio button change events
	d3.selectAll(".radio").on("change",function(){
		
		
		if(document.getElementById("male").checked)
		{
			document.getElementById("map").removeChild(document.getElementById("tooltip"));
			document.getElementById("map").removeChild(document.getElementById("mapHolder"));
			var male_data = data.filter(function(d){return d.gender == "M"});
			nested_townwise = d3.nest()
						.key(function(d){return d.city})
						.entries(male_data);

		}else if(document.getElementById("female").checked){
			document.getElementById("map").removeChild(document.getElementById("tooltip"));
			document.getElementById("map").removeChild(document.getElementById("mapHolder"));
			var female_data = data.filter(function(d){return d.gender == "F"});
			nested_townwise = d3.nest()
						.key(function(d){return d.city})
						.entries(female_data);
		}else{
			document.getElementById("map").removeChild(document.getElementById("tooltip"));
			document.getElementById("map").removeChild(document.getElementById("mapHolder"));
			nested_townwise = d3.nest()
						.key(function(d){return d.city})
						.entries(data);
		}
	})

				
	//loading the json file
	d3.json("us-states.json", function(json) {
	 
	//binding GeoJson to path element
		svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("fill",mapColor)
		.attr("stroke",mapBorder)
		.attr("d", path)

		
	//building the map	
		svg.selectAll("text")
		.data(json.features)
		.enter()
		.append("svg:text")
		.text(function(d){
			return d.properties.abbr;
		})
		.attr("x", function(d){
			return path.centroid(d)[0];
		})
		.attr("y", function(d){
			return  path.centroid(d)[1];
		})
		.attr("fill",mapText)
		.attr("text-anchor","middle")
		.attr('font-size','8pt')
		.attr("font-family","Arial")
		.attr("font-weight","bold");
		
		
	//for townwise markers
		svg.selectAll("circle")
	   .data(nested_townwise)
	   .enter()
	   .append("circle")
	   .attr("cx", function(d) {
			   return projection([d.values[0].lng, d.values[0].lat])[0];
	   })
	   .attr("cy", function(d) {
			   return projection([d.values[0].lng, d.values[0].lat])[1];
	   })
	   .attr("r", function(d){
		   if(d.values.length == 1)
			   return 2;
		   else if(d.values.length == 2)
			   return 4;
		   else if(d.values.length == 3)
			   return 6;
		   else if(d.values.length == 4)
			   return 8;
		   else
			   return 10; 
	   })
	   .style("fill", function(d){
		   if(radioButton == "male")
			   return male_color;
		   else if(radioButton == "female")
			   return female_color;
		   else
			   return all_color;
	   })
	   .style("opacity", 0.5)
	   .on('mouseover',function(d,i){
			
		//for displaying the tool-tip
		d3.select(".tooltip").style("display","block");
		var currentState = this;													
		tip.transition()
		   .style("opacity","0.9")
		   .style("background",tipFillColor);
		tip.html("<strong>"+d.key+": "+"</strong><span style='color: white'>"+ d.values.length+"</span>") 
			.style("left", (d3.event.pageX) + "px")
			.style("color","white")			
			.style("top", (d3.event.pageY - 28) + "px");	
		})
		.on("mouseout",function(d,i){
			d3.select(".tooltip").style("display","none");
		})
		
			
			
			

	});
		
		
	});
}






