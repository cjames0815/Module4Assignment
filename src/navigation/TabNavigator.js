import React from 'react';
import HostsScreen from '../screens/Hosts';
import MeetingsScreen from '../screens/Meetings';
import AddMeetingScreen from '../screens/AddMeeting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
        <Tab.Screen name={'Hosts'} component={HostsScreen}/>
        <Tab.Screen name={'Meetings'} component={MeetingsScreen}/>
        <Tab.Screen name={'Add Meetings'} component={AddMeetingScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;