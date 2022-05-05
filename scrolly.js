   //grab our canvas
    let svg = d3.select("#canvas");

    //set the width and height
    svg.attr('width',500)
        .attr('height',500)

    //set up grid spacing
    let spacing = 40;
    let rows = 3;
    let column = 10;

    //Create an array of 30 items (all with value the 5)
    let data = d3.range(30).map(i => {
       return 5;
    });

    let rects = svg.selectAll('rect')
            .data(data)
            .join("rect")
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("width", 20)
            .attr("height", 20)
            .attr("x", (d, i) => i % column * spacing)
            .attr("y", (d, i) => Math.floor(i / column) % rows * spacing)
            .style("opacity", 1.0)

    let grid = () => {
        rects
            .transition()
            .delay((d, i) => 10 * i)
            .duration(400)
            .style("fill", "black");
        }

    let grid2 = () => {
        rects
            .transition()
            .delay((d, i) => 10 * i)
            .duration(400)
            .style("fill", (d, i) => ( i < 13 ? "grey" : "#964B00"));
        }
    let grid3 = () => {
        rects
            .transition()
            .delay((d, i) => 10 * i)
            .duration(400)
            .style("fill", (d, i) => (i < 13 && i != 0 ? "blue" : "grey"));
        }

    let grid4 = () => {
        rects
            .transition()
            .delay((d, i) => 10 * i)
            .duration(400)
            .style("fill", (d, i) => (i < 1 ? "green" : "grey"));
        }
//    / === Scrollytelling boilerplate === //
    function scroll(n, offset, func1, func2){
       const el = document.getElementById(n)
       return new Waypoint({
           element: document.getElementById(n),
           handler: function(direction) {
               direction == 'down' ? func1() : func2();
           },
           //start 75% from the top of the div
           offset: offset
       });
       };

       //trigger these functions on page scroll
    new scroll('div2', '75%', grid2, grid);  //create a grid for div2
    new scroll('div3', '75%', grid3, grid2); //create a grid for div3
    new scroll('div4', '75%', grid4, grid3); //create a grid for div4

    grid();
