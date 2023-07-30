import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
    //CREACION DE UN HOOK
    const isFocused = useIsFocused();
    /*
    SI isFocused es True, la barra se anima, y le pasamos todas las propiedades
    de StatusBar, (como por ejenplo, el bgcolor)
    */
    return isFocused ? <StatusBar animated={true} {...props}/>:null;

}

export default FocusedStatusBar