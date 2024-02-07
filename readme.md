# Book Search App

## Overview
This Book Search web application allows users to search for books using the Google Books API. The app is built with HTML, CSS, and JavaScript, providing a user-friendly interface for searching books, displaying relevant information, and allowing users to explore more details about each book.

## Features
- **Search Functionality:** Users can input a search term in the provided form, triggering an API request to Google Books to fetch relevant book information.
- **Dynamic UI Updates:** The application dynamically updates the UI to display search results, including book covers, titles, authors, descriptions, ratings, and a link to read more.
- **Responsive Design:** The app is designed to be responsive, ensuring a seamless user experience across various devices.


## API Key Setup
To use this app, you need a Google Books API key. Follow these steps to obtain your API key:

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Navigate to the "API & Services" > "Dashboard" and click on "+ ENABLE APIS AND SERVICES."
4. Search for "Books API" and enable it for your project.
5. Once enabled, go to "Credentials" in the left sidebar.
6. Create credentials by selecting "Create credentials" and choosing "API key."
7. Copy the generated API key and replace the placeholder in the `searchBooks` function in the `api.js` file with your API key.

## Code Structure
- **HTML:** The main structure of the web page, including the form and search results container.
- **CSS:** Styles to enhance the visual presentation of the search results and ensure a responsive layout.
- **JavaScript:** The script handles form submission, API requests, data processing, and dynamic UI updates.

## External Dependencies
- **Google Books API:** The app relies on the Google Books API to fetch book information based on user search queries.


Feel free to explore, use, and modify this Book Search App for your needs! If you encounter any issues or have suggestions for improvement, please refer to the code or contact the developer.


## Demo

Check out the live demo of the Swift Programming Fundamentals Quiz:

[Demo Link](https://mjafory.github.io/BookSearch)