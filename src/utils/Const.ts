import moment from 'moment';
import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor: number = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

export const API_BASE_URL = 'https://newsapi.org/v2/top-headlines';
export const API_KEY = '813a539b9d294fc4a8621853e2682f41';

export const SCREEN_NAME = {
    NEWS_HOME: 'NEWS_HOME',
    NEWS_ARTICLE: "NEWS_ARTICLE"
}

export const fontSize = {
    FONT_SIZE_1: moderateScale(18),
    FONT_SIZE_2: moderateScale(15),
    FONT_SIZE_3: moderateScale(14),
    FONT_SIZE_4: moderateScale(12),
    FONT_SIZE_5: moderateScale(10),
}

export const API_TYPES = {
    POST: "POST",
    GET: "GET"
}

export const DATE_FORMAT = 'DD MMM, YYYY';

export const getDate = (date: string) => {
    return moment(date).format(DATE_FORMAT)
}