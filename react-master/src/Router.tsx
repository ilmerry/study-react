import {BrowserRouter, Switch, Route } from "react-router-dom"
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path="/study-react/:coinId">
                <Coin />
            </Route>
            <Route path="/study-react/">
                <Coins />
            </Route>
        </Switch>
    </BrowserRouter>
}
export default Router;