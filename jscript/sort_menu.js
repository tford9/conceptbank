var svgContainer = d3.select("body").append("svg")
    .attr("width", 1200)
    .attr("height", 900);

// var circle = svgContainer.append("circle")
//     .attr("cx", 30)
//     .attr("cy", 30)
//     .attr("r", 20);

// Card Shape variables
var borderColor = 'black';
var borderWidth = 10;
var cardDims = [240, 80]

function cardFactory() {
        /* Should Return a card object that can then be appended to
        *  the svg at a certain point */
        var date = new Date();

        var rect = svgContainer.append('rect')
            .attr('x', 100)
            .attr('y', 60)
            .attr('width', cardDims[0])
            .attr('height', cardDims[1])
            .attr('fill', 'none')
            .attr('stroke', borderColor)
            .attr('border', borderWidth);

        rect.append("text")
            .attr("y", cardDims[0] / 2)
            .attr("dy", ".35em")
            .text(function(d) { return date.toString(); });
        // .transition()
        // .duration(5000)
        // .attr('x', 460 )
        // .attr('y', 150 )
        // .attr('width', 40 )
        // .attr('height', 40 )
        // .attr('fill', 'blue');

        // return newCard;
}

cardFactory()
