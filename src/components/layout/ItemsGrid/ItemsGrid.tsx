import React, { Component } from "react";
import style from "./style.module.css";
export class ItemsGrid extends Component {
    render() {
        return <div className={style.ItemsGrid}>{this.props.children}</div>;
    }
}
