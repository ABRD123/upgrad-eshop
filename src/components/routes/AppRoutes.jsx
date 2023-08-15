import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import SignUp from "../SignUp/SignUp";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import AddProducts from "../AddProducts/AddProducts";
import ProductDetails from "../ProductDetails/ProductDetails";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import ProductDetailsConfirm from "../ProductDetailsConfirm/ProductDetailsConfirm";
import AddressDetails from "../AddressDetails/AddressDetails";
import ModifyProducts from "../ModifyProducts/ModifyProducts";
import OrderDetails from "../OrderDetails/OrderDetails";

const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />}> </Route>
                <Route path='/login' element={ <Login /> }></Route>
                <Route path='/signup' element={ <SignUp /> }></Route>
                <Route path="/addproducts" element= { <AddProducts /> }></Route>
                <Route path='/modifyproducts' element={ <ModifyProducts /> }></Route>
                <Route path="/productdetails" element= { <ProductDetails /> }></Route>
                <Route path='/placeorder' element={<PlaceOrder />}></Route>
                <Route path='/productdetailsconfirm' element={<ProductDetailsConfirm />}></Route>
                <Route path='/addressdetails' element={<AddressDetails />}></Route>
                <Route path='/orderdetails' element={<OrderDetails />}></Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
