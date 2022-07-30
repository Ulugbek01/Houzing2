import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import ProductView from '../components/ProductView';
import SignIn from '../components/SignIn';
import { navbar } from '../utils/navbar';

const Root = () => {
    return (
        <>
        <Navbar/>
         <Routes>
            {navbar.map(({id, path, Element}) => 
               <Route key={id} path={path} element={Element}/>
            )}

            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/properties/:id' element={<ProductView/>}/>
            <Route path='*' element={<div>Page not Found</div>}/>
        </Routes>
        </>
    )
}

export default Root;