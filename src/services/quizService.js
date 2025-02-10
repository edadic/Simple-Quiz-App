import axios from "axios";

const API_URL = "https://quizapi.io/api/v1/questions";
const API_KEY = "InQv3Bakztxf509IkttzT8zZzxodCdB7ej5EagiO";

export const fetchQuizQuestions = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        category: "Code",
        difficulty: "Easy",
        limit: 5,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return [];
  }
};

