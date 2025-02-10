# Simple Quiz App

## Overview

The **Quiz App** is a web-based quiz application that allows users to test their knowledge with fun and interactive quizzes. The app features dynamic questions, a timer, a progress bar, and engaging visuals like animations and confetti effects to enhance the user experience.

## Features

- **Home Page**: Welcomes users with a short introduction and a start button.
- **Quiz Page**:
  - Fetches questions dynamically using an API.
  - Displays a timer for each quiz session.
  - Tracks progress with a progress bar.
  - Interactive question and answer interface.
- **Results Page**:
  - Displays the user's score.
  - Includes confetti animation for celebration.
  - Options to retake the quiz, share the quiz or return to the home page.

## Technologies Used

- **Frontend**: React.js (with React Router)
- **Styling**: CSS (with animations and responsiveness)
- **API**: QuizAPI (for fetching quiz questions)
- **Additional Libraries**:
  - `react-confetti` for confetti animations.

## How to Run the Project

### Prerequisites
- Node.js installed on your computer.
- A code editor (e.g., VS Code).

### Steps
1. Clone the repository:
   ```bash
   git clone <https://github.com/edadic/Simple-Quiz-App.git>
   cd Simple-Quiz-App
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## API Integration

The app fetches quiz questions from the [QuizAPI](https://quizapi.io/). Ensure you have a valid API key and set it up in the `quizService.js` file.

Example configuration in `quizService.js`: