import React from 'react';
import {Chart as ChartJS, registerables} from 'chart.js'
import {Line} from 'react-chartjs-2'
import '../CSS/LineGraph.css'

const blue = "grey"

function LineGraph({yAxes= Array(30).fill(0), xAxesLength = yAxes.length, reverseArray=false}) {
    ChartJS.register(...registerables)

    if(reverseArray)
        yAxes = yAxes.reverse()
    return (
        <section className='LineGraph'>
            <div className="line-graph__container">
                <Line
                    data={{
                        labels: Array(xAxesLength).fill(''),
                        datasets: [
                            {
                                label: '',
                                type: 'line',
                                backgroundColor: "black",
                                borderColor: "#1fafbb",
                                pointBorderColor: 'rgba(0, 0, 0, 0)',
                                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                                pointHoverBackgroundColor: '#1fafbb',
                                pointHoverBorderColor: '#1fafbb',
                                pointHoverBorderWidth: 4,
                                pointHoverRadius: 6,
                                data: yAxes
                            },
                        ],
                    }}
                    options={{
                        indexAxis: 'x',
                        responsive: true,
                        maintainAspectRatio: false,
                        scales:{
                            y: {
                                display: false
                            },
                            x: {
                                display: false
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                mode: 'index',
                                axis: 'x',
                                intersect: false,
                                xAlign: 'center',
                                yAlign: 'top',
                                displayColors: false,
                                titleColor: blue,
                                backgroundColor: 'rgba(0,0,0,0)',
                                titleAlign: 'center',
                            },
                        }
                    }}
                />
            </div>
        </section>
    );
}

export default LineGraph;