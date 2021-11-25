import { useNavigation, useRoute } from "@react-navigation/core";
import { Button } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { Linking, ScrollView, Text, View } from 'react-native'
import Header from "../../components/header";
import ImageComp from "../../components/imageComp";
import { getDate } from "../../utils/Const";
import { Strings } from "../../utils/Strings";
import { styles } from './NewsArticleStyle'


const NewsArticle: React.FC = () => {

    const navigation = useNavigation();
    const { params } = useRoute();

    const [newsData, setNewsData] = useState();

    useEffect(() => {
        const { newsData } = params;
        if (newsData)
            setNewsData(newsData)
    }, [])

    return (
        <View style={styles.rootView}>

            <Header onBackPress={() => {
                navigation.goBack();
            }} />

            <ScrollView style={styles.scrollView}>
                <Text style={styles.titleStyle}>{newsData?.title}</Text>

                <ImageComp url={newsData?.urlToImage} style={styles.headerImg} />

                <View style={styles.authorRow}>
                    <Text style={styles.authorStyle}>{newsData?.author}</Text>
                    <Text style={styles.dateStyle}>{getDate(newsData?.publishedAt)}</Text>
                </View>

                <Text style={styles.descStyle}>
                    {newsData?.description}
                </Text>

                <Text style={styles.contentStyle}>
                    {newsData?.content}
                </Text>

                <Button style={styles.btnStyles} onPress={() => Linking.openURL(newsData?.url)}>{Strings.source}</Button>
            </ScrollView>
        </View>)
}

export default NewsArticle