//Take a moment to set up the drawing environment yourself
var margin = {t:50,r:40,b:10,l:40},
    width = $('.canvas').width() - margin.l - margin.t,
    height = $('.canvas').height() - margin.r - margin.b;

var canvas = d3.select('.canvas')
    .append('svg')
    .attr('width',width)
    .attr('height',height)
    .append('g')
    .attr('transform','translate('+margin.l+','+margin.t+')');
console.log("hola")

var scaleX = d3.scale.linear()
    .range([0,width]);

d3.csv("data/world_bank_2013.csv",
    function (d){

        var newRow = {
            country: d.country,
            gdp: +d.GDP,
            gdpPerCapita: +d.GDP_per_capita,
            pctUser:+d.internet_users_per_100
        }

        return (newRow);
    },
    function (err, rows) {
        var minGDPperCapita = d3.min(rows, function(d){return d.gdpPerCapita}),
            maxGDPperCapita = d3.max(rows, function(d){return d.gdpPerCapita});

        var minPctUser = d3.min(rows, function(d){return d.pctUser}),
            maxPctUser = d3.max (rows, function(d){return d.pctUser});
        console.log(minGDPperCapita,maxGDPperCapita);
        console.log(minPctUser,maxPctUser)
        /*

         var scaleX = d3.scale.linear()
         .domain([minGDPperCapita,maxGDPperCapita])
         // domain son los valores reales
         .range([0,width]);
         // range es la escala que vamos a utilizar, en que coordenadas se van a mostrar

         */
        scaleX.domain([minGDPperCapita,maxGDPperCapita]);
        //variable recuperada de antes que tiene el rango incluido
        //escala y con respecto gdp per capita
        /* tambi�n se pueden a�adir datos directos
         scaleX.domain([0,30000]); mostrar� aquellos pa�ses que tienen un acceso a internet y un pib m�s peque�o. pero no mostrar� los que tengan unas cifras m�s altas. Obviamente
         la selecci�n de si mostrar esto o no depender� de qu� queramos ense�ar
         */

        var scaleY = d3.scale.linear ()
            .domain([minPctUser,maxPctUser])
            .range([height,0])
        // escala y con respecto de pct
        // escala y est� definida dentro de la funci�n, fuera de ella no existe callback function tiene su propio ritmo
        // escala x, al estar definida fuera, puede accederse a ella desde fuera
        //escala y hay que darla la vuelta, ya que el svg se dibuja de arriba a abajo (los datos m�s bajos aparecer�n arriba, los datos m�s altos, abajo) (antes estab como 0,height)
        rows.forEach(function(myCountries){
            //function that runs once for each element
            var xPos=scaleX(myCountries.gdpPerCapita),
            // x position escalada
                yPos = scaleY(myCountries.pctUser);
            // y position escalada
            var node = canvas.append("g")
                .attr("class","classCountry")
                .attr("transform","translate("+xPos+","+yPos+")");
            node
                .append("circle")
                .attr("r",10)
                .style("fill-opacity",.5);

            node
                .append("text")
                .text(myCountries.country);
        })

    })