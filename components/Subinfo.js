import { View, Text,Image} from 'react-native'
import React from 'react'
import { SIZES,COLORS,FONTS,SHADOWS,assets } from '../constants'
import { FlatList } from 'react-native-gesture-handler'

export const NFTTitle = ({title,subTitle,titleSize,subtitleSize}) => {
    return (
      <View style={{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Text style={{
        fontFamily:FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
        }}>{title}</Text>
         <Text style={{
        fontFamily:FONTS.regular,
        fontSize: subtitleSize,
        color: COLORS.primary
        }}>{subTitle}</Text>
      </View>
    )
  }

  export const EthPrice = ({price}) => {
    return (
      <View
      style={{
        flexDirection:"row",
        alignItems:'center',

      }}
      >
        <Image
            source={assets.eth}
            resizeMode='contain'
            style={{
                width: 20,
                marginRight: 2,
                height: 20
            }}
        />
        <Text
        style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
        }}
        >
            {price}
        </Text>
      </View>
    )
  }

  export const ImageCmp = ({imgUrl,index}) => {
    return (
      <View>
        <Image 
        source={imgUrl}
        resizeMode='contain'
        style={{
            width:48,
            height:48,
            marginLeft: index === 0?0:-SIZES.font
        }}
        />
      </View>
    )
  }

  export const People = () => {
    return (
      <View style={{
        flexDirection:"row"
      }}>
        {
            [assets.person02,assets.person03,assets.person04].map((imgUrl,index)=>(
                <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            ))
            
        }
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%"
      }}
      >
        <Text
        style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary
        }}
        >Ending in</Text>
        <Text
        style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary
        }}
        >12h 30mins</Text>
      </View>
    )
  }


export const Subinfo = () => {
  return (
    <View style={{
        width:'100%',
        paddingHorizontal: SIZES.extraLarge,
        marginTop: -SIZES.extraLarge,
        flexDirection:"row",
        justifyContent:'space-between'

    }}>
     <People />
     <EndDate />
    </View>
  )
}

