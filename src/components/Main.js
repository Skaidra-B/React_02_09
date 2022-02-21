import React from 'react';
import {useSelector} from "react-redux";

const Main = () => {

    const state = useSelector(state => state.style.value)

    return (
        <div style={{backgroundColor: state.mainBackgroundColor}}
             className={`main d-flex ${state.mainDirection ? "" : "column"}`}>

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

    );
};

export default Main;