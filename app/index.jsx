import { StatusBar, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View className="h-full w-full flex-1 items-center justify-center bg-white">
            <Text className="text-3xl text-amber-400">
                Edit app/index.tsx edit this screen.
            </Text>
            <Link href="/home">Go to home</Link>
        </View>
    );
}
