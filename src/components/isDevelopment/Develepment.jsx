import { IS_DEVELOPMENT } from "@/config";
import { useCartCtx } from '../../context/CartCtx'
import { useFiltersCtx } from "../../context/FilterCtx";
export default function Development() {
    const { filters } = useFiltersCtx()
    const { cart } = useCartCtx()

    return (
        <dialog open>
            {IS_DEVELOPMENT && <div>
                <pre>{JSON.stringify(filters, null, 2)}</pre>
                {cart && <pre>{JSON.stringify(cart, null, 2)}</pre>}
            </div>}
            <button type="button">Close</button>
        </dialog>
    )
}