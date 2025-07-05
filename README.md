# 📋 Task Manager Web App

This is a simple task management web application built using **HTML**, **CSS (Bootstrap)**, and **JavaScript**. The app allows users to create, manage, and filter tasks that are stored locally in the browser using **localStorage**.

---

## 🔧 How It Works

### ✅ Adding a Task
Users can add a task by filling in the name, category, deadline, and selecting a status (defaults to **In Progress**). Clicking the **Add Task** button saves the task.

### 📅 Overdue Detection
Each time tasks are displayed, any task with a past deadline that is not marked as **Completed** is automatically set to **Overdue**.

### 🔄 Updating Status
Each task’s status can be changed using a dropdown. The new status is saved automatically.

### 🔍 Filtering
Users can filter tasks by both **status** (In Progress, Completed, Overdue) and **category**. This updates the displayed list dynamically.

### ❌ Deleting Tasks
Tasks can be removed by clicking the **Delete** (×) icon next to each task.

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3** (with **Bootstrap** for styling)
- **JavaScript**
- **Browser Local Storage**

---

## 🧠 Reflection

During the development of this project, we were made aware of concerns regarding plagiarism. I want to be transparent in acknowledging that learning how to code, especially in JavaScript, has been a personal challenge for me. I’ve been working hard to understand each concept—from DOM manipulation and arrays to event listeners and working with `localStorage`.

I’ve made a conscious effort to write my own code and use AI tools ethically—as **learning assistants**, not as a way to copy-paste solutions. I ask questions, get feedback, and apply what I learn to write and modify the logic myself. I’m still far from mastering JavaScript, but I’m committed to growing and learning from my mistakes.

One of the most difficult features to implement was ensuring overdue tasks were automatically detected and updated correctly. Getting filters to work dynamically and maintaining the structure of saved tasks without breaking display logic also took a lot of trial and error. However, through those struggles, I’ve gained a better grasp of real-world JavaScript applications, and I’m proud of the progress I’ve made so far.

---

## 📁 File Structure

