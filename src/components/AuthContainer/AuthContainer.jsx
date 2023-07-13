import styles from '../../assets/styles/styles';
import { ImageBackground } from 'react-native';

const AuthContainer = ({children}) => {

    return (
        <ImageBackground
            source={require('../../assets/images/backgroundAuthImg.png')}
            style={styles.backgroundImage}
            >
                {children}
        </ImageBackground>
    )
}

export default AuthContainer;


