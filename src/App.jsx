import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayouts from "./layouts/DefaultLayouts"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import About from "./pages/About"
import { BudgetProvider } from './contexts/BudgetContext'


function App() {


  return (
    <>

      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayouts />} >
              <Route index element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter >
      </BudgetProvider>
    </>
  )
}

export default App
