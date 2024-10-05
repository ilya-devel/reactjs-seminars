import { useState } from "react"
import { FeatureBlock } from "../FeatureBlock/FeatureBlock"
import ProductList from "../ProductList"
import './CatalogPage.sass'

export const CatalogPage = () => {
    const [sizeFilter, setSizeFilter] = useState([])
    const [priceSort, setPriceSort] = useState(null)

    const toggleFilter = (size) => {
        if (sizeFilter.includes(size)) {
            setSizeFilter(prev => prev.filter(el => el !== size))
        } else {
            setSizeFilter([...sizeFilter, size])
        }
    }

    const sortPrice = () => {
        if (!priceSort) {
            setPriceSort(true)
        } else {
            setPriceSort(!priceSort)
        }
    }

    return <>
        <section className="top-head center">
            <h2 className="top-head__heading">NEW ARRIVALS</h2>
            <nav className="breadcrumbs">
                <a href="#" className="breadcrumbs__link">HOME /</a>
                <a href="#" className="breadcrumbs__link">MEN /</a>
                <a href="#" className="breadcrumbs__link breadcrumbs__link_site">NEW ARRIVALS</a>
            </nav>
        </section>

        <section className="filter-sort center">

            <div className="filter-sort__filter-layout">
                <details className="filter">
                    <summary className="filter__summary"><span className="filter__heading">FILTER</span>
                        <svg className="filter__svg" width="15.000000" height="10.000000" viewBox="0 0 15 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector"
                                d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z"
                                fill="#000000" fillOpacity={"1.000000"} fillRule="nonzero" />
                        </svg>
                    </summary>
                    <div className="filter__content">
                        <details className="filter__item">
                            <summary className="filter__summary_sub"><span className="filter__heading_sub">CATEGORY</span></summary>
                            <div className="filter__link_box">
                                <a href="#" className="filter__link">Accessories</a>
                                <a href="#" className="filter__link">Bags</a>
                                <a href="#" className="filter__link">Denim</a>
                                <a href="#" className="filter__link">Hoodies & Sweatshirts</a>
                                <a href="#" className="filter__link">Jackets & Coats</a>
                                <a href="#" className="filter__link">Polos</a>
                                <a href="#" className="filter__link">Shirts</a>
                                <a href="#" className="filter__link">Shoes</a>
                                <a href="#" className="filter__link">Sweaters & Knits</a>
                                <a href="#" className="filter__link">T-Shirts</a>
                                <a href="#" className="filter__link">Tanks</a>
                            </div>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__summary_sub"><span className="filter__heading_sub">BRAND</span></summary>
                        </details>
                        <details className="filter__item">
                            <summary className="filter__summary_sub"><span className="filter__heading_sub">DESIGNER</span></summary>
                        </details>
                    </div>
                </details>
            </div>

            <div className="filter-sort__sort-layout">
                <div className="sort">
                    <details className="sort_filter">
                        <summary className="sort_filter__summary">
                            <span className="sort_filter__name">TRENDING NOW</span>
                            <svg width="10.020004" height="5.003906" viewBox="0 0 10.02 5.00391" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector"
                                    d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                                    fill="#6F6E6E" fillOpacity={"1.000000"} fillRule="nonzero" />
                            </svg>
                        </summary>
                    </details>
                    <details className="sort_filter">
                        <summary className="sort_filter__summary">
                            <span className="sort_filter__name">SIZE</span>
                            <svg width="10.020004" height="5.003906" viewBox="0 0 10.02 5.00391" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector"
                                    d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                                    fill="#6F6E6E" fillOpacity={"1.000000"} fillRule="nonzero" />
                            </svg>
                        </summary>
                        <div className="sort_filter__box">
                            <div className="sort_filter__check">
                                <input type="checkbox" name="" id="sort_filter__check1" value={'XS'}
                                    onChange={e => toggleFilter(e.target.value)} />
                                <label htmlFor="sort_filter__check1">XS</label>
                            </div>
                            <div className="sort_filter__check">
                                <input type="checkbox" name="" id="sort_filter__check2" value={'S'}
                                    onChange={e => toggleFilter(e.target.value)} />
                                <label htmlFor="sort_filter__check2">S</label>
                            </div>
                            <div className="sort_filter__check">
                                <input type="checkbox" name="" id="sort_filter__check3" value={'M'}
                                    onChange={e => toggleFilter(e.target.value)} />
                                <label htmlFor="sort_filter__check3">M</label>
                            </div>
                            <div className="sort_filter__check">
                                <input type="checkbox" name="" id="sort_filter__check4" value={'L'}
                                    onChange={e => toggleFilter(e.target.value)} />
                                <label htmlFor="sort_filter__check4">L</label>
                            </div>
                        </div>
                    </details>
                    <details className="sort_filter" onClick={() => sortPrice()}>
                        <summary className="sort_filter__summary">
                            <span className="sort_filter__name">PRICE</span>
                            <svg width="10.020004" height="5.003906" viewBox="0 0 10.02 5.00391" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector"
                                    d="M5 5C4.83 5 4.67 4.94 4.54 4.83L0.25 1.26C0.11 1.14 0.02 0.96 0 0.78C-0.02 0.59 0.04 0.4 0.16 0.25C0.28 0.11 0.46 0.02 0.64 0C0.83 -0.02 1.02 0.04 1.17 0.16L5 3.36L8.83 0.27C8.9 0.22 8.98 0.17 9.07 0.14C9.16 0.12 9.26 0.11 9.35 0.12C9.45 0.13 9.54 0.16 9.62 0.2C9.7 0.25 9.78 0.31 9.83 0.38C9.9 0.46 9.95 0.54 9.98 0.63C10.01 0.73 10.02 0.83 10.01 0.93C10 1.02 9.97 1.12 9.93 1.2C9.88 1.29 9.81 1.37 9.73 1.42L5.45 4.88C5.32 4.97 5.16 5.01 5 5Z"
                                    fill="#6F6E6E" fillOpacity={"1.000000"} fillRule="nonzero" />
                            </svg>
                        </summary>
                    </details>
                </div>
            </div>


        </section>

        <section className="product_section center">
            <ProductList filter={sizeFilter} sorting={priceSort} />
        </section>

        <section className="page_control center">
            <div className="page_control__pages">
                <svg width="8.000000" height="14.000000" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>
                        Created with Pixso.
                    </desc>
                    <defs />
                    <path id="Vector" d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="#000000" fillOpacity={"1.000000"}
                        fillRule="nonzero" />
                </svg>

                <p className="page_control__page page_active">1</p>
                <p className="page_control__page">2</p>
                <p className="page_control__page">3</p>
                <p className="page_control__page">4</p>
                <p className="page_control__page">5</p>
                <p className="page_control__page">6</p>
                <p className="page_control__page">...</p>
                <p className="page_control__page">20</p>

                <svg width="8.000000" height="14.000000" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>
                        Created with Pixso.
                    </desc>
                    <defs />
                    <path id="Vector" d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="#000000" fillOpacity={"1.000000"}
                        fillRule="nonzero" />
                </svg>


            </div>
        </section>


        <FeatureBlock />
    </>
}