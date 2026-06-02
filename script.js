const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
let myLeads = []
let ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage
    renderList()
}
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderList()
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderList()
    inputEl.value = "" // to clear the input value in the box
    //save mylead array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
     
})
 
function renderList(){
    ulEl.innerHTML = ""
    for(let i = 0; i < myLeads.length; i++){
        ulEl.innerHTML += `<li>
                            <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
                        </li>`
    }
}
