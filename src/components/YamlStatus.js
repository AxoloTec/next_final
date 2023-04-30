import React from "react";


export default function YamlStatus() {
    return (



        <div id="YAMLStatus" className="tabcontent">
            <h1>YAML Status</h1>
            <hr />
            <div className="vertical-menu">
                <table style={{ width: '100%' }}>
                    <tbody><tr>
                        <th>File Name</th>
                        <th>Status</th>
                        <th />
                    </tr>
                        <tr>
                            <td style={{ color: '#454340' }}>B2B</td>
                            <td style={{ color: '#454340' }}>Pending</td>
                            <td><b><a style={{ color: '#454340' }} href="https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp">Generate
                                YAML</a></b></td>
                        </tr>
                        <tr>
                            <td>Order</td>
                            <td>OK</td>
                            <td />
                        </tr>
                        <tr>
                            <td>Core</td>
                            <td>OK</td>
                            <td />
                        </tr>
                    </tbody></table>
            </div>
        </div>
    );
}
