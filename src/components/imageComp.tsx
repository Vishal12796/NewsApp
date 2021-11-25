import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppImages } from '../assets/images';

interface ImageProps {
    url: string;
}

const ImageComp: React.FC<ImageProps> = (props) => {

    const { url } = props;

    const [imageLoader, setImageLoader] = useState<boolean>();

    return (<View style={styles.viewStyle}>
        <Image
            {...props}
            onLoadStart={() => { setImageLoader(true) }}
            onLoadEnd={() => { setImageLoader(false) }}
            source={ url ? { uri: url } : AppImages.placeHolder} />

        {imageLoader ?
            <ActivityIndicator
                style={styles.indicatorStyle}
                size={'small'}
                color={Colors.blackColor}></ActivityIndicator> :
            null}
    </View>)
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems:'center',
        justifyContent:'center'
    },
    indicatorStyle: {
        position: 'absolute'
    }
});

export default ImageComp