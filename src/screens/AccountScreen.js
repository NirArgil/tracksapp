import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <>
            <SafeAreaView style={styles.forAndroid} forceInset={{ top: 'always' }}>
                <Text style={styles.text}>AccountScreen</Text>
                <Spacer>
                    <Button title="Sign Out" onPress={signout} />
                </Spacer>
            </SafeAreaView>
        </>

    )
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    },
    forAndroid: {
        paddingTop: Platform.OS === 'android' ? 45 : null,
    }
});

export default AccountScreen;
