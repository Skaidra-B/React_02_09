import React from 'react';
import {useSelector} from "react-redux";

const Sidebar = () => {

    const state = useSelector(state => state.style.value)

    return (
        <div>
            {state.showSidebar && <div style={{backgroundColor: state.sidebarColor}} className="sidebar d-flex column">
                <div>
                    {state.sidebarLinks.map((x, i) => <a href="/" key={i}>{x}</a>)}
                </div>
            </div>}
        </div>

    );
};

export default Sidebar;