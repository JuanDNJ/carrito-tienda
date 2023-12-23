
export default function FilterByLimitProducts({ limit, initialLimit }) {

    return (
        <div>
            <input type="range" name="limit" min="5" max="20" onInput={limit} /> Limit: {initialLimit}
        </div>
    )
}