import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from "../utils/Const";
import NewsHome from "../screens/newsHome/NewsHome";
import NewsArticle from "../screens/newsArticle/NewsArticle";

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  const headerStyle = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_NAME.NEWS_HOME}
          component={NewsHome}
          options={headerStyle}
        />
        <Stack.Screen
          name={SCREEN_NAME.NEWS_ARTICLE}
          component={NewsArticle}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
