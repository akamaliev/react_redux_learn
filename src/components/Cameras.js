import React from 'react'

export default function Cameras(props) {

    function addBadCam () {
        // props.addBadCam(camId)
        console.log(this);
    }



    let camsList = props.camsList.map((cam, index) => {
        return (
            <li key={cam.id}>{cam.camName + ", " + cam.camIp}<button onClick={addBadCam}>+</button></li>
        )
    })

    return (
        <div>
            <h1>Камеры</h1>
            <ul>
                {camsList}
            </ul>
        </div>
    )
}
