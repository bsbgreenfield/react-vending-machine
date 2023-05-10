import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Apple from './Apple';
import Banana from './Banana';
import Carrot from './Carrot';
import VendingMachine from './VendingMachine';
import HomeLink from './HomeLink';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <HomeLink/>
      <Routes>
        <Route path='/' element= {<VendingMachine/>}/>
        <Route path='/apple' element= {<Apple/>}/>
        <Route path='/banana' element= {<Banana/>}/>
        <Route path='/carrot' element= {<Carrot/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
