import axios from 'axios';
import * as Localization from 'expo-localization';

export const translateText = async (text) => {
  try {
    const targetLanguage = Localization.locale.split('-')[0]; // Get the user's default language
    const response = await axios.post('https://libretranslate.com/translate', {
      q: text,
      source: 'auto',
      target: targetLanguage,
      format: 'text',
    });

    return response.data.translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text;
  }
};
