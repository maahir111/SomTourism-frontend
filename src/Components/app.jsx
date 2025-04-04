import { Route , Routes } from 'react-router-dom'
import FormComponent from "./FormComponent"
import Res from "./Res"

export default function App() {
    return (
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/result" element={<Res/>} />
        </Routes>
    );
  }