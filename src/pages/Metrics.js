import React from "react";
import Menu from "../components/Menu";
import Metrics from "../components/Metrics";


function Home() {
    return (
        <div className="home-container">

            <div className="item-container">
                <Menu />
                <Metrics />

            </div>
        </div>
    );
}

export default Home;