import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index"
import './App.css'

function App() {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path="*" element={<Index />} />
        </Routes>
    )
}

export default App
