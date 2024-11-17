# Mini Calendar

[https://artjoms-doilnicins.github.io/mini-calendar/](https://artjoms-doilnicins.github.io/mini-calendar/)

A simple calendar widget that displays the current date, including the month, day, and year, in a clean and minimalist design.

## Features

### CSS

- A responsive, centered calendar with clean styling.
- **Background**:
  - A gradient background for the page that transitions from dark to light.
  - A light-colored background for the calendar itself.
- **Typography**:
  - Custom font sizes and colors for month, day, and year to create a visually distinct hierarchy.
- **Design Enhancements**:
  - Rounded corners and shadows on the calendar container for a modern look.

### JavaScript

#### Fetch and Display Current Date:
 
- The script uses the `Date` object to fetch the current date.
 
- The `toLocaleString` method is used to format the month name in a readable format (e.g., *November*).
 
- Each part of the date is inserted into the corresponding DOM element: 
  - **Month** : `monthEl`
 
  - **Day** : `dayEl`
 
  - **Year** : `yearEl`
