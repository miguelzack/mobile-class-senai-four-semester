import {Text, View, Image, TextInput} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import pikachuImage from './assets/images/pikachu-image.jpg'
import dramaImage from './assets/images/drama-image.jpg'

export default function App() {
    return (<>
        <SafeAreaView>
            {/*<View>*/}
            {/*    <Text>Pikachu</Text>*/}
            {/*    <Image source={pikachuImage}/>*/}
            {/*    <Text>É um personagem ou um pokémon?*/}
            {/*        Pikachu é um Pokémon do tipo elétrico conhecido como o rato elétrico. Ele mede 0,4 metros, pesa 6*/}
            {/*        kg, tem pelo amarelo, orelhas com pontas pretas e bochechas vermelhas que armazenam eletricidade. É*/}
            {/*        a evolução do Pichu e pode evoluir para Raichu com uma Pedra do Trovão.*/}
            {/*    </Text>*/}
            {/*</View>*/}
            <View>
                <Text>Nome</Text>
                {/*<Image source={pikachuImage}/>*/}
                <TextInput placeholder={"Digite quanta aura voce tem"} keyboardType="numeric" />
            </View>

            <View>
                <Image source={dramaImage}></Image>
                <Text>O Drama</Text>
                <Text>Um casal feliz e recém-noivado é colocado à prova quando uma revelação inesperada faz com que a semana do casamento saia dos trilhos.</Text>
            </View>
        </SafeAreaView>
    </>);
}