var svgContainer = d3.select("body").append("svg")
    .attr("width", 1200)
    .attr("height", 900);

function cardFactory(data = [1, 2, 3], x = 300, y = 0, textSelection = "Sample Text") {
    /* Should Return a card object that can then be appended to
    *  the svg at a certain point */
    var date = new Date();


// Card Shape variables
    var borderColor = 'black';
    var borderWidth = 10;
    var cardDims = [360, 120]

    // create card element
    var card = svgContainer.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr('pointer-events', 'all')
        .attr("transform", function (d, i) {
            return "translate(" + 0 + "," + d * 125 + ")";
        });
    // add border to card
    card.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', cardDims[0])
        .attr('height', cardDims[1])
        .attr('fill', 'none')
        .attr('stroke', borderColor)
        .attr('border', borderWidth)
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    // Add currently selected text to card
    card.append("text")
        .attr("y", y + 55)
        .attr("x", x + 120)
        .attr("dy", ".35em")
        .text(function (d) {
            // return document.getSelection().toString();
            return "test text" + d;
        });

    // Add TimeStamp to card
    card.append("text")
        .attr("y", y + 110)
        .attr("x", x + 245)
        .attr("dy", ".35em")
        .text(function () {
            return date.toDateString();
        });

    // Add Selected color rectangle to card
    card.append('rect')
        .attr('x', x + 5)
        .attr('y', y + 5)
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', 'red')
        .attr('stroke', borderColor)
        .attr('border', borderWidth);
}

function handleMouseOver(d, i) {  // Add interactivity

    // Use D3 to select element, change color and size
    d3.select(this).attrs({
        fill: "gainsboro",
    });

    // Specify where to put label of text
    svgContainer.append("text").attrs({
        id: "t" + d.x + "-" + d.y + "-" + i,
        x: function () {
            return 30;
        },
        y: function () {
            return 15;
        }
    })
        // .text(function () {
        //     return document.getSelection().toString();});
}

function handleMouseOut(d, i) {
    // Use D3 to select element, change color back to normal
    d3.select(this).attrs({
        fill: "none",
    });

    // Select text by id and then remove
    d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
}

cardFactory()
