import { Link } from "react-router-dom";

function SideMenu(){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">
                                BoostMyJoob
                            </div>
                        </a>


                        <li className="nav-item">
                            <Link className="nav-link" to="/profile" >
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Acceuil</span>
                            </Link>
                        </li>


                        <div className="sidebar-heading">
                            Manu
                        </div>

                        <li className="nav-item">
                            <Link className="nav-link" to="/profile/admin/offres" >
                            <i className="fas fa-fw fa-chart-area"></i>
                                <span>Nos offres d'emplois</span>
                            </Link>
                        </li>
                        

                    </ul>
    );
}

export default SideMenu;