# Vue.js Shopping List Application

This is a simple shopping list application built using Vue.js. The app allows users to add, edit, and delete items from a shopping list, with the added feature of a dark mode toggle. The list and theme preference are saved in the browser's `localStorage` so that they persist across page reloads.

## Features

- **Add Items:** Users can add new items to the shopping list.
- **Edit Items:** Users can edit existing items in the list.
- **Delete Items:** Users can remove items from the list.
- **Dark Mode:** Users can toggle between light and dark modes, with the preference saved in `localStorage`.
- **Persistent Data:** The shopping list and dark mode preference are stored in `localStorage` and persist across page reloads.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KaivanKeren/shopping-list-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd shopping-list-app
   ```
3. **Open the `index.html` file in your browser:**
   Simply open the `index.html` file in your preferred browser to run the application.

## Usage

1. **Adding an Item:**
   - Enter the item name, number, and unit in the provided input fields.
   - Click the "Add" button to add the item to the list.

2. **Editing an Item:**
   - Click the "Edit" button next to an item to load its details into the input fields.
   - Make the necessary changes and click the "Add" button to save the changes.

3. **Deleting an Item:**
   - Click the "Delete" button next to an item to remove it from the list.

4. **Toggling Dark Mode:**
   - Use the dark mode toggle button to switch between light and dark themes.

## Files Structure

- `index.html` - The main HTML file that includes the Vue.js app.
- `main.js` - The JavaScript file that contains the Vue.js application logic.
- `style.css` - The CSS file for styling the application, including dark mode styles.

## Customization

You can easily customize the application by modifying the `main.js` and `style.css` files to fit your needs. For example:
- Update the item units (e.g., `kg`, `liters`, etc.)
- Modify the UI styling, including the appearance of dark mode.

## License

This project is open-source and available under the [MIT License](LICENSE).
---

Feel free to contribute to this project by submitting issues or pull requests.
