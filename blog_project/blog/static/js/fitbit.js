// make SURE d3 V4 in HTML file script<<<------

// set the dimensions and margins of the graph
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%Y-%m-%d");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.dateOfSleep); })
    .y(function(d) { return y(d.duration); });

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv(sleepdata, function(error, data) {
    if (error) throw error;
  
    // format the data
    data.forEach(function(d) {
        d.dateOfSleep = parseTime(d.dateOfSleep);
        d.duration = d.duration/(60*60*1000);
    });
  
    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.dateOfSleep; }));
    y.domain([0, d3.max(data, function(d) { return d.duration; })]);
  
    // // Add the valueline path.
    // svg.append("path")
    //     .data([data])
    //     .attr("class", "line")
    //     .attr("d", valueline);
        
    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) { return x(d.dateOfSleep); })
        .attr("cy", function(d) { return y(d.duration); })
        .style("fill", "#69b3a2");
  
    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
  
    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // text label for the x axis
    svg.append("text")             
    .attr("transform",
            "translate(" + (width/2) + " ," + 
                        (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("Date");
  
    // text label for the y axis
    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Hours of Sleep");  

    //title
    svg.append("text")
    .attr("x", (width / 2))             
    .attr("y", 0 - (margin.top / 2))
    .attr("text-anchor", "middle")  
    .style("font-size", "16px") 
    .style("text-decoration", "underline")  
    .text("Hours of Sleep per Night");
  });