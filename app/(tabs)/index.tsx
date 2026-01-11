import QuickActionButton from '@/components/quick-action-button';
import RecentFileCard from '@/components/recent-file-card';
import { Gradients } from '@/constants/gradients';
import { RecentFile } from '@/types';
import { useRouter } from 'expo-router';
import {
   FileText,
   FolderOpen,
   Plus,
   Search,
   Settings,
   Sparkles,
   Upload
} from 'lucide-react-native';
import React from 'react';
import {
   SafeAreaView,
   ScrollView,
   Text,
   TextInput,
   TouchableOpacity,
   View
} from 'react-native';

export default function HomeScreen() {
   const router = useRouter();

   const recentFiles: RecentFile[] = [
      {
         id: 1,
         name: 'Q4 Presentation',
         slides: 12,
         emoji: '📊',
         gradient: [...Gradients.purpleBlue],
         lastEdited: '2h ago'
      },
      {
         id: 2,
         name: 'Marketing Deck',
         slides: 8,
         emoji: '📈',
         gradient: [...Gradients.blueCyan],
         lastEdited: '5h ago'
      },
      {
         id: 3,
         name: 'Team Update',
         slides: 5,
         emoji: '👥',
         gradient: [...Gradients.purplePink],
         lastEdited: '1d ago'
      }
   ];

   return (
      <SafeAreaView className="flex-1 bg-gray-900">
         <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View className="px-5 pb-6 pt-4">
               <View className="mb-6 flex-row items-center justify-between">
                  <View>
                     <Text className="text-sm text-gray-400">
                        Good afternoon
                     </Text>
                     <Text className="text-2xl font-bold text-white">Yan</Text>
                  </View>
                  <TouchableOpacity
                     onPress={() => router.push('./(tabs)/settings')}
                     className="rounded-full bg-purple-500/20 p-3"
                  >
                     <Settings size={24} color="#A78BFA" />
                  </TouchableOpacity>
               </View>

               {/* Search Bar */}
               <View className="mb-6 flex-row items-center rounded-2xl bg-gray-800 px-4 py-3">
                  <Search size={20} color="#9CA3AF" />
                  <TextInput
                     placeholder="Search presentations..."
                     placeholderTextColor="#6B7280"
                     className="ml-3 flex-1 text-base text-white"
                  />
               </View>

               {/* Quick Actions */}
               <View className="mb-8 flex-row justify-between">
                  <QuickActionButton
                     icon={Plus}
                     label="New Flow"
                     color="bg-purple-600"
                     onPress={() => router.push('./create')}
                  />
                  <QuickActionButton
                     icon={Upload}
                     label="Import"
                     color="bg-blue-500"
                     onPress={() => router.push('./(tabs)/import')}
                  />
                  <QuickActionButton
                     icon={FileText}
                     label="Gallery"
                     color="bg-purple-700"
                     onPress={() => router.push('./(tabs)/templates')}
                  />
                  <QuickActionButton
                     icon={FolderOpen}
                     label="Files"
                     color="bg-blue-600"
                     onPress={() => {}}
                  />
               </View>
            </View>

            {/* Recent Files */}
            <View className="mb-6 px-5">
               <View className="mb-4 flex-row items-center justify-between">
                  <Text className="text-xl font-bold text-white">
                     Recent Files
                  </Text>
                  <TouchableOpacity className="rounded-full bg-purple-500/20 px-4 py-2">
                     <Text className="font-semibold text-purple-400">
                        See All
                     </Text>
                  </TouchableOpacity>
               </View>

               {recentFiles.map(file => (
                  <RecentFileCard
                     key={file.id}
                     file={file}
                     onPress={() => router.push('./editor')}
                  />
               ))}
            </View>

            {/* AI Magic Card */}
            <View className="mx-5 mb-8">
               <View className="rounded-3xl bg-purple-600 p-6">
                  <View className="mb-3 flex-row items-center">
                     <Sparkles size={24} color="white" />
                     <Text className="ml-2 text-xl font-bold text-white">
                        AI Magic
                     </Text>
                     <View className="ml-2 rounded-full bg-yellow-400 px-3 py-1">
                        <Text className="text-xs font-bold text-gray-900">
                           NEW
                        </Text>
                     </View>
                  </View>
                  <Text className="mb-4 text-white/90">
                     Generate stunning presentations with AI in seconds
                  </Text>
                  <TouchableOpacity className="items-center rounded-full bg-white py-3">
                     <Text className="font-bold text-purple-600">
                        Try AI Generation
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
