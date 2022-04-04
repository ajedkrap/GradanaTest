import {Dimensions} from 'react-native';

const {height: heightScreen, width: widthScreen} = Dimensions.get('screen');
const {height: heightWindow, width: widthWindow} = Dimensions.get('window');

export const hS = heightScreen;
export const wS = widthScreen;
export const hW = heightWindow;
export const wW = widthWindow;
