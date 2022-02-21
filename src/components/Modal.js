import React from 'react';
import {useRef} from 'react';
import {
    setShowLogo,
    setLogoUrl,
    setToolbarColor,
    addToolbarLink,
    removeToolbarLink,
    setShowSidebar,
    setSidebarColor,
    addSidebarLink,
    removeSidebarLink,
    changeMainDirection,
    setMainColor
} from "../features/PageSlice";
import {useDispatch, useSelector} from "react-redux";


const Modal = () => {

    const state = useSelector(state => state.style.value)

    const dispatch = useDispatch()

    const inputImg = useRef()
    const toolbarLinkInput = useRef()
    const sidebarLinkInput = useRef()


    return (
        <div>
            <div className="modal">
                <h3>Toolbar control</h3>
                <div className="d-flex">
                    <label htmlFor="logoCheck">Show logo</label>
                    <input onChange={() => dispatch(setShowLogo())} id="logoCheck" type="checkbox"/>

                </div>
                <div>
                    <div className="d-flex">
                        <input ref={inputImg} type="text" placeholder="image"/>
                        <button onClick={() => dispatch(setLogoUrl(inputImg.current.value))}>Set Logo</button>
                    </div>
                </div>
                <div>
                    <div>Toolbar background color</div>
                    <div className="d-flex">
                        <input type="color" onChange={(e) => dispatch(setToolbarColor(e.target.value))}
                               placeholder="color"/>
                    </div>
                </div>
                <div>
                    <div>Toolbar links</div>
                    <div className="d-flex">
                        <div>
                            <input ref={toolbarLinkInput} type="text" placeholder="link"/>
                            <button onClick={() => dispatch(addToolbarLink(toolbarLinkInput.current.value))}>Add link
                            </button>
                        </div>
                        <div className="d-flex column">
                            {state.toolbarLinks.map((x, i) => <div key={i} className="d-flex">
                                <div>{x}</div>
                                <button onClick={() => dispatch(removeToolbarLink(i))}>Del</button>
                            </div>)}
                        </div>
                    </div>
                </div>


                <h3>Sidebar control</h3>
                <div className="d-flex">
                    <label htmlFor="sidebarCheck">Show sidebar</label>
                    <input onChange={() => dispatch(setShowSidebar())} id="sidebarCheck" type="checkbox"/>
                </div>
                <div>Sidebar background color</div>
                <div className="d-flex">
                    <input type="color" placeholder="sidebar color"
                           onChange={(e) => dispatch(setSidebarColor(e.target.value))}/>
                </div>
                <div>Sidebar links</div>
                <div className="d-flex">
                    <input ref={sidebarLinkInput} type="text" placeholder="sidebar link"/>
                    <button onClick={() => dispatch(addSidebarLink(sidebarLinkInput.current.value))}>Add link</button>
                </div>
                <div className="d-flex column">
                    {state.sidebarLinks.map((x, i) => <div key={i} className="d-flex">
                        <div>{x}</div>
                        <button onClick={() => dispatch(removeSidebarLink(i))}>Del</button>
                    </div>)}

                    <h3>Main control</h3>
                    <div className="d-flex">
                        <input type="color" placeholder="main color"
                               onChange={(e) => dispatch(setMainColor(e.target.value))}/>
                    </div>
                    <div className="d-flex">
                        <label htmlFor="mainCheck">Direction</label>
                        <input onChange={() => dispatch(changeMainDirection())} id="mainCheck" type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;