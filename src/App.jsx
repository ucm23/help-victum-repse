import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index"
import OrderWork from "./pages/OrderWork"
import './App.css'

function App() {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path="*" element={<Index />} />
            <Route path="/order/work/progress/:id" element={<OrderWork />} />
        </Routes>
    )
}

export default App
