import React from 'react';
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import Main from "./Main";

const PageView = () => {
    return (
        <div className="flex2">
            <Toolbar/>
            <div className="d-flex">
                <Sidebar/>
                <Main/>
            </div>
        </div>
    );
};

export default PageView;