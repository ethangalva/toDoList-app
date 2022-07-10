function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val(); // gets value of #input and assigns it to variable
  li.append(inputValue); 

  if (inputValue === '') { // if the input field is empty then
    alert('Please enter an item to add to the list.');
  } else {
    $('#list').append(li);
  };

  function crossOut() {
    li.toggleClass('strike');
  };

  li.on('dblclick', function crossOut() { // reconsider
    li.toggleClass('strike')
  });

  // creates cross out button and appends it as child of li item
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  // event listener on cross button - when clicked makes the li display to none
  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete');
  }

  // allows to sort items in the list by draging them
  $('#list').sortable();
}