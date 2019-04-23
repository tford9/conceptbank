var svgContainer = d3.select("body").append("svg")
    .attr("width", 1200)
    .attr("height", 900);

// var circle = svgContainer.append("circle")
//     .attr("cx", 30)
//     .attr("cy", 30)
//     .attr("r", 20);


// var data = ["TEXT SAMPLE"], r = 15;

function cardFactory(data = [1], x = 80, y = 80) {
    /* Should Return a card object that can then be appended to
    *  the svg at a certain point */
    var date = new Date();
// Card Shape variables
    var borderColor = 'black';
    var borderWidth = 10;
    var cardDims = [360, 120]

    var rect = svgContainer.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d, i) {
            return "translate(100,100)";
        });

    rect.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', cardDims[0])
        .attr('height', cardDims[1])
        .attr('fill', 'none')
        .attr('stroke', borderColor)
        .attr('border', borderWidth)
        .on("mouseover", function () {
            d3.select(this.nextSibling)
                .attr("opacity", "1")
        })
        .on("mouseout", function () {
            d3.select(this.nextSibling)
                .attr("opacity", "0")
        });
    // Add TimeStamp to rectangle
    rect.append("text")
        .attr("y", y + 110)
        .attr("x", x + 240)
        .attr("dy", ".35em")
        .text(function (d) {
            return date.toDateString();
        });
    // Add Selected Text
    // rect.append("text")
    //     .attr("y", y + 110)
    //     .attr("x", x + 240)
    //     .attr("dy", ".35em")
    //     .text(function (d) {
    //         return date.toDateString();
    //     });
    // Add Selected color rectangle
    var colorRect = svgContainer.append('rect')
        .attr('x', x+105)
        .attr('y', y+105)
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', 'red')
        .attr('stroke', borderColor)
        .attr('border', borderWidth);
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
