import React, { Component } from 'react';

class MetricsApp extends Component {

    state = {
        isLoading: true,
        metrics: []
    };

    async componentDidMount() {
        const response = await fetch('/metrics');
        const body = await response.json();
        this.setState({ metrics: body, isLoading: false });
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
                <div className="App-intro">
                    <h3>Success Metrics Data</h3>
                        { 
                            this.state.metrics.map((metric, index) => (
                                <div>

                                    { <tr>
                                        <td>{metric.organizationName},</td>
                                        <td>{metric.applicationPublicId},</td>
                                        <td>{metric.timePeriodStart},</td>
                                        <td>{metric.evaluationCount},</td>
                                        <td>{metric.discoveredCountSecurityCritical},</td>
                                        <td>{metric.fixedCountSecurityCritical},</td>
                                        <td>{metric.waivedCountSecurityCritical},</td>
                                        <td>{metric.openCountAtTimePeriodEndSecurityCritical},</td>
                                        <td>{metric.discoveredCountLicenseCritical},</td>
                                        <td>{metric.fixedCountLicenseCritical},</td>
                                        <td>{metric.waivedCountLicenseCritical},</td>
                                        <td>{metric.openCountAtTimePeriodEndLicenseCritical}</td>
                                    </tr> }
                                </div>
                            ))
                        }
                </div>
                </header>
            </div>        
        )
    }
}

export default MetricsApp




