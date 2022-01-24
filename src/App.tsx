import { Stack, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Shopping from './components/Shopping';
import Sales from './components/Sales';
import CustomerInfo from './components/CustomerInfo';
import Account from './components/Account';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
    return (
        <Container 
            sx={{margin: 0, padding: 0, minWidth: "100vw", minHeight: "100vh", backgroundColor: "background.paper"}}
            disableGutters={true}    
        >   
            <Router>
                <Stack direction={'row'} sx={{margin: 0, padding: 0, minWidth: "100vw", minHeight: "100vh"}}>
                    <Sidebar />    
                    <Routes>
                        <Route path='/' caseSensitive={true} element={<Dashboard />}/>
                        <Route path='/Inventory' caseSensitive={true} element={<Inventory />}/>
                        <Route path='/Shopping' caseSensitive={true} element={<Shopping />}/>
                        <Route path='/Sales' caseSensitive={true} element={<Sales />}/>
                        <Route path='/CustomerInfo' caseSensitive={true} element={<CustomerInfo />}/>
                        <Route path='/Account' caseSensitive={true} element={<Account />}/>
                        <Route path='/Settings' caseSensitive={true} element={<Settings />}/>                        
                    </Routes>
                </Stack> 
            </Router>            
        </Container>
    );
}

export default App;

