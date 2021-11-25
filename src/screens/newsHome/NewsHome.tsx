import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from 'react-native'
import Search from 'react-native-search-box';
import { Categorys } from "../../utils/Data";
import NewsCard from "../../components/newsCard";
import { styles } from "./NewsHomeStyle";
import { useNavigation } from "@react-navigation/core";
import { API_BASE_URL, API_KEY, API_TYPES, SCREEN_NAME } from "../../utils/Const";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions/actions";
import Chips from "../../components/Chips";
import Loader from "../../components/Loader";

const NewsHome: React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const newsData = useSelector((state) => state?.news)

    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        callGetNews('')
    }, [])

    useEffect(() => {
        callGetNews('');
    }, [category])

    const callGetNews = (searchText: string) => {
        let headers = { 'X-Api-Key': API_KEY }
        let params;
        if (searchText !== '') {
            params = { 'q': searchText }
            setCategory('')
        } else {
            params = { 'country': 'us', 'category': category }
        }
        let dataReq = {
            url: API_BASE_URL,
            headers,
            params,
            method: API_TYPES.GET
        }
        dispatch(getNews({ data: dataReq }))
    }

    const newsRender = ({ item }) => {
        return (
            <NewsCard
                data={item}
                onPress={() => {
                    navigation.navigate(SCREEN_NAME.NEWS_ARTICLE, { newsData: item })
                }} />
        )
    }

    return (
        <View style={styles.rootView}>
            <Search
                onSearch={(text: string) => {
                    callGetNews(text);
                }}
            />

            <Chips
                chipsData={Categorys}
                selectedCategory={category}
                selectedItem={(selected: string) => {
                    setCategory(selected)
                }}
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={newsData?.newsList}
                renderItem={newsRender}
            />

            <Loader isVisible={newsData?.loader} />
        </View>
    );
}

export default NewsHome