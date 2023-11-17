import { Routes, Route } from "react-router-dom"
import home from "./home"
import profile from "./profile"
import error from "./error"

const AppRotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login" element={<Login />}>
            <Route>
        </Routes>
    )
}

export default AppRotas