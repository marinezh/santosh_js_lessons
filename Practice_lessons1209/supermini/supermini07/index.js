class Tasks {
  constructor() {
    this.tasks = [];
  }

  /** @param {string} csvString */
  importCsv(csvString) {
this.task = csvString.split(", ")
    
  }

  getCount() {
return this.task.length;
  }

  getFirst (){
return this.task[0];
  }

  getLast() {
return this.task[this.task.length -1];
  }

  getUnformattedTasks() {
// return this.task.map(e => e.toLowerCase())
return this.task.join(',  ').toLocaleLowerCase()
  }
}


//Sample usage do not modify (but feel free to read)
const dropdown = document.querySelector('#csv-dropdown');
const tbody = document.querySelector('#tbody');

const tasks = new Tasks();

function render() {
  tbody.innerHTML = '';
  tasks.tasks.forEach(function (task) {
    tbody.insertAdjacentHTML(
      'beforeend',
      `<tr>
            <th>Task</th>
            <td>${task}</td>
        </tr>`
    );
  });
  tbody.insertAdjacentHTML(
    'beforeend',
    `<tr class="separator">
            <th>Number of tasks</th>
            <td>${tasks.getCount()}</td>
        </tr>
        <tr>
            <th>First task</th>
            <td>${tasks.getFirst()}</td>
        </tr>
        <tr>
            <th>Last task</th>
            <td>${tasks.getLast()}</td>
        </tr>
        <tr>
            <th>Lower-cased tasks</th>
            <td>${tasks.getUnformattedTasks()}</td>
        </tr>
        `
  );
}

dropdown.addEventListener('change', (event) => {
  tasks.importCsv(dropdown.value);
  render();
});
