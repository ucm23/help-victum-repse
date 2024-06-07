import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index"
import OrderWork from "./pages/OrderWork"
import './App.css'

function App() {
    return (
        <Routes>
            <Route path="/order/work/progress/:id" element={<OrderWork />} />
            <Route index element={<Index />} />
            <Route path="*" element={<Index />} />
        </Routes>
    )
}

export default App
