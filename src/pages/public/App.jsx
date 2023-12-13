
import { useGlobalCtx } from '@/context/GlobalCtx'
import MenuFiltersCloseIcon from '@/components/icons/MenuFiltersCloseIcon'
import { Filters } from "@/components/filters/Filters"
import { Fragment } from 'react';
import Bubble from '../../animations/Bubbles';
function App() {

  const initialBubbles = 100;

  const initBubbles = () => {
    let contBubbles = []
    for (let i = 0; i < initialBubbles; i++) {
      contBubbles = [...contBubbles, {
        id: i, Bubble
      }]
    }
    return contBubbles
  }
  const bubbles = initBubbles()
  console.log(bubbles)

  const { isOpenFilters, toogleOpenFilters } = useGlobalCtx()

  return (

    <section className='initialPage'>
      <h2>Initial Page</h2>
      <section className='news'>
        <h3>WHAT`S NEW?</h3>
        {bubbles.map((rec, idKey) => {
          const { id, Bubble } = rec
          return (
            <Fragment key={idKey}>
              <Bubble top={'-'} />
            </Fragment>
          )
        })}

      </section>
      {isOpenFilters && <div className='modalFilters'>
        <div className='containerCloseFilters' onClick={toogleOpenFilters}> <MenuFiltersCloseIcon fill={'#9009'} /></div>
        <Filters />
      </div>}
    </section>

  )

}

export default App

