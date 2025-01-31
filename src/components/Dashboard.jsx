
import Poster from "./dashboardComponents/Poster";
import Categories from "./dashboardComponents/Categories";
import MonthlyFeature from "./dashboardComponents/MonthlyFeature";


function Dashboard(){

    const dashboard = <div className="dashBoard">

            <Poster></Poster>
            <br />
            <Categories></Categories>
            <br />
            <MonthlyFeature></MonthlyFeature>

    </div>

    return (dashboard);
}

export default Dashboard;