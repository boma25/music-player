import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../constants/routes';
import HomeSvg from '../assets/RNSVG/Navigator/home';
import SearchSvg from '../assets/RNSVG/Navigator/search';
import NotesSvg from '../assets/RNSVG/Navigator/notes';
import colors from '../theme/colors';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={routes.HOME} component={HomeScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}>
        <Tab.Screen
          name={routes.HOME_STACK}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <HomeSvg fill={focused ? colors.PRIMARY : colors.INACTIVE} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.SEARCH_STACK}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <SearchSvg fill={focused ? colors.PRIMARY : colors.INACTIVE} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.NOTES_STACK}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <NotesSvg fill={focused ? colors.PRIMARY : colors.INACTIVE} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.SECONDARY,
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
});

export default AppNavigator;
