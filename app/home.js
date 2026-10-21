import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppButton from "../src/components/AppButton"
import BalanceCard from "../src/components/BalanceCard"

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text>Meu Bolso</Text>
                    <Text>Resumo Financeiro</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.profile}>Perfil</Text>
                </TouchableOpacity>
            </View>

            <BalanceCard balance={1000000}/>

            <AppButton
                title= "Gerar relatório PDF"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#2f3640'
    },
    profile: {
        color: '#008f72',
        fontWeight: '700',
    }
})
