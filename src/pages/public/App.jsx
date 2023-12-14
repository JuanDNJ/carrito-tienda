
import { useGlobalCtx } from '@/context/GlobalCtx'
import MenuFiltersCloseIcon from '@/components/icons/MenuFiltersCloseIcon'
import { Filters } from "@/components/filters/Filters"
import WhatsNews from '@/components/watsnews/WhatsNews'

function App() {



  const { isOpenFilters, toogleOpenFilters } = useGlobalCtx()

  return (

    <section className='app'>
      <h2>Initial Page</h2>
      <WhatsNews />
      {isOpenFilters && <div className='modalFilters'>
        <div className='containerCloseFilters' onClick={toogleOpenFilters}> <MenuFiltersCloseIcon fill={'#9009'} /></div>
        <Filters />
      </div>}
    </section>

  )

}

export default App

