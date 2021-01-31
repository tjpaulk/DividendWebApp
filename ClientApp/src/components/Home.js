import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

    render() {

    return (
      <div>
        <h1>Welcome to <strong><em>TJ's</em></strong> Dividend Web Application!</h1>
            <p>This app uses information scraped from the SEC and other financial sources to provide a
            consolidated view of relavant information for dividend stocks.  The web scraping does
            is done by a Python project.   I hope to eventually consolidate both projects so that it is
            possible to use the other project in tandem with this one to dynamically scrape from this
                web app.</p>
        <ul>
                <li><a href='/Stocks'>Basic Stock Information</a> View basic stock information such as the ticker,
                    Company Name and CIK numbers for stocks that have data available.</li>
                <li><a href='/data-report'>Data Report</a> View a table containing key stock dividend data across
                    multiple years.</li>
                <li><a href='/filings-page'>Filings Page</a> Display and sort a companies filings.  Links to the
                    each filing.   Sorts by date or report type.</li>
        </ul>
            <p>This project is a work in progress as I have time available.  At present, none of the
                features work or provide real data.  The status of each is below</p>
        <ul>
                <li><strong>Basic Stock Information</strong>: Proof of concept with dummy data.  Plan to use this page
                    to also create file and sql storage of company ticker, name and cik information.</li>
          <li><strong>Data Report</strong>: Not yet implemented.</li>
                <li><strong>Filings Page</strong>: Next to be started.  I will be hard coding several stocks to use as the
                    foundational links to this page.</li>
        </ul>
        <p><em>This application is being developed using .Net Core, C# and React.</em></p>
      </div>
    );
  }
}
