import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Calendar from './components/Calendar';
import IMCCalculator from './components/IMCCalculator';
import Checklist from './components/Checklist';
import Simulator from './components/Simulator';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/calendar" element={
          <Layout title="Calendario" showBack>
            <Calendar />
          </Layout>
        } />
        <Route path="/imc" element={
          <Layout title="Calculadora de IMC" showBack>
            <IMCCalculator />
          </Layout>
        } />
        <Route path="/checklist" element={
          <Layout title="Checklist de papelería" showBack>
            <Checklist />
          </Layout>
        } />
        <Route path="/simulator" element={
          <Layout title="Sovereign Institucional" showBack>
            <Simulator />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}
