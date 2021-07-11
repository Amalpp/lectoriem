import React, { Component } from "react";
import axios from "axios";
import "./Addimage.css";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookname: "",
      authorname: "",
      dp: " ",
      apiResponse: "",
      category:"",
      description:"",
    };
  }
  nc(ev) {
    this.setState({ bookname: ev.target.value });
  }
  ec(ev) {
    this.setState({ authorname: ev.target.value });
  }
  ca(ev) {
    this.setState({category:ev.target.value});

  }
  de(ev){
    this.setState({description:ev.target.value});
  }
  fup(ev) {
    this.setState({ dp: ev.target.files[0] });
  }

  save() {
    var fd = new FormData();
    fd.append("bookname", this.state.bookname);
    fd.append("authorname", this.state.authorname);
    fd.append("description",this.state.description);
    fd.append("category",this.state.category);
    fd.append("dp", this.state.dp);

    axios("http://localhost:5000/ins", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data;",
      },
      data: fd,
    })
      .then((response) => {
        console.log(response, "image added!");
      })
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => {
        console.log(err, "image  not added, try again");
      });
  }
  componentWillMount() {
    this.save();
  }
  render() {
    return (
      <div style={{ maxWidth: "550px", margin: "0px auto", color:"ButtonShadow" }}>
        <h5 className="hTag">Add Books</h5>
        <div className="outerline "></div>
      <p>Book name</p>
      
        <p>
          
          <input
          className="inputTag"
            type="text"
            value={this.state.bookname}
            onChange={this.nc.bind(this)}
          />
        </p>
        <p>
         Author Name
         </p>
          <p>
            <input
              className="inputTag"
              type="text"
              value={this.state.authorname}
              onChange={this.ec.bind(this)}
            />
          </p>
          <p>
         Category
         </p>
          <p>
            <input
              className="inputTag"
              type="text"
              value={this.state.category}
              onChange={this.ca.bind(this)}
            />
          </p>
          <p>
         Description
         </p>
          <p>
            <input
              className="inputTag"
              type="text"
              value={this.state.discription}
              onChange={this.de.bind(this)}
            />
          </p>
          <p>Book Image</p>
          <p>
            <input type="file" onChange={this.fup.bind(this)} />
          </p>
          <p>
            <input type="button" style={{color:"black", backgroundColor:"green" ,height:"2rem", width:"10rem"}}  value="save" onClick={this.save.bind(this)} />
          </p>
          <p className="App-intro">{this.state.apiResponse}</p>
        
      </div>
    );
  }
}
