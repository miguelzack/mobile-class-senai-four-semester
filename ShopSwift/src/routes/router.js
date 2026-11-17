import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack" 
import { Login } from "../screens/login"
import { SignUp } from "../screens/signUp"
import { Home } from "../screens/home"
import { Contato } from "../screens/Contact"


export const AppRouter = () => {
    const Stack = createNativeStackNavigator()
    return (
        // agrupa toda a lógica de navegação 
        <NavigationContainer>
            {/* gerencia as pilhas */}
            <Stack.Navigator initialRouteName="login" screenOptions={{
                headerShown:false
            }}>
                {/* cada screen */}
                <Stack.Screen name="login" component={Login} />      
                <Stack.Screen name="sign-up" component={SignUp}/>      
                <Stack.Screen name="home" component={Home}/>      
                <Stack.Screen name="contact" component={Contato}/>      
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppRouter