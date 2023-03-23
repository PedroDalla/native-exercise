import { View, Button, TextInput, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffcf2',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#22223b"
    },
    title: {
        fontSize: 32,
        marginBottom: 30,
        textAlign: "center"
    },
    input: {
        fontSize: 18,
        marginBottom: 30,
        borderBottomWidth: 1
    },
});

export const Home = ({ navigation, textValue, changeTextValue }) => {
    const handlePress = () => {
        navigation.navigate("Word Count")
    }

    const isTextValid = textValue.replace(/[^a-zA-Z0-9,]+/, "").trim().length > 0

    return <View style={styles.container}>
        <Text style={styles.title}>Word Count</Text>
        <TextInput style={styles.input} placeholder='Type something here' maxLength={48} value={textValue} onChangeText={text => changeTextValue(text)}></TextInput>
        <Button style={styles.button} disabled={!isTextValid} onPress={handlePress} title="Check Word Count"></Button>
    </View>
}