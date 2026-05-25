const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
let myLeads = []
let ulEl = document.querySelector("#ul-el")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = "" // to clear the input value in the box
    renderList()
     
})
 
function renderList (){
    let listItem = ""

    for(let i = 0; i < myLeads.length; i++){ 
    listItem += "<li>" + myLeads[i]+ "</li>"
    // Other way to fetch the input text from the html in inorder list
   // let li = document.createElement("li")
   // li.textContent = myLeads[i]
   // ulEl.append(li)
}
    ulEl.innerHTML = listItem

}


