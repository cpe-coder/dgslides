import ThemeCard from '@/components/theme-card';
import { Template } from '@/types';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import React from 'react';
import {
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   View
} from 'react-native';

export default function TemplatesScreen() {
   const router = useRouter();

   const templates: Template[] = [
      { name: 'Business', emoji: '💼', gradient: ['#2563EB', '#06B6D4'] },
      { name: 'Education', emoji: '🎓', gradient: ['#7C3AED', '#EC4899'] },
      { name: 'Creative', emoji: '🎨', gradient: ['#F97316', '#EF4444'] },
      { name: 'Minimal', emoji: '✨', gradient: ['#4B5563', '#1F2937'] }
   ];

   return (
      <SafeAreaView className="flex-1 bg-gray-900 pt-8">
         <ScrollView className="flex-1">
            <View className="p-5">
               <View className="mb-6 flex-row items-center justify-between">
                  <Text className="text-2xl font-bold text-white">
                     Templates Gallery
                  </Text>
                  <TouchableOpacity>
                     <Search size={24} color="#A78BFA" />
                  </TouchableOpacity>
               </View>

               <View className="flex-row flex-wrap justify-between">
                  {templates.map((template, idx) => (
                     <ThemeCard
                        key={idx}
                        template={template}
                        onPress={() => router.push('./editor')}
                     />
                  ))}
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
