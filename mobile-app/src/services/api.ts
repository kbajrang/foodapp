import axios from 'axios';

export async function uploadFoodImage(uri: string, weight: number) {
  const formData = new FormData();
  formData.append('image', {
    uri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  } as any);
  formData.append('weight', String(weight));

  const response = await axios.post(
    `${process.env.EXPO_PUBLIC_API_BASE_URL}/api/upload`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );
  return response.data;
}
