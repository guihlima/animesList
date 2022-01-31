import React, {useState,useEffect} from 'react'
import { View ,Text,TouchableOpacity,TextInput,FlatList, KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons';

import firebase from 'firebase';

export default function Registro({navigation}){
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;

                // <Text><MaterialIcons name="check" size={24} color="green" />
                // alert("Cadastro feito com sucesso")</Text>

                navigation.navigate('Home', { idUser: user.uid })
                // ...
            })
            .catch((error) => {
                setErrorRegister(true)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }
    const [fontsLoaded] = useFonts({
        PoppinsRegular:require('../../../../assets/fonts/Poppins-Regular.ttf'),
        PoppinsMedium:require('../../../../assets/fonts/Poppins-Medium.ttf'),
        PoppinsLight:require('../../../../assets/fonts/Poppins-Light.ttf')
    })

    if(!fontsLoaded){
        return null
    }
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Registro</Text>
            <View style={styles.content}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Entre com seu email'
                    onChangeText={setEmail}
                    value={email}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Entre com sua senha'
                    onChangeText={setSenha}
                    value={senha}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Repetir senha</Text>
                    <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Entre com sua senha'
                    />
                </View>
                </View>
                <View style={styles.esqSenha}>
                    <Text style={styles.txtEsqSenha}>Esqueceu a senha?</Text>
                </View>
                
                <TouchableOpacity style={styles.btnRegistro} onPress={register}>
                    <Text style={styles.txtBtnRegistro}>Cadastrar</Text>
                </TouchableOpacity>

                <Text style={styles.txtOu}>OU</Text>
                <View style={styles.redesSociais}>
                    <TouchableOpacity style={styles.btnIcon}>
                        <FontAwesome name="google" size={24} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnIcon}>
                        <FontAwesome name="facebook" size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.txtLogin}>
                    <Text style={styles.txtPossui}>Possui conta?</Text>
                    <Text style={styles.txtLoginAccount} onPress={()=> navigation.navigate('Login')}>Entre aqui</Text>
                </View>
                
            </View>
        </SafeAreaView>
    )
}