import './App.css';
import Songcard from './components/songcard';
import Searchbar from './components/searchbar'
import Navbar from './components/navbar'
function App() {
  return (  
    <div className="App">

    {/* Navigation */}
<Navbar />
 
 {/* The Cards */}
<div className='flex-container'>
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
<Songcard />
</div>

 {/* The Searchbar */}
 <Searchbar />
 

  </div>
  );
}

export default App;
