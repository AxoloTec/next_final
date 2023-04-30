import React from "react";
import Menu from "../components/Menu";
import Recalculation from "<EvaStilinski>/components/Recalculation";



function Home1() {
    return (
        <div className="home-container">

            <div className="pagina">
                <Menu />
                <Recalculation />

            </div>
        </div>
    );
}

export default Home1;