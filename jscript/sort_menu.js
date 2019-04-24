var svgContainer = d3.select("#sort_space").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 360 480");

function cardFactory(data = [['red', 'sample text1', new Date(2014, 1, 1)], ['blue', 'sample text2', new Date(2013, 1, 1)]], x = 0, y = 0) {
    /* Should Return a card object that can then be appended to
    *  the svg at a certain point */
    // var date = new Date();
    // alert("cardFactory")

    function date_sort(a, b) {
        if (a[3] < b[3]) {
            return 1;
        } else {
            return -1;
        }
    }


// Card Shape variables
    var borderColor = 'black';
    var borderWidth = 10;
    var cardDims = [350, 120]

    // create card element
    var card = svgContainer.selectAll("g")
        .data(data.sort(date_sort))
        .enter().append("g")
        .attr('pointer-events', 'all')
        .attr("transform", function (d, i) {
            return "translate(" + 5 + "," + (i * 125 + 50) + ")";
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
    // .data(data)
        .attr("y", y + 55)
        .attr("x", x + 120)
        .attr("dy", ".35em")
        .text(function (d, i) {
            // return document.getSelection().toString();
            return d[1];
        });

    // Add TimeStamp to card
    card.append("text")
        .attr("y", y + 110)
        .attr("x", x + 225)
        .attr("dy", ".35em")
        .text(function (d) {
            return d[2].toDateString();
        });

    // Add Selected color rectangle to card
    card.append('rect')
    // .data(data)
        .attr('x', x + 5)
        .attr('y', y + 5)
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', function (d) {
            return d[0];
        })
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
