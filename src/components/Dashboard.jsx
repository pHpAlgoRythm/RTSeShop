
import Poster from "./dashboardComponents/Poster";
import Categories from "./dashboardComponents/Categories";


function Dashboard(){

    const dashboard = <div className="dashBoard">

            <Poster></Poster>
            <br />
            <Categories></Categories>

    </div>

    return (dashboard);
}

export default Dashboard;