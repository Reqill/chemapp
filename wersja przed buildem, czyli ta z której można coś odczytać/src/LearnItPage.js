import React from 'react';
import './css/LearnItPage.css';
import HomePage from './HomePage';
import PeriodicTable from './PeriodicTable';
import ReactiveSeries from './ReactiveSeries.js';
import DataBank from './DataBank';

class LearnItPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            periodicTable: false,
            reactiveSeries: false,
            solubility: false,
            databank: false
        };
    }

    showHomePage = () => {
        this.setState({ show: false });
        this.setState({ periodicTable: false });
        this.setState({ reactiveSeries: false });
        this.setState({ solubility: false });
        this.setState({ databank: false });
    };

    showPeriodicTable = () => {
        this.setState({ show: false });
        this.setState({ periodicTable: true });
        this.setState({ reactiveSeries: false });
        this.setState({ solubility: false });
        this.setState({ databank: false });
    };

    showReactiveSeries = () => {
        this.setState({ show: false });
        this.setState({ periodicTable: false });
        this.setState({ reactiveSeries: true });
        this.setState({ solubility: false });
        this.setState({ databank: false });
    };

    showSolubility = () => {
        this.setState({ show: false });
        this.setState({ periodicTable: false });
        this.setState({ reactiveSeries: false });
        this.setState({ solubility: true });
        this.setState({ databank: false });
    };

    showDatabank = () => {
        this.setState({ show: false });
        this.setState({ periodicTable: false });
        this.setState({ reactiveSeries: false });
        this.setState({ solubility: false });
        this.setState({ databank: true });
    }




    render() {
        if (this.state.show) {
            return (
                <div className="container">
                    <h1 className="title">chem<sup className="sup">app</sup></h1>
                    <main className="learn-grid">
                        <div className="learn-card" id="gradientTen" onClick={this.showPeriodicTable}>
                            <strong className="card-header">Periodic table.</strong>
                        </div>
                        <div className="learn-card" id="gradientEleven" onClick={this.showSolubility}>
                            <strong className="card-header">Solubility.</strong>
                        </div>
                        <div className="learn-card" id="gradientThirteen" onClick={this.showReactiveSeries}>
                            <strong className="card-header">Reactive series.</strong>
                        </div>
                        <div className="learn-card" id="gradientTwelve" onClick={this.showDatabank}>
                            <strong className="card-header">Databank.</strong>
                        </div>
                    </main>
                    <div className="center">
                        <button className="back-btn" id="learn-btn" onClick={this.showHomePage}>Back</button>
                    </div>
                    <div class="center"><span className="signature learn">© Mikołaj Mrózek</span></div>
                </div>
            );
            }else if(this.state.periodicTable){
                return(
                    <PeriodicTable />
                );
            }else if(this.state.reactiveSeries){
                return(
                    <ReactiveSeries /> 
                );
            /*}else if(this.state.solubility){
                return(
                    <HomePage />
                );*/
            }else if(this.state.databank){
                return(
                    <DataBank />
                );
        } else {
            return (
                <HomePage />
            );
        }
    }
}

export default LearnItPage;