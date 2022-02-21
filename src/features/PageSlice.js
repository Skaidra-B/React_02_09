import {createSlice} from "@reduxjs/toolkit";

export const pageSlice = createSlice({

    name: "style",
    initialState: {
        value: {
            showLogo: true,
            logoUrl: "https://cdn.logo.com/hotlink-ok/logo-social.png",
            toolbarColor: "#eeeeee",
            toolbarLinks: [],

            showSidebar: true,
            sidebarColor: "#e1e1e1",
            sidebarLinks: [],

            mainDirection: true,
            mainBackgroundColor: "pink",

            showModal: false
        }
    },
    reducers: {
        setShowLogo: (state, action) => {
            state.value.showLogo = !state.value.showLogo
        },
        setLogoUrl: (state, action) => {
            state.value.logoUrl = action.payload
        },
        setToolbarColor: (state, action) => {
            state.value.toolbarColor = action.payload
        },
        addToolbarLink: (state, action) => {
            state.value.toolbarLinks.push(action.payload)
        },
        removeToolbarLink: (state, action) => {
            state.value.toolbarLinks = state.value.toolbarLinks.filter((x, i) => i !== action.payload)
        },

        setShowSidebar: (state, action) => {
            state.value.showSidebar = !state.value.showSidebar
        },
        setSidebarColor: (state, action) => {
            state.value.sidebarColor = action.payload
        },
        addSidebarLink: (state, action) => {
            state.value.sidebarLinks.push(action.payload)
        },
        removeSidebarLink: (state, action) => {
            state.value.sidebarLinks = state.value.sidebarLinks.filter((x, i) => i !== action.payload)
        },

        changeMainDirection: (state, action) => {
            state.value.mainDirection = !state.value.mainDirection
        },
        setMainColor: (state, action) => {
            state.value.mainBackgroundColor = action.payload
        },

        setShowModal: (state, action) => {
            state.value.showModal = !state.value.showModal
        }
    }
});

export const {
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
    setMainColor,
    setShowModal

} = pageSlice.actions;
export default pageSlice.reducer;