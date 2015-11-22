
	
		var nested_main;
		var csvObj=[];
	
		var genderObj = [];
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
		var reasonsObj = [];
 	
		var colorObj={};
		var genderMap = {};
		var regionMap = {};
		var raceMap = {};
		
		var marginTop = "-200px";
		var translateY = 200;
		var temp;
		
		
		function buildMaps(){
			colorObj['Anouspl1']={value: "#8dd3c7"};
			colorObj['Anouspl2']={value: "#ffffb3"};
			colorObj['Anouspl3']={value: "#bebada"};
			colorObj['Anouspl4']={value: "#fb8072"};
			colorObj['Anouspl5']={value: "#80b1d3"};
			colorObj['Anouspl6']={value: "#fdb462"};
			colorObj['Anouspl7']={value: "#b3de69"};
			colorObj['Anouspl8']={value: "#fccde5"};
			colorObj['Anouspl9']={value: "#d9d9d9"};
			
			genderMap['1'] = {value: "Male"};
			genderMap['2'] = {value: "Female"};
			
			regionMap['1'] = {value : "Northeast"};
			regionMap['2'] = {value : "Midwest"};
			regionMap['3'] = {value : "South"};
			regionMap['4'] = {value : "West"};
			
			raceMap['1'] = {value: "White"};
			raceMap['2'] = {value: "Black/African American"};
			raceMap['3'] = {value: "Indian American"};
			raceMap['6'] = {value: "Chinese"};
			raceMap['7'] = {value: "Filipino"};
			raceMap['12'] = {value: "Asian Indian"};
			raceMap['16'] = {value: "Other race"};
			raceMap['17'] = {value: "Multiple race"};
			
			
		}
        
		function parseCSV(){
			buildMaps();
			d3.csv("dataset/Reasons.csv", function(data_all) {
					var data=[];
				for(var i=0;i<data_all.length;i++){
						csvObj.push({
						Gender:data_all[i].Sex,
						Region:data_all[i].Region,
						Age:data_all[i].Age_P,
						Race:data_all[i].Mracbpi2,
						Anouspl1:data_all[i].Anouspl1,
						Anouspl2:data_all[i].Anouspl2,
						Anouspl3:data_all[i].Anouspl3,
						Anouspl4:data_all[i].Anouspl4,
						Anouspl5:data_all[i].Anouspl5,
						Anouspl6:data_all[i].Anouspl6,
						Anouspl7:data_all[i].Anouspl7,
						Anouspl8:data_all[i].Anouspl8,
						Anouspl9:data_all[i].Anouspl9
					})
				}
				
				
				for(var i = 0;i<reasonsArray.length;i++){
					
					
					var nested = csvObj.filter(function(d){ 
						var value = reasonsArray[i].code
						return d[value] == "1";
					});
					reasonsObj.push({
						code: reasonsArray[i].code,
						text: reasonsArray[i].text,
						obj: nested
					});
					
				}
				
				

				
				for(var i=0;i<reasonsObj.length;i++){
					data.push({
						All: "All",
						code: reasonsObj[i].code,
						type: reasonsObj[i].text,
						count: reasonsObj[i].obj.length,
						value: reasonsObj[i].obj.length/20
					})
				}
				
				
				temp = data;
				buildBubbles(data);

					
				
				
				
				
				
			});
		}
		function search(criteria){
			
			var curr = document.getElementById(criteria);
			var parent = $(curr).parent();
			var allChildren = $(parent).children();
			$(allChildren).removeClass("toggle-active toggle-primary");
			$(allChildren).addClass("toggle-primary");
			$(allChildren).css("color","black");
			$(curr).addClass("toggle-active");
			$(curr).removeClass("toggle-primary");
			$(curr).css("color","white");
			
			buildMaps();
			//var search = "Gender";
			var finalObj = []
			var tot = 0;
			if(criteria!="All"){
				for(var i=0;i<reasonsObj.length;i++){
					var nested_filter = d3.nest()
								.key(function(d){
									return d[criteria];
								})
								.entries(reasonsObj[i].obj)
					
					
					
					for(var j=0;j<nested_filter.length;j++){
						var value = "";
						if(criteria == "Gender")
							value = genderMap[nested_filter[j].key].value;
						else if(criteria == "Region"){
							value = regionMap[nested_filter[j].key].value;
							translateY = 200;
							marginTop = "-100px";
						}else if(criteria == "Race")
							value = raceMap[nested_filter[j].key].value;
						else{
							marginTop = "-200px";
							var translateY = 200;
						}
						
						finalObj.push({
							All: value,
							type: reasonsObj[i].text,
							code: reasonsObj[i].code,
							count: nested_filter[j].values.length,
							value: nested_filter[j].values.length/20
						})
					}
				}
				
				data = 	finalObj;
			}else{
				data = temp;
				marginTop = "-200px";
				translateY = 200;
			}
			buildBubbles(data);			
		}
		
		function buildBubbles(data){
			var width = 1000, height = 800;
		$("#bubbles").remove();
        var svg = d3.select("#wrapper").append("svg").attr("id","bubbles").style("margin-top",marginTop)
            .attr("width", width)
            .attr("height", height);

        for (var j = 0; j < data.length; j++) {
			
          data[j].radius = +data[j].value;
          data[j].x = Math.random() * data[j].value;
          data[j].y = Math.random() * data[j].value;
        }
        var padding = 0;
        var maxRadius = d3.max(_.pluck(data, 'radius'));

        var getCenters = function (vname, size) {
          var centers, map;
          centers = _.uniq(_.pluck(data, vname)).map(function (d) {
            return {name: d, value: 1};
          });

          map = d3.layout.treemap().size(size).ratio(1/1);
          map.nodes({children: centers});

          return centers;
        };

        var nodes = svg.selectAll("circle")
          .data(data);

        nodes.enter().append("circle")
          .attr("class", "node")
          .attr("cx", function (d) { return d.x; })
          .attr("cy", function (d) { return (d.y); })
          .attr("r", function (d) { return d.radius; })
          .style("fill", function (d) { return colorObj[d.code].value;})
          .on("mouseover", function (d) { showPopover.call(this, d); })
          .on("mouseout", function (d) { removePopovers(); })

        var force = d3.layout.force();

        draw('All');

 

        function draw (varname) {
          var centers = getCenters(varname, [800, 800]);
          force.on("tick", tick(centers, varname));
          labels(centers)
          force.start();
        }

        function tick (centers, varname) {
          var foci = {};
          for (var i = 0; i < centers.length; i++) {
            foci[centers[i].name] = centers[i];
          }
          return function (e) {
            for (var i = 0; i < data.length; i++) {
              var o = data[i];
              var f = foci[o[varname]];
              o.y += ((f.y + (f.dy / 2)) - o.y) * e.alpha;
              o.x += ((f.x + (f.dx / 2)) - o.x) * e.alpha;
            }
            nodes.each(collide(.11))
              .attr("cx", function (d) { return d.x; })
              .attr("cy", function (d) { 
				if(d.All=="Midwest" || d.All=="Northeast")
					return d.y - 150;
				else if(d.All=="Male" || d.All=="Female")
					return d.y - 100;
				else
					return d.y;	
			  });
          }
        }

        function labels (centers) {
          svg.selectAll(".label").remove();

          svg.selectAll(".label")
          .data(centers).enter().append("text")
          .attr("class", "label")
          .text(function (d) { return d.name })
          .attr("transform", function (d) {
			 
			if(d.name=="Midwest" || d.name=="Northeast"){
				translateY = 20;
			}else if(d.name=="South" || d.name=="West"){
				translateY = 120;
			}else{
				translateY = 200;
			}  
            return "translate(" + (d.x + (d.dx / 2)) + ", " + (d.y + translateY) + ")";
          });
        }

        function removePopovers () {
          $('.popover').each(function() {
            $(this).remove();
          }); 
        }

        function showPopover (d) {
          $(this).popover({
            placement: 'auto top',
            container: 'body',
            trigger: 'manual',
            html : true,
            content: function() { 
              return "Reason: " + d.type + "<br/>Count: " + d.count;
            }
          });
          $(this).popover('show')
        }

        function collide(alpha) {	
          var quadtree = d3.geom.quadtree(data);
          return function (d) {
            var r = d.radius + maxRadius + padding,
                nx1 = d.x - r,
                nx2 = d.x + r,
                ny1 = d.y - r,
                ny2 = d.y + r;
            quadtree.visit(function(quad, x1, y1, x2, y2) {
              if (quad.point && (quad.point !== d)) {
                var x = d.x - quad.point.x,
                    y = d.y - quad.point.y,
                    l = Math.sqrt(x * x + y * y),
                    r = d.radius + quad.point.radius + padding;
                if (l < r) {
                  l = (l - r) / l * alpha;
                  d.x -= x *= l;
                  d.y -= y *= l;
                  quad.point.x += x;
                  quad.point.y += y;
                }
              }
              return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            });
          };
        }

			
			
		
		}
	
		
		//parseCSV();
	
	
