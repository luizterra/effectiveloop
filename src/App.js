// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CustomAuthenticator from './CustomAuthenticator';
// import Index from './pages/Index';
// import Overview from './pages/Overview';
// import ProtectedRoute from './ProtectedRoute';

// function App() {
//     return (
//         <Router>
//             <CustomAuthenticator>
//                 <Routes>
//                     <Route path="/" element={<Index />} />
//                     <Route path="/overview" element={<ProtectedRoute component={Overview} />} />
//                 </Routes>
//             </CustomAuthenticator>
//         </Router>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CustomAuthenticator from './CustomAuthenticator';
// import Index from './pages/Index';
// import Overview from './pages/Overview';
// import SignedOut from './pages/SignedOut';
// import ProtectedRoute from './ProtectedRoute';

// function App() {
//     return (
//         <Router>
//             <CustomAuthenticator>
//                 <Routes>
//                     <Route path="/" element={<Index />} />
//                     <Route path="/overview" element={<ProtectedRoute component={Overview} />} />
//                     <Route path="/signed-out" element={<SignedOut />} />
//                 </Routes>
//             </CustomAuthenticator>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomAuthenticator from './CustomAuthenticator';
import Index from './pages/Index';
import Overview from './pages/Overview';
import SignedOut from './pages/SignedOut';
import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <Router>
            <div style={appStyle}>
                <Header />
                <main style={mainStyle}>
                    <CustomAuthenticator>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/overview" element={<ProtectedRoute component={Overview} />} />
                            <Route path="/signed-out" element={<SignedOut />} />
                        </Routes>
                    </CustomAuthenticator>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
};

const mainStyle = {
    flex: '1',
    padding: '20px',
};

export default App;
