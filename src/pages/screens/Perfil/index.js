import React from "react";
import { KeyboardAvoidingView,View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons,FontAwesome  } from '@expo/vector-icons';
import styles from "./styles";

import firebase from "firebase";

export default function Perfil({navigation}){

    function logout(){
        firebase.auth().signOut().then(()=> {
            navigation.navigate("Login")
        })
    }
    return(
        <SafeAreaView style={styles.container}>
        {/* <KeyboardAvoidingView style={styles.container}> */}
            <View>
                <Text>Imagem do perfil</Text>

                <View>
                    <Text>Nome</Text>
                    <Text>
                        <FontAwesome name="edit" size={24} color="black" />
                    </Text>
                    <TouchableOpacity onPress={logout}>
                        <MaterialIcons name="logout" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

        {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    )
}