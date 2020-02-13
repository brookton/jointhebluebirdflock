import React from 'react';
import Header from './Header'
import BCorp from './bCorp'
import First from './First'
import Second from './Second'
import Third from './Third'

class Home extends React.Component {
  redirect(){
    window.location.href="https://bluebirdbotanicals.com";
  }
  render(){
  return (
    <div className="Home">
      <Header />
      <BCorp redirect={this.redirect}/>
      <First redirect={this.redirect}/>
      <Second redirect={this.redirect}/>
      <Third redirect={this.redirect}/>
    </div>
  );
}
}
export default Home;