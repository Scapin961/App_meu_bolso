import { Text, StyleSheet } from "react-native";
import AppCard from "./AppCard";
import { FormatCurrency } from '../utils/Format';

export default function BalanceCard(){
    return(
        <AppCard styles={styles.card}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>{FormatCurrency(balance)}</Text>
        </AppCard>
    );
}

const styles=StyleSheet.create({
    card: {backgroundColor: '#2f3640'},
    label: {color: '#dcdde1'},
    value: {color: '#fff', fontSize: 30, fontWeight: '900', marginTop: 6}

});