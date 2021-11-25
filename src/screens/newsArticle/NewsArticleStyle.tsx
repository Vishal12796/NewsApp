import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { fontSize, horizontalScale, verticalScale, width } from "../../utils/Const";

export const styles = StyleSheet.create({

    rootView: {
        backgroundColor: Colors.backgroundColor,
        flex: 1
    },
    scrollView: {
        flex: 1
    },
    headerImg: {
        width: width,
        height: verticalScale(300),
    },
    titleStyle: {
        fontSize: fontSize.FONT_SIZE_1,
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
        color: Colors.blackColor,
        fontWeight: '600',
        textAlign: 'left'
    },
    authorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    authorStyle: {
        fontSize: fontSize.FONT_SIZE_3,
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
        color: Colors.greyColor,
    },
    dateStyle: {
        fontSize: fontSize.FONT_SIZE_3,
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
        color: Colors.greyColor,
    },
    contentStyle: {
        fontSize: fontSize.FONT_SIZE_3,
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
        color: Colors.blackColor,
    },
    descStyle: {
        fontSize: fontSize.FONT_SIZE_3,
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
        color: Colors.blackColor,
        fontWeight: '400'
    },
    btnStyles: {
        width: horizontalScale(150),
        alignSelf: 'center',
        marginVertical: verticalScale(20),
        borderColor: Colors.whiteColor,
        backgroundColor: Colors.orangeColor
    }

})