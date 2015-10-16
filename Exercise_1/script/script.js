/* New methods we are using:
 * selection.each
 * selection.selectAll
 * selection.filter
 */


/* Find the width and height of the .canvas elements
   Note that there are more than 1
 */

var canvasWidth = document.getElementById('canvas-1').clientWidth,
    canvasHeight = document.getElementById('canvas-1').clientHeight;


var margin = {t:20,r:20,b:20,l:20};
var plotWidth = canvasWidth - margin.l - margin.r,
    plotHeight = canvasHeight - margin.t - margin.b;

/* Ignore this part; the purpose is to draw some axes to guide our drawing */
//d3.selectAll('.canvas')
//    .each(appendGuide);

/*TODO: Part 1 */
var plot=d3.select('#canvas-1')
    .append("svg")
    .attr("width",canvasWidth)
    .attr("height", canvasHeight)
    .append("g")
    .attr("transform", "translate ("+margin.t+","+margin.l+")");
// convention in drawing things in js. good for seeing that things are being drawn were we want

plot.append ("rect")
    .attr("width", plotWidth)
    .attr("height",plotHeight)
    .style("fill", "white");

plot.append("circle")
    .attr("cx",100)
    .attr("cy", 100)
    .attr("r",50)
    .style("fill","none")
    .style("stroke","black")
    .style("stroke","1px");

plot.append("circle")
    .attr("cx",150)
    .attr("cy", 100)
    .attr("r",50)
    .style("fill","white")
    .style("stroke","black")
    .style("stroke","1px");

plot.append("circle")
    .attr("cx",300)
    .attr("cy", 200)
    .attr("r",75)
    .style("fill","none")
    .style("stroke","red")
    .style("stroke","1px");
plot.append("text")
    .attr("x",300)
    .attr("y",200)
    .text("(300,200)");

var newGroup=plot
    .append("g")
    .attr("class", "confined-circle-text")
    .attr("transform", "translate (400,10)");
//mueve el círculo y el texto de acontinuación juntos.

newGroup
    .append("circle")
    .attr("r",75)
    .style("fill","blue")
//al no tener origen de x y 0, el radio del círculo está en el 0,0 del grupo. Si se crea un nuevo elemento, su posición será relativa al origen del grupo

newGroup
    .append("text")
    .text("(300,200)");







/*TODO: Part 2 */
var data = [
    {x:100,y:300,r:20},
    {x:150,y:400,r:10},
    {x:400,y:100,r:20},
    {x:600,y:90,r:5}
];

var plot2=d3.select('#canvas-3')
    .append("svg")
    .attr("width",canvasWidth)
    .attr("height", canvasHeight)
    .append("g")
    .attr("transform", "translate ("+margin.t+","+margin.l+")");

data.forEach(function(element){

        var newGroup3=plot2
            /*para que vuelva al grupo y  y seleccione las X y Z correspondientes
             creates 4 gs in total
             */
            .append("g")
            .attr("transform", "translate ("+element.x+","+element.y+")");
        /*element es cualquier nombre, pero debe estar mencionado en function
        de la variable data, haz la función para cada elemento
        muévelo al element.x (al x que aparece en el array) y al element.y
         */
    newGroup3
        .append("circle")
        .attr("r",element.r)
        //element.r no lleva "" porque es un número
        .style("fill","red");

    newGroup3
        .append("text")
        .text(element.x+", "+element.y);

})









