import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './../Pages/Home'
import ArtList from './../Pages/ArtList'

export const AppRouter = () => {
  return (
    <BrowserRouter>
       <Routes>
       <Route
          path="/"
          element={<Home />}
        />
       <Route
          path="/list"
          element={<ArtList />}
        />
       </Routes>
    </BrowserRouter>
  )
}
