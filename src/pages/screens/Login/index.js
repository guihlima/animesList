import React, {useState,useEffect} from 'react'
import { View ,Text,TouchableOpacity,TextInput,FlatList, KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import styles from './styles'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import firebase from 'firebase';

export default function Login({navigation}){
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                // navigation.navigate('Task')
                navigation.navigate('Home', {idUser: user.uid})
                // ...
            })
            .catch((error) => {
                setErrorLogin(true)
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }

    // Função usuario logado
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // var uid = user.uid;
                navigation.navigate('Home', {idUser: user.uid})
                // ...
            }
        });
    }, []);

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
                <Text style={styles.title}>Login</Text>
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
                
                </View>
                <View style={styles.esqSenha}>
                    <Text style={styles.txtEsqSenha}>Esqueceu a senha?</Text>
                </View>

                {errorLogin == true ?
                <View style={styles.alert}>
                    <MaterialIcons name="error-outline" size={24} color="red" />
                    <Text style={styles.warningAlert}>Email ou senha inválidos!</Text>
                </View>
                :
                <View>
                    {/* <Text style={styles.warningAlert}></Text> */}
                </View>
            }
                {email === '' || senha === '' ?
                <TouchableOpacity
                    disabled
                    style={styles.btnLogin}
                >
                    <Text style={styles.txtBtnLogin}>Entrar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={loginFirebase}
                >
                    <Text style={styles.txtBtnLogin}>Entrar</Text>
                </TouchableOpacity>
            }
                {/* <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.txtBtnLogin}>Entrar</Text>
                </TouchableOpacity> */}

                <Text style={styles.txtOu}>OU</Text>
                <View style={styles.redesSociais}>
                    <TouchableOpacity style={styles.btnIcon}>
                        <FontAwesome name="google" size={24} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnIcon}>
                        <FontAwesome name="facebook" size={24} color="black" style={styles.icon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.txtCreate}>
                    <Text style={styles.txtNaoPossui}>Não possui conta?</Text>
                    <Text style={styles.txtCreateAccount} onPress={()=> navigation.navigate("Registro")}>Cadastre-se</Text>
                </View>
                
            </View>
        </SafeAreaView>
    )
}