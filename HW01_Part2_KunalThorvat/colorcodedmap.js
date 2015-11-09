function d3Tutorial(){
  
  
 	//setting width and height of the map
	var width = 960;
	var height = 500;
	
	//projecting 3D to 2D
	var projection = d3.geo.albersUsa()
                       .translate([width/2, height/2]);
					   
	//defining the path
	var path = d3.geo.path()
                 .projection(projection);
	
	var svg = d3.select("body").append("svg")
								.attr("width", width)
								.attr("height", height)
								.style("margin", "10px auto");

	
	
	
	//deciding color shades
	var color = d3.scale.quantize()
                    .range(["rgb(237,248,233)", "rgb(186,228,179)",
                     "rgb(116,196,118)", "rgb(49,163,84)","rgb(0,109,44)"]);
					 
	
	//loading data from csv
	d3.csv("us-ag-productivity-2004.csv", function(data) {
		color.domain([
                d3.min(data, function(d) { return d.value; }),
                d3.max(data, function(d) { return d.value; })
        ]);
		
		
		
		 //loading data from json
		 d3.json("us-states.json", function(json) {

			//Merge the ag. data and GeoJSON
			//Loop through once for each ag. data value
			for (var i = 0; i < data.length; i++) {

				//Grab state name
				var dataState = data[i].state;

				//Grab data value, and convert from string to float
				var dataValue = parseFloat(data[i].value);

				//Find the corresponding state inside the GeoJSON
				for (var j = 0; j < json.features.length; j++) {

					var jsonState = json.features[j].properties.name;

					if (dataState == jsonState) {

					//Copy the data value into the JSON
					json.features[j].properties.value = dataValue;

					//Stop looking through the JSON
					break;

				}
			}
		}
		
		//applying color shadessvg.selectAll("path")
        svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .style("fill", function(d) {
                                //Get data value
                                var value = d.properties.value;

                                if (value) {
                                        //If value exists…
                                        return color(value);
                                } else {
                                        //If value is undefined…
                                        return "#ccc";
                                }
                   });
				   
		
		
	});
		
		
	});

	
	
	
	
}
