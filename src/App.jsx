import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./components/Dashboard";
import Students from "./pages/Students";
import ExcellentStudents from "./pages/ExcellentStudents";
import NotFound from "./pages/NotFound";
import "./App.css";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="excellent" element={<ExcellentStudents />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="students/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;