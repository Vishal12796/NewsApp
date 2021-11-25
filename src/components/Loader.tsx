import { Spinner } from "@ui-kitten/components";
import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { verticalScale } from "../utils/Const";

interface LoaderProps {
    isVisible: boolean;
}

const Loader: React.FC<LoaderProps> = (props) => {
    const { isVisible } = props;
    return (
        <Modal
            transparent={true}
            visible={isVisible}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.backgroundView}>
                    <View style={styles.dialogView}>
                        <Spinner />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundView: {
        opacity: 0.8,
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    dialogView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: verticalScale(150),
        height: verticalScale(150),
        padding: verticalScale(15),
        backgroundColor: Colors.whiteColor,
        borderRadius: verticalScale(10)
    },
});

export default Loader;