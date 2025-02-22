"use client"

import {Provider} from "react-redux";
import store from "@/app/redux/store";
import React from "react";

const ReduxProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider;