import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/home'
import { TaskMaster } from './pages/taskmaster'
import { ConnectHub } from './pages/connecthub'
import { MoneyFlow } from './pages/moneyflow'
export function App() {

    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/ConnectHub' element={<ConnectHub />} />
                        <Route path='/MoneyFlow' element={<MoneyFlow />} />
                        <Route path='/TaskMaster' element={<TaskMaster />} />
                    </Routes>
                </BrowserRouter>
        </>
    )
}