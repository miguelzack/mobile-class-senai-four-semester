import {Image, Pressable, Text, TextInput, View} from 'react-native'
import {Container, styles} from './style'
import logo from '../../assets/logoShopSwift.png'

export const Register = () => {
    return (

        <Container>
            <Image source={logo}/>
            <View style={styles.contentHome}>
                <Text style={styles.txtTitulo}>Crie uma conta <Text
                    style={styles.txtHighlights}>e descubra...</Text></Text>
                <View style={styles.containerForm}>
                    <View style={styles.containerInputs}>
                        <View>
                            <Text>E-mail:</Text>
                            <TextInput keyboardType='email-address' style={styles.input}/>
                        </View>
                        <View>
                            <Text>Senha:</Text>
                            <TextInput secureTextEntry={true} style={styles.input}/>
                        </View>
                        <View>
                            <Text>Confirmar Senha:</Text>
                            <TextInput secureTextEntry={true} style={styles.input}/>
                        </View>
                    </View>
                    <Pressable style={styles.buttonLogin}>
                        <Text style={styles.txtLogin}>Cadastrar</Text>
                    </Pressable>
                </View>

                <Text style={styles.txtNaoTemConta}>Tem uma conta? <Text
                    style={styles.txtCriarConta}>Logar</Text></Text>
            </View>
        </Container>

    )
}
