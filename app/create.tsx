import { Template } from '@/types';
import { useRouter } from 'expo-router';
import { ArrowLeft, MoreVertical } from 'lucide-react-native';
import React, { useState } from 'react';
import {
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   View
} from 'react-native';

export default function CreateNewFlowScreen() {
   const router = useRouter();
   const [selectedRatio, setSelectedRatio] = useState('16:9');
   const [selectedCategory, setSelectedCategory] = useState('Standard');

   const categories = ['Standard', 'Business', 'Education'];
   const themes: Template[] = [
      { name: 'Analytical Slide', emoji: '', gradient: ['#2563EB', '#06B6D4'] },
      { name: 'Parisian Slide', emoji: '', gradient: ['#7C3AED', '#EC4899'] }
   ];

   return (
      <SafeAreaView className="flex-1 bg-gray-900 pt-8">
         <ScrollView className="flex-1">
            <View className="p-5">
               {/* Header */}
               <View className="mb-6 flex-row items-center">
                  <TouchableOpacity
                     onPress={() => router.back()}
                     className="mr-4"
                  >
                     <ArrowLeft size={24} color="white" />
                  </TouchableOpacity>
                  <Text className="text-2xl font-bold text-white">
                     Create New Flow
                  </Text>
               </View>

               {/* Aspect Ratio */}
               <Text className="mb-3 text-xs font-semibold text-purple-400">
                  SELECT SLIDE
               </Text>
               <View className="mb-6 flex-row gap-2">
                  {['Widescreen|16:9', 'Standard|4:3'].map(ratio => {
                     const [label, value] = ratio.split('|');
                     const isSelected = selectedRatio === value;
                     return (
                        <TouchableOpacity
                           key={value}
                           onPress={() => setSelectedRatio(value)}
                           className={`flex-1 ${isSelected ? 'bg-purple-500' : 'bg-gray-800'} rounded-2xl p-4`}
                        >
                           <Text
                              className={`${isSelected ? 'text-white' : 'text-gray-400'} text-center font-semibold`}
                           >
                              {label}
                           </Text>
                           <Text
                              className={`${isSelected ? 'text-white' : 'text-gray-500'} mt-1 text-center text-sm`}
                           >
                              {value}
                           </Text>
                        </TouchableOpacity>
                     );
                  })}
               </View>

               {/* Categories */}
               <View className="mb-6 flex-row flex-wrap gap-3">
                  {categories.map(cat => {
                     const isSelected = selectedCategory === cat;
                     return (
                        <TouchableOpacity
                           key={cat}
                           onPress={() => setSelectedCategory(cat)}
                           className={`${isSelected ? 'bg-purple-500' : 'bg-gray-800'} rounded-full px-5 py-3`}
                        >
                           <Text
                              className={`${isSelected ? 'text-white' : 'text-gray-400'} font-semibold`}
                           >
                              {cat}
                           </Text>
                        </TouchableOpacity>
                     );
                  })}
               </View>

               {/* Themes */}
               <View className="mb-4 flex-row items-center justify-between">
                  <Text className="text-xl font-bold text-white">Themes</Text>
                  <TouchableOpacity>
                     <MoreVertical size={20} color="#A78BFA" />
                  </TouchableOpacity>
               </View>

               <View className="mb-6 flex-row gap-3">
                  {themes.map((theme, idx) => (
                     <View key={idx} className="flex-1">
                        <TouchableOpacity
                           style={{ backgroundColor: theme.gradient[0] }}
                           className="mb-3 h-40 items-center justify-center rounded-2xl"
                        >
                           <View className="mb-2 h-14 w-20 rounded-lg bg-white/20" />
                           <View className="h-3 w-16 rounded bg-white/20" />
                        </TouchableOpacity>
                        <Text className="text-center font-medium text-white">
                           {theme.name}
                        </Text>
                     </View>
                  ))}
               </View>

               {/* Preview Button */}
               <TouchableOpacity
                  onPress={() => router.push('./editor')}
                  className="items-center rounded-full bg-purple-600 py-4"
               >
                  <Text className="text-lg font-bold text-white">
                     Slide Preview
                  </Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
