import { StyleSheet, Dimensions } from "react-native";

const altura = Dimensions.get('screen').height
const largura = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ECECEC',
        // height: altura,
        // flex: 1,
        height: altura,
        width: largura,
        alignItems: 'center'
    },
    backBtn:{
        marginTop: 20
    },
    title:{
        marginTop: 50,
        alignSelf: 'center',
        fontFamily: 'PoppinsMedium',
        fontSize: 25
    },
    inputNome:{
        
        alignSelf: 'flex-start',
        marginTop: 20
    },
    label:{
        fontFamily: 'PoppinsLight',
        fontSize: 16,
        marginBottom: 10
    },
    input:{
        width: largura-60,
        height: 50,
        borderWidth: 0.6,
        borderRadius: 10,
        padding: 10,
        fontFamily: 'PoppinsRegular'
    },
    inputEpisodio:{
        marginTop: 10
    },
    inputStatus:{
        marginTop: 10
    },
    btnEdit:{
        width: largura-60,
        height: 50,
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E63946'
    },
    btnSalvar:{
        width: largura-60,
        height: 50,
        backgroundColor: '#2C5288',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnSalvar:{
        fontFamily: 'PoppinsMedium',
        fontSize: 18,
        color: '#FFF'
        // padding: 10,
        // justifyContent: 'center'
    },
    menu:{
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        width: largura,
        justifyContent: 'center'
    },
    iconMenu:{
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        color: '#457B9D',
        marginTop: 10, 
        fontSize: 30
    }
})

export default styles