import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  recordButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordButtonActive: {
    transform: [{ scale: 1.05 }],
  },
  recordButtonText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  cryAlert: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#FFCCCC',
    borderRadius: 12,
  },
  cryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
});
