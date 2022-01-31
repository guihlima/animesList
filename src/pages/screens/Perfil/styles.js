import { StyleSheet, Dimensions } from "react-native";

const altura = Dimensions.get('screen').height
const largura = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ECECEC',
        // height: altura,
        flex: 1,
        width: largura,
        alignItems: 'center'
    }
})

export default styles