## 📌 Description
This project is a web application designed to help users practice sentence construction. Users are presented with sentences containing blank spaces and must choose the correct word from four options to fill each blank.

Key features include:
- Displaying sentences with blank spaces to be filled.
- Providing four word options for each blank.
- Allowing users to select a word to fill a blank and unselect it by clicking the filled blank.
- A 30-second timer for each sentence challenge.
- Automatic navigation to the next question when the timer expires.
- Enabling the "Next" button only after all blanks in the current sentence are filled.
- Fetching sentence and word option data from a JSON API.
- Robust state management to handle the application flow smoothly.
- A final feedback screen displaying:
    - A summary of all correct and incorrect answers.
    - The correct answers for any incorrectly answered questions.
    - The user's final score out of 10.

## 🚀 Getting Started

## 📦 Installation and Setup

To get started with this project, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Biswadip125/Sentence_Construction_App
    cd Sentence_Construction_App
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Start the JSON server:**

    ```bash
    npx json-server --watch data/db.json
    ```

4.  **▶️ Start the application:**

    ```bash
    npm run dev
    ```
