var width = 960,
    height = 500;

var path = d3.geo.path();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("data.json", function(error, topology) {
  if (error) throw error;

  svg.selectAll("path")
      .data(topojson.feature(topology, topology.objects.counties).features)
      .enter().append("path")
      .attr("d", path);
});