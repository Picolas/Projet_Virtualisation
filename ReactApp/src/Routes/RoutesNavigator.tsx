
import Home from "../feature/Home/Home";
import {Route, Routes} from "react-router-dom";
import AddTasq from "../feature/AddTasq/AddTasq";

const RoutesNavigator = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add" element={<AddTasq />} />
        </Routes>
    )
};

export default RoutesNavigator;