var editPermission = false;
var likeStatus = false;
function esBtn() {
  if (editPermission == false) {
    document.getElementsByClassName("editable")[0].contentEditable = true;
    document.getElementsByClassName("editable")[1].contentEditable = true;
    document.getElementsByClassName("editSave")[0].innerHTML = 'Save <i class="fa-solid fa-floppy-disk"></i>'
    editPermission = true;
  } else {
    document.getElementsByClassName("editable")[0].contentEditable = false;
    document.getElementsByClassName("editable")[1].contentEditable = false;
    document.getElementsByClassName("editSave")[0].innerHTML = 'Edit <i class="fa-solid fa-pen-to-square"></i>'
    editPermission = false;
  }
}
function like(){ 
    if (likeStatus == false) {
        document.getElementsByClassName("likeBtn")[0].innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked!'
        document.getElementById("likeText").innerHTML = '1 person likes this!'
        likeStatus = true;
      } else {
        document.getElementsByClassName("likeBtn")[0].innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Like'
        document.getElementById("likeText").innerHTML = 'Be the first one to like this!'
        likeStatus = false;
      }
}

function addComment(){
  var data = document.getElementById('comment').value ;
  var node = createElement('p');
  node.innerHTML = data ;
  document.getElementsByClassName('allComments')[0].appendChild(node)
}
