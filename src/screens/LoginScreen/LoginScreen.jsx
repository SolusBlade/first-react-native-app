import { Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from '../../assets/styles/styles';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import InputComp from '../../components/InputComp/InputComp';
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import { useState } from 'react';

const LoginScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = () => {
        console.log(formData);
        Keyboard.dismiss();
    };

    const handleShowPassword = () => {
        setPasswordShow(!passwordShow);
    };

    return (
        <AuthContainer>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.registrationWrapper} >
                    <Text style={styles.title}>Увійти</Text>
                    <InputComp placeholderText={"Адреса електронної пошти"} fieldName={"email"} value={formData.email} setFormData={setFormData}/>
                    <View style={styles.inputWrap}>
                        <InputComp placeholderText={"Пароль"} fieldName={"password"} value={formData.password} setFormData={setFormData} type={passwordShow === false && "password"}/>
                        <Text style={styles.inputText} onPress={handleShowPassword} >{passwordShow === false ? "Показати" : "Сховати"}</Text>
                    </View>
                    <ButtonComp text={"Увійти"} onPress={handleSubmit}/>
                    <Text style={styles.regText} >Немає акаунту? Зареєструватися</Text>
                </View>
            </TouchableWithoutFeedback>
        </AuthContainer>
    )
}

export default LoginScreen;