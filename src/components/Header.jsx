import { Filter } from "./Filter"
import { Cart } from "./Cart"
import { ToggleCart } from "./ToggleCart"
export function Header() {

    return (
        <header className="mainHeader">
            <section className="menu">
                <h1>Shopping</h1>
                <ToggleCart />
            </section>
            <Cart />
            <Filter />
        </header>
    )
}