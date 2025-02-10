import axios from "axios";

const API_URL = "https://quizapi.io/api/v1/questions";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchQuizQuestions = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-Api-Key": API_KEY,
      },
      params: {
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