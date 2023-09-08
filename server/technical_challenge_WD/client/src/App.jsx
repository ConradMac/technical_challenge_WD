// import { useState } from "react";

import "./App.css";
// import { Link } from "react-router-dom";
import AllPhones from "./Pages/Allphones";
import OnePhone from "./Pages/OnePhone";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/phones" element={<AllPhones />} />
                <Route path="/phones/:id" element={<OnePhone />} />
            </Routes>
        </>
    );
}

export default App;
