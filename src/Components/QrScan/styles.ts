import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ScanContainer: {
    width: 300,
    height: 340,
    backgroundColor: '#1A1D24',
    borderRadius: 30,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  Header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  Footer: {
    height: 90,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ScanButton: {
    borderRadius: 15,
    width: 250,
    height: 65,
    marginBottom: 10,
    backgroundColor: '#2884FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScanQrText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  ScanQrMsg: {
    fontSize: 12,
    marginBottom: 10,
    color: '#888D95',
  },
  ScanQr: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  FullQrScan: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
