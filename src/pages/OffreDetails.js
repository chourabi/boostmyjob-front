
import React from 'react';
import '../front/assets/css/style.css';
import '../front/assets/css/fontawesome-all.min.css';
import { Link } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
    gql,
    createHttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';

class OffreDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            isLoading: true,
            post:null,
            myOffres:[],
            peutPostuler: true
        }

    }

    getOffer() {
        console.log(this.props);

        const httpLink = createHttpLink({
            uri: 'http://localhost:5000/graphql',
        });

        const authLink = setContext((_, { headers }) => {
            // get the authentication token from local storage if it exists
            const token = localStorage.getItem('token');
            // return the headers to the context so httpLink can read them
            return {
                headers: {
                    ...headers,
                    authorization: token ? `${token}` : "",
                }
            }
        });

        const client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache()
        });


        client
            .mutate({
                mutation: gql`
                query{
                    post(id:"${this.state.id}") {
                  id,
                  type,
                  title,
                  body,
                  status,
                  keywords,
                  experience,
                  salary,
                  date_time,
                  category,
                    author {
                    id,
                    displayName,
                    email,
                    address
                  }
                    
                    }  
                }
                
          `
            })
            .then(result => {
                console.log(result);

                this.setState({
                    isLoading:false,
                    post: result.data.post
                })


            }).catch((err) => {
                this.setState({
                    isLoading:false
                })
                console.log(err);

            })
    }

    componentDidMount() {
        this.getOffer();
        this.getMyOffres();
    }

    getMyOffres() {
        const httpLink = createHttpLink({
            uri: 'http://localhost:5000/graphql',
        });

        const authLink = setContext((_, { headers }) => {
            // get the authentication token from local storage if it exists
            const token = localStorage.getItem('token');
            // return the headers to the context so httpLink can read them
            return {
                headers: {
                    ...headers,
                    authorization: token ? `${token}` : "",
                }
            }
        });

        const client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache()
        });


        client
            .mutate({
                mutation: gql`
            query{
                myOffres {
                  id,
                  status,
                  user{
                    id
                    displayName,
                    email,
                  }
                  post{
                  id,
                    title,
                    category
                    
                }
                  
                }
              }
          `
            })
            .then(result => {
                console.log("my offres", result);

                this.setState({
                    myOffres: result.data.myOffres
                })

                this.canPostule();
            }).catch((err) => {

                console.log(err);
                /*console.log(err);
                window.localStorage.clear();
                this.props.history.push('/signin')*/

            })

    }


    addOffreCondidature(){
        console.log(this.props);

        const httpLink = createHttpLink({
            uri: 'http://localhost:5000/graphql',
        });

        const authLink = setContext((_, { headers }) => {
            // get the authentication token from local storage if it exists
            const token = localStorage.getItem('token');
            // return the headers to the context so httpLink can read them
            return {
                headers: {
                    ...headers,
                    authorization: token ? `${token}` : "",
                }
            }
        });

        const client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache()
        });


        client
            .mutate({
                mutation: gql`

            mutation{
                addComment(
                    postId:"${this.state.id}"
                ) {
                    id
                }
                }
                
                `
            })
            .then(result => {
                console.log(result);
                this.getOffer()
                

            }).catch((err) => {
                console.log(err);

            })
    }


    canPostule(){
        this.state.myOffres.map((o)=>{
            if (o.post.id ===this.state.id) {
                this.setState({
                    peutPostuler: false
                   })
            }
        })


    }


    render() {
        return (
            <div>
                {

                    this.state.isLoading === true ?
                        <div id="preloader-active">
                            <div class="preloader d-flex align-items-center justify-content-center">
                                <div class="preloader-inner position-relative">
                                    <div class="preloader-circle"></div>
                                    <div class="preloader-img pere-text">
                                        <img src="assets/img/logo/logthis.state.post.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        :


                        <div>

                            <header>
                                <div class="header-area header-transparrent">
                                    <div class="headder-top header-sticky">
                                        <div class="container">
                                            <div class="row align-items-center">
                                                <div class="col-lg-3 col-md-2">
                                                    <div class="logo">
                                                        <a href="index.html"><img src="assets/img/logo/logthis.state.post.png" alt="" /></a>
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
                                                                        <Link to="/signup" class="btn head-btn1">Cr??er un compte</Link>
                                                                        <Link to="/signin" class="btn head-btn2">connexion</Link>
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


                                <div class="job-post-company pt-120 pb-120">
                                    <div class="container">
                                        <div class="row justify-content-between">
                                            <div class="col-xl-7 col-lg-8">
                                                <div class="single-job-items mb-50">
                                                <div class="job-items">
                                                                <div class="company-img">
                                                                    <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                                                                </div>
                                                                <div class="job-tittle job-tittle2">
                                                                    <a href="#">
                                                                        <h4 style={{ textTransform: "capitalize" }}>{this.state.post.title} <br/>
                                                                        <small>{this.state.post.category}</small>
                                                                        
                                                                        </h4>
                                                                    </a>
                                                                    <ul>
                                                                        <li>{this.state.post.author.displayName}</li>
                                                                        <li><i class="fas fa-envelope"></i>{this.state.post.author.email}</li> 
                                                                        <li><i class="fas fa-map-marker"></i>{this.state.post.author.address}</li> 
                                                                        
                                                                    </ul>

                                                                   
                                                                </div>
                                                            </div>
                                                </div>

                                                <div class="job-post-details">
                                                    <div class="post-details1 mb-50">
                                                        <div class="small-section-tittle">
                                                            <h4>D??scription</h4>
                                                        </div>
                                                        <p>{this.state.post.body}</p>
                                                    </div>
                                                    

                                                </div>

                                            </div>
                                            <div class="col-xl-4 col-lg-4">
                                                <div class="post-details3  mb-50">
                                                    <div class="small-section-tittle">
                                                        <h4>Mission d??tails</h4>
                                                    </div>
                                                    <ul>
                                                        <li>Ajouter le : <span>{new Date(this.state.post.date_time).toISOString().replace("T", " ").replace(".000Z", " ") }</span></li>
                                                         
                                                         
                                                        <li>Type demlpoi : <span>{this.state.post.type}</span></li>
                                                        <li>salaire :  <span>{this.state.post.salary}</span></li> 
                                                    </ul>
                                                    <div class="apply-btn2">

                                                        {
                                                            this.state.peutPostuler === true ?
                                                            <a href="#" onClick={
                                                                (e)=>{
                                                                    e.preventDefault();
                                                                    if (window.localStorage.getItem('token') == null) {
                                                                        this.props.history.push('/signin');
                                                                    }else{
                                                                        this.addOffreCondidature();
                                                                    }
                                                                }
                                                            } class="btn">POSTULER</a>
                                                            :
                                                            <div>
                                                                <span className="badge badge-warning d-block py-2">postul??</span>
                                                            </div>

                                                            
                                                        }
                                                        
                                                    </div>
                                                </div>
                                                <div class="post-details4  mb-50">
                                                    <div class="small-section-tittle">
                                                        <h4>Information sur le recruteur</h4>
                                                    </div>
                                                    <span>{this.state.post.author.displayName}</span>
                                                    <p> </p>
                                                    <ul>
                                                        <li>Name: <span>{this.state.post.author.displayName} </span></li> 
                                                        <li>Email: <span> {this.state.post.author.email} </span></li>
                                                        <li>Address: <span> {this.state.post.author.address} </span></li>
                                                        
                                                    </ul>
                                                </div>
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



                }
            </div>
        );
    }
}


export default OffreDetails;