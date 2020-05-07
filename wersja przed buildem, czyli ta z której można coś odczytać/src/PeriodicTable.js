import React from 'react';
import './css/PeriodicTable.css';
import LearnItPage from './LearnItPage';
import periodicTable from './data/periodicTable.json'

  function TableElement(props) {
    const { elementData } = props;
    const { blank, z, short, mass, idx, name } = elementData;
  
    if (blank){
        return <div className="periodicCard blank" />; 
    }else if(idx === "La"){
        return (
        <div title={name} className="periodicCard" id='lanthanoids'>
            <sup className="periodicZ">{z}</sup>
            <div className='center'>
                <strong className="periodicElement">{short}</strong>
            </div>
            <div className='center'>
                <p className="periodicMass">{mass}</p>  
            </div>
        </div>
        );
    }else if(idx === "Ac"){
        return (
            <div title={name} className="periodicCard" id='actinoids'>
                <sup className="periodicZ">{z}</sup>
                <div className='center'>
                    <strong className="periodicElement">{short}</strong>
                </div>
                <div className='center'>
                    <p className="periodicMass">{mass}</p>  
                </div>
            </div>
            );
    }else if(idx === "notMetal"){
        return(
            <div title={name} className="periodicCard" id='notMetal'>
                <sup className="periodicZ">{z}</sup>
                <div className='center'>
                    <strong className="periodicElement">{short}</strong>
                </div>
                <div className='center'>
                    <p className="periodicMass">{mass}</p>  
                </div>
            </div>
            );
    }else{
        return(
            <div title={name} className="periodicCard">
                <sup className="periodicZ">{z}</sup>
                <div className='center'>
                    <strong className="periodicElement">{short}</strong>
                </div>
                <div className='center'>
                    <p className="periodicMass">{mass}</p>  
                </div>
            </div>
            );
    }
  }
  
  class PeriodicTable extends React.Component {
      constructor(props) {
          super(props);
  
          this.state = {
              show: true,
          };
      }
  
      generatePeriodicTable = () => {
        return periodicTable.map((el, i) => <TableElement elementData={el} key={i} />);
      }
  
      showLearnItPage = () => {
          this.setState({ show: false });
      }
  
      render() {
          if(this.state.show) {
              return (
                  <div>                       
                    
                    <div id="scrollable">
                        <div className="center"><h2 id="periodic-title">chem<sup className="sup">app</sup></h2></div>
                        <main className="biggrid">
                            {this.generatePeriodicTable()}
                        </main>
                        <div className='center'>
                            <div className="center"><button className='back-btn' id="yeeeeeeet" onClick={this.showLearnItPage}>Back</button></div>
                        </div>
                        <div class="center"><span className="signature periodic">© Mikołaj Mrózek</span></div>
                    </div>
                    
                  </div>
              );
          }
          return <LearnItPage />;
      }
  }
  
  export default PeriodicTable;