
let bookmarkName = document.getElementById('bookmarkName');
let bookmarkURL = document.getElementById('bookmarkURL');

let savebookmark;
if(localStorage.getItem('bookmarker')!=null)
{
    savebookmark= JSON.parse(localStorage.getItem('bookmarker'));
    displayData();
}else{
    savebookmark=[];
}

function add(){
    let bookmarker ={
        name: bookmarkName.value,
        url: bookmarkURL.value
    }
    savebookmark.push(bookmarker);
    localStorage.setItem("savedBookMarkes",JSON.stringify(savebookmark))
    clear()
    displayData()
}

function clear(){
    bookmarkName.value = '';
    bookmarkURL.value = '';
}

function displayData(){
    let cartoona=''
    for(let i=0; i<savebookmark.length; i++){
        cartoona+=`
        <div class="my-3"
        <tr>
        <td> ${savebookmark[i].name} </td>
        <td> ${savebookmark[i].url} </td>
        <td><button class=" btn btn-outline-primary" onclick="visit(${i})">Visit</button></td>
        <td><button class=" btn btn-outline-danger" onclick="deletebookmark(${i})">Delete</button></td>
        </tr>
        </div> `

    }
    document.getElementById('tableData').innerHTML=cartoona
}


function deletebookmark(index){
    savebookmark.splice(index,1)
    localStorage.setItem("bookmarker" ,JSON.stringify(savebookmark) )
    displayData()


}

function visit(index){
    window.open(savebookmark[index].url)
}
