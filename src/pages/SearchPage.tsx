import { List, ListItem, TextField } from "@material-ui/core";
import { PageContent } from "components/layout/PageContent/PageContent";
import { IStore } from "interfaces/common/IStore";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

@inject("store")
@observer
export class SearchPage extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    handleSearch = (value: string) => {
        this.store.search.setSearchValue(value);
        this.store.search.fetchSearchResults();
    };

    componentDidMount() {
        // speechSynthesis.speak(new SpeechSynthesisUtterance("Здарова бандиты!"));
    }

    render() {
        return (
            <PageContent>
                <TextField
                    label="Поиск"
                    value={this.store.search.searchValue}
                    onChange={(event) => this.handleSearch(event.target.value)}
                />
                <List>
                    {this.store.search.result.map((item) => (
                        <Link to={`/items/${item.id}`}>
                            <ListItem>{item.name}</ListItem>
                        </Link>
                    ))}
                </List>
            </PageContent>
        );
    }
}
