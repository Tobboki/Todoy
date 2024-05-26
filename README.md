# Todoy

Todoy is a sleek and functional todo web app designed to help you manage your tasks efficiently. Built with a focus on modern UI design and smooth user experience, Todoy incorporates the Neo-Brutalism design style and leverages CRUD operations to offer a comprehensive task management solution.

## Features

- **Neo-Brutalism UI Design:** Todoy features a bold and minimalistic design, inspired by the Neo-Brutalism style, providing a unique and aesthetically pleasing user interface.
- **CRUD Operations:** The app supports full Create, Read, Update, and Delete (CRUD) functionality, allowing users to manage their tasks seamlessly.
- **Figma Design:** The UI was meticulously crafted in Figma, ensuring a well-thought-out and visually appealing layout.
- **Task Persistence:** Tasks are stored in a JSON object, allowing for easy data manipulation and storage.

## Directory Structure

```plaintext
    todoy/
    ├── assets/
    │   └─ favicon.ico
    ├── data/
    │   └─ tasks.js
    ├── scripts/
    │   ├─ helpers/
    │   │   └─ formatDate.js
    │   ├─ app.js
    │   ├─ taskDialogue.js
    │   └─ taskFrame.js
    ├── styles/
    │   └─ style.css
    └── index.html
```

- **assets/:** Contains static assets such as the favicon.
- **data/:** Includes the tasks.js file which manages the task data.
- **scripts/:** Contains JavaScript files for the app's functionality, including helper functions and main application logic.
- **helpers/:** Includes helper functions like formatDate.js.
- **app.js:** Main application logic.
- **taskDialogue.js:** Manages the task dialogue functionality.
- **taskFrame.js:** Handles the task frame operations.
- **styles/:** Contains the main stylesheet style.css for the app.
- **index.html:** The main HTML file for the app.

## Getting Started

To get started with Todoy, simply clone the repository and open the index.html file in your preferred web browser.

## Prerequisites

A modern web browser (e.g., Chrome, Firefox, Edge)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Tobboki/Todoy.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Todoy
    ```

3. Open the index.html file in your web browser.

## Usage

1. Add a Task: Enter the task details in the input field and click the "Add Task" button.
2. Edit a Task: Click the "Edit" button next to a task to modify its details.
3. Delete a Task: Click the "Delete" button next to a task to remove it from the list.
4. Mark as Complete: Check the checkbox next to a task to mark it as complete.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.

## Acknowledgements

**Figma:** For the UI design tool

**[Nada Ishtewi](https://www.behance.net/nsaeooshy):** For the design inspiration check the design [here!](https://www.behance.net/gallery/107935847/Todo-List-Desktop-Mobile-app-UI-Design?tracking_source=search_projects|todo+list+app&l=7)

**ChatGPT:** For providing assistance in building this app
