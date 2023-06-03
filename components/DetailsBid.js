import { View, Text, Image} from 'react-native'
import React from 'react'
import { EthPrice } from './Subinfo'
import{COLORS,SIZES,FONTS,SHADOWS} from "../constants"

export const DetailsBid = ({bid}) => {
  return (
    <View style={{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,
    }}>
      <Image 
      source={bid.image}
      resizeMode='contain'
      style={{
        width:48,height:48
      }}
      />
      <View>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize:SIZES.small,
          color:COLORS.primary
        }}>
          Bid placed by {bid.name} at {bid.date}
        </Text>

      </View>

        <EthPrice price={bid.price}/>

    </View>
  )
}

