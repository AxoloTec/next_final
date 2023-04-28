import React from "react";
import Menu from "./Menu";

export default function Welcome() {
    return (


        <div>
            <Menu />
            <div className="pagina">
                <h1>WELCOME TO:
                    <br />
                    <br />
                    Metrics Treshold Calculator </h1>
                <h3>Instructions:</h3>
                <p>
                    Metrics List:
                    <br />
                    Recalculation:
                    <br />
                    YAML Status:
                    <br />
                    Configure YAML File:
                    <br />
                    Settings:
                </p>
            </div>
        </div>
    );
}