import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

interface BarCodeScanEvent {
  type: string;
  data: string;
}

export function QrScan() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [fullScreenScanner, setFullScreenScanner] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScanEvent): void => {
    setFullScreenScanner(false);
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text></Text>;
  }

  return (
    <View style={fullScreenScanner ? styles.ScanQr : styles.ScanContainer}>
      {fullScreenScanner && (
        <View style={styles.FullQrScan}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.ScanQr}
          />
        </View>
      )}

      {!fullScreenScanner && (
        <View style={styles.Header}>
          <AntDesign
            name="qrcode"
            size={220}
            color="#FFF"
          />
          <Text style={styles.ScanQrMsg}>Scaneie o QrCode para poder acessar.</Text>
        </View>
      )}

      {!fullScreenScanner && (
        <View style={styles.Footer}>
          <TouchableOpacity
            style={!fullScreenScanner && styles.ScanButton}
            onPress={() => {
              setScanned(false);
              setFullScreenScanner(true);
            }}
          >
            <Text style={styles.ScanQrText}>{scanned ? 'Scanear Novamente ' : 'Scanear QrCode'} </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
