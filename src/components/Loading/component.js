import React, { Component } from "react";

class Loading extends Component {
    render() {
        const { children, load } = this.props;
        return load ? children : (
            <div className="progress">
            <div className="progress-bar progress-bar-striped active" 
                style={{ width: "100%" }}
                />
            </div>
            );
        }
}


export default Loading;
