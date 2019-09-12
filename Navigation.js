import {createAppContainer } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import MainListed from "./MainListed";
import Article from "./Article";
import Match from "./Match";
const root =createStackNavigator({
    Home:{screen: MainListed},
    Article,
    Match,
},
{
    initialRouteName:'Home',
});
const AppContainer = createAppContainer(root);
export default AppContainer;