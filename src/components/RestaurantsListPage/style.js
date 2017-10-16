import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        width: 4 / 5 * width,
        marginBottom: height / 20
    },
    restaurant: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white'
    }
})

export default styles