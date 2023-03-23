$(document).ready(function() {
	
	
	
  var table = $('#dt').DataTable({
	
     
	lengthMenu : [[2,3,4,-1],['2', '3' , '4' , 'All']],
    ajax: {
      url: 'http://localhost:8080/api/users',
      type: 'GET',
      dataSrc  :"",
    },
    "columns": [
      { "data": "firstName" },
      { "data": "lastName" },
      { "data": "email" },
      { "data": "password" },
      {"data": null, render: function(data, type, row) {
		  return '<button type="button" class="btn fa fa-trash-can icon-dark btn-danger delete-button" data-id="' + row.id + '">Delete</button>';
		  }
		  }
    ],
    dom: 'Bfrtip',
    	buttons: [{
      		extend: 'excel',
      		title: 'Employee Details Excel Sheet',
      		filename: 'Data'
    	}] 
   
  });
  		
  	

	//Get data from user, put it into database and load the datatable
	$('#formUser').submit(function(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'http://localhost:8080/api/save',
			data: JSON.stringify({
				firstName: $('input[name=firstName]').val(),
                lastName: $('input[name=lastName]').val(),
                email: $('input[name=email]').val(),
                password: $('input[name=password]').val()
			}),
			contentType: 'application/json',
            success: function(data) {
            	$('#dt').DataTable().ajax.reload();
                $('#formUser')[0].reset();
            }
		});
	});
	
	
	//Delete Data from database and reload the table
	$('#dt tbody').on('click', 'tr', function() {
    	var data = table.row(this).data();
        $.ajax({
        	url: "http://localhost:8080/api/delete/" + data.id,
        	type: 'DELETE',
        	success: function() {
        		$('#dt').DataTable().ajax.reload();
        	}
		});   
	});
	

	
	// Export the data
	$('#download').click(function() {
	    $.ajax({
	        url: 'http://localhost:8080/api/export',
	        method: 'GET',
	        success: function(response) {
	            // Use the FileSaver.js library to download the file
	         
	            var binaryData = [];
					binaryData.push(response);
	                var downloadLink = document.createElement('a');
	                downloadLink.href = URL.createObjectURL(new Blob(binaryData));
	                downloadLink.download = 'datatable.txt';
	                downloadLink.click();
	        },
	        error: function(error) {
	            console.log(error);
	        }
	    });
	});
 
});
	  
	  
	  
       
   