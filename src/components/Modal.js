import React from 'react';
import {useRef} from 'react';
import {addToolbar, changeToolbarImg, displayLogo, changeColor, displaySidebar, sidebarLinks, sidebarBgColor, mainBg, mainDirection} from "../features/PageSlice";
import {useDispatch} from "react-redux";

const Modal = () => {

    const dispatch = useDispatch()

    const inputImg = useRef()
    const bgInput = useRef()
    const linkInput = useRef()

    const sidebarBgColorInput = useRef()
    const sidebarLinkInput = useRef()

    const mainBgColorInput = useRef()

    function changeImg() {
        dispatch(changeToolbarImg(inputImg.current.value))
    }

    function addToolLink() {
        dispatch(addToolbar(linkInput.current.value))
    }
    function changeClr() {
        dispatch(changeColor(bgInput.current.value))
    }

    function dispLogo() {
        dispatch(displayLogo(true))

    }
    function hideLogo() {
        dispatch(displayLogo(false))

    }
    function dispSidebar() {
        dispatch(displaySidebar(true))
    }
    function hideSidebar() {
        dispatch(displaySidebar(false))
    }

    function changeSidebarClr() {
        dispatch(sidebarBgColor(sidebarBgColorInput.current.value))
    }
    function addSidebarLinks() {
        dispatch(sidebarLinks(sidebarLinkInput.current.value))
    }
    function changeMainBg() {
        dispatch(mainBg(mainBgColorInput.current.value))
    }
    function mainFlex() {
        dispatch(mainDirection("d-flex"))
    }
    function mainColumn() {
        dispatch(mainDirection("d-flex column"))
    }

    return (
        <div className="modal">
            <h3>Toolbar control</h3>
            <div className="d-flex">
                <button onClick={dispLogo}>Logo on</button>
                <button onClick={hideLogo}>Logo off</button>
            </div>
            <div>
                <div>Logo image</div>
                <div className="d-flex">
                    <input ref={inputImg} type="text" placeholder="image"/>
                    <button onClick={changeImg}>Add image</button>
                </div>
            </div>
            <div>
                <div>Toolbar background color</div>
                <div className="d-flex">
                    <input ref={bgInput} type="text" placeholder="color"/>
                    <button onClick={changeClr}>Add bg</button>
                </div>
            </div>
            <div>
                <div>Toolbar links</div>
                <div className="d-flex">
                    <input ref={linkInput} type="text" placeholder="link"/>
                    <button onClick={addToolLink}>Add link</button>
                </div>
            </div>
            <h3>Sidebar control</h3>
            <div className="d-flex">
                <button onClick={dispSidebar}>Sidebar on</button>
                <button onClick={hideSidebar}>Sidebar off</button>
            </div>
            <div>Sidebar background color</div>
            <div className="d-flex">
                <input ref={sidebarBgColorInput} type="text" placeholder="color"/>
                <button onClick={changeSidebarClr}>Add bg</button>
            </div>
            <div>Sidebar links</div>
            <div className="d-flex">
                <input ref={sidebarLinkInput} type="text" placeholder="link"/>
                <button onClick={addSidebarLinks}>Add link</button>
            </div>
            <h3>Main control</h3>
            <div className="d-flex">
                <input ref={mainBgColorInput} type="text" placeholder="color"/>
                <button onClick={changeMainBg}>Add bg</button>
            </div>
            <div>Main direction</div>
            <div className="d-flex">
                <button onClick={mainFlex}>Flex</button>
                <button onClick={mainColumn}>Column</button>
            </div>

        </div>
    );
};

export default Modal;