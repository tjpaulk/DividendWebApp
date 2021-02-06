import React, { Component } from 'react';

export class StockFilings extends Component {
    static displayName = StockFilings.name;

    constructor(props) {
        super(props);
        this.state = { filings: [], loading: true };
    }

    componentDidMount() {
        this.populateFilingData();
    }

    static renderFilingsTable(filings) {
        console.log(filings);
        return (
            <table className='table table-sorted' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Ticker</th>
                        <th>Filing Date</th>
                        <th>Filing Type</th>
                        <th>Filing Name</th>
                        <th>Filing Link</th>
                    </tr>
                </thead>
                <tbody>
                    {filings.map(filing =>
                        <tr key={filing.reportNumber}>
                            <td>{filing.filingDate}</td>
                            <td>{filing.reportType}</td>
                            <td>{filing.reportName}</td>
                            <td>{filing.reportUrl}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : StockFilings.renderFilingsTable(this.state.filings);

        return (
            <div>
                <h1 id="tabelLabel" >Company Filings</h1>
                
                {contents}
            </div>
        );
    }

    async populateFilingData() {
        
        const response = await fetch('stockfiling');
        
        const data = await response.json();
        console.log(data);
        this.setState({ filings: data, loading: false });
        
    }
}
