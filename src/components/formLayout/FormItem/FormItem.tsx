import React, { Component } from "react";
import style from "./style.module.css";

interface IFormItemProps {
    tooltip?: string;
    tooltipType?: "info" | "error";
    align?: "flex-end" | "flex-start" | "center";
}

export class FormItem extends Component<IFormItemProps> {
    static defaultProps = {
        align: "left",
    };

    render() {
        return (
            <div className={style.formItem}>
                <div
                    className={style.container}
                    style={{ alignItems: this.props.align }}
                >
                    {this.props.children}
                </div>
                {this.props.tooltip?.length ? (
                    <div className={style.tooltip}>{this.props.tooltip}</div>
                ) : (
                    ""
                )}
            </div>
        );
    }
}
