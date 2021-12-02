// assigning variable

const addbtn = document.getElementById('add')
//getting dat from the l(ocal storage
const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addbtn.addEventListener('click', () =>addNewNote())
function addNewNote(text = '') {
      
    const note = document.createElement('div')
     note.classList.add('note')
     
     note.innerHTML= `
             <div class ="tootls">
               <button class ="edit">
                     <i class="fas fa-edit"></i>
               </button>
               <button class="delete">
                     <i class="fas fa-trash-alt"></i>
               </button>
            </div>

           <div class ="main ${text ? "" : "hidden"}"></div>
           <textarea class ="${text ? "hidden" : ""}"></div> 
        `
         
     const editBtn = note.querySelector('.edit')
     const deleteBtn = note.querySelector('.delete')
     const main = note.querySelector('.main')
     const textarea = note.querySelector('textarea')


     textarea.value = text
     main.innerHTML = marked(text)

     //event listener for changes
     deleteBtn.addEventListener('click', () => {
         note.remove()
         updateLS()
     })

    editBtn.addEventListener('click',() => {
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
        
    })
    textarea.addEventListener('input', (e) => {
        const { value } =e.target
        main.innerHTML= marked(value)

        updateLS()
    })
    document.body.appendChild(note)

}
function updateLS(){
    const notesText= document.querySelectorAll('textarea')

    // initialise empty

    const notes=[]
    notesText.forEach(note => notes.push(note.value))
    console.log(notes)

    localstrong.setItem('notes',JSON.stringify(notes))}


