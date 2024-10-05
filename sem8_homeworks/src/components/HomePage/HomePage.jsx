import { Link } from "react-router-dom"
import CategoryBlock from "../CategoryBlock"
import { FeatureBlock } from "../FeatureBlock/FeatureBlock"
import './HomePage.sass'
import tabletImg from './demo-our-brand-tablet.png'
import image from './demo-our-brand.png'
import ProductList from "../ProductList"

export const HomePage = () => {
    return <>
        <section className="our_brand_demo">
            <div className="our_brand_demo__section">
                <picture className="our_brand_demo__section__image_layout">
                    <source media="(max-width: 1024px)" srcSet={tabletImg} />
                    <img className="our_brand_demo__section__image" src={image} alt="" />
                </picture>
                <div className="our_brand_demo__section__text">
                    <div className="our_brand_demo__section__text__bold">the brand</div>
                    <div className="our_brand_demo__section__text__medium">of luxerious <span
                        className="our_brand_demo__section__text__select">fashion</span></div>
                </div>
            </div>
        </section>

        <CategoryBlock />

        {/* product list */}
        <section className="product_section center">
            <p className="product_section__title">Fetured Items</p>
            <p className="product_section__description">Shop for items based on what we featured in this week</p>
            <ProductList countItem={6} />
            <Link to={'/catalog'} className="products-box__link-decoration">
                <div className="products-box__btn_all center">Browse All Product</div>
            </Link>
        </section>

        <FeatureBlock />
    </>
}