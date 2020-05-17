import React, { Component } from "react";
import style from "./style.module.css";
export class PageContent extends Component {
    render() {
        return <div className={style.PageContent}>{this.props.children}</div>;
    }
}
