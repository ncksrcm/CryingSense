import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    padding: 5,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  logoContainer: {
    // <-- ADD THIS
    alignItems: 'center',
    marginVertical: 16,
  },

  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  insightContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },

  insightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 10,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  insightTitle: {
    fontWeight: '600',
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },

  activityCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
