import styles from './css/filtersex.module.css'
import { useFiltersCtx } from '@/context/FilterCtx'
import { capitalizeWord } from '@/utils';
import { useEffect, useState, useRef } from 'react';

export default function FilterSex({ sexes }) {

    const { setFilters } = useFiltersCtx();
    const [subCatSex, setSubCatSex] = useState('all')
    const spaceBlank = '\r'
    const handlerChangeSex = (event) => {
        setSubCatSex(prev => event.target.value)


    }
    const renderSex = sexes.map((sex, keySex) => {
        let sexName = capitalizeWord(sex.name);
        let sexCapitalize = capitalizeWord('sex')
        if (sex.name === 'all') {
            sexName += spaceBlank + sexCapitalize
        }
        return (
            <label key={keySex} htmlFor={sexName}>
                <span>{sexName}</span>
                <input type="radio" onChange={handlerChangeSex} id={sexName} name="sex" value={sex.name} />
            </label>
        )
    })

    useEffect(() => {
        setFilters(prev => ({
            ...prev,
            sex: subCatSex
        }))
    }, [subCatSex])

    return (
        <div className={styles.containerFilterSex}>
            <strong>Filter Sex Product</strong>
            {renderSex}
        </div>
    )

}
