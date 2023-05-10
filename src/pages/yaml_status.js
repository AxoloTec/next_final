
import React from "react";
import Menu from "../components/Menu";
import YamlStatus from "<EvaStilinski>/components/YamlStatus";


export default function Home() {
    return (
        <div className="home-container">

            <div className="item-container-status">
                <Menu />
                <YamlStatus />

            </div>
        </div>
    );
}