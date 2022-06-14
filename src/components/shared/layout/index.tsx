import React, {FC, ReactElement} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../theme/colors';
import styles from './styles';

interface props {
  children: ReactElement | ReactElement[];
  containerStyle?: any;
  statusColor?: string;
}

const Layout: FC<props> = ({children, containerStyle, statusColor}) => {
  return (
    <SafeAreaView style={{backgroundColor: statusColor || colors.SECONDARY}}>
      <ScrollView
        style={{...styles.scrollStyle, ...containerStyle}}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {children}
        <View style={styles.gap} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
