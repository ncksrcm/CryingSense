import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const useThemedStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    // ========================
    // General / App-wide Styles
    // ========================
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 12,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 0,
      paddingTop: 0,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.sectionTitle,
      marginBottom: 12,
      marginTop: 8,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.cardTitle,
    },
    textInput: {
      backgroundColor: colors.cardBackground,
      padding: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      fontSize: 14,
      marginBottom: 12,
      color: colors.text,
    },
    saveButton: {
      backgroundColor: colors.buttonBackground,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 20,
    },
    saveButtonText: {
      color: colors.buttonText,
      fontSize: 16,
      fontWeight: 'bold',
    },

    // ========================
    // HomeScreen / Dashboard
    // ========================
    card: {
      backgroundColor: colors.cardBackground,
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    insightTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.insightTitle,
      marginBottom: 8,
      marginTop: 12,
    },

    logoContainer: {
      alignItems: 'center',
      marginVertical: 16,
    },

    logo: {
      width: 120,
      height: 60,
    },

    insightCard: {
      flexDirection: 'row', // icon + text side by side
      alignItems: 'center',
      backgroundColor: colors.cardBackground,
      padding: 12,
      borderRadius: 10,
      marginRight: 12,
      shadowColor: colors.shadow,
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },

    insightContainer: {
      flexDirection: 'row',
      marginVertical: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 4,
    },
    // ========================
    // Settings Screen
    // ========================
    preferenceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.cardBackground,
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    preferenceText: {
      fontSize: 16,
      color: colors.preferenceText,
    },

    // ========================
    // AnalysisResultScreen
    // ========================
    progressBar: {
      height: 10,
      borderRadius: 5,
      marginTop: 8,
    },
    activityCard: {
      backgroundColor: colors.cardBackground,
      padding: 12,
      borderRadius: 8,
      marginBottom: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },

    // ========================
    // History & Insights Screen
    // ========================
    historyCard: {
      backgroundColor: colors.cardBackground,
      padding: 12,
      borderRadius: 8,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    historyText: {
      fontSize: 16,
      color: colors.historyText,
    },
    historyTime: {
      fontSize: 14,
      color: colors.historyTime,
    },

    // ========================
    // Edit Baby Profile Screen
    // ========================
    avatarCircle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: colors.border,
      backgroundColor: colors.cardBackground,
    },

    // ========================
    // Record Screen
    // ========================
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.sectionTitle,
      marginBottom: 30,
      textAlign: 'center',
    },
    recordButton: {
      backgroundColor: colors.cardBackground,
      padding: 20,
      borderRadius: 20,
      alignItems: 'center',
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    recordButtonActive: {
      backgroundColor: '#FF6B9D',
    },
    recordButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
      marginTop: 10,
    },
    cryAlert: {
      backgroundColor: '#FF6B9D',
      padding: 15,
      borderRadius: 10,
      marginTop: 20,
      alignItems: 'center',
    },
    cryText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
};
