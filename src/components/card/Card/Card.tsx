import classNames from "classnames";
import React, { Component } from "react";
import style from "./style.module.css";

interface ICardProps {
    type?: "info" | "success" | "alarm";
    nonPadding?: boolean;
}

export class Card extends Component<ICardProps> {
    render() {
        return (
            <div
                className={classNames(
                    style.Card,
                    {
                        [style.Default]: !this.props.type,
                    },
                    {
                        [style.Info]: this.props.type === "info",
                    },
                    {
                        [style.Success]: this.props.type === "success",
                    },
                    {
                        [style.Alarm]: this.props.type === "alarm",
                    },
                    {
                        [style.NonPadding]: this.props.nonPadding,
                    },
                )}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Card;
