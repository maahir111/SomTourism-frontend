import { useLocation } from "react-router-dom"; // Import useLocation

function Res() {  // Magaca function-ka capital letter samee
    const location = useLocation();
    const data = location.state?.data || "";
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded shadow-md">
          <h1 className="text-lg font-bold">Natiijada:</h1>
          <p className="mt-2">{data}</p>
        </div>
      </div>
    );
}

export default Res;  // Capital letter sii
