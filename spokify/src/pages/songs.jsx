
import Songcard from '../components/songcard';
import Searchbar from '../components/searchbar'
import Navbar from '../components/navbar'
function Songs() {
  return (  
    <div className="Songs">

    {/* Navigation */}
<Navbar />
 
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
 <Searchbar />

  </div>
  );
}

export default Songs;
