
import Poster from "./dashboardComponents/Poster";
import Categories from "./dashboardComponents/Categories";
import MonthlyFeature from "./dashboardComponents/MonthlyFeature";
import Products from "./dashboardComponents/Products";
import NewProduct from "./dashboardComponents/NewProduct";


function Dashboard(){

    const dashboard = <div className="dashBoard">

            <Poster></Poster>
            <br />
            <Categories></Categories>
            <br />
            <MonthlyFeature></MonthlyFeature>
            <br />
            <Products></Products>
            <br />
            <NewProduct></NewProduct>

    </div>

    return (dashboard);
}

export default Dashboard;