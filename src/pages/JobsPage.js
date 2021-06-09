
import React from 'react';
import '../front/assets/css/style.css';
import '../front/assets/css/fontawesome-all.min.css';
import { Link } from 'react-router-dom';


class JobsPage extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                {
                    /**
                     *     <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
                     */
                }
                <header>
                    <div class="header-area header-transparrent">
                        <div class="headder-top header-sticky">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-3 col-md-2">
                                        <div class="logo">
                                            <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-9 col-md-9">
                                        <div class="menu-wrapper">
                                            <div class="main-menu">
                                                <nav class="d-none d-lg-block">
                                                    <ul id="navigation">
                                                        <li><Link to="/">Acceuil</Link></li>
                                                        <li><Link to="/filteroffers">Trouver un offre</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div class="header-btn d-none f-right d-lg-block">
                                                {
                                                    localStorage.getItem('token') == null ?

                                                        <div>
                                                            <Link to="/signup" class="btn head-btn1">Register</Link>
                                                            <Link to="/signin" class="btn head-btn2">Login</Link>
                                                        </div>
                                                        :
                                                        <div>
                                                            <Link to="/signin" class="btn head-btn2">Profile</Link>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>


                    <div class="job-listing-area pt-120 pb-120">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-4">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="small-section-tittle2 mb-45">
                                                <div class="ion">

                                                </div>
                                                <h4>Filter Jobs</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="job-category-listing mb-50">
                                        <div class="single-listing">
                                            <div class="small-section-tittle2">
                                                <h4>Job Category</h4>
                                            </div>
                                            <div class="select-job-items2">
                                                <select name="select" >
                                                    <option value="">All Category</option>
                                                    <option value="">Category 1</option>
                                                    <option value="">Category 2</option>
                                                    <option value="">Category 3</option>
                                                    <option value="">Category 4</option>
                                                </select><div class="nice-select" tabindex="0"><span class="current">All Category</span><ul class="list"><li data-value="" class="option selected">All Category</li><li data-value="" class="option">Category 1</li><li data-value="" class="option">Category 2</li><li data-value="" class="option">Category 3</li><li data-value="" class="option">Category 4</li></ul></div>
                                            </div>
                                            <div class="select-Categories pt-80 pb-50">
                                                <div class="small-section-tittle2">
                                                    <h4>Job Type</h4>
                                                </div>
                                                <label class="container">Full Time
                                        <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="single-listing">
                                            <div class="small-section-tittle2">
                                                <h4>Job Location</h4>
                                            </div>
                                            <div class="select-job-items2">
                                                <select name="select" >
                                                    <option value="">Anywhere</option>
                                                    <option value="">Category 1</option>
                                                    <option value="">Category 2</option>
                                                    <option value="">Category 3</option>
                                                    <option value="">Category 4</option>
                                                </select><div class="nice-select" tabindex="0"><span class="current">Anywhere</span><ul class="list"><li data-value="" class="option selected">Anywhere</li><li data-value="" class="option">Category 1</li><li data-value="" class="option">Category 2</li><li data-value="" class="option">Category 3</li><li data-value="" class="option">Category 4</li></ul></div>
                                            </div>
                                            <div class="select-Categories pt-80 pb-50">
                                                <div class="small-section-tittle2">
                                                    <h4>Experience</h4>
                                                </div>
                                                <label class="container">1-2 Years
                                        <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="single-listing">
                                            <div class="select-Categories pb-50">
                                                <div class="small-section-tittle2">
                                                    <h4>Posted Within</h4>
                                                </div>
                                                <label class="container">Any
                                        <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="single-listing">
                                            <aside class="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                                                <div class="small-section-tittle2">
                                                    <h4>Filter Jobs</h4>
                                                </div>
                                                <div class="widgets_inner">
                                                    <div class="range_item">
                                                        <div id="slider-range"></div>
                                                          
                                                            <div class="d-flex align-items-center">
                                                                <div class="price_text">
                                                                    <p>Price :</p>
                                                                </div>
                                                                <div class="price_value d-flex justify-content-center">
                                                                    <input type="text" class="js-input-from" id="amount" readonly="" />
                                                                    <span>to</span>
                                                                    <input type="text" class="js-input-to" id="amount" readonly="" />
                                                                </div>
                                                            </div>
                                        </div>
                                                    </div>
                                </aside>
                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-9 col-lg-9 col-md-8">
                                        <section class="featured-job-area">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="count-job mb-35">
                                                            <span>39, 782 Jobs found</span>
                                                            <div class="select-job-items">
                                                                <span>Sort by</span>
                                                                <select name="select" className="form-control" >
                                                                    <option value="">None</option>
                                                                    <option value="">job list</option>
                                                                    <option value="">job list</option>
                                                                    <option value="">job list</option>
                                                                </select>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="single-job-items mb-30">
                                                    <div class="job-items">
                                                        <div class="company-img">
                                                            <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                                                        </div>
                                                        <div class="job-tittle job-tittle2">
                                                            <a href="#">
                                                                <h4>Digital Marketer</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Creative Agency</li>
                                                                <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                                <li>$3500 - $4000</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="items-link items-link2 f-right">
                                                        <a href="job_details.html">Full Time</a>
                                                        <span>7 hours ago</span>
                                                    </div>
                                                </div>
                                                <div class="single-job-items mb-30">
                                                    <div class="job-items">
                                                        <div class="company-img">
                                                            <a href="#"><img src="assets/img/icon/job-list2.png" alt="" /></a>
                                                        </div>
                                                        <div class="job-tittle job-tittle2">
                                                            <a href="#">
                                                                <h4>Digital Marketer</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Creative Agency</li>
                                                                <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                                <li>$3500 - $4000</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="items-link items-link2 f-right">
                                                        <a href="job_details.html">Full Time</a>
                                                        <span>7 hours ago</span>
                                                    </div>
                                                </div>
                                                <div class="single-job-items mb-30">
                                                    <div class="job-items">
                                                        <div class="company-img">
                                                            <a href="#"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                                        </div>
                                                        <div class="job-tittle job-tittle2">
                                                            <a href="#">
                                                                <h4>Digital Marketer</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Creative Agency</li>
                                                                <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                                <li>$3500 - $4000</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="items-link items-link2 f-right">
                                                        <a href="job_details.html">Full Time</a>
                                                        <span>7 hours ago</span>
                                                    </div>
                                                </div>
                                                <div class="single-job-items mb-30">
                                                    <div class="job-items">
                                                        <div class="company-img">
                                                            <a href="#"><img src="assets/img/icon/job-list4.png" alt="" /></a>
                                                        </div>
                                                        <div class="job-tittle job-tittle2">
                                                            <a href="#">
                                                                <h4>Digital Marketer</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Creative Agency</li>
                                                                <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                                <li>$3500 - $4000</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="items-link items-link2 f-right">
                                                        <a href="job_details.html">Full Time</a>
                                                        <span>7 hours ago</span>
                                                    </div>
                                                </div>
                                                <div class="single-job-items mb-30">
                                                    <div class="job-items">
                                                        <div class="company-img">
                                                            <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                                                        </div>
                                                        <div class="job-tittle job-tittle2">
                                                            <a href="#">
                                                                <h4>Digital Marketer</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Creative Agency</li>
                                                                <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                                <li>$3500 - $4000</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="items-link items-link2 f-right">
                                                        <a href="job_details.html">Full Time</a>
                                                        <span>7 hours ago</span>
                                                    </div>
                                                </div>
                                                <div class="single-job-items mb-30">
                                                    <div class="job-items">
                                                        <div class="company-img">
                                                            <a href="#"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                                        </div>
                                                        <div class="job-tittle job-tittle2">
                                                            <a href="#">
                                                                <h4>Digital Marketer</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Creative Agency</li>
                                                                <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                                <li>$3500 - $4000</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="items-link items-link2 f-right">
                                                        <a href="job_details.html">Full Time</a>
                                                        <span>7 hours ago</span>
                                                    </div>
                                                </div>
                                                <div class="single-job-items mb-30">
                                                    <div class="job-items">
                                                        <div class="company-img">
                                                            <a href="#"><img src="assets/img/icon/job-list4.png" alt="" /></a>
                                                        </div>
                                                        <div class="job-tittle job-tittle2">
                                                            <a href="#">
                                                                <h4>Digital Marketer</h4>
                                                            </a>
                                                            <ul>
                                                                <li>Creative Agency</li>
                                                                <li><i class="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                                <li>$3500 - $4000</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="items-link items-link2 f-right">
                                                        <a href="job_details.html">Full Time</a>
                                                        <span>7 hours ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
           

    </main>
                    <footer>
                        <div class="footer-area footer-bg footer-padding">
                            <div class="container">
                                <div class="row d-flex justify-content-between">
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                        <div class="single-footer-caption mb-50">
                                            <div class="single-footer-caption mb-30">
                                                <div class="footer-tittle">
                                                    <h4>About Us</h4>
                                                    <div class="footer-pera">
                                                        <p>Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                        <div class="single-footer-caption mb-50">
                                            <div class="footer-tittle">
                                                <h4>Contact Info</h4>
                                                <ul>
                                                    <li>
                                                        <p>Address :Your address goes
                                        here, your demo address.</p>
                                                    </li>
                                                    <li><a href="#">Phone : +8880 44338899</a></li>
                                                    <li><a href="#">Email : info@colorlib.com</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                        <div class="single-footer-caption mb-50">
                                            <div class="footer-tittle">
                                                <h4>Important Link</h4>
                                                <ul>
                                                    <li><a href="#"> View Project</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                    <li><a href="#">Testimonial</a></li>
                                                    <li><a href="#">Proparties</a></li>
                                                    <li><a href="#">Support</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                        <div class="single-footer-caption mb-50">
                                            <div class="footer-tittle">
                                                <h4>Newsletter</h4>
                                                <div class="footer-pera footer-pera2">
                                                    <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                                                </div>
                                                <div class="footer-form" >
                                                    <div id="mc_embed_signup">
                                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                                            method="get" class="subscribe_form relative mail_part">
                                                            <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                                                class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = ' Email Address '" />
                                                            <div class="form-icon">
                                                                <button type="submit" name="submit" id="newsletter-submit"
                                                                    class="email_icon newsletter-submit button-contactForm"><img src="assets/img/icon/form.png" alt="" /></button>
                                                            </div>
                                                            <div class="mt-10 info"></div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row footer-wejed justify-content-between">
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                        <div class="footer-logo mb-20">
                                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" />hi</a>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                        <div class="footer-tittle-bottom">
                                            <span>5000+</span>
                                            <p>Talented Hunter</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                        <div class="footer-tittle-bottom">
                                            <span>451</span>
                                            <p>Talented Hunter</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                        <div class="footer-tittle-bottom">
                                            <span>568</span>
                                            <p>Talented Hunter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-bottom-area footer-bg">
                            <div class="container">
                                <div class="footer-border">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-xl-10 col-lg-10 ">
                                            <div class="footer-copy-right">

                                            </div>
                                        </div>
                                        <div class="col-xl-2 col-lg-2">
                                            <div class="footer-social f-right">
                                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                                <a href="#"><i class="fas fa-globe"></i></a>
                                                <a href="#"><i class="fab fa-behance"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>




            </div>
        );
    }
}


export default JobsPage;