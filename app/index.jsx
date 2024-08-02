import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

const Welcome = () => {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView
                contentContainerStyle={{
                    height: '100%',
                }}
            >
                <View className="flex h-[85vh] w-full items-center justify-center px-4">
                    <Image
                        source={images.logo}
                        className="h-[84px] w-[130px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={images.cards}
                        className="h-[298px] w-full max-w-[380px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-center text-3xl font-bold text-white">
                            Discover Endless{'\n'}
                            Possibilities with{' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="absolute -bottom-2 -right-8 h-[15px] w-[136px]"
                            resizeMode="contain"
                        />
                    </View>

                    <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
                        Where Creativity Meets Innovation: Embark on a Journey
                        of Limitless Exploration with Aora
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
};

export default Welcome;
