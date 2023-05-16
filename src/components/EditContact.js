import React from "react";
class EditContact extends React.Component {
    constructor(props){
        super(props);
        
    }
    state = {
        name: "",
        email: "",
    };
    
    update = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return
        }
        this.props.updateContactHandler(this.state);
        this.setState({name:"",email:""});
        console.log(this.props);
       /*  this.context.router.push("/add"); */
    };
    render(){    
        return(
            <div className="ui main">
                <h2>
                    Update Contact
                </h2>
                <form className="ui form" onSubmit={this.update.bind(this)}>
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

export default EditContact;