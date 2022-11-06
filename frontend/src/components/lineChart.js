
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export default class LineChart extends Component {

    constructor(props) {
        super(props);


        this.lineStylesData = {
            labels: ['Selected Date', 'Today'],
            datasets: [
                {
                    label: 'Third Dataset',
                    data: [selectedLabel[0], todayLabel[0]],
                    fill: true,
                    borderColor: '#FFA726',
                    tension: .4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };

        this.options = this.getLightTheme();
    }

    getLightTheme() {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
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
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
        return {
            basicOptions
        }
    }

    render() {
        const { basicOptions } = this.options;

        return (
            <div>
                <div className="card">
                    <Chart type="line" data={this.lineStylesData} options={basicOptions} />
                </div>
            </div>
        )
    }
}
                 