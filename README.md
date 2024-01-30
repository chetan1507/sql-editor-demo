# SQL Query Demo

## Technologies used

- Next.js with Typescript and React
- Tailwind for CSS
- Chart JS and React Chart JS for charts
  - faker for fake chart data
- Eslint and Prettier

## Features

### Basic Workflow

- Write SQL queries and run the query to display data
  - Both SQL and Data are mocked items.
- Error handling in case the data is not present

### Assumptions

- Read only queries, INSERTs not supported
- The states and services are not tied for non query related things like tabs and saved queries are not tied.

### Query Tabs Components

- Helps in switching between mutliple queries [Non functional]

### Saved Queries

- Helps in loading and running already saved queries [Non functional]

### Export Result as CSV, Excel, PDF

- Menu Items to download the data

### Goto to previous query (Undo operation)

- Undo Redo operation
- Diff with previous version.

### Switch to Chart View

- Visualize the data response from the table.
- Can be used to customize the data plotted on chart as well.
