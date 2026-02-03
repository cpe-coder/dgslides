import ToggleSwitch from '@/components/toggle-switch';
import { Upload } from 'lucide-react-native';
import React, { useState } from 'react';
import {
   SafeAreaView,
   ScrollView,
   Text,
   TouchableOpacity,
   View
} from 'react-native';

export default function ImportExportScreen() {
   const [googleDrive, setGoogleDrive] = useState(true);
   const [dropbox, setDropbox] = useState(false);

   const formats = [
      { name: 'PDF', icon: '📄', color: 'bg-red-500' },
      { name: 'PPTX', icon: '📊', color: 'bg-orange-500' },
      { name: 'POTX', icon: '📋', color: 'bg-blue-500' }
   ];

   return (
      <SafeAreaView className="flex-1 bg-gray-900 pt-8">
         <ScrollView className="flex-1">
            <View className="p-5">
               <Text className="mb-6 text-2xl font-bold text-white">
                  Import/Export Flow
               </Text>

               <Text className="mb-4 text-xs text-gray-400">Trip Oriented</Text>

               {/* Drag & Drop Area */}
               <View className="mb-6 items-center rounded-3xl border-2 border-dashed border-purple-500 bg-purple-500/20 p-8">
                  <Upload size={48} color="#A78BFA" />
                  <Text className="mt-4 text-lg font-semibold text-white">
                     Import Files from
                  </Text>
                  <Text className="mt-2 text-center text-gray-400">
                     Cloud Documents
                  </Text>
               </View>

               {/* Cloud Services */}
               <View className="mb-3 flex-row items-center justify-between rounded-2xl bg-gray-800 p-4">
                  <View className="flex-row items-center">
                     <Text className="mr-4 text-4xl">📁</Text>
                     <Text className="font-semibold text-white">
                        Google Drive
                     </Text>
                  </View>
                  <ToggleSwitch
                     value={googleDrive}
                     onValueChange={setGoogleDrive}
                  />
               </View>

               <View className="mb-8 flex-row items-center justify-between rounded-2xl bg-gray-800 p-4">
                  <View className="flex-row items-center">
                     <Text className="mr-4 text-4xl">📦</Text>
                     <Text className="font-semibold text-white">Dropbox</Text>
                  </View>
                  <ToggleSwitch value={dropbox} onValueChange={setDropbox} />
               </View>

               {/* Export Formats */}
               <Text className="mb-4 text-xl font-bold text-white">
                  Import Files from Cloud Storage
               </Text>
               <View className="mb-6 flex-row justify-between">
                  {formats.map((format, idx) => (
                     <View key={idx} className="items-center">
                        <View
                           className={`${format.color} mb-2 h-16 w-16 items-center justify-center rounded-2xl`}
                        >
                           <Text className="text-3xl">{format.icon}</Text>
                        </View>
                        <Text className="font-medium text-white">
                           {format.name}
                        </Text>
                     </View>
                  ))}
               </View>

               <TouchableOpacity className="items-center rounded-full bg-purple-600 py-4">
                  <Text className="text-lg font-bold text-white">
                     Start Import
                  </Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
