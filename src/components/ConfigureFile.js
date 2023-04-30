
import React from 'react';

export default function ConfigureFile() {
    return (
        <div>
            <title>YAML Report</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            {/*Para el contenido de las opciones del menú */}
            <div className="main">
                {/*Contenido del METRIC LIST */}
                <div id="GenerateReport" className="tabcontent">
                    <h1>Configure YAML File</h1>
                    <hr />
                    <div className="flex-row">
                        {/* Tarjeta servicios*/}
                        <div className="vertical-menu" style={{ width: '45%' }}>
                            <table className="table2">
                                <tbody><tr>
                                    <th className="th2"> Service ID</th>
                                </tr>
                                    <tr>
                                        <td className="td2"><input type="checkbox" id="cbox2" defaultValue="second_checkbox" /> Service 1<p />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td2"><input type="checkbox" id="cbox2" defaultValue="second_checkbox" /> Service 2<p />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td2"><input type="checkbox" id="cbox2" defaultValue="second_checkbox" /> Service 3<p />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td2"><input type="checkbox" id="cbox2" defaultValue="second_checkbox" /> Service 4<p />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td2"><input type="checkbox" id="cbox2" defaultValue="second_checkbox" /> Service 5<p />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td2"><input type="checkbox" id="cbox2" defaultValue="second_checkbox" /> Service 6<p />
                                        </td>
                                    </tr>
                                </tbody></table>
                        </div>
                        {/*Tarjeta para enviar YAML*/}
                        <div className="w3-card-4" style={{ width: '53%' }}>
                            {/*Para el titulo y el boton de la tabla de envio*/}
                            <div className="flex-row">
                                <h3>Report</h3>
                                <button type="submit" value="Compare"> Add New</button>
                            </div>
                            <hr />
                            <table>
                                {/*Primera columna*/}
                                <tbody><tr>
                                    <th>File Name: </th>
                                    <td>
                                        <select>
                                            <option value selected="selected" id="Opcion 1">Select subject</option>
                                        </select>
                                    </td>
                                </tr>
                                    {/*Segunda columna*/}
                                    <tr>
                                        <th>Email: </th>
                                        <td> ""</td>
                                    </tr>
                                    {/*Tercera columna*/}
                                    <tr>
                                        <th>From </th>
                                        <td><input /></td>
                                    </tr>
                                    {/*Cuarta columna*/}
                                    <tr>
                                        <th>To </th>
                                        <td><input /></td>
                                    </tr>
                                    {/*Quinta columna*/}
                                    <tr>
                                        <th>Schedule: </th>
                                        <td><input /></td>
                                    </tr>
                                    {/*Sexta columna*/}
                                    <tr>
                                        <th>Service ID </th>
                                        <td style={{ border: '1px solid #dddddd' }}>Uno</td>
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>
                </div>
                <button type="submit" value="Compare"> Save Changes</button>
            </div>
        </div>
    )
};