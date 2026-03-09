import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useBaby } from '../context/BabyContext';
import styles from '../styles/AppStyles'; // <-- import your shared styles
import EditBabyProfileScreen from '../screens/EditBabyProfileScreen';

type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SettingsScreen'>;

export default function SettingsScreen() {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const { profile } = useBaby();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Baby Profile */}
      <Text style={styles.sectionTitle}>Baby Profile</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.getParent()?.navigate('EditBabyProfileScreen')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/baby_placeholder.png')} // ✅ correct
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }}
          />
          <View>
            <Text style={styles.cardTitle}>{profile?.name}</Text>
            <Text>{profile?.ageMonths} months old</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#666" />
      </TouchableOpacity>

      {/* Preferences */}
      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.preferenceRow}>
        <Text style={styles.preferenceText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
      </View>
      <View style={styles.preferenceRow}>
        <Text style={styles.preferenceText}>Sound Alerts</Text>
        <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
      </View>
      <View style={styles.preferenceRow}>
        <Text style={styles.preferenceText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Support & Information */}
      <Text style={styles.sectionTitle}>Support & Information</Text>
      <TouchableOpacity style={styles.card} onPress={() => console.log('Help pressed')}>
        <Text>Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => console.log('Privacy pressed')}>
        <Text>Privacy Policy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
