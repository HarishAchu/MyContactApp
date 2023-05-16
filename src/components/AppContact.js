import React from "react";
class AppContact extends React.Component {
    
    state = {
        name: "",
        email: "",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.props);
       /*  this.context.router.push("/add"); */
    };
    render(){    
        return(
            <div className="ui main">
                <h2>
                    App Contact
                </h2>
                <form className="ui form" onSubmit={this.add.bind(this)}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" onChange={ (e) => this.setState({name: e.target.value})} value ={this.state.name} ></input>
                        </div>
                        <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" onChange={ (e) => this.setState({email: e.target.value})} value ={this.state.email} ></input>
                        </div>
                        <button className="ui button red">Add</button>
                    </form>
                </div>

        );
    };
}

export default AppContact;