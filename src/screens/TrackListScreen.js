import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks, deleteTrack } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                    <Button title="DELETE" onPress={() => deleteTrack(item._id)} />
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    )
};

TrackListScreen.navigationOptions = {
   title: 'Tracks',
   headerTitleAlign: 'center',
};

const styles = StyleSheet.create({
    forAndroid: {
        paddingTop: Platform.OS === 'android' ? 45 : null,
    }
});

export default TrackListScreen;