import React from 'react';

export default function BadCams(props) {

    let badCams = props.badCams.map((cam, index) => {
        return (
            <li key={index}>{cam.camName + ", " + cam.camIp}</li>
        )
    })

    return (
        <div>
            <h1>Проблемные камеры</h1>
            <ul>
                {badCams}
            </ul>
        </div>
    )
}
