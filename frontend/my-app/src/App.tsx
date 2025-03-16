import type React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Layout from './components/Layout';
import Home from './components/Home';
import ProjectHome from './components/ProjectHome';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:projectId" element={<ProjectHome />} />
                    <Route path="/projects" element={<Dashboard />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;