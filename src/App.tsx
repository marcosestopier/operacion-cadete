import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Layout from './components/Layout';
import Home from './components/Home';
import Calendar from './components/Calendar';
import IMCCalculator from './components/IMCCalculator';
import Checklist from './components/Checklist';
import Simulator from './components/Simulator';
import Requirements from './components/Requirements';
import SimulatorDemo from './components/SimulatorDemo';
import OfflineNotice from './components/OfflineNotice';

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
        <Route path="/requirements" element={
          <Layout title="Requisitos" showBack>
            <Requirements />
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
        <Route path="/simulator-demo" element={
          <SimulatorDemo />
        } />
      </Routes>
      <OfflineNotice />
      <Analytics />
    </Router>
  );
}
