import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TasksPage from "./pages/TasksPage";
import JournalPage from "./pages/JournalPage";

import { TaskProvider } from './context/TaskContext';
import { JournalProvider } from './context/JournalContext';



function App() {
  return (
      <TaskProvider>
          <JournalProvider>
              <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/journal" element={<JournalPage />} />
                </Routes>
              </Router>
          </JournalProvider>
      </TaskProvider>
  );
}

export default App;
