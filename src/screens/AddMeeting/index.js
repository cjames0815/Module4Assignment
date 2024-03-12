import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');


const AddMeetingScreen = props => {

    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    

    const onMeetingAdd = () => {
        if (!name){
            alert('Please enter a title for meeting ');
            return;
        }
    
    
        if (!location){
            alert('Please enter a location');
            return;
        }
    
    
        if(!date){
            alert('Please enter a meeting date');
            return;
        }

        try{
            database.addMeeting(title, location, date);
        }catch (error) {
            console.log('Error adding meeting' + error);
        }
        alert(title + ' Added.');
        //navigation.navigate('Start Shopping!');
    }
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput
                value={title}
                onChangeText={value => setTitle(value)}
                style={styles.title}
                placeholder={'Enter Title'}
                placeholderTextColor={'grey'}
            />
            <TextInput
                value={location}
                onChangeText={value => setLocation(value)}
                style={styles.location}
                placeholder={'SJ 48, SJ 49, SJ 249, SJ 250, MH 215'}
                placeholderTextColor={'grey'}
            />
            
            <TextInput
                value={date}
                onChangeText={value => setDate(value)}
                style={styles.date}
                placeholder={'Enter Date in format YYYY-MM-DD'}
                placeholderTextColor={'grey'}
            />
            


        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onMeetingAdd}>
                <Text style={styles.buttonText}>Add Meeting</Text>
            </Pressable>

        </View>
    </View>
  );
};

export default AddMeetingScreen;