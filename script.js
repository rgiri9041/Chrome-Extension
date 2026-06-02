const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
let myLeads = []
let ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage
    render(myLeads)
}

function render(leads){
    ulEl.innerHTML = ""
    for(let i = 0; i < leads.length; i++){
        ulEl.innerHTML += `<li>
                            <a target="_blank" href="${leads[i]}">${leads[i]}</a>
                        </li>`
    }
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function(){
    if(inputEl.value.trim() === "") return
    myLeads.push(inputEl.value.trim())
    render(myLeads)
    inputEl.value = "" // to clear the input value in the box
    //save mylead array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})
 

