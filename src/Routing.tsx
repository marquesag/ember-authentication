import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './routes/SignUp.tsx'
import SignIn from './routes/SignIn.tsx'

export default function Routing(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<SignUp/>} />
            <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
        </BrowserRouter>
    )
}