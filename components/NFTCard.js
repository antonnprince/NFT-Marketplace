import { Text,View,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS,SIZES,SHADOWS,assets } from "../constants";
//usenavigation is used to provide instructions on which screen to navigate to
import { CircleButton,RectButton } from "./Button";
import { Subinfo,EthPrice,NFTTitle } from "./Subinfo";

const NFTCard =({data})=>{

    const navigation = useNavigation();

    return(
        <View
        style={{
            backgroundColor:COLORS.white,
            borderRadius:SIZES.font,
            marginBottom:SIZES.extraLarge,
            margin:SIZES.base,
            ...SHADOWS.dark,
        }}
        >
            <View style={{width:"100%", height:250 }}>
            <Image
                source={data.image}
                 resizeMode="cover"
                 style={{ width:"100%" ,
                height:"100%",
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
                }}
                />

                <CircleButton imgUrl={assets.heart} right={10} top={10}/>
                
            </View>
            <Subinfo />
            <View
            style={{
                width:"100%",
                padding: SIZES.font
            }}
            >
                <NFTTitle 
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.large}
                subtitleSize={SIZES.small}
                />

                    <View style={{
                        marginTop:SIZES.font,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:'center'
                    }}>
                        <EthPrice price={data.price} />
                        <RectButton 
                        minWidth={120} fontSize={SIZES.font} 
                        handlePress={()=> navigation.navigate("Details",{data})} 
                        />
                    </View>
            </View>
        </View>
    )
}

export default NFTCard