import { Button, Text, TouchableOpacity } from 'react-native';
import styles from '../../assets/styles/styles';


const ButtonComp = ({text, secondStyle, onPress}) => {
    
    return (
       <TouchableOpacity
        onPress={onPress && onPress}
        style={[styles.button, styles[secondStyle]]}
        >
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
    )
}

export default ButtonComp;