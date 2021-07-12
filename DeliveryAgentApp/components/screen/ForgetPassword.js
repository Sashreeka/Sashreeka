import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default function ForgetPassword({navigation}) {
    return (
        <View>
            <Text>ForgetPassword page</Text>
            <Button
                title="Go to Sign In"
                onPress={()=> navigation.goBack()}
            />
            
        </View>

    )
}
