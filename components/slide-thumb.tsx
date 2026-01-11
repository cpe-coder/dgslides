import { Slide } from '@/types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
   slide: Slide;
   onPress?: () => void;
}

export default function SlideThumb({ slide, onPress }: Props) {
   return (
      <TouchableOpacity
         onPress={onPress}
         className={`${slide.active ? 'bg-purple-500' : 'bg-gray-700'} h-20 w-20 items-center justify-center rounded-xl p-4`}
      >
         <Text className="text-3xl">{slide.emoji}</Text>
      </TouchableOpacity>
   );
}
