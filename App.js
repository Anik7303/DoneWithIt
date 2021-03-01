import React from "react"
// import { useEffect, useState } from "react"
import { Text } from "react-native"
import { useNetInfo } from "@react-native-community/netinfo"
// import NetInfo from "@react-native-community/netinfo"

const App = () => {
    const netInfo = useNetInfo()
    console.log({ netInfo })

    // NetInfo.fetch().then(netInfo => console.log({netInfo}))

    // const [netInfo, setNetInfo] = useState(null)

    // console.log(netInfo)

    // useEffect(() => {
    //     let unsubscribe
    //     ;(async () => {
    //         unsubscribe = NetInfo.addEventListener((state) => setNetInfo(state))
    //     })()

    //     return () => {
    //         if (unsubscribe) unsubscribe()
    //     }
    // }, [])

    return <Text>App</Text>
}

export default App
