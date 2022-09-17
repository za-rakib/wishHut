import React, { Component } from "react";
import $ from "jquery";


class Item extends Component {

  getSelectedItem() {
    let selectedItem = (this.props.selectedItem === true)? {...this.props.item, default: true}: this.props.item;
    this.props.getSelectedItemTabPane(selectedItem);
  }
  render() {
  //  console.log(this.props);
    $(document).ready(function() {
      $(".tab-pane.active .btn").click(function() {
        $(this)
          .removeClass("btn-danger")
          .addClass("btn-primary");
      });
    });
    return (
      <div className="col-lg-4 col-sm-12">
        <div className="thumbnail">
          <img src={this.props.item.imgSrc_jpg} alt={this.props.item.desc} />
          <div style={{display:'flex ',justifyContent:'space-between',alignItems:'center'}}>
          {
            this.props.item.price &&  <div className="btn" style={{height:"30px", width:"80px",border:"2px solid #428bca",alignItems:"center"}}>$ {this.props.item.price}</div>
          }
        
          <div className="caption">
            <button
              className={`btn ${(this.props.selectedItem === true)? 'btn-danger': 'btn-primary'}`}
              onClick={this.getSelectedItem.bind(this)}
            >
              Try it on
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
