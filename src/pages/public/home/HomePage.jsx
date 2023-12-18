import { useGlobalCtx } from '@/context/GlobalCtx'
import MenuFiltersCloseIcon from '@/components/icons/MenuFiltersCloseIcon'
import { Filters } from "@/components/filters/Filters"
import WhatsNews from '@/components/watsnews/WhatsNews'
import Offers from '@//components/offers/Offers'

export default function HomePage() {

    const { isOpenFilters, toogleOpenFilters } = useGlobalCtx()

    return (

        <section className='initialPage'>
            <h2>Initial Page</h2>
            <WhatsNews />
            <Offers />
            {isOpenFilters && <div className='modalFilters'>
                <div className='containerCloseFilters' onClick={toogleOpenFilters}> <MenuFiltersCloseIcon fill={'#9009'} /></div>
                <Filters />
            </div>}
        </section>

    )

}
