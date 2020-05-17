import {
    Button,
    DialogContent,
    DialogTitle,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    MenuItem,
    Typography,
} from "@material-ui/core";
import {
    Add,
    CropFree,
    Delete,
    Edit,
    MoreHoriz,
    TrendingUp,
} from "@material-ui/icons";
import Card from "components/card/Card/Card";
import { CardHeader } from "components/card/CardHeader/CardHeader";
import { AddItemForm } from "components/forms/AddItemForm/AddItemForm";
import { FloatingAction } from "components/layout/FloatingAction/FloatingAction";
import { Header } from "components/layout/Header/Header";
import { ItemsGrid } from "components/layout/ItemsGrid/ItemsGrid";
import { PageContent } from "components/layout/PageContent/PageContent";
import { Wrapper } from "components/layout/Wrapper/Wrapper";
import { IStore } from "interfaces/common/IStore";
import { IAddItemFormData } from "interfaces/form/IAddItemFormData";
import { computed, reaction } from "mobx";
import { disposeOnUnmount, inject, observer } from "mobx-react";
import { Item } from "models/Item";
import React, { Component } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { browserHistory } from "utils/history";

interface IItemPageProps extends RouteComponentProps<{ id: string }>, IStore {}

@inject("store")
@observer
class ItemPage extends Component<IItemPageProps> {
    state = {
        isShowAddItemDrawer: false,
        isShowActionsMenu: false,
    };

    @computed
    get store() {
        return this.props.store!;
    }

    componentDidMount() {
        const routeReaction = reaction(
            () => this.props.match.params.id,
            (id) => this.handleFetchItems(id),
        );
        disposeOnUnmount(this, routeReaction);
        this.handleFetchItems(this.props.match.params.id);
    }

    handleFetchItems(id: string) {
        if (id) {
            this.store.items.fetchItems(id);
        } else {
            this.store.items.fetchItems();
        }
    }

    handleShowDrawer = (value: boolean) => {
        this.setState({
            isShowAddItemDrawer: value,
        });
    };

    handleShowActionsMenu = (value: boolean) => {
        this.setState({
            isShowActionsMenu: value,
        });
    };

    handleUpwardNavigate = () => {
        const currentItem = this.store.items.currentItem;
        if (currentItem && currentItem.parentId) {
            browserHistory.push(`/items/${currentItem.parentId}`);
        } else {
            browserHistory.push(`/items/`);
        }
    };

    handleAddItem = (data: IAddItemFormData) => {
        this.store.items.createItem(
            new Item({
                name: data.name,
                parentId: this.store.items.currentItem?.id ?? null,
            }),
        );
        this.setState({ isShowAddItemDrawer: false });
    };

    render() {
        return (
            <>
                <Header
                    title={this.store.items.currentItem?.name ?? ""}
                    hasUpwardNavigate={!!this.store.items.currentItem}
                    onUpwardNavigate={this.handleUpwardNavigate}
                    action={
                        <Button color="secondary" variant="outlined">
                            <Edit />
                        </Button>
                    }
                />

                <Wrapper>
                    <PageContent>
                        <ItemsGrid>
                            <Card type="info">В наличии</Card>

                            <Card nonPadding>
                                <CardHeader
                                    title="Сущности"
                                    action={
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            onClick={() =>
                                                this.handleShowDrawer(true)
                                            }
                                        >
                                            <Add />
                                        </Button>
                                    }
                                />
                                {this.store.items.items.length ? (
                                    <List>
                                        {this.store.items.items.map(
                                            (item, index) => (
                                                <Link to={`/items/${item.id}`}>
                                                    <ListItem button>
                                                        {item.name}
                                                    </ListItem>
                                                </Link>
                                            ),
                                        )}
                                    </List>
                                ) : (
                                    ""
                                )}
                            </Card>
                        </ItemsGrid>
                    </PageContent>
                </Wrapper>
                <Drawer
                    anchor="bottom"
                    open={this.state.isShowAddItemDrawer}
                    onClose={() => this.handleShowDrawer(false)}
                >
                    <DialogTitle>
                        Новый объект в{" "}
                        {this.store.items.currentItem?.name ?? "корне"}
                    </DialogTitle>
                    <DialogContent>
                        <AddItemForm onSubmit={this.handleAddItem} />
                    </DialogContent>
                </Drawer>
                <Drawer
                    anchor="bottom"
                    open={this.state.isShowActionsMenu}
                    onClose={() => this.handleShowActionsMenu(false)}
                >
                    {" "}
                    <MenuItem>
                        <ListItemIcon>
                            <Edit />
                        </ListItemIcon>
                        <Typography variant="inherit">Редактировать</Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <TrendingUp />
                        </ListItemIcon>
                        <Typography variant="inherit">Переместить</Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <CropFree />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            Сгенерировать QR код
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Delete />
                        </ListItemIcon>
                        <Typography variant="inherit">Удалить</Typography>
                    </MenuItem>
                </Drawer>
                <FloatingAction
                    onClick={() => this.handleShowActionsMenu(true)}
                >
                    <MoreHoriz />
                </FloatingAction>
            </>
        );
    }
}

const ItemPageWithRouter = withRouter(ItemPage);
export { ItemPageWithRouter as ItemPage };
