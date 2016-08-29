function log_out(){
 	localStorage.removeItem('userlogin');
 	 window.location.replace("index.html");
}


$(function() {
	var user = localStorage.getItem('userlogin');

    $.getJSON("http://104.238.96.209/~project/db/get_user_details/"+user,function(result){
      $.each(result, function(i, field){
        $("#output").append("<tr><td>Username:  "+ field.username + " </td></tr><tr><td>Password: "+ field.password + "</td></tr><tr><td>Email: "+ field.email + "</td></tr>");
		$('#user_username').val(field.username);
		$('#user_password').val(field.password);
		  $('#user_email').val(field.email);
		$('#fname').val(field.fname);
		$('#user_firstname').text(field.fname);
		  $('#email').val(field.email);

		  $('#user_email').text(field.email);
     });
    });
 });


function update_user(){
	var username = $('#user_username').val();
 	var fname = $('#fname').val();
	var email = $('#email').val();

$.post( "http://104.238.96.209/~project/db/update/user", { username: username, fname: fname })
  .done(function( data ) {
		if(data == 0){
	 		$('#update_0').show();
		}else if(data == 1){
			$('#update_1').show();
			$('#user_firstname').text(fname);
			$('#user_email').text(email);
			//window.location.href = "user.html";
		}
  });
	
} 

 