
import { useGlobalCtx } from '@/context/GlobalCtx'
import MenuFiltersCloseIcon from '@/components/icons/MenuFiltersCloseIcon'
import { Filters } from "@/components/filters/Filters"
import WhatsNews from '@/components/watsnews/WhatsNews'
import Offers from '@//components/offers/Offers'
function HomePage() {



    const { isOpenFilters, toogleOpenFilters } = useGlobalCtx()

    return (

        <section className='initialPage'>
            <h2>Initial Page</h2>
            <WhatsNews />
            <Offers />
            {/* {isOpenFilters && <div className='modalFilters'>
                <div className='containerCloseFilters' onClick={toogleOpenFilters}> <MenuFiltersCloseIcon fill={'#9009'} /></div>
                <Filters />
            </div>} */}
            <p>
                Laborum laboris culpa ullamco duis anim commodo elit aute est anim laborum cupidatat. Cupidatat ullamco est et aliqua sit quis id ullamco culpa veniam. Cupidatat cillum ipsum non Lorem ad cupidatat reprehenderit excepteur aliqua esse duis fugiat. Culpa eiusmod anim adipisicing Lorem elit eu ad dolore mollit incididunt proident nulla labore. Ullamco laboris cupidatat consectetur dolor velit incididunt Lorem aliquip et nulla amet tempor exercitation ad. Esse officia qui sint laborum ex enim fugiat enim.

                Esse occaecat commodo nisi tempor est officia deserunt incididunt qui velit cillum. Laboris enim labore veniam in cillum ullamco enim. Aliqua elit amet occaecat minim nostrud qui sint sunt elit consequat do sint culpa elit. Pariatur exercitation pariatur aute cupidatat non ullamco tempor fugiat ea cupidatat officia aliquip proident ad.

                Id duis ea eiusmod cillum ipsum veniam ut. Non Lorem ex esse officia sunt sunt quis incididunt voluptate. Cillum consectetur fugiat dolore ex esse exercitation aute velit dolore minim reprehenderit duis. Non irure reprehenderit anim fugiat laborum ut et id ut.

                Id sunt proident pariatur proident velit id ad sit nisi. Deserunt nostrud quis ad consequat. Reprehenderit adipisicing commodo nisi irure ex quis. Sint ut deserunt ullamco nostrud dolor enim laboris. Veniam cillum minim eu labore dolore et aliqua. Dolor velit nostrud officia sint.

                Consectetur minim cupidatat magna officia enim. Incididunt elit occaecat proident elit veniam cupidatat reprehenderit magna sunt ipsum culpa incididunt culpa. Lorem irure culpa consectetur Lorem excepteur consequat ea dolor elit nostrud.

                Aliquip qui laboris dolor labore reprehenderit nisi consequat non eu et. Incididunt sunt et enim commodo veniam duis cillum laborum laborum ad amet. Velit Lorem id eiusmod eu consequat consectetur irure commodo culpa Lorem. Quis ad duis ut minim. Et in magna aliquip consequat tempor reprehenderit aliqua velit culpa tempor velit culpa fugiat fugiat.

                Eu minim aliqua pariatur elit est commodo. Et dolore reprehenderit duis velit nisi quis. Incididunt adipisicing Lorem fugiat officia sunt qui. Occaecat exercitation sit eu voluptate qui aliqua id cillum anim id proident. Irure sunt aute in officia ad est sint veniam et ullamco velit eiusmod. Duis deserunt culpa deserunt aliqua mollit aliqua. Occaecat mollit consequat commodo nostrud dolor culpa occaecat consequat nisi mollit labore ea.

                Voluptate nostrud cillum exercitation aliquip ea velit adipisicing ipsum ullamco sint ipsum commodo. Ea cillum laborum commodo anim. Officia duis est commodo laboris pariatur. Enim aliqua magna nisi ea aliqua adipisicing sit nostrud. Duis labore labore enim est do. Proident enim enim sit exercitation. Fugiat tempor exercitation laboris nostrud aute velit laborum.

                Esse officia ut duis ea non ut eu incididunt proident officia elit sit nisi. Labore sunt mollit laborum ad occaecat. Est aliquip pariatur sunt ad dolore ut et. Ea fugiat proident eiusmod cupidatat et officia consequat velit adipisicing excepteur consequat adipisicing. Commodo adipisicing amet cillum nostrud enim enim eu. Laboris labore esse officia est do eiusmod incididunt irure labore. Cupidatat tempor aliquip commodo excepteur.

                Officia sint adipisicing nulla ipsum amet reprehenderit sunt amet. In dolore cillum laboris nisi exercitation reprehenderit commodo est culpa labore cillum irure. Incididunt nulla anim velit cupidatat consectetur commodo mollit pariatur nostrud velit consectetur tempor duis minim. Ipsum ex enim culpa nostrud aute eu enim deserunt. Voluptate do mollit aute culpa deserunt voluptate. Eiusmod nisi Lorem nulla ad dolor.
            </p>
        </section>

    )

}

export default HomePage

