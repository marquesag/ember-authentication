import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './routes/SignUp.tsx'
import SignIn from './routes/SignIn.tsx'
import Notfound from './routes/404/NotFound.tsx'

export default function Routing(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/sign-in" element={<SignUp/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
        </BrowserRouter>
    )
}