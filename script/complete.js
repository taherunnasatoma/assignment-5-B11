

const completeButtons = document.querySelectorAll('.btn-complt');
const devNum = document.getElementById('dev-number');
const taskNum = document.getElementById('task-num');
const container = document.getElementById('activity-container');
const cardTitle = document.getElementById('card-title');
let completedTasks = 0;


for (let i = 0; i < completeButtons.length; i++) {
  completeButtons[i].addEventListener('click', function () {

    alert('Board Updated Successfully');

    const convertedDevnum = parseInt(devNum.innerText);
    const sum = convertedDevnum + 1;
    devNum.innerText = sum;

    const convertedTasknum = parseInt(taskNum.innerText);
    const substract = convertedTasknum - 1;
    taskNum.innerText = substract;

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();





    const div = document.createElement("div");
    div.innerHTML = `
                <p class="bg-slate-100 rounded-xl p-2 my-3">You have Complete The Task  Mode at ${hours}:${minutes}:${seconds}</p>
                
                `
    container.appendChild(div)


    this.classList.add('bg-gray-400', 'cursor-not-allowed');
    this.disabled = true;


    completedTasks++;


    if (completedTasks === completeButtons.length) {
      alert('Congrats!!!You have completed all the tasks');
    }
  });
}