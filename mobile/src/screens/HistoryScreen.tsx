import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useBaby } from '../context/BabyContext';
import styles from '../styles/AppStyles';

type FilterOption = 'All' | 'Today' | 'Yesterday' | 'Week';

export default function HistoryAndInsightsScreen({ navigation }: any) {
  const { cryEvents } = useBaby();
  const [filter, setFilter] = useState<FilterOption>('All');

  // Filter logic
  const filteredEvents = cryEvents.filter((event) => {
    const now = new Date();
    const eventDate = new Date(event.timestamp);

    if (filter === 'Today') {
      return eventDate.toDateString() === now.toDateString();
    } else if (filter === 'Yesterday') {
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      return eventDate.toDateString() === yesterday.toDateString();
    } else if (filter === 'Week') {
      const weekAgo = new Date(now);
      weekAgo.setDate(now.getDate() - 7);
      return eventDate >= weekAgo;
    }
    return true; // 'All'
  });

  // Render each recording
  const renderRecording = ({ item }: any) => (
    <View style={styles.historyCard}>
      <Ionicons name="volume-high" size={24} color="#FF6347" />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.historyText}>{item.category}</Text>
        <Text style={styles.historyTime}>
          {new Date(item.timestamp).toLocaleTimeString()} | Confidence:{' '}
          {item.confidence ? `${(item.confidence * 100).toFixed(0)}%` : 'N/A'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* -------- Header -------- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>History & Insights</Text>
        <View style={{ width: 28 }} /> {/* placeholder for alignment */}
      </View>

      {/* -------- Filter Options -------- */}
      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {(['All', 'Today', 'Yesterday', 'Week'] as FilterOption[]).map((option) => (
          <TouchableOpacity
            key={option}
            style={{
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 8,
              marginRight: 8,
              backgroundColor: filter === option ? '#FF6347' : '#ddd',
            }}
            onPress={() => setFilter(option)}>
            <Text style={{ color: filter === option ? '#fff' : '#333' }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* -------- Recording List -------- */}
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderRecording}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
