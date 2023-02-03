import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Alta from '../pages/Alta';


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/alta' element={<Alta/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;