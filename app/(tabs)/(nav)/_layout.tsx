import { Stack, Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#800000' }}>
      <Tabs.Screen name="index" options={{headerShown: false,title: 'Home',tabBarIcon:({color}) => <FontAwesome size={28} color={color} name="home"/> }}/>
      <Tabs.Screen name="Notification" options={{headerShown: false,title: 'Notification',tabBarIcon:({color}) => <FontAwesome size={25} color={color} name="bell" />}} />
      <Tabs.Screen name="Reel" options={{headerShown: false,title: 'Reels',tabBarIcon:({color}) => <FontAwesome size={28} color={color} name="play"/>}}/>
      <Tabs.Screen name="Market" options={{headerShown: false}}/>
      <Tabs.Screen name="Profile" options={{headerShown: false}}/>
    </Tabs>
  );
}
