import forWomen from './for-women.png'
import forMen from './for-men.png'
import forKids from './for-kids.png'
import accessoriesMobile from './accessories-mobile.png'
import accessories from './accessories.png'
import './CategoryBlock.sass'
import { Link } from 'react-router-dom'


export const CategoryBlock = () => {
    return <>
        <section className="categories center">

            <div className="category">
                <Link to={'/catalog'}>
                    <img className="category__img" src={forWomen} alt="for-women" />
                    <div className="category__absolute_central">
                        <div className="category__layout"></div>
                    </div>
                    <div className="category-header font-lato upcase category__absolute_central">
                        <span className="category__main_txt">
                            30% off
                        </span>
                        <span className="category__select_txt">
                            for women
                        </span>
                    </div>
                </Link>
            </div>


            <div className="category">
                <Link to={'/catalog'}>
                    <img className="category__img" src={forMen} alt="for-men" />
                    <div className="category__absolute_central">
                        <div className="category__layout"></div>
                    </div>
                    <div className="category-header font-lato upcase category__absolute_central">
                        <span className="category__main_txt">
                            hot deal
                        </span>
                        <span className="category__select_txt">
                            for men
                        </span>
                    </div>
                </Link>
            </div>


            <div className="category">
                <Link to={'/catalog'}>
                    <img className="category__img" src={forKids} alt="for-kids" />
                    <div className="category__absolute_central">
                        <div className="category__layout"></div>
                    </div>
                    <div className="category-header category__absolute_central">
                        <span className="category__main_txt">
                            new arrivals
                        </span>
                        <span className="category__select_txt">
                            for kids
                        </span>
                    </div>
                </Link>
            </div>


            <div className="category category__full_width">
                <Link to={'/catalog'}>
                    <picture>
                        <source media="(max-width: 767px)" srcSet={accessoriesMobile} />
                        <img className="category__img" src={accessories} alt="accesories" />
                    </picture>
                    <div className="category__absolute_central">
                        <div className="category__layout"></div>
                    </div>
                    <div className="category-header category__absolute_central">
                        <span className="category__main_txt">
                            luxirous & trendy
                        </span>
                        <span className="category__select_txt">
                            accesories
                        </span>
                    </div>
                </Link>
            </div>

        </section>
    </>
}