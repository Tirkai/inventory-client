import React, { Component } from "react";
import style from "./style.module.css";
export class Wrapper extends Component {
    render() {
        return <div className={style.Wrapper}>{this.props.children}</div>;
    }
}
