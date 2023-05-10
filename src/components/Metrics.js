import { useState } from 'react';
import React from 'react';
import Link from "next/link";


export default function MetricsList() {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const OpcionYaml = {
        "Front-end": {
            "HTML": ["Links", "Images", "Tables", "Lists"],
            "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
            "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
        },
        "Back-end": {
            "PHP": ["Variables", "Strings", "Arrays"],
            "SQL": ["SELECT", "UPDATE", "DELETE"]
        }
    };

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
        setSelectedTopic('');
    };

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };

    return (
        <div class="main">
            <div id="MetricsList" class="tabcontentMetric" >
                <h1>Metric List</h1>
                <hr />
                <br />
                <select name="subject" id="subject" value={selectedSubject} onChange={handleSubjectChange}>
                    <option value="selected">SERVICE_METHOD-60BE1ACE9F360BE5</option>
                    <option value="">Select the service method</option>

                    {Object.keys(OpcionYaml).map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    )
                    )
                    }
                </select>
                <br />
                <br />

                <div class="flex-rowMetric">
                    <img src="graphmetrics.png" height="20px" width="700px" alt="grafica"
                    />
                    <div class="vertical-menuMetric">
                        <table class="table2Metric">
                            <thead>
                                <tr>
                                    <th class="th2Metric">Week 1</th>
                                </tr>
                            </thead>
                            <tbody>
                                {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'].map((week) => (
                                    <tr key={week}>
                                        <td class="td2Metric">
                                            <input type="checkbox" id={week} value={week} />
                                            <label htmlFor={week}>{week}</label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Week in which it was calculated</th>
                            <th>Date range</th>
                            <th>Offical</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Week 1</td>
                            <td>January 1–Sunday, January 7, 2023</td>
                            <td><i>False </i></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 2</td>
                            <td>January 8–Sunday, January 14, 2023</td>
                            <td><i>False </i></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Week 3</td>
                            <td>January 15–Sunday, January 21, 2023</td>
                            <td><i>False </i></td>
                            <td className='td-recalculate'><Link href="/recalculation"><button>Recalculation</button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}