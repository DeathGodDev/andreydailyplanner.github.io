function openAddWindow() {
    let addWindow = document.getElementById("addWindow");
    addWindow.style.display = "block";
    let main = document.getElementById("list");
    main.classList.add("blur");
}

function closeAddWindow() {
    let addWindow = document.getElementById("addWindow");
    addWindow.style.display = "none";
    let main = document.getElementById("list");
    main.classList.remove("blur");
}

function newObjective() {
    let main = document.getElementById("list");
    let objectiveNameEntry = document.getElementById("objectiveName");
    
    number += 1;
    
    let objectiveName = objectiveNameEntry.value;
    objectiveNameEntry.value = "";
    
    let label = document.createElement("label");
    label.draggable = true;
    label.id = "objective" + number;
    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    let i = document.createElement("i");
    let span = document.createElement("span");
    span.textContent = objectiveName;
    
    label.append(inputCheckbox);
    label.append(i);
    label.append(span);
    
    main.append(label);
    
    closeAddWindow();
}

var number = 5