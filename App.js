import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
// import { BlogProvider } from './src/screens/context/BlogContext';
import { Provider as BlogProvider } from './src/screens/context/BlogContext';

import IndexScreen from "./src/screens/indexScreen";

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})
const App = createAppContainer(navigator)

export default () => {
  return <BlogProvider><App /></BlogProvider>
}