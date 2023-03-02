import React from "react";
import './AddContact.css';
class AddContact extends React.Component {
  state = {
    name: " ",
    number: " ",
  };

  add = (e) => {
    e.preventDefault();
    if (this.name === "" || this.number === "") {
      alert("sorry null input ");
      return;
    }

    console.log(this.state);
    this.props.AddContactHandler(this.state);
    this.setState({name:"",number:""});

  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" >
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            ></input>
          </div>
          <button className="ui button blue addBtn" onClick={this.add}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
