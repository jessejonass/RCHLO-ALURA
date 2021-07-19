import { useContext } from "react";
import CategoriesContext from "../../../../contexts/CategoriesContext";
import { BreadcrumbItem } from './BreadcrumbItem';

export function Breadcrumbs() {
    const { categories } = useContext(CategoriesContext);
    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    {categories.current && categories.current.map((c: any) => <BreadcrumbItem key={c.id} link={c.link} label={c.name} />)}
                </ol>
            </nav>
        </section>
    )
}