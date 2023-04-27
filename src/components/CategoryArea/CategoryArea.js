import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import styles from './CategoryArea.style';

const CategoryArea = ({setSelected}) => {
  const [allCategory, setAllCategory] = useState(true);
  const [womenCategory, setWomenCategory] = useState(false);
  const [menCategory, setMenCategory] = useState(false);
  const [electronicsCategory, setElectronicsCategory] = useState(false);
  const [jeweleryCategory, setJeweleryCategory] = useState(false);

  // Change title color
  const setFalseSelected = () => {
    setAllCategory(false);
    setWomenCategory(false);
    setMenCategory(false);
    setElectronicsCategory(false);
    setJeweleryCategory(false);
  };

  return (
    <Pressable style={styles.container}>
      <Text
        style={[styles.title, allCategory && styles.selectedTitle]}
        onPress={() => {
          setFalseSelected();
          setAllCatogary(true);
          setSelected('all');
        }}
        All></Text>
      <Text
        style={[styles.title, womenCategory && styles.selectedTitle]}
        onPress={() => {
          setFalseSelected();
          setWomenCategory(true);
          setSelected(`women's%20clothing`);
        }}>
        WOMEN'S CLOTHING
      </Text>
      <Text
        style={[styles.title, menCategory && styles.selectedTitle]}
        onPress={() => {
          setFalseSelected();
          setMenCategory(true);
          setSelected(`men's%20clothing`);
        }}>
        MEN'S CLOTHING
      </Text>
      <Text
        style={[styles.title, electronicsCategory && styles.selectedTitle]}
        onPress={() => {
          setFalseSelected();
          setElectronicsCategory(true);
          setSelected(`electronics`);
        }}>
        ELECTRONICS
      </Text>
      <Text
        style={[styles.title, jeweleryCategory && styles.selectedTitle]}
        onPress={() => {
          setFalseSelected();
          setJeweleryCategory(true);
          setSelected(`jewelery`);
        }}>
        JEWELERY
      </Text>
    </Pressable>
  );
};
