# TestPrepWeb Project

![ScreenShot](pics/TestPrepWebDarkMode.jpg)
![ScreenShot](pics/TestPrepWebLightMode.jpg)

## About the Project

This project is an online quiz created with HTML, CSS, and JavaScript. It aims to provide users with an engaging and
interactive way to test and expand their knowledge across various subject areas. Users can integrate
the `jsonschema.json` into their IDE to implement and validate individual questions and answers in the `fragen.json`.
This helps to avoid errors in self-created questions and answers.

## Current Status

Simply test the current status through this [Link](https://coezbay.github.io/TestPrepWeb/).

### Completed Items

- **Basic structure of the quiz**: The basic structure of the quiz with questions, answer options, and navigation
  buttons ("Back" and "Next Question") is implemented.
- **Stylesheet optimizations**: Improvements in the `styles.css` for a consistent and appealing user interface.
- **Dynamic question display**: Questions and answers are dynamically loaded from a JSON file.
- **Feedback color display**: Feedback is displayed with a gray background.
- **Improvement of feedback display**: Implementation of a color coding for the feedback (green for correct answers, red
  for incorrect answers) and adjustment of the font color accordingly.
- **Center alignment of feedback background**: Correction of the alignment so that the feedback background is centered
  and consistent with the layout of the questions and answers.
- **Performance display on the first attempt**: Added functionality to display the number of questions answered
  correctly on the first attempt.
- **Justification for question statements**: Questions are now displayed in justified text to offer improved
  readability.
- **Tables**: Implemented the possibility to create tables (Head + Body) & (Body Only) & (Head + Body + Head + Body).
  Visually: Zebra stripes for row separation.
- **Overview of progress map**: Implemented an overview of completed tasks, where correctly and incorrectly processed
  tasks are marked in color (red/green). It should also be possible to click on individual points of this overview to
  directly view the task statement at any time.
- **Images for task statements**: Added the capability to use images for task statements.
- **Indicator for active task**: Mark the active/displayed task on the map.
- **Implement Dark Mode**: Introduce Dark Mode to protect the eyes.
- **Insight into other answer options**: Following the example of ISTQB® exams, content from the glossary and curriculum has been incorporated, providing added value for learners by also showing incorrect answer options. This feature should be considered for other tests as well.

### Items to be Done

- **Adjustment of button positions**: Ensure that the "Back" and "Next Question" buttons remain static regardless of the
  text length of the question or the answer options.
- **Write tests**: Test thoroughly and ensure that TestPrepWeb works consistently across different browsers and devices.
- **Separation of mock exams by period of realization**: Separate mock exams by period of realization and implement a
  selection menu at the start of the application.
- **Guidance for using jsonschema.json**: Write a guide on how to use the jsonschema.json, for both IDE-dependent and IDE-independent settings.

## Planned Features

- **Responsive Design**: Optimization of the quiz application for various screen sizes and devices.
- **Languages**: Make the application multilingual.
- **Customizable Themes**: Self-explanatory.
- **Import Options**: Allow questions and answers to be imported (ideally schema-independent).
- **Customizable Quiz Modules**: Enable users to create their own quiz modules based on specific topics or difficulty levels.
- **Save and Continue**: Feature that allows users to save their progress and resume at a later time.
- **Detailed Statistics**: Provide detailed statistics about user performance, including areas of strength and those needing improvement.
- **Customizable Reports**: Allow users to create and export customizable reports on their performance and progress.

## Continuous Development

- **Expansion of the question catalog**: Adding more questions and subject areas to the quiz.

## Contribution

- **Feedback and collaboration**: Feedback and contributions are welcome! Feel free to open issues or create pull
  requests for suggested improvements.

## Acknowledgment of External Sources

Some of the questions and answers used in this repo are based on materials from ISTQB® (International Software Testing
Qualifications Board). These materials are used in acknowledgment of ISTQB® as the source and copyright holder in
accordance with their guidelines. I thank ISTQB® for providing these resources and fully recognize their authorship.

In addition, I acknowledge the contributions of the authors and those involved in the localization and review of the
updates. For the 2018 v3.1 update, the team was led by Klaus Olsen, with Meile Posthuma and Stephanie Ulrich as authors.
The localization and review of the translation updates involved Arne Becher, Ralf Bongard, Milena Donato, Dr. Matthias
Hamburg, Andreas Hetz, Tobias Horn, Karl Kemminger, Martin Klonk, Nishan Portoyan, Horst Pohlmann, and Stephanie
Ulrich (Lead). For the 2018 updates, the team was complemented by Tauhida Parveen (Deputy Lead), Rex Black (Project
Manager), Debra Friedenberg, Matthias Hamburg, Judy McKay, Hans Schaefer, Radoslaw Smilgin, Mike Smith, Steve Toms,
Marie Walsh, and Eshraka Zakaria, with additional localization and review support from Alisha Bülow et al., Dr. Klaudia
Dussa-Zieger, Elke Mai, Atilim Siegmund, Prof. Dr. Andreas Spillner (retired), Sabine Uhde, and again, Stephanie
Ulrich (Lead). The updates for 2011 were led by Thomas Müller, Debra Friedenberg, and the ISTQB® Foundation Level
Working Group, with the 2010 updates led by Thomas Müller, Armin Beer, Martin Klonk, and Rahul Verma.

I would like to thank all those involved for making this information freely available to the world.

## Running TestPrepWeb Locally

TestPrepWeb is a straightforward web application consisting of HTML, CSS, and JavaScript files. Running TestPrepWeb locally on your computer doesn't require any special web servers or environments. Follow these steps to start the quiz locally:

1. **Clone the Git repository** or download the project files:
  - Clone the Git repository (if Git is installed):
    ```
    git clone https://github.com/coezbay/TestPrepWeb.git
    ```
  - Or download the project files as a ZIP archive from the GitHub page and unzip them.

2. **Open the project in an editor:**
  - Open the project folder in a code editor of your choice (e.g., IntelliJ, Visual Studio, Visual Studio Code, Sublime Text, Atom, etc.).

3. **Open the `index.html` file in a web browser:**
  - Navigate to the `index.html` file in the project folder.
  - Open the `index.html` file with a web browser of your choice (e.g., Google Chrome, Firefox, Safari).

4. **Edit the quiz questions and answers:**
  - Edit the `fragen.json` file to add your own questions and answers or modify existing ones.
  - Use the `jsonschema.json` to validate the structure of your questions and answers.

By following these steps, you can instantly run and test the quiz on your local computer. Changes to the files (HTML, CSS, JavaScript, JSON) will be reflected upon reloading the page in the browser.

## Development Server

For more advanced development or if you want to utilize features like live-reload, you can use a simple development server. Here are some options:

- **Visual Studio Code Live Server:**
  - Install the Live Server Extension in Visual Studio Code.
  - Right-click on the `index.html` file and select "Open with Live Server".

- **Use a Simple HTTP Server:**
  - Install Node.js and npm on your computer.
  - Install http-server globally with npm:
    ```
    npm install -g http-server
    ```
  - Navigate to the project folder in the terminal or command prompt and start the server with:
    ```
    http-server
    ```
  - Open the displayed URL in the browser.

These tools allow you to see changes to the code in real-time in the browser without having to manually reload.

## License

This project is published under the [MIT License](LICENSE.txt).

## Languages

- [English](README.md)
- [Deutsch](README_DE.md)
- [Français](README_FR.md)