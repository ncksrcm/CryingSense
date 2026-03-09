// components/Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/HomeScreenStyles';

type HeaderProps = {
  onSettingsPress?: () => void;
  title?: string;
};

export default function Header({ onSettingsPress, title }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title || 'Home'}</Text>
      <TouchableOpacity onPress={onSettingsPress}>
        <Ionicons name="settings-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}
