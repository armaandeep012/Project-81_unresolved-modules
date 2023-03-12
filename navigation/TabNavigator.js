"use strict";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed Screen" component={Feed} />
      <Tab.Screen name="Create Post Screen" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
