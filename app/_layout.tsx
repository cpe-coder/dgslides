import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

export default function RootLayout() {
   return (
      <>
         <StatusBar style="light" />
         <Stack
            screenOptions={{
               headerShown: false,
               contentStyle: { backgroundColor: '#111827' },
               animation: 'slide_from_right'
            }}
         >
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
               name="create"
               options={{
                  presentation: 'card',
                  animation: 'slide_from_bottom'
               }}
            />
            <Stack.Screen
               name="editor"
               options={{
                  presentation: 'card'
               }}
            />
         </Stack>
      </>
   );
}
