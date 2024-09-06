import { Stack, Tabs} from "expo-router";

export default function RootLayout() {
  return (
      <Tabs>
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
          tabBarIcon: require('../assets/images/user.png'),

        }}
        
      />
      <Tabs.Screen
        name="ContadorTab"
        options={{
          title: 'Contador',
          href: '/ContadorTab',
          tabBarIcon: require('../assets/images/keys.png'),
        }}
      />
      <Tabs.Screen
        name="TarjetasTab"
        options={{
          title: 'Cards',
          href: '/TarjetasTab',
          tabBarIcon: require('../assets/images/flash-cards.png'),
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
