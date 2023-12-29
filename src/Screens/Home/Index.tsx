import { View } from 'react-native';
import { styles } from './styles';
import { QrScan } from '../../Components/QrScan';

export default function Home() {
  return (
    <View style={styles.container}>
      <QrScan />
    </View>
  );
}
