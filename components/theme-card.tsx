import { Template } from '@/types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
   template: Template;
   onPress: () => void;
}

export default function ThemeCard({ template, onPress }: Props) {
   return (
      <TouchableOpacity onPress={onPress} className="mb-4 w-[48%]">
         <View
            style={{ backgroundColor: template.gradient[0] }}
            className="mb-3 h-48 items-center justify-center rounded-2xl"
         >
            <Text className="text-6xl">{template.emoji}</Text>
         </View>
         <Text className="text-center font-semibold text-white">
            {template.name}
         </Text>
         <Text className="text-center text-sm text-gray-400">Use Template</Text>
      </TouchableOpacity>
   );
}
