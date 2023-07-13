import { Text, View } from 'react-native';
import styles from '../../assets/styles/styles';
import AuthContainer from '../AuthContainer/AuthContainer';
import InputComp from '../InputComp/InputComp';
import ButtonComp from '../ButtonComp/ButtonComp';
import { useState } from 'react';

const LoginScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false)

    const handleShowPassword = () => {
        setPasswordShow(!passwordShow);
    };

    return (
        <AuthContainer>
            <View style={styles.registrationWrapper} >
                <Text style={styles.title}>Увійти</Text>
                <InputComp placeholderText={"Адреса електронної пошти"} />
                <View style={styles.inputWrap}>
                    <InputComp placeholderText={"Пароль"} type={passwordShow === false && "password"}/>
                    <Text style={styles.inputText} onPress={handleShowPassword} >{passwordShow === false ? "Показати" : "Сховати"}</Text>
                </View>
                <ButtonComp text={"Увійти"} />
                <Text style={styles.regText} >Немає акаунту? Зареєструватися</Text>
            </View>
        </AuthContainer>
    )
}

export default LoginScreen;