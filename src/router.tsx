import { Routes, Route} from 'react-router-dom'
import { FormStepOne } from './pages/FormStepOne'
import { FormStepTwo } from './pages/FormStepTwo'
import { FormStepThree } from './pages/FormStepThree'
export const Router = () => {
    return (
    <Routes>
      <Route path='/' element={<FormStepOne></FormStepOne>}/>
      <Route path='/steptwo'  element={<FormStepTwo></FormStepTwo>}/>
      <Route path='/stepthree' element={<FormStepThree></FormStepThree>}/>
    </Routes>
    )
}