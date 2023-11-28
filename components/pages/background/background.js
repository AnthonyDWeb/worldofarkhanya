import { ImageBackground } from 'react-native';
import background from '../../assets/images/background.jpg';
import { useStyle } from '../../Contexts/style.context';
const Background = children => {
    const {styles} = useStyle()
    return <ImageBackground source={background} style={styles.mainContainer} {...children}/>   
}
export default Background;