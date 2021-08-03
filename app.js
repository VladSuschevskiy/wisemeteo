$(document).ready(function() {
    window.chart1 = new Chartist.Line('#chart-temperature', {}, 
        {
            fullWidth: true,
            chartPadding: {
                top:50,
                left:10,
                right:40,
                bottom:10
            },
            showGrid:true,
            axisX: {
                showGrid: true,
                showLabel: true,
            },
            axisY: {
                showGrid: false,
                showLabel: false,
            },
            plugins: [
                Chartist.plugins.ctPointLabels({
                    textAnchor: 'middle',
                })
            ],
            low: 0
        });


    window.chart2 = new Chartist.Bar('#chart-wind', {}, 
        {
            distributeSeries: true,
            axisX: {
            showGrid: true,
            showLabel: true,
            },
            axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
            },
            chartPadding: {
            top:50,
            left:50,
            right:50,
            bottom:10
        },
        plugins: [
            Chartist.plugins.ctPointLabels({
                textAnchor: 'middle'
            })
        ],
    });
        
    window.chart3 = new Chartist.Bar('#chart-precipitation', {}, 
        {
            distributeSeries: true,
            axisX: {
                showGrid: true,
                showLabel: true,
            },
            axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
            },
            chartPadding: {
            top:50,
            left:50,
            right:50,
            bottom:10
        },
        plugins: [
            Chartist.plugins.ctPointLabels({
                textAnchor: 'middle',
            })
        ],
    }); 
    

    $('.form-control').on('click', function() {
        $(".search-subcontainer").toggleClass( 'open' );
        console.log($("#dr"));
      });
        
});





