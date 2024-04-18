import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Home } from './pages/Home';

import { Layouts } from './components/Layouts'
import {Table} from "./pages/Table";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/table" index element={<Table />} />
    </Route>
))

export default router
