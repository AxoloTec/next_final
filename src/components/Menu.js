import React from 'react';
import Link from 'next/link'


export default function Menu() {
    return (
        <div class="sidebar">

            <div class="row">
                <div class="leftcolumn">
                    <div class="card" style={{ height: "100%" }}>
                        <img src="https://cdn.worldvectorlogo.com/logos/autozone-logo.svg" height="80" width="240"></img>
                        <h5><i>Metrics Threshold Calculator</i></h5>
                        <div class="tab">
                            <Link href="/">
                                <button class="tablinks" onclick="openCity(event, 'MetricsList')">
                                    <img class='stats' src='stats.png' height="25" width="25" align='left'></img>Metrics List</button></Link>
                            <br></br>
                            <Link href="/recalculation">
                                <button class="tablinks" onclick="openCity(event, 'Recalculation')">
                                    <img class='recalculate' src='recalculate.png' height="25" width="25" align='left'></img>Recalculation</button>
                            </Link>
                            <br></br>
                            <Link href="/yaml_status">
                                <button class="tablinks" onclick="openCity(event, 'YAMLStatus')">
                                    <img class='file-export' src='file-export.png' height="25" width="25" align='left'></img> YAML Status</button>
                            </Link>
                            <br></br>
                            <Link href="/configure_yaml_file">
                                <button class="tablinks" onclick="openCity(event, 'GenerateReport')">
                                    <img class='edit-yaml' src='edit-yaml.png' height="25" width="25" align='left'></img>Configure YAML File</button>
                            </Link>
                            <br></br>
                            <Link href="/settings">
                                <button class="tablinks" onclick="openCity(event, 'Setting')">
                                    <img class='settings' src='settings.png' height="25" width="25" align='left'></img>Settings</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}