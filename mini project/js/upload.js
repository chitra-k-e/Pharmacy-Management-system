document.getElementById('file-upload').addEventListener('change', function() {
    // Get the file input element
    var input = this;
  
    // Get the file name
    var fileName = input.files[0].name;
  
    // Display the file name near the button
    document.getElementById('file-name').textContent = fileName;
  });
  