import axios from "axios";

export const getLanguagesOptions = {
  method: "GET",
  url: "https://text-translator2.p.rapidapi.com/getLanguages",
  headers: {
    'X-RapidAPI-Key': '0a62779d1cmsh63960f713370c93p119833jsn7e42577535ce',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  }
};

export const translateOptions = {
  method: "POST",
  url: "https://text-translator2.p.rapidapi.com/translate",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "0a62779d1cmsh63960f713370c93p119833jsn7e42577535ce",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
  data: {}
};

export const getLanguages = async () => {
  try {
    const res = await axios.request(getLanguagesOptions);
    const data = res.data.data.languages;
    const refinedData = data.map((item: any) => ({
      value: item.code,
      label: item.name,
    }));
    return refinedData;
  } catch (error) {
    console.error("Error getting languages:", error);
    throw error;
  }
};

export const translateText = async (params: any) => {
  try {
    const { sourceLang, targetLang, text } = params;
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", sourceLang.value);
    encodedParams.set("target_language", targetLang.value);
    encodedParams.set("text", text);

    translateOptions.data = encodedParams;

    const res = await axios.request(translateOptions);
    return res.data.data.translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    throw error;
  }
};
