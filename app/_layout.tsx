import { Stack, Tabs} from "expo-router";

export default function RootLayout() {
  return (
      <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          href: '/',
        }}
      />
      <Tabs.Screen
        name="ProfileTab"
        options={{
          title: 'Profile',
          href: '/ProfileTab',
        }}
      />
      <Tabs.Screen
        name="ContadorTab"
        options={{
          title: 'Contador',
          href: '/ContadorTab',
        }}
      />
      <Tabs.Screen
        name="TarjetasTab"
        options={{
          title: 'Cards',
          href: '/TarjetasTab',
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
