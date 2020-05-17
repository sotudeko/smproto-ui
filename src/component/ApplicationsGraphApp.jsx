import React, { Component } from 'react';
import { Chart } from "react-google-charts";

class ApplicationsGraphApp extends Component {

    state = {
        isLoading: true,
        metrics: []
    };

    async componentDidMount() {
        const response = await fetch('/ui');
        const body = await response.json();
        
        this.setState({ metrics: body, isLoading: false });

        let output = [["Period", "Number of Applications Onboarded"]]

        for(let key in this.state.metrics){
            output.push([ this.state.metrics[key].label, this.state.metrics[key].pointA ])
        }

        this.setState({chartData: output})
    }

    render() {
        const {metrics, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}

                    <div style={{ display: 'flex', maxWidth: 900 }}>
                        <Chart
                            width={900}
                            height={600}
                            chartType="ColumnChart"
                            loader={<div>Loading Chart</div>}
                            data={this.state.chartData}
                            options={{
                            title: 'Applications Onboarded',
                            chartArea: { width: '30%' },
                            hAxis: {
                                title: 'Period',
                                minValue: 0,
                            },
                            vAxis: {
                                title: '',
                            },
                            }}
                            legendToggle
                        />
                    </div>
                </header>
            </div> 
        )
    }
}

export default ApplicationsGraphApp




