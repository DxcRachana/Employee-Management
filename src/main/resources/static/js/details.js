$(document).ready(function() {
	var count=1;
	
  var table = $('#dt').DataTable({

	"bInfo" : false,
	"bPaginate": false,
    
    ajax: {
      url: 'http://localhost:8080/api/mydata/1?limit=2',
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
    
  });
  
	/*for(var i =0;i<data.length;i++) {                
	console.log(data[i]);                
	indexVal = data[i];            
	}*/
	
	$('#next').click(function() {
		var data = table.data();
    	console.log(data);
		 $.ajax({
        	url: "http://localhost:8080/api/mydata/" + data.id,
        	type: 'GET',
        	success: function() {
        		
     	
        table.ajax.url( 'http://localhost:8080/api/mydata/'+data.id+'?limit=2' ).load();
		  data=data+2;
		  }
	});
	
	});

  	$('#previous').click(function() {
	  
	  	
	  	
	  	var id = $(this).attr('id');

	  	console.log("previous button click"+id);
        table.ajax.url( 'http://localhost:8080/api/mydata/'+id+'?limit=2' ).load();
        
              
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
  
});
	
	
	  
	  
	  
	  
	  
	  
	  
	  
       
   