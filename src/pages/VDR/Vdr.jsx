import React, { Component } from "react";
import Contain from "../../components/Model/Contain";
import Button2 from "../../components/Shared/Button/Button2";
import Navbar from "../../components/Shared/Navbar/Navbar";
import BtnGroup from "../../components/Store/BtnGroup";
import Store from "../../components/Store/Store";

export default class Home extends Component {
  constructor(props) {
//console.log({props});
    super(props);
    this.state = {
      selectedItem: null
    };
  }
  getSelectedItemApp(selectedItem) {
    this.setState({
      selectedItem
    });
  }
  render() {
    return (
      <> 
      <Navbar/>
      <div className="container">
        <hr className="style13" />
        <div className="row" >
          <div className="col-lg-8 col-sm-8">
            <BtnGroup />
            <Store getSelectedItemApp={this.getSelectedItemApp.bind(this)} />
          </div>
          <div className="col-lg-4 col-sm-4">
            <Contain selectedItem={this.state.selectedItem} />
            <Button2 selectedItem={this.state.selectedItem} />
          </div>
        </div>
    </div></>
    
    );
  }
}
