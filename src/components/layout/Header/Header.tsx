import { IconButton, Typography } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import React, { Component } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import style from "./style.module.css";

interface IHeaderProps {
    title: string;
    action: JSX.Element | JSX.Element[];
    hasUpwardNavigate?: boolean;
    onUpwardNavigate?: () => void;
}

export class Header extends Component<IHeaderProps> {
    render() {
        return (
            <div className={style.Header}>
                <Wrapper>
                    <div className={style.Container}>
                        <div className={style.Title}>
                            {this.props.hasUpwardNavigate ? (
                                <IconButton
                                    onClick={this.props.onUpwardNavigate}
                                >
                                    <ArrowUpward />
                                </IconButton>
                            ) : (
                                ""
                            )}

                            <Typography variant="h5">
                                {this.props.title}
                            </Typography>
                        </div>
                        <div className={style.Action}>{this.props.action}</div>
                    </div>
                </Wrapper>
            </div>
        );
    }
}
