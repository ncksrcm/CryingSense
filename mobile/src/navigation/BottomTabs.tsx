import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import RecordScreen from '../screens/RecordScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Home, Mic, Clock } from 'lucide-react-native';

type TabParamList = {
  HomeStack: undefined;
  Record: undefined;
  History: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, { height: 56, paddingBottom: 0 }],
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Home color={focused ? '#2563EB' : '#374151'} size={20} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Record"
        component={RecordScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              accessibilityRole={props.accessibilityRole}
              accessibilityState={props.accessibilityState}
              onPress={props.onPress}
              style={[styles.fabButton, { backgroundColor: '#60A5FA' }]}
              activeOpacity={0.85}
              delayLongPress={undefined} // ⚡ important fix
            >
              <Mic color="#fff" size={28} />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Clock color={focused ? '#2563EB' : '#374151'} size={20} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
    paddingBottom: Platform.OS === 'ios' ? 16 : 8,
  },
  fabButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -28,
    zIndex: 10,
  },
});
