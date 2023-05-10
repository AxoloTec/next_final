import React from "react";
import Menu from "../components/Menu";
import Comparison from "../components/Comparison";


function Home() {
    return (
        <div className="home-container">

            <div className="item-container">
                <Menu />
                <Comparison />

            </div>
        </div>
    );
}

export default Home;