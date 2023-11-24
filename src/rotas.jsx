import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import App from "./App"
import Detalhes from "./Detalhes"

export default function Rotas() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={ <App/> } />
                <Route path='/detalhes' element={ <Detalhes/> } />
            </Routes>
        </Router>
    )
}