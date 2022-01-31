import React,{useState,useEffect} from 'react'
import { View ,Text,TouchableOpacity,TextInput, KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// -------------- ICONES --------------
import { Ionicons,AntDesign,Feather, MaterialIcons } from '@expo/vector-icons';

//-------------- STYLES --------------
import styles from './styles';
import { useFonts } from 'expo-font';

import firebase from 'firebase';

const db = firebase.firestore()
export default function EditarAnimes({navigation, route}){
    
    const [nomeEdit, setNomeEdit]= useState(route.params.nome)
    const [episodioEdit, setEpisodioEdit]= useState(route.params.episodio)
    const [statusEdit, setStatusEdit] =  useState(route.params.status)
    const idAnime = route.params.id

    function editAnime(nome, episodio, status, id){
        db.collection(route.params.id).doc(id).update({
            nome: nomeEdit,
            episodio: episodioEdit,
            status: statusEdit
            
        })
        navigation.navigate('Home')
    }

    function deleteTask(id) {
        db.collection("Animes").doc(id).delete()
        navigation.navigate('Home')
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
               <View style={styles.content}>
                <MaterialIcons name="arrow-back" size={24} color="black" onPress={()=>navigation.navigate('Home')} style={styles.backBtn}/>
                   <Text style={styles.title}>Editar um anime</Text>
    
                   <View style={styles.inputNome}>
                       <Text style={styles.label}>Nome</Text>
                       <TextInput
                       style={styles.input} 
                       placeholder='Informe o nome'
                       onChangeText={setNomeEdit}
                       value={nomeEdit}
                       />
                   </View>
                   <View style={styles.inputEpisodio}>
                       <Text style={styles.label}>Episodio</Text>
                       <TextInput
                       style={styles.input} 
                       placeholder='Informe o episodio'
                       onChangeText={setEpisodioEdit}
                       value={episodioEdit}
                       />
                   </View>
                   <View style={styles.inputStatus}>
                       <Text style={styles.label}>Status</Text>
                       <TextInput
                       style={styles.input} 
                       placeholder='Informe o status'
                       onChangeText={setStatusEdit}
                       value={statusEdit}
                       />
                   </View>

                   <TouchableOpacity style={styles.btnEdit} onPress={() => {
                                    deleteTask(idAnime)
                                }}>
                       <Text style={styles.txtBtnSalvar} >Excluir</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.btnSalvar} onPress={()=>{
                       editAnime(nomeEdit, episodioEdit, statusEdit,idAnime)
                   }}>
                       <Text style={styles.txtBtnSalvar}>Salvar</Text>
                   </TouchableOpacity>
               </View>
                <View style={styles.menu}>
                    <AntDesign style={styles.iconMenu} name="home" size={24} color="black" onPress={()=>navigation.navigate('Home')}/>
                    <AntDesign style={styles.iconMenu} style={{color: '#457B9D', fontSize: 30, backgroundColor: '#FFF', padding: 10, borderRadius: 10, height: 50 }} name="plus" onPress={()=>navigation.navigate('adicionarAnimes')}/>
                    <Feather style={styles.iconMenu} name="user" size={24} color="black" />
                </View>
            </SafeAreaView>
    )
}