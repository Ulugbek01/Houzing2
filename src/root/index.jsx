import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import MyProperties from '../components/MyProperties';
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
            <Route path='/profile/properties' element={<MyProperties/>}/>
            <Route path='*' element={<div>Page not Found</div>}/>
        </Routes>
        </>
    )
}

export default Root;