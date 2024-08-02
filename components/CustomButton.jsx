import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({
    isLoading,
    textStyles,
    title,
    containerStyles,
    handlePress,
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={handlePress}
            disabled={isLoading}
            className={`${isLoading ? 'opacity-50' : ''} min-h-[62px] items-center justify-center rounded-xl bg-secondary ${containerStyles}`}
        >
            <Text
                className={`font-psemibold text-lg text-primary ${textStyles}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
