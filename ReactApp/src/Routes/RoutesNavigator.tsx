
import Home from "../feature/Home/Home";
import {Route, Routes} from "react-router-dom";
import AddTasq from "../feature/AddTasq/AddTasq";
import Laravel from "../feature/Laravel/Laravel";

const RoutesNavigator = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add" element={<AddTasq />} />
            <Route path="laravel" element={<Laravel />} />
        </Routes>
    )
};

export default RoutesNavigator;