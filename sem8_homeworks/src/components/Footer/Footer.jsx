import { Link } from 'react-router-dom'
import './Footer.sass'
import authorPhoto from './intersect.png'

export const Footer = () => {
    return <>
        <div className="layout__subscribe-info">
            <div className="subscribe-info center font-lato">
                <div className="subscribe-info__about-me">
                    <img className="about-me__photo" src={authorPhoto} alt="my photo"></img>
                    <div className="about-me__desc">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        <span className="f-st-i">a pulvinar purus condimentum“</span>
                    </div>
                </div>
                <div className="subscribe-info__subscribe">
                    <div className="title upcase">SUBSCRIBE</div>
                    <div className="desc">FOR OUR NEWLETTER AND PROMOTION</div>
                    <div className="btn-layout">
                        <input type="email" name="input_email" id="input_email" className="input_email"
                            placeholder="Enter Your Email"></input>
                        <button type="submit" className="btn-subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>


        <footer className="background_section">
            <div className="brand-sign center">
                <div className="brand-sign__copyright font-lato">
                    © 2022 Brand All Rights Reserved.
                </div>
                <div className="brand-sign__social-net">
                    <div className="social-net__item">
                        <Link to={"https://ru.wikipedia.org/wiki/Facebook"} reloadDocument target='_blank'>
                            <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" width="11"
                                height="16" viewBox="0 0 11 16" fill="none">
                                <path
                                    d="M9.08836 8.28L9.50686 5.61602H6.89022V3.88729C6.89022 3.15847 7.25574 2.44806 8.42765 2.44806H9.61722V0.179975C9.61722 0.179975 8.53772 0 7.50561 0C5.35073 0 3.9422 1.27593 3.9422 3.5857V5.61602H1.54688V8.28H3.9422V14.72H6.89022V8.28H9.08836Z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="social-net__item">
                        <Link to={"https://ru.wikipedia.org/wiki/Instagram"} reloadDocument target='_blank'>
                            <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" width="16"
                                height="17" viewBox="0 0 16 17" fill="none">
                                <g clipPath="url(#clip0_190_1610)">
                                    <path
                                        d="M8.13677 4.68162C6.02163 4.68162 4.31555 6.38494 4.31555 8.49666C4.31555 10.6084 6.02163 12.3117 8.13677 12.3117C10.2519 12.3117 11.958 10.6084 11.958 8.49666C11.958 6.38494 10.2519 4.68162 8.13677 4.68162ZM8.13677 10.9769C6.76991 10.9769 5.65248 9.86463 5.65248 8.49666C5.65248 7.12869 6.76658 6.01639 8.13677 6.01639C9.50695 6.01639 10.6211 7.12869 10.6211 8.49666C10.6211 9.86463 9.50363 10.9769 8.13677 10.9769ZM13.0056 4.52557C13.0056 5.02029 12.6065 5.41541 12.1143 5.41541C11.6188 5.41541 11.223 5.01697 11.223 4.52557C11.223 4.03416 11.6221 3.63572 12.1143 3.63572C12.6065 3.63572 13.0056 4.03416 13.0056 4.52557ZM15.5364 5.42869C15.4799 4.2367 15.2072 3.18084 14.3325 2.31092C13.4612 1.441 12.4036 1.16873 11.2097 1.10897C9.9792 1.03924 6.29101 1.03924 5.0605 1.10897C3.8699 1.16541 2.81233 1.43768 1.93768 2.3076C1.06302 3.17752 0.793639 4.23338 0.733776 5.42537C0.663937 6.65389 0.663937 10.3361 0.733776 11.5646C0.790313 12.7566 1.06302 13.8125 1.93768 14.6824C2.81233 15.5523 3.86658 15.8246 5.0605 15.8844C6.29101 15.9541 9.9792 15.9541 11.2097 15.8844C12.4036 15.8279 13.4612 15.5556 14.3325 14.6824C15.2039 13.8125 15.4766 12.7566 15.5364 11.5646C15.6063 10.3361 15.6063 6.65721 15.5364 5.42869ZM13.9468 12.8828C13.6874 13.5336 13.1852 14.0349 12.53 14.2972C11.5489 14.6857 9.22094 14.5961 8.13677 14.5961C7.05259 14.5961 4.72128 14.6824 3.74353 14.2972C3.09169 14.0383 2.58951 13.5369 2.32678 12.8828C1.93768 11.9033 2.02747 9.57908 2.02747 8.49666C2.02747 7.41424 1.941 5.0867 2.32678 4.11053C2.58619 3.45975 3.08837 2.95838 3.74353 2.69608C4.72461 2.3076 7.05259 2.39725 8.13677 2.39725C9.22094 2.39725 11.5523 2.31092 12.53 2.69608C13.1818 2.95506 13.684 3.45643 13.9468 4.11053C14.3359 5.09002 14.2461 7.41424 14.2461 8.49666C14.2461 9.57908 14.3359 11.9066 13.9468 12.8828Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_190_1610">
                                        <rect width="14.8991" height="17" fill="white" transform="translate(0.68396)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                    <div className="social-net__item">
                        <Link to={"https://ru.wikipedia.org/wiki/Pinterest"} reloadDocument target='_blank'>
                            <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" width="13"
                                height="16" viewBox="0 0 13 16" fill="none">
                                <g clipPath="url(#clip0_190_1618)">
                                    <path
                                        d="M6.7402 0.203125C3.55552 0.203125 0.408081 2.34063 0.408081 5.8C0.408081 8 1.63726 9.25 2.38221 9.25C2.68951 9.25 2.86643 8.3875 2.86643 8.14375C2.86643 7.85313 2.13079 7.23438 2.13079 6.025C2.13079 3.5125 4.03043 1.73125 6.48878 1.73125C8.60259 1.73125 10.167 2.94062 10.167 5.1625C10.167 6.82187 9.50585 9.93437 7.3641 9.93437C6.59121 9.93437 5.93006 9.37187 5.93006 8.56563C5.93006 7.38438 6.74951 6.24062 6.74951 5.02187C6.74951 2.95312 3.83487 3.32812 3.83487 5.82812C3.83487 6.35313 3.90006 6.93437 4.13286 7.4125C3.70451 9.26875 2.82919 12.0344 2.82919 13.9469C2.82919 14.5375 2.91299 15.1188 2.96886 15.7094C3.0744 15.8281 3.02163 15.8156 3.18304 15.7563C4.74744 13.6 4.69157 13.1781 5.39928 10.3562C5.78107 11.0875 6.76814 11.4812 7.55034 11.4812C10.8468 11.4812 12.3274 8.24688 12.3274 5.33125C12.3274 2.22813 9.66415 0.203125 6.7402 0.203125Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_190_1618">
                                        <rect width="11.9193" height="16" fill="white" transform="translate(0.408081)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                    <div className="social-net__item">
                        <Link to={"https://ru.wikipedia.org/wiki/Твиттер"} reloadDocument target='_blank'>
                            <svg className="social-logo" xmlns="http://www.w3.org/2000/svg" width="17"
                                height="16" viewBox="0 0 17 16" fill="none">
                                <g clipPath="url(#clip0_190_1614)">
                                    <path
                                        d="M14.4181 4.74107C14.4281 4.88319 14.4281 5.02535 14.4281 5.16747C14.4281 9.50247 11.1509 14.4974 5.16096 14.4974C3.31558 14.4974 1.60132 13.9593 0.159302 13.0253C0.421495 13.0558 0.673569 13.0659 0.94585 13.0659C2.46851 13.0659 3.8702 12.5482 4.98953 11.6649C3.5576 11.6345 2.3576 10.6903 1.94415 9.39081C2.14585 9.42125 2.34751 9.44156 2.5593 9.44156C2.85172 9.44156 3.14418 9.40094 3.41643 9.32991C1.92401 9.02531 0.80465 7.70553 0.80465 6.11163V6.07103C1.23825 6.31469 1.74249 6.46697 2.2769 6.48725C1.39959 5.89841 0.824826 4.89335 0.824826 3.75628C0.824826 3.14716 0.98614 2.58878 1.26851 2.10147C2.87187 4.09131 5.28195 5.39078 7.98443 5.53294C7.93403 5.28928 7.90376 5.0355 7.90376 4.78169C7.90376 2.97457 9.35586 1.5025 11.1609 1.5025C12.0987 1.5025 12.9457 1.89844 13.5407 2.53803C14.2768 2.39591 14.9827 2.12178 15.6079 1.74616C15.3659 2.5076 14.8516 3.14719 14.176 3.55325C14.8315 3.48222 15.4668 3.29944 16.0516 3.04566C15.608 3.69538 15.0533 4.27403 14.4181 4.74107Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_190_1614">
                                        <rect width="15.8924" height="16" fill="white" transform="translate(0.159302)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
}