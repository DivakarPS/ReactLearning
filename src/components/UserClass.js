import React from 'react'
import {Link} from "react-router-dom";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name:"default name",
                location:"default location"
            }
        }
        console.log("Child constructor ",this.props.name);
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/divakarPS");
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        // console.log(json);
        console.log("Child component mount for ",this.props.name);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, " ----- ",prevState,"----------", snapshot)
        console.log("this is for child: ",this.props.name)
    }

    render() {
        const {name, avatar_url ,bio} = this.state.userInfo;
        console.log("Child Render ", this.props.name);
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Image: <img
                    src={avatar_url} alt="New"/>
                </h3>
                <h4>About: {bio}</h4>
            </div>
        );
    }
}

export default UserClass;