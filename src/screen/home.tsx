import axios from 'axios';
import React from 'react';
import {Image, View, Text} from 'react-native';
import RadioHeadSvg from '../assets/RNSVG/general/radioHead';
import MusicItem from '../components/musicItem';
import PlayerScreen from '../components/player';
import Search from '../components/search';
import Button from '../components/shared/button';
import Layout from '../components/shared/layout';
import {musicList} from '../data';
import styles from './styles';

const HomeScreen = () => {
  return (
    <Layout>
      <View>
        <View style={styles.header}>
          <RadioHeadSvg />
          <Image
            source={require('../assets/PNG/user.png')}
            style={styles.user}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.today}>Today's Hit</Text>
        <Search />
        <View style={styles.buttonContainer}>
          <Button text="Shuffle Play" buttonStyle={styles.shuffle} />
          <Button text="Play" />
        </View>
        {musicList.map(value => (
          <MusicItem {...value} key={value.id} />
        ))}
      </View>
      <PlayerScreen />
    </Layout>
  );
};

export default HomeScreen;
