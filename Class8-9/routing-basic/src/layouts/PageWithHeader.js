import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/header"
import Page1 from "../pages/page1";
import TermsAndCondition from "../pages/TermsAndCondition";
import Page2 from "../pages/page2";
import Profile from "../pages/Profile";
import { useEffect } from 'react';

const PageWithHeader = () => {
    const navigate = useNavigate();
    const navigateToTnC = () => {
        navigate('/terms-and-condition');
    }

    const location = useLocation();
    useEffect(() => {
        console.log(location);
        // Send in GA API
    }, [location]);

    return (
        <div className="page-wrapper">
            <Header />
            <Routes>
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/terms-and-condition" element={<TermsAndCondition />} />
                <Route path="/in/:username" element={<Profile />} />
            </Routes>
            <footer>
                <ul>
                    <li onClick={navigateToTnC}>Terms & Condition</li>
                </ul>
            </footer>
        </div>
    )
}

export default PageWithHeader;