 import NavTagline from "./navComponent/NavTagline";
 import NavBtn from "./navComponent/NavBtn";
 import SearchBar from "./navComponent/SearchBar";
 import IconComponent from "./navComponent/IconComponent";


 function Nav(){

     return (  
        <nav className="navigation">
            
           
            <NavTagline text= 'Exlusive'></NavTagline>

            <NavBtn></NavBtn>

            <div className="navRight">
            <SearchBar></SearchBar>
            <IconComponent></IconComponent>
            </div>
            
        </nav>

     );

    
 }

 export default Nav