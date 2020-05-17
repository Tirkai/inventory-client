import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, ListAlt, Notifications, Search } from "@material-ui/icons";
import React, { Component } from "react";
import { browserHistory } from "utils/history";
import style from "./style.module.css";
export class BottomNavigationPanel extends Component {
    handleNavigate = (path: string) => {
        browserHistory.push(path);
    };

    render() {
        return (
            <div className={style.BottomNavigationPanel}>
                <BottomNavigation
                    classes={{
                        root: style.ComponentContainer,
                    }}
                >
                    <BottomNavigationAction
                        label="Домой"
                        value="home"
                        icon={<Home color="secondary" />}
                        onClick={() => this.handleNavigate("/")}
                    />
                    <BottomNavigationAction
                        label="Список"
                        value="list"
                        icon={<ListAlt color="secondary" />}
                        onClick={() => this.handleNavigate("/items")}
                    />
                    <BottomNavigationAction
                        label="Список"
                        value="notifications"
                        icon={<Notifications color="secondary" />}
                        onClick={() => this.handleNavigate("/notifications")}
                    />
                    <BottomNavigationAction
                        label="Поиск"
                        value="search"
                        icon={<Search color="secondary" />}
                        onClick={() => this.handleNavigate("/search")}
                    />
                </BottomNavigation>
            </div>
        );
    }
}

export default BottomNavigationPanel;
