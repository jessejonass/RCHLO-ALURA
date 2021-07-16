import { useContext } from "react";
import CategoriesContext from "../../contexts/CategoriesContext";

import { MenuItem } from "./MenuItem";

export function Menu() {
    const { categories } = useContext(CategoriesContext);

    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                {categories.all && categories.all.map((m: any) => <MenuItem key={m.id} label={m.label} />)}
            </ul>
        </nav>
    );
}
