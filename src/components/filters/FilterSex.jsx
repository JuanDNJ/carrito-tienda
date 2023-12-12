import styles from './css/filters.module.css'
import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils';
import { useEffect, useState, useRef } from 'react';

export default function FilterSex({ sexes }) {

    const { setFilters } = useFiltersCtx();
    const refSexSub = useRef();
    const [subCatSex, setSubCatSex] = useState('all')

    const handlerChangeSex = (event) => {
        setSubCatSex(prev => event.target.value)


    }
    useEffect(() => {
        if (subCatSex === 'all') {
            refSexSub.current.checked = true
        } else {
            refSexSub.current.checked = false
        }
        setFilters(prev => ({
            ...prev,
            sex: subCatSex
        }))
    }, [subCatSex])
    return (
        <div className={styles.containerFilterSex}>
            <label htmlFor={'allsex'}>
                <span>{capitalizeWord('all')} {capitalizeWord('sex')}</span>
                <input ref={refSexSub} type="radio" onChange={handlerChangeSex} id="allsex" name="sex" value={'all'} />
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
