import React from 'react';
export default function Comparison() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/*Para el contenido de las opciones del menú */}
            <div className="main">
                {/*Contenido del METRIC LIST */}
                <div id="Comparison" className="tabcontent">
                    <h1>Comparison</h1>
                    <hr />
                    {/* AQUI DEBE DE IR LAS TABLAS*/}
                    <div className="flex-row">
                        {/*Primer boton de opciones*/}
                        <select name="subject" id="Opcion 1">
                            <option value="" selected="selected">
                                Opcion elegida
                            </option>
                        </select>
                        <br />
                        <br />
                        <input type="submit" defaultValue="Replace Threshold" />
                    </div>
                </div>
                <br />
                {/*Botones de siguiente y anterior junto con el texto en el centro*/}
                <div className="flex-row2">
                    <table style={{ width: "30%" }}>
                        <tbody>
                            <tr>
                                <th className="th2">
                                    <a href="#" className="previous round">
                                        ‹
                                    </a>
                                </th>
                                <th className="th2">Responsive Time</th>
                                <th className="th2">
                                    <a href="#" className="previous round">
                                        ‹
                                    </a>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <h5 align="center">Titulo barra </h5>
                <div className="flex-row2">
                    <img
                        src="https://www.wikihow.com/images/3/39/Make-a-Line-Graph-in-Microsoft-Excel-Step-12-Version-2.jpg"
                        height={100}
                        width={290}
                    />
                </div>
                <br />
                <br />
                {/*Titulo de las tablas*/}
                <div className="flex-row">
                    <tittle style={{ width: "40%" }}>Week x</tittle>
                    <tittle style={{ width: "40%" }}>Official Threshold</tittle>
                </div>
                {/* AQUI DEBE DE IR LAS TABLAS*/}
                <div className="flex-row">
                    {/*Primera tabla*/}
                    <table style={{ width: "40%" }}>
                        <tbody>
                            <tr>
                                <th />
                                <th>Green</th>
                                <th>Red</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>546.27</td>
                                <td>464.33</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>539.35</td>
                                <td>458.45</td>
                            </tr>
                        </tbody>
                    </table>
                    {/*Segunda tabla*/}
                    <table style={{ width: "40%" }}>
                        <tbody>
                            <tr>
                                <th />
                                <th>Green</th>
                                <th>Red</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>342.47</td>
                                <td>393.84</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>333.76</td>
                                <td>383.82</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}