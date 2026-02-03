import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

export default function SplashScreen() {
   const router = useRouter();
   const fadeAnim = useRef(new Animated.Value(0)).current;
   const scaleAnim = useRef(new Animated.Value(0.8)).current;

   useEffect(() => {
      Animated.parallel([
         Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
         }),
         Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 50,
            friction: 7,
            useNativeDriver: true
         })
      ]).start();

      const timer = setTimeout(() => {
         router.replace('/(tabs)');
      }, 2500);

      return () => clearTimeout(timer);
   }, [fadeAnim, router, scaleAnim]);

   return (
      <Animated.View
         className="flex-1 items-center justify-center bg-primary"
         style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}
      >
         <View className="rounded-3xl bg-white/10 p-8">
            <Text className="text-7xl font-bold text-white">DG Slides</Text>
         </View>
         <Text className="mt-6 text-lg font-medium text-white">
            Create. Edit. Present. Beautifully.
         </Text>
         <View className="mt-8 flex-row gap-2">
            {[0, 1, 2].map(i => (
               <View
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === 1 ? 'bg-white' : 'bg-white/50'}`}
               />
            ))}
         </View>
      </Animated.View>
   );
}
