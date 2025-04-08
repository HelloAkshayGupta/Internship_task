import { registerForPushNotificationsAsync } from './notifications'; // or same file

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  
  return (
    <View>
      <Text>Your FCM Token:</Text>
    </View>
  )
}
