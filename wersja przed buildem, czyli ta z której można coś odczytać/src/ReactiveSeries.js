import React from 'react';
import './css/ReactiveSeries.css';
import LearnItPage from './LearnItPage';
import reactiveSeries from './data/reactiveSeries.json';

function ReactiveElement(props){
    const { elementData } = props;
    const { symbol, name, idx, number} = elementData;
    if(name === "Hydrogen"){
        return(
            <div className="elementOfReactiveSeries gradient101">
                <sup className="number-reactive">{number}</sup>
                <div className='center'>
                    <strong className="element-reactive">{symbol}</strong>
                </div>
                <div className='center'>
                    <p className="name-reactive">{name}</p>  
                </div>
            </div>
        );
    }else if(idx === "less-reactive"){
        return(
            <div className="elementOfReactiveSeries gradient102">
                <sup className="number-reactive">{number}</sup>
                <div className='center'>
                    <strong className="element-reactive">{symbol}</strong>
                </div>
                <div className='center'>
                    <p className="name-reactive">{name}</p>  
                </div>
            </div>
        );
    }else{
        return(
            <div className="elementOfReactiveSeries gradient103">
                <sup className="number-reactive">{number}</sup>
                <div className='center'>
                    <strong className="element-reactive">{symbol}</strong>
                </div>
                <div className='center'>
                    <p className="name-reactive">{name}</p>  
                </div>
            </div>
        );
    }
}


class ReactiveSeries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
        };
    }


    generateReactiveSeries = () => {
        return reactiveSeries.map((el, i) => <ReactiveElement elementData={el} key={i} />);
    }

    showLearnItPage = () => {
        this.setState({ show: false });
    }

    render() {
        if(this.state.show) {
            return (
                <div>                      
                    <h1 className="titul">chem<sup className="sup">app</sup></h1>    

                    <main className="reactive-grid center">
                        {this.generateReactiveSeries()}
                    </main>

                    <div className="center">
                        <button className='back-btn' id="reactive" onClick={this.showLearnItPage}>Back</button>
                    </div>
                   <div class="center"><span className="signature reactive">© Mikołaj Mrózek</span></div>              
                </div>
            );
        }
        return <LearnItPage />;
    }
}

export default ReactiveSeries;