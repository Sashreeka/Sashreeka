import React,{useState} from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    Modal
} from 'react-native';

export default function ModalScreen({navigation}) {

    const [openModal,setOpenModal]=useState(false);
   // setOpenModal(route.params)
    return (
        <View>
            <Modal visible={openModal}>
            <Text>Hello ishan</Text>
            </Modal>
            
        </View>
            
    )
}
