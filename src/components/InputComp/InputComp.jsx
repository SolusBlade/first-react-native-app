import { TextInput} from 'react-native';
import styles from '../../assets/styles/styles';
import { useState } from 'react';

const InputComp = ({placeholderText, type, value, setFormData, fieldName}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleInputChange = (value) => {
        setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
        }));
    };
    
    return (
        <TextInput style={[
          styles.input,
          isFocused ? styles.inputFocused : null,
        ]}
        secureTextEntry={type === "password" && true}
        value={value}
        onChangeText={(value) => handleInputChange(value)}
        onFocus={handleFocus}
        onBlur={handleBlur} placeholderTextColor="#BDBDBD" placeholder={placeholderText}/>
    )
}

export default InputComp;