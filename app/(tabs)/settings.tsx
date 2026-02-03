import ToggleSwitch from '@/components/toggle-switch';
import {
   ChevronRight,
   FileText,
   Grid,
   Moon,
   Settings,
   Share2,
   User
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   View
} from 'react-native';

export default function SettingsScreen() {
   const [darkMode, setDarkMode] = useState(true);

   const menuItems = [
      { label: 'Preferences', icon: Settings },
      { label: 'App Preference', icon: Grid },
      { label: 'Account Management', icon: User },
      { label: 'Compliances', icon: FileText },
      { label: 'Externalities', icon: Share2 }
   ];

   return (
      <SafeAreaView className="flex-1 bg-gray-900 pt-8">
         <ScrollView className="flex-1">
            <View className="p-5">
               <Text className="mb-8 text-2xl font-bold text-white">
                  Settings
               </Text>

               {menuItems.map((item, idx) => (
                  <TouchableOpacity
                     key={idx}
                     className="mb-3 flex-row items-center justify-between rounded-2xl bg-gray-800 p-4"
                  >
                     <View className="flex-row items-center">
                        <item.icon size={24} color="#A78BFA" />
                        <Text className="ml-4 font-semibold text-white">
                           {item.label}
                        </Text>
                     </View>
                     <ChevronRight size={20} color="#9CA3AF" />
                  </TouchableOpacity>
               ))}

               {/* Theme Toggle */}
               <View className="mt-4 flex-row items-center justify-between rounded-2xl bg-gray-800 p-4">
                  <View className="flex-row items-center">
                     <Moon size={24} color="#A78BFA" />
                     <Text className="ml-4 font-semibold text-white">
                        Dark Mode
                     </Text>
                  </View>
                  <ToggleSwitch value={darkMode} onValueChange={setDarkMode} />
               </View>

               {/* Help Resources */}
               <TouchableOpacity className="mt-6 flex-row items-center justify-between rounded-2xl bg-purple-600 p-4">
                  <View>
                     <Text className="text-lg font-bold text-white">
                        Help Resources
                     </Text>
                     <Text className="mt-1 text-sm text-white/80">
                        Get support and tutorials
                     </Text>
                  </View>
                  <ChevronRight size={24} color="white" />
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
