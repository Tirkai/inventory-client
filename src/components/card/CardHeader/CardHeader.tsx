import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style.module.css";
interface ICardHeaderProps {
    title: string;
    action?: JSX.Element | JSX.Element[];
}

export class CardHeader extends Component<ICardHeaderProps> {
    render() {
        return (
            <div className={style.CardHeader}>
                <div className={style.Container}>
                    <div className={style.Title}>
                        <Typography variant="h6">{this.props.title}</Typography>
                    </div>
                    <div className={style.Action}>{this.props.action}</div>
                </div>
            </div>
        );
    }
}
