import React, {useEffect, useRef} from 'react'
import './usersChart.sass'
import Chart from 'chart.js/auto'

const UsersChart = ({usersStats, chartId}) => {
    const axisY = Object.values(usersStats)
    const axisX = Object.keys(usersStats)


    const chartRef = useRef(null)
    const chartPoint = [].fill(0,0,axisY.length - 1)
    chartPoint[0] = 4
    chartPoint[axisY.length - 1] = 4
    useEffect(() => {
        new Chart(chartRef.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: axisX,
                datasets: [{
                    label: '# of Votes',
                    data: axisY,
                    fill: false,
                    borderColor: '#3A80BA',
                    borderWidth: 4,
                    pointRadius: chartPoint,
                    pointBackgroundColor: '#3A80BA',
                    cubicInterpolationMode: 'lineTension'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            display: false
                        }
                    }
                },
                elements: {
                    line: { tension: 0.3 },
                },
                scales: {
                    y: {
                        min: 0,
                        ticks: {
                            stepSize: 200,
                        },
                        grid: {
                            borderColor: false,
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        }
                    }
                }
            }
        })
    },[axisX, axisY, chartPoint])

    return (
        <div>
            <h3>{chartId}</h3>
            <div className="Chart-content">
                <canvas id={chartId} ref={chartRef}></canvas>
            </div>
        </div>

    )
}

export default UsersChart