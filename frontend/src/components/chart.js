
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export default class BarChart extends Component {

    constructor(props) {
        super(props);
        let labels = props.value
        let labelsArray = []
        let currenciesArray = []
        labels.map(item => (
            labelsArray.push(item[0])
        ))

        labels.map(item => (
            currenciesArray.push(item[1])
        ))


        this.basicData = {
            labels: labelsArray,
            datasets: [
                {
                    label: 'Currencies Based on USD',
                    backgroundColor: '#42A5F5',
                    data: currenciesArray
                }
            ]
        };

        this.options = this.getLightTheme();
    }

    getLightTheme() {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
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
                    <Chart type="bar" data={this.basicData} options={basicOptions} />
                </div>
            </div>
        )
    }
}

