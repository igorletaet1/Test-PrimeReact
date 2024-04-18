import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { HomePage } from './pages/HomePage';

import { Layout } from './components/Layout'
import {StepOne} from "./pages/StepOne";
import {StepTwo} from "./pages/StepTwo";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/step-one" index element={<StepOne />} />
        <Route path="/step-two" index element={<StepTwo />} />



    </Route>
))

export default router
