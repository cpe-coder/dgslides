import React from 'react';
import { TouchableOpacity, View } from 'react-native';

interface Props {
   value: boolean;
   onValueChange: (value: boolean) => void;
}

export default function ToggleSwitch({ value, onValueChange }: Props) {
   return (
      <TouchableOpacity
         onPress={() => onValueChange(!value)}
         className={`h-6 w-12 justify-center rounded-full px-0.5 ${value ? 'bg-purple-500' : 'bg-gray-600'}`}
      >
         <View
            className={`h-5 w-5 rounded-full bg-white ${value ? 'self-end' : 'self-start'}`}
         />
      </TouchableOpacity>
   );
}
