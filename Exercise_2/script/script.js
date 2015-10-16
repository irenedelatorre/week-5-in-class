//Now let's determine the size of the plots
var margin = {t:100,r:50,b:100,l:50},
    width = document.getElementById('canvas').clientWidth - margin.l - margin.r,
    height = document.getElementById('canvas').clientHeight - margin.t - margin.b;

//Set up SVG drawing elements
var canvas = d3.select('.canvas')
    .append('svg')
    .attr('width', width + margin.l + margin.r)
    .attr('height', height + margin.t + margin.b)
    .append('g')
    .attr('transform','translate('+margin.l+','+margin.t+')');

console.log("Start to load data...")

//Start to load data
//d3.csv('data/data.csv',function(err,rows){
    /*d3.csv is a function
    PARAMETROS
    String: data/data.csv
    err is necessary for when there is a error
    d3.csv(url, [accessor,] callback)
    accessor is a function
    callback is a function

    this is the same as
    ...
     */

d3.csv('data/data.csv',
    function(oldRow){
        console.log(oldRow);
        var newRow = {
            x: +oldRow.x,
            //+ converts strings into numbers
            y: +oldRow.y,
            r: +oldRow.r
        };
        return newRow;
    },
    function(err,rows){
        console.log(rows)
})

console.log("after data")