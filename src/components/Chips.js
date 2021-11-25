import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Pressable,
    FlatList,
    StyleSheet
} from 'react-native';
import { Colors } from '../utils/Colors';
import { horizontalScale } from '../utils/Const';

const Chips = ({ chipsData, selectedItem, selectedCategory }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(chipsData)
    }, [])

    return (
        <FlatList
            contentContainerStyle={styles(false).listStyle}
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            extraData={selectedCategory}
            keyExtractor={item => item.text}
            renderItem={({ item, index }) => {
                return (
                    <Pressable onPress={() => {
                        selectedItem(item.text)
                    }}>
                        <View style={styles(item.text === selectedCategory).chipView}>
                            <Text style={styles(item.text === selectedCategory).chipText}>{item.text}</Text>
                        </View>
                    </Pressable>
                )
            }}
        />
    );
}

const styles =
    (isSelected) => StyleSheet.create({

        listStyle: { paddingHorizontal: 8, paddingVertical: 10 },
        chipView: {
            height: 40,
            marginRight: 8,
            justifyContent: 'center',
            backgroundColor: isSelected ? Colors.orangeColor : Colors.whiteColor,
            borderRadius: horizontalScale(40),
            paddingHorizontal: horizontalScale(10)
        },
        chipText: {
            textAlign: 'center',
            color: isSelected ? Colors.whiteColor : Colors.blackColor,
            padding: horizontalScale(5),
            textTransform: 'capitalize'
        }

    })

export default Chips