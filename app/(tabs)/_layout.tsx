import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function StackLayout() {
  const colorScheme = useColorScheme();

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
    <Stack
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="index" options={{headerShown: false}}/>
      
    </Stack>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
    
  );
}
