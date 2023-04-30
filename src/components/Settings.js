
import React from 'react';

export default function Settings() {
    return (
        < div className="main" >
            {/*Contenido del METRIC LIST */}
            < div id="Setting" className="tabcontent" >
                <h1>Setting</h1>
                <hr />
                <h2 align="center">Quarters per Update</h2>
                {/*Boton de opciones*/}
                <select name="subject" id="Opcion 1" align="right">
                    <option value selected="selected">Select subject</option>
                </select><br /><br />
                <h2 align="center">Times and Dates</h2>
                <div className="flex-row">
                    <table style={{ width: '100%' }}>
                        <tbody><tr>
                            <th />
                            <th style={{ width: '100%' }}>Day</th>
                        </tr>
                            <tr>
                                <th><u>Time</u></th>
                                <th>Sunday</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thrusday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                            </tr><tr>
                                <th>1:00</th>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <th>2:00</th>
                            </tr>
                            <tr>
                                <th>3:00</th>
                            </tr>
                            <tr>
                                <th>4:00</th>
                            </tr>
                            <tr>
                                <th>5:00</th>
                            </tr>
                            <tr>
                                <th>6:00</th>
                            </tr>
                            <tr>
                                <th>7:00</th>
                            </tr>
                            <tr>
                                <th>8:00</th>
                            </tr>
                            <tr>
                                <th>9:00</th>
                            </tr>
                            <tr>
                                <th>10:00</th>
                            </tr>
                            <tr>
                                <th>11:00</th>
                            </tr>
                            <tr>
                                <th>12:00</th>
                            </tr>
                            <tr>
                                <th>13:00</th>
                            </tr>
                            <tr>
                                <th>14:00</th>
                            </tr>
                            <tr>
                                <th>15:00</th>
                            </tr>
                            <tr>
                                <th>16:00</th>
                            </tr>
                            <tr>
                                <th>17:00</th>
                            </tr>
                            <tr>
                                <th>18:00</th>
                            </tr>
                            <tr>
                                <th>19:00</th>
                            </tr>
                            <tr>
                                <th>20:00</th>
                            </tr>
                            <tr>
                                <th>21:00</th>
                            </tr>
                            <tr>
                                <th>22:00</th>
                            </tr>
                            <tr>
                                <th>23:00</th>
                            </tr>
                            <tr>
                                <th>00:00</th>
                            </tr>
                        </tbody></table>
                    <input type="submit" defaultValue="Compare" />
                </div>
            </div ></div >
    )
}