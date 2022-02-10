import React from 'react';
import {useSelector} from "react-redux";

const Main = () => {

    const mainBg = useSelector(state => state.page.value.main.bgColor)
    const mainDir = useSelector(state => state.page.value.main.direction)

    return (
        <div style={{backgroundColor: mainBg}} className="main">
            <div className={mainDir}>
                <div>
                    example
                </div>
                <div>
                    example
                </div>
                <div>
                    example
                </div>
                <div>
                    example
                </div>
            </div>
        </div>

    );
};

export default Main;