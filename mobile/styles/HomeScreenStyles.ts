// HomeScreenStyles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f7' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: { width: 50, height: 50 },
  settings: { fontSize: 24 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 16 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  insightContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  insightCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
  },
  insightTitle: { fontWeight: 'bold', marginBottom: 4 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  activityCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
