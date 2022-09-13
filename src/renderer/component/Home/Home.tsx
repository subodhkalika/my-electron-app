import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
    return(
        <div className="home-page">
            <div className="home-menu">
                <Link className="home-menu-option" to="/client-list">
                    <div className="menu-button">
                        <div>
                            <img className="menu-img inactive" src={require("../../../../assets/icons/details-icon.png")}></img>
                            <img className="menu-img active" src={require("../../../../assets/icons/details-blue-icon.png")}></img>
                        </div>
                        <div>View Survivor's List</div>
                    </div>
                </Link>
                <Link className="home-menu-option" to="/add-client">
                    <div className="menu-button">
                        <div>
                            <img className="menu-img inactive" src={require("../../../../assets/icons/add-new-icon.png")}></img>
                            <img className="menu-img active" src={require("../../../../assets/icons/add-new-blue-icon.png")}></img>
                        </div>
                        <div>New Survivor Client</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}