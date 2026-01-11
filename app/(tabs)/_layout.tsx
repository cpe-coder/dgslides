import { Tabs, useRouter } from 'expo-router';
import { FileText, FolderOpen, Home, Plus, User } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
   const router = useRouter();

   return (
      <Tabs
         screenOptions={{
            headerShown: false,
            tabBarStyle: {
               backgroundColor: '#1F2937',
               borderTopColor: '#374151',
               height: 70,
               paddingBottom: 10
            },
            tabBarActiveTintColor: '#A78BFA',
            tabBarInactiveTintColor: '#6B7280'
         }}
      >
         <Tabs.Screen
            name="index"
            options={{
               title: 'Home',
               tabBarIcon: ({ color, size }) => (
                  <Home size={size} color={color} />
               )
            }}
         />
         <Tabs.Screen
            name="templates"
            options={{
               title: 'Templates',
               tabBarIcon: ({ color, size }) => (
                  <FileText size={size} color={color} />
               )
            }}
         />
         <Tabs.Screen
            name="create-tab"
            options={{
               title: '',
               tabBarIcon: () => (
                  <TouchableOpacity
                     onPress={() => router.push('./create')}
                     className="-mb-7 h-14 w-14 items-center justify-center rounded-full bg-primary-dark shadow-lg"
                  >
                     <Plus size={28} color="white" />
                  </TouchableOpacity>
               )
            }}
            listeners={{
               tabPress: e => {
                  e.preventDefault();
                  router.push('./create');
               }
            }}
         />
         <Tabs.Screen
            name="import"
            options={{
               title: 'Import',
               tabBarIcon: ({ color, size }) => (
                  <FolderOpen size={size} color={color} />
               )
            }}
         />
         <Tabs.Screen
            name="settings"
            options={{
               title: 'Profile',
               tabBarIcon: ({ color, size }) => (
                  <User size={size} color={color} />
               )
            }}
         />
      </Tabs>
   );
}
