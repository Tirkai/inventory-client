import { IBrowserRoute } from "interfaces/common/IBrowserRoute";
import { ItemPage } from "pages/ItemPage";
import { SearchPage } from "pages/SearchPage";

export const routes: IBrowserRoute[] = [
    {
        path: "/items/",
        exact: true,
        component: ItemPage,
    },
    {
        path: "/items/:id",
        exact: true,
        component: ItemPage,
    },
    {
        path: "/search",
        exact: true,
        component: SearchPage,
    },
];
