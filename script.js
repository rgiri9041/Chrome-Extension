const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
let myLeads = []
let ulEl = document.querySelector("#ul-el")

localStorage.setItem("inputEl", "ulEl")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage
    renderLeads()
}


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderList()
    inputEl.value = "" // to clear the input value in the box
    //save mylead array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
     
})
 
function renderList (){

    let listItem = `<li>
                        <a target="_blank" href= "${inputEl.value}"> ${inputEl.value} </a>
                    </li>`
    ulEl.innerHTML += listItem
//This can be done without using loop as well
    // let listItem = ""

    // for(let i = 0; i < myLeads.length; i++){ 
    // listItem += "<li>" + myLeads[i]+ "</li>"
// Other way to fetch the input text from the html in inorder list
   // let li = document.createElement("li")
   // li.textContent = myLeads[i]
   // ulEl.append(li)
}
    ulEl.innerHTML = listItem




