import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../utils/Colors';
import { fontSize, getDate, horizontalScale, verticalScale } from '../utils/Const';
import ImageComp from './imageComp';

interface NewsCardProps {
    data: any;
    onPress: () => void;
}

const NewsCard: React.FC<NewsCardProps> = (props) => {

    const { data, onPress } = props;

    const truncateText = (text:string) => {
        return text.length < 80
            ? `${text}`
            : `${text?.substring(0, 80)}...`
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.cardStyle}
            onPress={() => {
                onPress()
            }}>

            <View style={styles.titleRow}>
                <View style={styles.titleSection}>
                    <Text numberOfLines={2} style={styles.titleStyle}>{data?.title}</Text>
                    <Text numberOfLines={4} style={styles.descStyle}>{truncateText(data?.description ?? "")}
                    </Text>
                </View>

                <View>
                    <ImageComp url={data?.urlToImage} style={styles.imageStyle} />
                    <Text style={styles.dateStyle}>{getDate(data?.publishedAt)}</Text>
                </View>
            </View>


        </TouchableOpacity>)
}

const styles = StyleSheet.create({

    titleSection: {
        flex: 1
    },
    titleStyle: {
        fontSize: fontSize.FONT_SIZE_2,
        color: Colors.blackColor,
        paddingRight: horizontalScale(5),
        fontWeight: '600'
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardStyle: {
        backgroundColor: Colors.cardColor,
        borderRadius: verticalScale(5),
        margin: verticalScale(10),
        padding: verticalScale(8),
        borderWidth: 0.5,
        borderColor: Colors.greyColor,
        elevation: 5
    },
    imageStyle: {
        width: verticalScale(100),
        height: verticalScale(100),
        borderRadius: horizontalScale(10)
    },
    dateStyle: {
        fontSize: fontSize.FONT_SIZE_4,
        color: Colors.blackColor,
        textAlign: 'right',
        marginVertical: verticalScale(5)
    },
    descStyle: {
        fontSize: fontSize.FONT_SIZE_5,
        color: Colors.blackColor,
        marginVertical: verticalScale(5)
    },
})

export default NewsCard;