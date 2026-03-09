import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import styles from '@/styles/AppStyles';
import { RootStackParamList } from '@/navigation/types'; // Make sure this exists

// TypeScript navigation type
type AnalysisResultScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AnalysisResultScreen'
>;

// Mock AI result (replace with your Python backend data later)
type AnalysisResult = {
  main: { condition: string; confidence: number }; // 0-1
  suggestedActions: string[];
  otherPossibilities: { condition: string; confidence: number }[];
};

const mockResult: AnalysisResult = {
  main: { condition: 'Hungry', confidence: 0.92 },
  suggestedActions: [
    'Try feeding your baby',
    'Check feeding schedule',
    'Feed in a calm environment',
  ],
  otherPossibilities: [
    { condition: 'Sleepy', confidence: 0.35 },
    { condition: 'Discomfort', confidence: 0.2 },
  ],
};

// Screen width for progress bar
const screenWidth = Dimensions.get('window').width - 32; // minus container padding

// Progress bar component
const ProgressBar = ({ progress }: { progress: number }) => (
  <View
    style={{
      height: 10,
      width: screenWidth,
      backgroundColor: '#eee',
      borderRadius: 5,
      marginTop: 8,
    }}>
    <View
      style={{
        height: '100%',
        width: screenWidth * progress, // numeric width ✅
        backgroundColor: '#FF6347',
        borderRadius: 5,
      }}
    />
  </View>
);

export default function AnalysisResultScreen() {
  const navigation = useNavigation<AnalysisResultScreenNavigationProp>();
  const result = mockResult; // Replace with actual data later

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Analysis Result</Text>
      </View>

      {/* Main Result Card */}
      <View style={styles.card}>
        <Ionicons name="restaurant" size={48} color="#FF6347" style={{ marginBottom: 12 }} />
        <Text style={styles.cardTitle}>Baby is {result.main.condition}</Text>
        <Text>Confidence: {(result.main.confidence * 100).toFixed(0)}%</Text>
        <ProgressBar progress={result.main.confidence} />
      </View>

      {/* Suggested Actions */}
      <Text style={styles.sectionTitle}>Suggested Actions</Text>
      {result.suggestedActions.map((action, index) => (
        <View key={index} style={styles.activityCard}>
          <Text>{action}</Text>
        </View>
      ))}

      {/* Other Possibilities */}
      <Text style={styles.sectionTitle}>Other Possibilities</Text>
      {result.otherPossibilities.map((option, index) => (
        <View key={index} style={styles.activityCard}>
          <Text>{option.condition}</Text>
          <Text>{(option.confidence * 100).toFixed(0)}%</Text>
        </View>
      ))}

      {/* Return to Home Button */}
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.saveButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
