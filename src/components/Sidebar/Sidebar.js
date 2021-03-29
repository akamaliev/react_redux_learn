import React from 'react';
import {
  Link,
  NavLink
} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <div className="logo">
                    <Link to="/">
                        <span uk-icon="icon: pagekit; ratio: 1.3"></span>
                    </Link>
                </div>
                <div className="mnu">
                        <NavLink to="/servers" title="Сервера" className="mnu_item">
                            <span uk-icon="icon: server; ratio: 1.3"></span>
                        </NavLink>
                        <NavLink exact to="/badcams" className="mnu_item">
                            <span uk-icon="icon: warning; ratio: 1.3"></span>
                            <span className="uk-badge uk-badge_custom">99</span>
                        </NavLink>
                        <NavLink to="/map" title="Карта" className="mnu_item">
                            <span uk-icon="icon: location; ratio: 1.3"></span>
                        </NavLink>
                        <NavLink to="/cameras" title="Камеры" className="mnu_item">
                            <span uk-icon="icon:  video-camera; ratio: 1.3"></span>
                        </NavLink>
                        <NavLink to="/chat" title="Чат" className="mnu_item">
                            <span uk-icon="icon:  comments; ratio: 1.3"></span>
                        </NavLink>
                </div>
            </div>
        </div>
    )
}
