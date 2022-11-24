import './App.css';

// Card Component
function Songcard () {
  return(
    <div class="card">
    <img src='assets/placeholder.png' class='cardimg'></img>
    <div class="container">
      <h4><b>Song Name</b></h4>
      <p>Other Info</p>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className="App">

      {/* Navigation */}
 <div class='nav'>
  <img src='assets/albumicon.png' class='navimage'></img>
  <img src='assets/musicicon.png' class='navimage'></img>
 </div>
 
 {/* The Cards */}
<div class='flex-container'>
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
 <div><input type="text" placeholder="Search..."></input>
 </div>

  </div>
  );
}

export default App;
