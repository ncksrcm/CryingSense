// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useBaby } from '../context/BabyContext';
import GradientBackground from '../components/GradientBackground';
import { useThemedStyles } from '../styles/ThemedStyles';
import { useTheme } from '../context/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const { profile, cryEvents } = useBaby();
  const styles = useThemedStyles();
  const { colors } = useTheme();

  const today = new Date();
  const todayEvents = cryEvents.filter((e) => e.timestamp.toDateString() === today.toDateString());

  const topNeed = todayEvents.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + 1;
    return acc;
  }, {});
  const topCategory =
    Object.keys(topNeed).reduce((a, b) => (topNeed[a] > topNeed[b] ? a : b), '') || 'None';

  return (
    <GradientBackground>
      <ScrollView style={styles.container}>
        {/* Logo with App Name */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 12, 
          marginTop: 8, 
          alignSelf: 'flex-start', 
          marginLeft: -40 
        }}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{ width: 140, height: 70 }}
            resizeMode="contain"
          />
          <Text style={{ 
            fontSize: 24, 
            fontWeight: 'bold', 
            color: colors.sectionTitle, 
            marginLeft: -8 
          }}>
            Crying Sense
          </Text>
        </View>

      {/* Baby Info Card */}
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image
            source={require('../../assets/baby_placeholder.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View>
            <Text style={styles.cardTitle}>{profile.name}</Text>
            <Text>{profile.ageMonths} months old</Text>
          </View>
        </View>
      </View>

      {/* Insights Cards */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
        <View style={[styles.insightCard, { flex: 1, marginRight: 6 }]}>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={28}
            color="#5f9afaff"
            style={{ marginRight: 8 }}
          />
          <View>
            <Text style={styles.insightTitle}>Recordings</Text>
            <Text>{todayEvents.length}</Text>
          </View>
        </View>

        <View style={[styles.insightCard, { flex: 1, marginLeft: 6 }]}>
          <MaterialCommunityIcons
            name="trending-up"
            size={28}
            color="#ff89ccff"
            style={{ marginRight: 8 }}
          />
          <View>
            <Text style={styles.insightTitle}>Top Need</Text>
            <Text>{topCategory}</Text>
          </View>
        </View>
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      {todayEvents.map((event) => (
        <View key={event.id} style={styles.activityCard}>
          <Text>{event.category}</Text>
          <Text>{event.timestamp.toLocaleTimeString()}</Text>
        </View>
      ))}
      </ScrollView>
    </GradientBackground>
  );
}
