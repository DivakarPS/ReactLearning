import UserClass from "./UserClass";
import React from 'react'

class AboutClass extends React.Component{
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent component Mounted");
    }

    render() {
        console.log("Parent render called");
        return (
        <div className="about-container">
            <h1>About Us Page</h1>
            <UserClass
                name={"Divakar"}
                location={"Pothanur"}
            />
            <UserClass
                name={"murari"}
                location={"bihar"}
            />
            {/* <UserClass*/}
            {/*    name={"Divakar"}*/}
            {/*    location={"Pothanur"}*/}
            {/*/>*/}
        </div>
        )
    }
}

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us Page</h1>
            <UserClass
                name={"Divakar"}
                location={"Pothanur"}
            />
        </div>
    )
}

export default AboutClass;