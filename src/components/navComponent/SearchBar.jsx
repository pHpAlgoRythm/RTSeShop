import '../.././boxicon.css';

 function SearchBar(){
  return (   
    <div className="searchbar">
        <input type="text" placeholder="What are you looking for?" />
        <button><i class='bx bx-search'></i></button>
     </div>
  );
 }

 export default SearchBar;