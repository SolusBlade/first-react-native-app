import { Dimensions, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from '../../assets/styles/styles';
import AuthContainer from '../../components/AuthContainer/AuthContainer';
import InputComp from '../../components/InputComp/InputComp';
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import { useState } from 'react';

const RegistrationScreen = () => {
    const { width } = Dimensions.get('window');
    const [passwordShow, setPasswordShow] = useState(false)
    const [formData, setFormData] = useState({
        login: '',
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
                    <View style={[styles.imgBlock, {left: width/2}]} />
                    <Text style={[styles.title, {marginTop: 60}]}>Реєстрація</Text>
                    <InputComp placeholderText={"Логін"} fieldName={"login"} value={formData.login} setFormData={setFormData} />
                    <InputComp placeholderText={"Адреса електронної пошти"} fieldName={"email"} value={formData.email} setFormData={setFormData}/>
                    <View style={styles.inputWrap}>
                        <InputComp placeholderText={"Пароль"} fieldName={"password"} value={formData.password} setFormData={setFormData} type={passwordShow === false && "password"}/>
                        <Text style={styles.inputText} onPress={handleShowPassword} >{passwordShow === false ? "Показати" : "Сховати"}</Text>
                    </View>
                    <ButtonComp text={"Зареєстуватися"} onPress={handleSubmit}/>
                    <Text style={styles.regText} >Вже є акаунт? Увійти</Text>
                </View>
            </TouchableWithoutFeedback>
        </AuthContainer>
    )
}

export default RegistrationScreen;