import React from "react";
class Test extends React.Component {
    state = {
        name: "",
        email: "",
    };
    render(){
        return(
            <div className="ui main">
                <h2>
                    Update Contact
                </h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" onChange={ (e) => this.setState({name: e.target.value})} value ={this.state.name} ></input>
                        </div>
                        <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" onChange={ (e) => this.setState({email: e.target.value})} value ={this.state.email} ></input>
                        </div>
                        <button className="ui button red">Update</button>
                    </form>
                </div>

        );

    };
}

export default Test;