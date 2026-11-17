import { View, Image, Text, TextInput, Pressable } from 'react-native'
import logo from '../../assets/logoShopSwift.png'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Login = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView>

            <View style={styles.containerHome}>
                <Image source={logo} />
                <View style={styles.contentHome}>
                    <Text style={styles.txtTitulo}>Faça login e <Text style={styles.txtHighlights}>se surpreenda</Text></Text>
                    <View style={styles.containerForm}>
                        <View style={styles.contentLogin}>
                            <Text style={styles.txtInput}>Email</Text>
                            <TextInput style={styles.input} placeholder='insira seu email' keyboardType='email-address' />
                        </View>
                        <View style={styles.contentLogin}>
                            <Text style={styles.txtInput}>Senha</Text>
                            <TextInput style={styles.input} placeholder='insira sua senha' secureTextEntry={true} />
                        </View>
                    </View>
                    <View style={styles.dontHaveAccount}>
                        <Pressable onPress={() => navigation.navigate("home")} style={styles.button}><Text style={styles.txtButton}>Entrar</Text></Pressable>
                        <Text style={styles.dontHaveAccountTxt}>Não tem conta ? <Text style={styles.createAccountTxt}>Criar Conta</Text></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}