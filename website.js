// Mock JSON data
const mockData = {
  
    "task summary": [
      {
        "id": 1,
        "name": "Project A",
        "deadline": "2023-12-10",
        "timeSpent": 8
      },
      {
        "id": 2,
        "name": "Task B",
        "deadline": "2023-12-15",
        "timeSpent": 5
      },
      {
        "id": 3,
        "name": "Feature",
        "deadline": "2023-12-20",
        "timeSpent": 3
      }
    ]
  };
  
  // Function to populate the HTML with task data
  function populateTasks(data) {
    const taskList = document.getElementById("taskList");
    
    // Clear existing tasks
    taskList.innerHTML = '';
  
    data.tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${task.name}</strong>
        <br>
        Deadline: ${task.deadline}
        <br>
        Time Spent: ${task.timeSpent} hours
        <hr>
      `;
      taskList.appendChild(li);
    });
  }
  
  // Call the function with the mock data
  populateTasks(mockData);
  