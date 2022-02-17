
import './App.css';
import Topbar from './component/Header/Topbar';

import Searchbar from './component/Header/Searchbar';
// import Mainheader from './component/Header/Mainheader';
import Bannerbar from './component/Layout/Bannerbar';
import Shop from './component/Layout/Shop'

function App() {
  return (
    <div className="App">
          <Topbar></Topbar>
           <Searchbar></Searchbar> 
            {/* <Mainheader></Mainheader>   */}
            <Bannerbar></Bannerbar>
            <Shop></Shop>
    </div>
  );
}

export default App;
