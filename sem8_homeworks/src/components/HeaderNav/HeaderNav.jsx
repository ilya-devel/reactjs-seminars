import { Link } from 'react-router-dom'
import './HeaderNav.sass'
import { useSelector } from 'react-redux'
import logo from './logo.png'

export const HeaderNav = () => {

    const { cart } = useSelector(state => state.products)


    return <header className="header">
        <section className="header__nav center">
            <div className="header__nav__left">
                <Link to={'/'} >
                    <img className="logo__img" src={logo} alt="logo" srcSet="" />
                </Link>
                <svg className="header__nav__left__search" width="26.001648" height="26.791992" viewBox="0 0 26.0016 26.792"
                    fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs />
                    <path id="Forma 1"
                        d="M18.06 17.41C19.67 15.65 20.63 13.39 20.77 11.01C20.91 8.62 20.23 6.27 18.83 4.33C17.44 2.39 15.43 0.99 13.12 0.36C10.82 -0.27 8.37 -0.08 6.19 0.88C4.01 1.85 2.22 3.53 1.13 5.66C0.05 7.78 -0.27 10.22 0.22 12.55C0.72 14.88 2 16.98 3.86 18.48C5.72 19.98 8.03 20.79 10.42 20.79C12.67 20.79 14.86 20.05 16.66 18.7L24.41 26.5C24.49 26.59 24.59 26.66 24.71 26.71C24.82 26.76 24.94 26.79 25.07 26.79C25.19 26.79 25.31 26.76 25.43 26.71C25.54 26.66 25.64 26.59 25.73 26.5C25.9 26.32 26 26.08 26 25.83C26 25.58 25.9 25.34 25.73 25.16L18.06 17.41ZM1.88 10.29C1.9 8.6 2.41 6.96 3.35 5.56C4.3 4.17 5.64 3.08 7.2 2.45C8.76 1.81 10.47 1.65 12.12 1.99C13.77 2.32 15.29 3.14 16.48 4.34C17.66 5.53 18.47 7.06 18.79 8.71C19.12 10.36 18.95 12.08 18.3 13.63C17.65 15.19 16.56 16.52 15.15 17.45C13.75 18.39 12.1 18.89 10.42 18.88C8.15 18.87 5.97 17.96 4.37 16.35C2.77 14.74 1.88 12.56 1.88 10.29Z"
                        fillOpacity={"1.000000"} fillRule="nonzero" />
                </svg>
            </div>

            <div className="header__nav__right">
                <div className="header__nav__right__burger">
                    <label htmlFor="burger">
                        <svg className="header__nav__right__menu" xmlns="http://www.w3.org/2000/svg" width="32" height="25">
                            <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" />
                        </svg>
                    </label>
                    <input type="checkbox" name="burger" id="burger" defaultChecked></input>
                    <div className="header__nav__right__menu__list">
                        <div className="header__nav__right__menu__list__title">menu</div>
                        <div className="header__nav__right__menu__list__section">
                            <p className="header__nav__right__menu__list__section__name">man</p>
                            <div className="header__nav__right__menu__list__section__menu">
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Accessories</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Bags</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Denim</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">T-Shirt</a>
                            </div>
                        </div>
                        <div className="header__nav__right__menu__list__section">
                            <p className="header__nav__right__menu__list__section__name">woman</p>
                            <div className="header__nav__right__menu__list__section__menu">
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Accessories</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Jackets &
                                    Coats</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Polos</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">T-Shirt</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Shirt</a>
                            </div>
                        </div>
                        <div className="header__nav__right__menu__list__section">
                            <p className="header__nav__right__menu__list__section__name">kids</p>
                            <div className="header__nav__right__menu__list__section__menu">
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Accessories</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Jackets &
                                    Coats</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Polos</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">T-Shirt</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Shirt</a>
                                <a href="#" className="header__nav__right__menu__list__section__menu__item">Bags</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={'/auth'}>
                    <svg className="header__nav__right__profile" id="profile-icon" xmlns="http://www.w3.org/2000/svg" width="34"
                        height="29">
                        <g filter="url(#filter0_d_227_14)">
                            <path
                                d="M18.5 19.937C23 19.937 26.656 15.464 26.656 9.968C26.656 4.472 23 0 18.5 0C17.3631 0.0217413 16.2463 0.303398 15.2351 0.823397C14.2239 1.34339 13.3451 2.08794 12.666 3C11.1266 4.99573 10.3082 7.45381 10.344 9.974C10.344 15.465 14 19.937 18.5 19.937ZM18.5 1.813C22 1.813 24.844 5.472 24.844 9.969C24.844 14.466 21.998 18.125 18.5 18.125C15.002 18.125 12.156 14.465 12.155 9.969C12.154 5.473 15 1.813 18.5 1.813ZM24.844 18.125C24.6036 18.125 24.373 18.2205 24.203 18.3905C24.033 18.5605 23.9375 18.7911 23.9375 19.0315C23.9375 19.2719 24.033 19.5025 24.203 19.6725C24.373 19.8425 24.6036 19.938 24.844 19.938C26.526 19.9399 28.1386 20.6088 29.3279 21.7982C30.5172 22.9875 31.1861 24.6 31.188 26.282C31.1875 26.5221 31.0918 26.7523 30.922 26.9221C30.7522 27.0918 30.5221 27.1875 30.282 27.188H6.71997C6.47985 27.1875 6.24975 27.0918 6.07996 26.9221C5.91016 26.7523 5.81449 26.5221 5.81396 26.282C5.81608 24.6001 6.48517 22.9877 7.67444 21.7985C8.86371 20.6092 10.4761 19.9401 12.158 19.938C12.3982 19.938 12.6287 19.8425 12.7986 19.6726C12.9685 19.5027 13.064 19.2723 13.064 19.032C13.064 18.7917 12.9685 18.5613 12.7986 18.3914C12.6287 18.2215 12.3982 18.126 12.158 18.126C9.99541 18.1279 7.92201 18.9875 6.39258 20.5164C4.86314 22.0453 4.00265 24.1185 4 26.281C4.00079 27.0019 4.2875 27.693 4.79724 28.2027C5.30698 28.7125 5.99811 28.9992 6.71899 29H30.282C31.0027 28.9989 31.6936 28.7121 32.2031 28.2024C32.7126 27.6927 32.9992 27.0017 33 26.281C32.9974 24.1187 32.1372 22.0457 30.6083 20.5168C29.0793 18.9878 27.0063 18.1276 24.844 18.125Z" />
                            <path
                                d="M13.0619 3.30538L13.062 3.30542L13.0671 3.29859C13.7006 2.44774 14.5204 1.75316 15.4638 1.26805C16.4057 0.783676 17.4458 0.520983 18.5048 0.500002C22.6373 0.503192 26.156 4.65159 26.156 9.968C26.156 15.2865 22.6346 19.437 18.5 19.437C14.3652 19.437 10.844 15.2873 10.844 9.974H10.844L10.8439 9.9669C10.8097 7.55963 11.5915 5.21169 13.0619 3.30538ZM25.344 9.969C25.344 5.32016 22.3859 1.313 18.5 1.313C14.6143 1.313 11.654 5.321 11.655 9.96911C11.6561 14.6169 14.6162 18.625 18.5 18.625C22.3838 18.625 25.344 14.618 25.344 9.969Z" />
                        </g>
                        <defs>
                            <filter id="filter0_d_227_14" x="0" y="0" width="37" height="37" filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_227_14" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_227_14" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </Link>

                <Link to={'/cart'}>
                    <svg className="header__nav__right__cart" id="cart-icon" xmlns="http://www.w3.org/2000/svg" width="32"
                        height="29">
                        <path
                            d="M26.1998 29C25.5521 28.9738 24.9404 28.6948 24.4961 28.2227C24.0518 27.7506 23.8103 27.1232 23.8234 26.475C23.8365 25.8269 24.1032 25.2097 24.5662 24.7559C25.0292 24.3022 25.6516 24.048 26.2999 24.048C26.9482 24.048 27.5706 24.3022 28.0336 24.7559C28.4966 25.2097 28.7633 25.8269 28.7764 26.475C28.7895 27.1232 28.5479 27.7506 28.1036 28.2227C27.6593 28.6948 27.0477 28.9738 26.3999 29H26.1998ZM6.75183 26.32C6.75183 25.79 6.90901 25.2718 7.20349 24.8311C7.49797 24.3904 7.91654 24.0469 8.40625 23.844C8.89596 23.6412 9.43484 23.5881 9.95471 23.6915C10.4746 23.7949 10.9521 24.0502 11.3269 24.425C11.7017 24.7998 11.957 25.2773 12.0604 25.7972C12.1638 26.317 12.1107 26.8559 11.9078 27.3456C11.705 27.8353 11.3615 28.2539 10.9208 28.5483C10.4801 28.8428 9.96194 29 9.43188 29C9.07977 29.0003 8.73102 28.9311 8.40564 28.7966C8.08026 28.662 7.7846 28.4646 7.53552 28.2158C7.28645 27.9669 7.08891 27.6713 6.9541 27.3461C6.81929 27.0208 6.74988 26.6721 6.74988 26.32H6.75183ZM10.5519 20.686C10.2924 20.6868 10.0398 20.6024 9.83301 20.4457C9.62617 20.2891 9.47648 20.0689 9.40686 19.819L4.57385 2.36401H1.18091C0.867422 2.36401 0.566761 2.23947 0.345093 2.01781C0.123425 1.79614 -0.00109863 1.49549 -0.00109863 1.18201C-0.00109863 0.868519 0.123425 0.567873 0.345093 0.346205C0.566761 0.124537 0.867422 5.81268e-06 1.18091 5.81268e-06H5.46191C5.7214 -0.00080736 5.97394 0.0837201 6.18066 0.240568C6.38739 0.397416 6.53674 0.617884 6.60583 0.868006L11.4388 18.323H24.6168L28.9999 8.27501H14.3999C14.2417 8.27961 14.0843 8.25242 13.9368 8.19507C13.7893 8.13771 13.6548 8.05134 13.5413 7.94108C13.4277 7.83082 13.3375 7.69891 13.2759 7.55315C13.2143 7.40739 13.1825 7.25075 13.1825 7.0925C13.1825 6.93426 13.2143 6.77762 13.2759 6.63186C13.3375 6.4861 13.4277 6.35419 13.5413 6.24393C13.6548 6.13367 13.7893 6.0473 13.9368 5.98994C14.0843 5.93259 14.2417 5.90541 14.3999 5.91001H30.8129C31.0086 5.90996 31.2011 5.95866 31.3733 6.05172C31.5454 6.14478 31.6917 6.27926 31.7988 6.44301C31.9067 6.60729 31.9723 6.79569 31.9897 6.99145C32.0072 7.18721 31.976 7.38424 31.8989 7.565L26.4939 19.977C26.4015 20.1876 26.2499 20.3668 26.0574 20.4927C25.8649 20.6186 25.6399 20.6858 25.4099 20.686H10.5519Z" />
                    </svg>
                    {cart.length > 0 ? <div className="header__nav__right__cart__count">{cart.length > 9 ? '+9' : cart.length}</div> : "" }

                </Link>
            </div>
        </section>
    </header>
}