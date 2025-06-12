import { Outlet } from "react-router";
import PF from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/userContext";


class About extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>About Us</h1>
                <UserContext.Consumer>
                    {({ user }) => <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
                </UserContext.Consumer>
                <p>This page is about Food Villa</p>
                <PF name = {"Amitesh"}/>
                <Profile name = {"AmiteshClass"}/>
            </div>
        );
    };
};

export default About;