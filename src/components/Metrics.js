import { useState } from 'react';
import React from 'react';

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
        <div className="main">
            <div className="tabcontent" id="MetricsList">
                <h1>Metric List</h1>
                <hr />
                <select name="subject" id="subject" value={selectedSubject} onChange={handleSubjectChange}>
                    <option value="">Select the service method</option>
                    {Object.keys(OpcionYaml).map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <br />
                <div className="flex-row">
                    <img
                        className='img'
                        src="https://www.wikihow.com/images/3/39/Make-a-Line-Graph-in-Microsoft-Excel-Step-12-Version-2.jpg"
                        height="180"
                        width="290"
                        align="center"
                    />
                    <div className="vertical-menu">
                        <table className="table2">
                            <thead>
                                <tr>
                                    <th className="th2">Week 1</th>
                                </tr>
                            </thead>
                            <tbody>
                                {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'].map((week) => (
                                    <tr key={week}>
                                        <td className="td2">
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
                            <th>Titulo</th>
                            <th>bla bla bla</th>
                            <th>Offical</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jess</td>
                            <td>es la</td>
                            <td>best</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
