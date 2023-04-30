import React from "react";
import Menu from "../components/Menu";
import YamlStatus from "../components/YamlStatus";



function Home2() {
    return (
        <div className="home-container">

            <div className="item-container">
                <Menu />
                <YamlStatus />
            </div>
        </div>
    );
}

export default Home2;