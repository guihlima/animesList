import React, {useState,useEffect} from 'react'
import { View ,Text,TouchableOpacity,TextInput,FlatList, KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// -------------- ICONES --------------
import { Ionicons,AntDesign,Feather  } from '@expo/vector-icons';

//-------------- STYLES --------------
import styles from './styles';
import { useFonts } from 'expo-font';

import firebase from '../../config/firebase';

const db = firebase.firestore()

export default function Home({navigation, route}){

    const [animes, setAnimes] = useState(null)
    // const [searchTxt, setSearchTxt] = useState("")
    // const [lista, setList] = useState(animes)

    useEffect(()=>{
        db.collection(route.params.idUser).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setAnimes(list)
        })
    },[])

    
    //-------------- VINCULANDO FONTES --------------
    const[fontsLoaded] = useFonts({
        PoppinsRegular:require('../../../assets/fonts/Poppins-Regular.ttf'),
    })

    if(!fontsLoaded){
        return null
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtLogo}>Olá,</Text>
                <Ionicons style={styles.iconNotification} name="notifications-outline"/>
            </View>
            <View style={styles.search}>
                <TouchableOpacity style={styles.btnSearch}>
                    <Ionicons style={styles.iconBtnSearch} name="search" size={24} color="black" />
                </TouchableOpacity>
                <TextInput style={styles.inputSearch} 
                placeholder='O que desejas...'
                // onChangeText={(t) => setSearchTxt(t)}
                // value={searchTxt}
                />
            </View>

            <FlatList
            style={styles.listAnimes}
            data={animes}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity style={styles.cardItem} onPress={() => {
                        navigation.navigate('editarAnimes',{
                            id:item.id,
                            nome: item.nome,
                            episodio: item.episodio,
                            status: item.status
                        })
                    }}>
                        {/* <Text></Text> */}
                        <Text style={styles.listItem}>{item.nome}</Text>
                        <Text style={styles.listEp}>Ep: {item.episodio}</Text>
                        <Text style={styles.listStatus}>Status: {item.status}</Text>
                    </TouchableOpacity>
                )
            }}
            />

            <View style={styles.menu}>
                <AntDesign style={styles.iconMenu} name="home" size={24} color="black" />
                <AntDesign style={styles.iconMenu} style={{color: '#457B9D', fontSize: 30, backgroundColor: '#FFF', padding: 10, borderRadius: 10, height: 50 }} name="plus" onPress={()=>navigation.navigate('adicionarAnimes', {idUser: route.params.idUser})}/>
                <Feather style={styles.iconMenu} name="user" size={24} color="black" onPress={()=>navigation.navigate('Perfil')}/>
            </View>
        </SafeAreaView>
    )
}