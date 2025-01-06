import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PoseDetection from './components/Pose';
import DashboardView from './components/Dashboard';
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/posedetection" element={<PoseDetection />} />
                <Route path="/home" element={<DashboardView />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>
        </Router>
    );
}

export default App;