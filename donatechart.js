---
---
{% assign goal = site.data.fundraising.goal %}
{% assign given = site.data.fundraising.given %}
{% assign needed = goal - given %}

 $(document).ready(function(){
        $(function () {
    Highcharts.theme = {
    colors: ['{{site.data.design_settings.main_bright_color}}', '{{site.data.design_settings.main_light_color}}'],
    chart: {
        backgroundColor: '#6D5232'
    },
    title: {
        style: {
            color: '{{site.data.design_settings.main_light_color}}',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '{{site.data.design_settings.main_light_color}}',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: '{{site.data.design_settings.main_dark_color}}'
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Goal:<br>$100,000',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: '{{site.data.settings.main_light_color}}'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Fundraising Goal',
            innerSize: '50%',
            data: [
                ['{{given | prepend: '$'}} Given',   {{given}}],
                ['{{needed | prepend: '$'}} Needed',       {{needed}}]
            ]
        }]
    });
});
});