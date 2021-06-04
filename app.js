console.log("Welcome to notes app. this is app.js");
showNotes();
//if user adds a note,add it to the local storage 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e)
{
    let addTxt = document.getElementById("addTxt");
    let notes =localStorage.getItem("notes");
    let notesObj=new Array();
    if(notes==null )
    {
        //console.log('no notes')
        notesObj=[];
    }
    else
    {
        //console.log(notes);
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value ="";
   // console.log(notesObj);
    showNotes();

});

//function to show elements from local storage

function showNotes()
{
    let notes = localStorage.getItem("notes");
    if(notes==null )
    {
       // console.log('no notes')
        notesObj=[];
    }
        else
    {
       // console.log(notes);
       notesObj = JSON.parse(notes);
    }
        let html = "";
    notesObj.forEach(function(element,index) {
        //`console.log(notesObj);
        html +=`
        <div class="noteCard my-2 mx-2  card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1 }</h5>
          <p class="card-text"> ${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
        
    });

    let notesElm = document.getElementById("notes");
    if(notesObj.length !=0 )
    {
        notesElm.innerHTML = html;
    }
    else 
    {
        notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
//id="${index}"oneclick="deleteNote(this.id)"
//func to delete node
function deleteNote(index)
{
    //console.log('i am deleting',index);
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    //console.log('Input event fired!',inputVal);
    let noteCards= document.getElementByIdClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
    let cardTxt=element.getElementByIdTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
        element.style.display = "block";
    }
    else
    {
        element.style.display = "none";
    }
    //console.log(cardTxt);
    })
})