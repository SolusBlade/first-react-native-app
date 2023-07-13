import { Dimensions, Text, View } from 'react-native';
import styles from '../../assets/styles/styles';
import AuthContainer from '../AuthContainer/AuthContainer';
import InputComp from '../InputComp/InputComp';
import ButtonComp from '../ButtonComp/ButtonComp';
import { useState } from 'react';

const RegistrationScreen = () => {
    const { width } = Dimensions.get('window');
    const [passwordShow, setPasswordShow] = useState(false)

    const handleShowPassword = () => {
        setPasswordShow(!passwordShow);
    };

    return (
        <AuthContainer>
            <View style={styles.registrationWrapper} >
                <View style={[styles.imgBlock, {left: width/2}]} />
                <Text style={[styles.title, {marginTop: 60}]}>Реєстрація</Text>
                <InputComp placeholderText={"Логін"} />
                <InputComp placeholderText={"Адреса електронної пошти"} />
                <View style={styles.inputWrap}>
                    <InputComp placeholderText={"Пароль"} type={passwordShow === false && "password"}/>
                    <Text style={styles.inputText} onPress={handleShowPassword} >{passwordShow === false ? "Показати" : "Сховати"}</Text>
                </View>
                <ButtonComp text={"Зареєстуватися"} />
                <Text style={styles.regText} >Вже є акаунт? Увійти</Text>
            </View>
        </AuthContainer>
    )
}

export default RegistrationScreen;