import "./App.css";
import Gallery from "./Gallery"
import Animal from "./Animal";
import Nature from "./Nature";
import Food from "./Food";
import Gaming from "./Gaming";
import Technology from "./Technology";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>  
      <div>
          <Routes>
              <Route path='/' element={<Gallery />} />
              <Route path='/animal' element={<Animal />} />
              <Route path='/food' element={<Food />} />
              <Route path='/nature' element={<Nature />} />
              <Route path='/gaming' element={<Gaming />} />
              <Route path='/technology' element={<Technology />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
