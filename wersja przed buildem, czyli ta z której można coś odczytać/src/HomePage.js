import React from 'react';
import './css/HomePage.css';
import LearnItPage from './LearnItPage';
//import ChangeItPage from './ChangeItPage';
//import SolveItPage from './SolveItPage';


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: true,
      solveitp: false,
      learnitp: false,
      changeitp: false,
    };
  }


  //static getDerivedStateFromProps(props, state) {
  //  return {show: props.show };
  //};

  showSolveItPage = () =>{
    this.setState({show: false});
    this.setState({solveitp: true});
    this.setState({learnitp: false});
    this.setState({changeitp: false});
  }

  showLearnItPage = () =>{
    this.setState({show: false});
    this.setState({solveitp: false});
    this.setState({learnitp: true});
    this.setState({changeitp: false});
  }

  showChangeItPage = () =>{
    this.setState({show: false});
    this.setState({solveitp: false});
    this.setState({learnitp: false});
    this.setState({changeitp: true});
  }

  render(){
    if(this.state.show){
      return (
        <div className="container">
          <h1 className="title">chem<sup className="sup">app</sup></h1>
          <main className="home-grid">
            <div className ="card" id ="gradientTen">
              <strong className="card-header">Solve it.</strong>
              <p className="card-p">Discover by yourself how easy chemistry can be. With this awesome tool you can overcome complicated calculations, and find out how your reaction equation shoud look like.</p>
              <div className="center">
                <button className="card-continue-btn" onClick={this.showSolveItPage}>Continue</button>
              </div>
            </div>
            <div className ="card" id ="gradientEleven">
              <strong className="card-header">Learn it.</strong>
              <p className="card-p">Dive into enormous source of knowledge. Explore the secrets of chemistry and its compounds. Here you can find out by yourself what are the applications of any element an more.</p>
              <div className="center">
                <button className="card-continue-btn" onClick={this.showLearnItPage}>Continue</button>
              </div>
            </div>  
            <div className ="card" id ="gradientTwelve">
              <strong className="card-header">Change it.</strong>
              <p className="card-p">After all of this science stuff you can just mess around with settings. When you are bored, nothing would stop you from checking out credits. I'm waiting just to introduce myself.</p>
              <div className="center">
                <button className="card-continue-btn" onClick={this.showChangeItPage}>Continue</button>
              </div>
            </div>
          </main>
          <div class="center"><span className="signature home">© Mikołaj Mrózek</span></div>
        </div>
      );
    //}else if(this.state.solveitp){
    //  return(<SolveItPage />);
    }else if(this.state.learnitp){
      return(<LearnItPage />);
    //}else if(this.state.changeitp){
    //  return(<ChangeItPage />);
    }else{
      this.setState({show: true});
    }
  
      
  }
}

export default HomePage;
