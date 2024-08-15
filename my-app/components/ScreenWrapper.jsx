import { View } from "react-native"
import { useSafeAreaInserts } from 'react-native-safe-area-context'
import { React } from 'react-native'

function ScreenWrapper({children, bg}) {

    const {top} = useSafeAreaInserts();
    const paddingTop = top > 0 ? top + 5 : 30;

    return (
        <View style={{flex: 1, paddingTop, backgroundColor: bg}}>
            {children}
        </View>
    )
}

export default ScreenWrapper;