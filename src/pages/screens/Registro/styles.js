import { StyleSheet,Dimensions } from "react-native";


const altura = Dimensions.get('screen').height
const largura = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ECECEC',
        // height: altura,
        // flex: 1,
        height: altura,
        width: largura,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontFamily: 'PoppinsMedium',
        fontSize: 25,
        textAlign: 'center'
    },
    content:{
        alignSelf: 'center'
    },
    label:{
        fontFamily: 'PoppinsRegular',
        fontSize: 15,
        marginTop: 20
        
    },
    input:{
        // width: largura-60,
        width: largura-60,
        height: 50,
        borderWidth: 0.6,
        borderRadius: 10,
        padding: 10,
        
        justifyContent: 'center'
    },
    esqSenha:{
        width: largura-50,
        // backgroundColor: 'blue',
        marginTop: 10
    },
    txtEsqSenha:{
        textAlign: 'right',
        padding: 10
    },
    btnRegistro:{
        width: largura-60,
        height: 50,
        backgroundColor: '#2C5288',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    txtBtnRegistro:{
        fontFamily: 'PoppinsMedium',
        fontSize: 18,
        color: '#FFF'
    },
    txtOu:{
        marginTop: 20,
        alignSelf: 'center',
        fontFamily: 'PoppinsMedium',
        fontSize: 18
    },
    redesSociais:{
        // alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: -10
    },
    btnIcon:{
        backgroundColor: '#2C5288',
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 50,
        marginLeft: 10,
        // 
    },
    icon:{
        textAlign: 'center',
        color: '#FFF',
        
    },
    txtLogin:{
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
        
    },
    txtPossui:{
        fontFamily: 'PoppinsLight'
    },
    txtLoginAccount:{
        marginLeft: 10,
        fontFamily: 'PoppinsLight',
        color: '#457B9D'
    }
})

export default styles