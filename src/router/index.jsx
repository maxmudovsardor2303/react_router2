import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from '../App';
import Login from "../components/login/login"
import Cars from "../components/cars/cars"
const Index = () =>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route Index element={<Login/>}/>
                <Route path="cars" element={<Login/>}/>
            </Route>
        )
    )
}