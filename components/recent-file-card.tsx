import { Colors } from '@/constants/color';
import { RecentFile } from '@/types/index';
import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
   file: RecentFile;
   onPress: () => void;
}

const RecentFileCard: React.FC<Props> = ({ file, onPress }) => {
   return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
         <View style={[styles.preview, { backgroundColor: file.gradient[0] }]}>
            <Text style={styles.emoji}>{file.emoji}</Text>
         </View>
         <View style={styles.info}>
            <Text style={styles.name}>{file.name}</Text>
            <Text style={styles.meta}>
               {file.slides} slides • Edited {file.lastEdited}
            </Text>
         </View>
         <ChevronRight size={20} color={Colors.textSecondary} />
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: Colors.backgroundLight,
      borderRadius: 24,
      padding: 16,
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center'
   },
   preview: {
      width: 80,
      height: 80,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center'
   },
   emoji: {
      fontSize: 40
   },
   info: {
      flex: 1,
      marginLeft: 16
   },
   name: {
      color: Colors.text,
      fontSize: 18,
      fontWeight: '600'
   },
   meta: {
      color: Colors.textSecondary,
      fontSize: 14,
      marginTop: 4
   }
});

export default RecentFileCard;
