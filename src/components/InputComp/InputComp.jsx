import { TextInput} from 'react-native';
import styles from '../../assets/styles/styles';
import { useState } from 'react';

const InputComp = ({placeholderText, type}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    
    return (
        <TextInput style={[
          styles.input,
          isFocused ? styles.inputFocused : null,
        ]}
        secureTextEntry={type === "password" && true}
        onFocus={handleFocus}
        onBlur={handleBlur} placeholderTextColor="#BDBDBD" placeholder={placeholderText}/>
    )
}

export default InputComp;