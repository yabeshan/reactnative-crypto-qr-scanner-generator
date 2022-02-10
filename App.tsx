import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [scanDate, s1etScanDate] = useState('ScanDate');
  return (
    <SafeAreaView style={{}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" >
        <View style={{}}>
          <QRCodeScanner
            onRead={e=>{
              //Alert.alert('scanner' + e.data)
              s1etScanDate( e.data );

            }}
            reactivate={true}
            reactivateTimeout={2000}
            // flashMode={false}
            // topContent={
            //   <Text style={{}}>
            //     Go to{' '}
            //     <Text style={{}}>wikipedia.org/wiki/QR_code</Text> on
            //     your computer and scan the QR code.
            //   </Text>
            // }
            bottomContent={
              <Text style={{padding:20}}>{scanDate}</Text>
            //   <TouchableOpacity style={{}}>
            //     <Text style={{}}>OK. Got it!</Text>
            //   </TouchableOpacity>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
