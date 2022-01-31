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
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        
    },
    txtLogo:{
        fontFamily: 'PoppinsRegular',
        fontSize: 20,
        color: '#457B9D'
    },
    iconNotification:{
        fontSize: 30,
        color: '#457B9D'
    },
    search:{
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        marginBottom: 20
    },
    btnSearch:{
        backgroundColor: '#FFF',
        width: 50,
        justifyContent: 'center',   
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    iconBtnSearch:{
        width: 30,
        height: 30,
        fontSize: 28,
        color: '#457B9D',
        alignSelf: 'center',
        
    },
    inputSearch:{
        backgroundColor: '#FFF',
        width: 250,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingLeft: 10,
        fontSize: 15
    },
    listAnimes:{
        // alignItems: 'center'
        marginLeft: 40
    },
    item:{
        alignItems: 'center'
    },
    cardItem:{
        backgroundColor: '#FFF',
        marginBottom: 10,
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
        
    },
    listItem:{
        borderRadius: 10,
        // backgroundColor: '#FFF',
        // paddingTop: 15,
        // marginBottom: 10,
        // width: 300,
        // height: 50,
        textAlign: 'center',
        // justifyContent: 'center',
        // alignContent: 'center',
        //  borderRadius: 10
        fontSize: 18
    },
    listEp:{
        fontSize: 10
    },
    listStatus:{
        fontSize: 10
    },
    menu:{
        position: 'absolute',
        bottom: 0,
        height: 70,
        flexDirection: 'row',
        width: largura,
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    iconMenu:{
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        color: '#457B9D',
        marginTop: 10, 
        fontSize: 30
    },
    iconBtnPlus:{
        // backgroundColor: '#',
        fontSize: 30
    }
})

export default styles