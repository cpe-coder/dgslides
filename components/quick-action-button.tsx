import { LucideIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
   icon: LucideIcon;
   label: string;
   color: string;
   onPress: () => void;
}

export default function QuickActionButton({
   icon: Icon,
   label,
   color,
   onPress
}: Props) {
   return (
      <TouchableOpacity
         onPress={onPress}
         style={[styles.container, { backgroundColor: color }]}
      >
         <Icon size={24} color="white" />
         <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      borderRadius: 16,
      padding: 16,
      flex: 1,
      marginHorizontal: 4,
      alignItems: 'center'
   },
   label: {
      color: 'white',
      fontSize: 11,
      marginTop: 8,
      fontWeight: '600'
   }
});
