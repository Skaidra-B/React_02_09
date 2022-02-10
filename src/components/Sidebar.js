import React from 'react';
import {useSelector} from "react-redux";

const Sidebar = () => {

    const display = useSelector(state => state.page.value.sidebar.display)
    const sidebarBg = useSelector(state => state.page.value.sidebar.bgColor)
    const sidebarLink = useSelector(state => state.page.value.sidebar.links)

    return (
        <div>
            {display ? <div style={{backgroundColor: sidebarBg}} className="sidebar d-flex column">
                <div>
                    {sidebarLink.map((x, i) => <div key={i}>{x}</div>)}
                </div>
            </div> : null}
        </div>

    );
};

export default Sidebar;