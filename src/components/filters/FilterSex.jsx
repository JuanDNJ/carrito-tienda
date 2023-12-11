import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils';

export default function FilterSex({ sexes }) {

    const { setFilters } = useFiltersCtx();
    const handlerChangeSex = (event) => {
        setFilters(prev => ({
            ...prev,
            sex: event.target.value.trim().toLowerCase()
        }))

    }

    return (
        <div className='containerFilterSex'>
            <label htmlFor={'allsex'}>
                <span>{capitalizeWord('all')} {capitalizeWord('sex')}</span>
                <input type="radio" onChange={handlerChangeSex} id="allsex" name="sex" value={'all'} />
            </label>
            {sexes.map((sex, keySex) => (
                <label key={keySex} htmlFor={sex.name}>
                    <span>{capitalizeWord(sex.name)}</span>
                    <input type="radio" onChange={handlerChangeSex} id={sex.name} name="sex" value={sex.name} />
                </label>
            ))}
        </div>
    )

}
