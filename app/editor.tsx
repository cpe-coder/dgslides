import SlideThumb from '@/components/slide-thumb';
import ToolButton from '@/components/tool-button';
import { Slide, Tool } from '@/types';
import { useRouter } from 'expo-router';
import {
   ArrowLeft,
   Image,
   MoreVertical,
   PieChart,
   Plus,
   Share2,
   Square,
   Trash2,
   Type
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   View
} from 'react-native';

export default function EditorScreen() {
   const router = useRouter();
   const [slides] = useState<Slide[]>([
      { id: 1, emoji: '📊', active: true },
      { id: 2, emoji: '📈', active: false },
      { id: 3, emoji: '💡', active: false }
   ]);

   const tools: Tool[] = [
      { icon: Type, label: 'Text' },
      { icon: Image, label: 'Image' },
      { icon: Square, label: 'Shape' },
      { icon: PieChart, label: 'Chart' }
   ];

   return (
      <SafeAreaView className="flex-1 bg-gray-900">
         {/* Top Bar */}
         <View className="flex-row items-center justify-between bg-gray-800/95 px-5 py-4">
            <View className="flex-1 flex-row items-center">
               <TouchableOpacity onPress={() => router.back()} className="mr-4">
                  <ArrowLeft size={24} color="white" />
               </TouchableOpacity>
               <Text className="text-lg font-semibold text-white">Editor</Text>
            </View>
            <View className="flex-row gap-2">
               <TouchableOpacity className="rounded-full bg-purple-500/20 p-2">
                  <Share2 size={20} color="#A78BFA" />
               </TouchableOpacity>
               <TouchableOpacity className="rounded-full bg-purple-500/20 p-2">
                  <MoreVertical size={20} color="#A78BFA" />
               </TouchableOpacity>
            </View>
         </View>

         {/* Main Canvas */}
         <View className="flex-1 items-center justify-center p-5">
            <View
               className="w-full items-center justify-center rounded-2xl bg-white"
               style={{ aspectRatio: 16 / 9 }}
            >
               <Text className="mb-4 text-6xl">📊</Text>
               <Text className="text-xl font-bold text-gray-800">
                  Welcome Slide
               </Text>
               <Text className="mt-2 text-gray-500">Tap to edit</Text>
            </View>
         </View>

         {/* Bottom Toolbar */}
         <View className="bg-gray-800 px-5 py-4">
            <View className="mb-4 flex-row justify-around">
               {tools.map((tool, idx) => (
                  <ToolButton key={idx} icon={tool.icon} label={tool.label} />
               ))}
            </View>

            {/* Slide Thumbnails */}
            <ScrollView
               horizontal
               showsHorizontalScrollIndicator={false}
               className="mb-4"
            >
               <View className="flex-row gap-3">
                  {slides.map(slide => (
                     <SlideThumb key={slide.id} slide={slide} />
                  ))}
                  <TouchableOpacity className="h-20 w-20 items-center justify-center rounded-xl border-2 border-dashed border-gray-600 bg-gray-700 p-4">
                     <Plus size={24} color="#9CA3AF" />
                  </TouchableOpacity>
               </View>
            </ScrollView>

            {/* Action Buttons */}
            <View className="flex-row justify-between gap-2">
               <TouchableOpacity
                  className="flex-1 items-center rounded-full px-6 py-3"
                  style={{ backgroundColor: '#7C3AED' }}
               >
                  <Text className="font-bold text-white">Duplicate</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  className="items-center rounded-full px-6 py-3"
                  style={{ backgroundColor: '#EF4444' }}
               >
                  <Trash2 size={20} color="white" />
               </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
   );
}
