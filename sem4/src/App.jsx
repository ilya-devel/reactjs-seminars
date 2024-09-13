import './App.css'
import AboutPage from './components/AboutPage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListPage from './components/ProductsPage/ListPage';
import DetailPage from './components/ProductsPage/DetailPage';

function App() {
    return (
        <>
            <BrowserRouter basename='sem4'>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/character' element={<ListPage />} />
                    <Route path='/character/:id' element={<DetailPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
