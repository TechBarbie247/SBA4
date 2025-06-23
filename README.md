#  Task Manager Web App

This is a simple task management web application built using **HTML**, **CSS (Bootstrap)**, and **JavaScript**. The app allows users to create, manage, and filter tasks stored locally in the browser using **localStorage**.

##  How It Works

###  Adding a Task
Fill out the task name, category, deadline, and optionally set the status (defaults to **In Progress**). Click **Add Task** to save.

###  Displaying Tasks
Tasks are shown in a responsive grid layout. Each task card displays its details and allows status changes via a dropdown menu.

###  Overdue Detection
On page load and whenever tasks are rendered, any task past its deadline and not marked as **Completed** is automatically marked as **Overdue**.

###  Updating Status
Change the task status using the dropdown. The updated status is saved immediately to `localStorage`.

###  Filtering
Use the status and category filters to display only the tasks that match your selected criteria.

###  Deleting a Task
Click the **Delete** button on any task card to remove it from the list.


## 🛠 Technologies Used

- **HTML5**
- **CSS3** (with **Bootstrap** for styling)
- **JavaScript**
- **Browser Local Storage**

## Reflection
Building the JavaScript functionality for this task manager app was challenging, especially when trying to get all the features working as intended. One of the hardest parts was managing the interaction between the DOM and localStorage, making sure tasks were correctly saved, displayed, and updated in real time. I spent a lot of time figuring out how to properly handle status changes and ensure the "Overdue" logic worked accurately based on the current date. Another tricky part was setting up the filtering system so users could view tasks by category and status dynamically. Debugging and ensuring that deleted tasks were removed from both the display and storage also required careful attention. Overall, while the process was frustrating at times, it helped me better understand how JavaScript works with event listeners, conditionals, and local storage. It was a great learning experience in building real functionality with vanilla JavaScript.