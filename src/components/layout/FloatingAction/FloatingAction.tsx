import { Fab } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style.module.css";

interface IFloatingActionProps {
    onClick: () => void;
}

export class FloatingAction extends Component<IFloatingActionProps> {
    render() {
        return (
            <div className={style.FloatingAction}>
                <Fab size="small" color="primary" onClick={this.props.onClick}>
                    {this.props.children}
                </Fab>
            </div>
        );
    }
}
