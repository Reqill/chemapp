import React from 'react';
import './css/DataBank.css';
import LearnItPage from './LearnItPage';
import PeriodicTableFULL from './data/PeriodicTableFULL.json'


  //generate table element//
  function ListElement(props) {
    const { elementData } = props;
    const { name, symbol, number, period, category, atomic_mass, appearance, phase, melt, boil, density, molar_heat, discovered_by, named_by, source, summary, spectral_img, ypos, xpos, shells, electron_configuration, electron_affinity, electronegativity_pauling, ionization_energies } = elementData;
    return(
            <tr>
                <td>
                    <div className="elementOfListOfElements" id='notMetal'>
                        <sup className="number">{number}</sup>
                        <div className='center'>
                            <strong className="element">{symbol}</strong>
                        </div>
                        <div className='center'>
                            <p className="mass">{atomic_mass}</p>  
                        </div>
                    </div>
                </td>
                <td>
                    <div className='description'>
                        <h3>{name}</h3>
                        <p className='summary'>{summary}</p>
                    </div>
                </td>
            </tr>

    ); 
  }
  //----------------------//



  class DataBank extends React.Component {
      constructor(props) {
          super(props);
  
          this.state = {
              show: true,
          };
      }
  
      
      generatePeriodicTableFULL = () => {
        return PeriodicTableFULL.map((el, i) => <ListElement elementData={el} key={i} />);
      }
  
      showDataBank = () => {
          this.setState({ show: false });
      }
  
      render() {
          if(this.state.show) {
              return (
                  <div>
                      <h2>chem<sup className="sup">app</sup></h2>
                      <div className='center'><div>{this.generatePeriodicTableFULL()}</div></div>
                      <div className='center'>
                          <button className='back-btn' id="bank-btn" onClick={this.showDataBank}>Back</button>
                      </div>
                  </div>
              );
          }
          return <LearnItPage />;
      }
  }
  
  export default DataBank;

/*
                <td>
                    <table>
                        <tr>
                            <td>
                                <p>Electronegativity (Pauling): </p>
                            </td>
                            <td>
                                <p>{electronegativity_pauling}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Category: </p>
                            </td>
                            <td>
                                <p>{category}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Appearance: </p>
                            </td>
                            <td>
                                <p>{appearance}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Phase: </p>
                            </td>
                            <td>
                                <p>{phase}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Meting point: </p>
                            </td>
                            <td>
                                <p>{melt}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Boiling point: </p>
                            </td>
                            <td>
                                <p>{boil}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Density: </p>
                            </td>
                            <td>
                                <p>{density}</p>
                            </td>
                        </tr>
                    </table>
                </td>
*/