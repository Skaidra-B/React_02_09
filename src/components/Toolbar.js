import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    setShowModal
} from "../features/PageSlice";

const Toolbar = () => {

    const state = useSelector(state => state.style.value)

    const dispatch = useDispatch()

    return (
        <div className="toolbar">
            <div className="d-flex space-btw" style={{backgroundColor: state.toolbarColor}}>
                <div className="d-flex">
                    {!state.showLogo && <img src={state.logoUrl} alt=""/>}
                    {state.toolbarLinks.map((x, i) => <a href="/" key={i}>{x}</a>)}
                </div>
                <button className="btn" onClick={() => dispatch(setShowModal())}>Control</button>
            </div>
        </div>
    );
};

export default Toolbar;