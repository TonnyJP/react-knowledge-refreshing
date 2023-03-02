import React from "react";
import AppContextProvider from "./Context";
import TestComponent from "./TestComponent";

const AppComponent = () => {
    return (
        <AppContextProvider>
            <TestComponent />
        </AppContextProvider>
    )
}

export default AppComponent;