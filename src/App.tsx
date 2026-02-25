import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home} from "./pages/home/home";
import {ConnectHub} from "./pages/connecthub/connecthub";
import {MoneyFlow} from "./pages/moneyflow/moneyflow";
import {TaskMaster} from "./pages/taskmaster/taskmaster";

import { Header } from "./components/header";

export function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskmaster" element={<TaskMaster />} />
        <Route path="/connecthub" element={<ConnectHub />} />
        <Route path="/moneyflow" element={<MoneyFlow />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}