import { Stack, Tabs} from "expo-router";
import { Image } from 'react-native';

export default function RootLayout() {
  return (
      <Tabs screenOptions={{
        tabBarInactiveBackgroundColor: '#FFE8DF',
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#D57955',
        tabBarStyle: {
          backgroundColor: '#FFE8DF',
          borderRadius: 20,
          marginHorizontal: 20,
          marginBottom: 10,
          height: '9%',
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.2, 
          shadowRadius: 10, 
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          href: null,
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        options={{
          title: 'Profile',
          href: '/ProfileTab',
          tabBarIcon: () => (
            <Image 
              source={require('../assets/images/user.png')} 
              style={{ width: 24, height: 24 }} 
            />
          ),
        }}
        
      />
      <Tabs.Screen
        name="ContadorTab"
        options={{
          title: 'Contador',
          href: '/ContadorTab',
          tabBarIcon: () => (
            <Image 
              source={require('../assets/images/keys.png')} 
              style={{ width: 24, height: 24 }} 
            />
          ),
        }}
        
      />
      <Tabs.Screen
        name="TarjetasTab"
        options={{
          title: 'Cards',
          href: '/TarjetasTab',
          tabBarIcon: () => (
            <Image 
              source={require('../assets/images/flash-cards.png')} 
              style={{ width: 24, height: 24 }} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="UpdateProfileTab"
        options={{
          title: 'Home',
          href: null,
        }}
      />
      </Tabs>
  );
}
