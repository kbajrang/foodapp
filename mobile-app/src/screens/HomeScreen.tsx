import React, { useContext, useState } from 'react';
import { View, Button, Image, TextInput, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadFoodImage } from '../services/api';
import { AppContext } from '../context/AppContext';

const HomeScreen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [weight, setWeight] = useState('');
  const [loading, setLoading] = useState(false);
  const { result, setResult } = useContext(AppContext);

  const handlePickImage = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert('Camera permission is required');
      return;
    }
    const picker = await ImagePicker.launchCameraAsync({ quality: 0.5 });
    if (!picker.canceled) {
      setImage(picker.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!image || !weight) return;
    setLoading(true);
    try {
      const res = await uploadFoodImage(image, Number(weight));
      setResult(res);
    } catch (e) {
      console.error(e);
      alert('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Calorie Estimator</Text>

      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Take Photo" onPress={handlePickImage} />

      <TextInput
        style={styles.input}
        placeholder="Weight in grams"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Button title="Analyze" onPress={handleSubmit} disabled={loading} />

      {loading && <ActivityIndicator style={styles.loader} />}

      {result && (
        <View style={styles.result}>
          <Text>Food: {result.foodType}</Text>
          <Text>Weight: {result.estimatedWeight} g</Text>
          <Text>Calories: {result.estimatedCalories} kcal</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  image: { width: 200, height: 200, marginBottom: 16 },
  input: { width: '80%', borderWidth: 1, padding: 8, marginVertical: 12 },
  loader: { marginVertical: 10 },
  result: { marginTop: 24, alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 16 },
});

export default HomeScreen;
