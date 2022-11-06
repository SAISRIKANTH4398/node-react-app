import { Component } from "react"
import BarChart from "../chart"
import MultiBarChart from "../barChart"
import { format } from 'date-fns'
import './index.css'


class Home extends Component {
    state={currencies:{}, timestamp:Date.now(), activeCountryId: 'INR', startDate:'2022-11-01', compareData: {} }

    componentDidMount() {
        this.timerId = setInterval(this.getData, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    getData = async() => {
        const response = await fetch(`/api`)
        const json = await response.json()
        const date = Date.now()
        console.log(json)
        const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm")
        this.setState({timestamp: formattedDate,currencies: json.rates})
    }

    onChangeCountry = event => (
        this.setState({activeCountryId: event.target.value})
    )

    onChangeStartDate = event => {
        const date = format(event.target.value, "yyyy-MM-dd")
        console.log(event.target.value)
        this.setState({startDate: date})
    }

    onClickButton = async () => {
        const {startDate, activeCountryId} = this.state
        var myHeaders = new Headers();
        myHeaders.append("apikey", "tgyg7Zwe4S8f9wqVmvz0hHc8rUQXbEQj");

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };

        const response = await fetch(`https://api.apilayer.com/fixer/${startDate}?symbols=${activeCountryId}&base=USD`, requestOptions)
        const json = await response.json()
        this.setState({compareData: json.rates})
    }

    render(){
        const {currencies, timestamp,activeCountryId,compareData} = this.state
        const result=Object.entries(currencies)
        let resultArray = []
        result.map(item => (
            resultArray.push(item[0])
        ))

        let resultArray1 = []
        result.map(item => {if(item[0]===activeCountryId){resultArray1.push(item[1])}})
        console.log(resultArray1[0])

        const label = Object.values(compareData)
        console.log(label[0])
        
        
        return(
            <div className="container">
            <div className="bar-chart-container">
             <BarChart value={result} key={result[0]} />
             <p className="last-updated-text">Last updated {timestamp} </p>
            </div>
            <div className="line-chart-container">
            <div className="inputs-container">
                <h5 className="heading">Select Currency to compare with USD</h5>
            <select
              className="country-select"
              onChange={this.onChangeCountry}
              value={activeCountryId}
            >
              {resultArray.map(eachCountry => (
                <option
                  key={eachCountry}
                  value={eachCountry}
                  className="option"
                >
                  {eachCountry}
                </option>
              ))}
            </select>
                <label className="label" htmlFor="startDate" onChange={this.onChangeStartDate}>Select Date</label>
                <input type="date" id="startDate" className="input" />
            
                </div>
                <button type="submit" onClick={this.onClickButton} className="button">Submit</button>
                <div className="chart">
                <MultiBarChart label1={label} label2={resultArray1} key={label}/>
                </div>
          </div>
        
        </div>
        )
    }
}

export default Home