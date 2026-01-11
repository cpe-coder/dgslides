import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
   icon: any;
   label: string;
   onPress?: () => void;
}

export default function ToolButton({ icon: Icon, label, onPress }: Props) {
   return (
      <TouchableOpacity
         onPress={onPress}
         className="min-w-[70px] items-center rounded-2xl bg-gray-700 p-4"
      >
         <Icon size={24} color="#A78BFA" />
         <Text className="mt-2 text-xs text-gray-400">{label}</Text>
      </TouchableOpacity>
   );
}
