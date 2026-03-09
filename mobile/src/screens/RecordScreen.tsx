import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/RecordScreenStyles';

export default function RecordScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [cryDetected, setCryDetected] = useState(false);

  // Mock function to simulate cry detection
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        // Simulate cry detection randomly
        const detected = Math.random() < 0.1; // 10% chance every 3s
        if (detected) {
          setCryDetected(true);
          Alert.alert('Baby Cry Detected!', 'Your baby might need attention.');
        }
      }, 3000); // every 3 seconds
    } else {
      setCryDetected(false);
    }

    return () => clearInterval(interval);
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Baby Cry Detection</Text>

      <TouchableOpacity
        style={[styles.recordButton, isRecording && styles.recordButtonActive]}
        onPress={toggleRecording}>
        <Ionicons
          name={isRecording ? 'stop-circle' : 'mic-circle'}
          size={80}
          color={isRecording ? '#FF6347' : '#60A5FA'}
        />
        <Text style={styles.recordButtonText}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Text>
      </TouchableOpacity>

      {cryDetected && (
        <View style={styles.cryAlert}>
          <Text style={styles.cryText}>Baby Cry Detected!</Text>
        </View>
      )}
    </View>
  );
}
