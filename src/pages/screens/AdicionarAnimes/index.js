import React,{useState,useEffect} from 'react'
import { View ,Text,TouchableOpacity,TextInput, KeyboardAvoidingView, Picker} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// -------------- ICONES --------------
import { Ionicons,AntDesign,Feather,MaterialIcons  } from '@expo/vector-icons';

//-------------- STYLES --------------
import styles from './styles';
import { useFonts } from 'expo-font';

import firebase from 'firebase';

const db = firebase.firestore()
export default function AdicionarAnimes({navigation, route}){
    const [nome, setNome] = useState(null)
    const [episodio, setEpisodio] = useState(null)
    const [status, setStatus] =  useState(null)

    const [selectedValue, setSelectedValue] = useState("");

    function addAnime(){
        db.collection(route.params.idUser).add({
            nome: nome,
            episodio: episodio,
            status: status
        })
        navigation.navigate('Home',{idUser: route.params.idUser})
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
                   <Text style={styles.title}>Adicione um anime</Text>
    
                   <View style={styles.inputNome}>
                       <Text style={styles.label}>Nome</Text>
                       <TextInput
                       style={styles.input} 
                       placeholder='Informe o nome'
                       onChangeText={setNome}
                       value={nome}
                       />
                   </View>
        
                   <View style={styles.inputEpisodio}>
                       <Text style={styles.label}>Episodio</Text>
                       <TextInput
                       style={styles.input} 
                       placeholder='Informe o episodio'
                       onChangeText={setEpisodio}
                       value={episodio}
                       />
                   </View>
                    <View style={styles.inputStatus}>
                    <Picker
                    selectedValue={status}
                    // style={styles.input} 
                    onValueChange={(itemValue, itemIndex)=> setStatus(itemValue)}
                    >
                        <Picker.Item label="Em andamento" value="Andamento"/>
                        <Picker.Item label="Finalizado" value="Finalizado"/>
                    </Picker>
                    </View>
                   {/* <View style={styles.inputStatus}>
                       <Text style={styles.label}>Status</Text>
                       <TextInput
                       style={styles.input} 
                       placeholder='Informe o status'
                       onChangeText={setStatus}
                       value={status}
                       />
                   </View> */}

                   <TouchableOpacity style={styles.btnSalvar} onPress={addAnime}>
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