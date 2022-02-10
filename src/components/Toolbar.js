import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {modalDisplay} from "../features/PageSlice";

const Toolbar = () => {

    const toolbarLinks = useSelector(state => state.page.value.toolbar.links)
    const toolbarBg = useSelector(state => state.page.value.toolbar.bgColor)
    const toolbarImg = useSelector(state => state.page.value.toolbar.image)
    const display = useSelector(state => state.page.value.toolbar.display)

    const dispatch = useDispatch()

    let trigger = true

    function showModal() {
        if(trigger) {
            dispatch(modalDisplay(true))
            trigger = !trigger
        } else {
            dispatch(modalDisplay(false))
            trigger = !trigger
        }
    }

    return (
        <div className="toolbar">
            <div className="d-flex space-btw" style={{backgroundColor: toolbarBg}}>
                <div className="d-flex">
                    {display ? <img src={toolbarImg} alt=""/> : <img/>}
                    {toolbarLinks.map((x, i) => <div key={i}>{x}</div>)}
                </div>
                <button className="btn" onClick={showModal}>Control</button>
            </div>
        </div>
    );
};

export default Toolbar;