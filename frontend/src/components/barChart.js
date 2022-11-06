
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export default class MultiBarChart extends Component {

    constructor(props) {
        super(props);

        let selectedLabel = props.label1
        let todayLabel = props.label2
        
        this.multiAxisData = {
            labels: ['Currency Data'],
            datasets: [{
                label: 'Selected Date',
                backgroundColor: [
                    '#EC407A',
                    '#AB47BC',
                    '#42A5F5',
                    '#7E57C2',
                    '#66BB6A',
                    '#FFCA28',
                    '#26A69A'
                ],
                yAxisID: 'y',
                data: selectedLabel
            }, {
                label: 'Today',
                backgroundColor: '#78909C',
                yAxisID: 'y1',
                data: todayLabel
            }]
        };

        this.options = this.getLightTheme();
    }

    getLightTheme() {

        let multiAxisOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        min: 0,
                        max: 100,
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        color: '#495057'
                    }
                }
            }
        };

        return {
            multiAxisOptions
        }
    }

    render() {
        const { multiAxisOptions } = this.options;

        return (
            <div>

                <div className="card">
                    <h5>Multi Axis</h5>
                    <Chart type="bar" data={this.multiAxisData} options={multiAxisOptions} />
                </div>

            </div>
        )
    }
}
                 