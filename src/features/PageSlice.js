import {createSlice} from "@reduxjs/toolkit";

export const pageSlice = createSlice({

    name: "page",
    initialState: {
        value: {
            toolbar:
                {
                    image: "https://cdn.logo.com/hotlink-ok/logo-social.png",
                    bgColor: "green",
                    links: [],
                    display: true
                }
            ,
            sidebar: {
                display: true,
                bgColor: "pink",
                links: []
            },
            main: {
                bgColor: "grey",
                direction: "d-flex"
            },
            modal: {
                display: false
            }
        }
    },
    reducers: {
        addToolbar: (state, action) => {
            state.value.toolbar.links.push(action.payload)
        },
        changeToolbarImg: (state, action) => {
            state.value.toolbar.image = action.payload
        },
        changeColor: (state, action) => {
            state.value.toolbar.bgColor = action.payload
        },
        displayLogo: (state, action) => {
            state.value.toolbar.display = action.payload
        },

        displaySidebar: (state, action) => {
            state.value.sidebar.display = action.payload
        },
        sidebarLinks: (state, action) => {
            state.value.sidebar.links.push(action.payload)
        },
        sidebarBgColor: (state, action) => {
            state.value.sidebar.bgColor = action.payload
        },

        mainBg: (state, action) => {
            state.value.main.bgColor = action.payload
        },
        mainDirection: (state, action) => {
            state.value.main.direction = action.payload
        },
        modalDisplay: (state, action) => {
            state.value.modal.display = action.payload
        },

    }
});

export const {addToolbar, changeToolbarImg, changeColor, displayLogo, displaySidebar, sidebarLinks, sidebarBgColor, mainBg, mainDirection, modalDisplay} = pageSlice.actions;
export default pageSlice.reducer;