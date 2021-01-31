import { type } from 'jquery';
import React, { Component } from 'react';

export class Stocks extends Component {
    static displayName = Stocks.name;

    constructor(props) {
        super(props);
        this.state = { stocks: [], loading: true };
        
    }

    componentDidMount() {
        
        this.populateStockData();
    }

    static renderStocksTable(stocks) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Company Name</th>
                        <th>CIK Number</th>
                        <th>Dividend Report></th>
                        <th>Filings Page</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock =>
                        <tr key={stock.ticker}>
                            <td>{stock.ticker}</td>
                            <td>{stock.name}</td>
                            <td>{stock.cik}</td>
                            <td><a href='/dividend-report'>Dividend Report</a></td>
                            <td><a href='/filings-page'>SEC Filings</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Stocks.renderStocksTable(this.state.stocks);

        return (
            <div>
                <h1 id="tabelLabel" >Dividend Stocks</h1>
                
                {contents}
            </div>
        );
    }

    async populateStockData() {
        
        const response = await fetch('stock');
        const data = await response.json();
        this.setState({ stocks: data, loading: false });
        
    }
}
