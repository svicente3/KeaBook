
//DECLARE VARIABLES
var indexCurrentUser;
var ownPosts=0;
var users = [];
var posts = [];
var avaliableEmails =[];
//In order not to be looking all the time to the localStorage we take the array of aUsers into a new array in the DOM 
//We'll call it posts[]
if(localStorage.aPosts){
	posts= JSON.parse(localStorage.aPosts);
}
else{
	var posts = [{ "postID":"0", "postAuthor":"Sara Vicente", "postTitle":"Keabook: the best network ever!", "postContent":"Keabook is the newest and coolest network you'll ever see and now you are part of its community! Welcome!", "comments":[{ "commentID":"0", "commentAuthor":"Adrià Verdaguer", "commentContent":"This is the best comment ever!", "commentDate":"18/09/2014"},{ "commentID":"1", "commentAuthor":"Erola Serra", "commentContent":"This network is great!", "commentDate":"8/09/2014"}], "postDate":"01/09/2014", 'likes':['Adrià Verdaguer', 'Jordi Marquez']},
			 { "postID":"1", "postAuthor":"Jordi Marquez", "postTitle":"New networks comming", "postContent":"This year we are expecting so many new networks! We'll se what we have.", "comments":[{ "commentID":"0", "commentAuthor":"Mireia Casajuana", "commentContent":"I've also hear about it!", "commentDate":"8/09/2014"}], "postDate":"08/09/2014", 'likes':[]},
			 { "postID":"2", "postAuthor":"Adrià Verdaguer", "postTitle":"New post!!", "postContent":"This is the coolest post ever!", "comments":[{ "commentID":"0", "commentAuthor":"Mireia Casajuana", "commentContent":"No it's not!", "commentDate":"8/09/2014"}], "postDate":"07/09/2014", 'likes':[]},
			 { "postID":"3", "postAuthor":"Erola Serra", "postTitle":"No comments", "postContent":"This is to test", "comments":[], "postDate":"07/09/2014", 'likes':[]}    	
 			];
 	localStorage.aPosts = JSON.stringify(posts);
}
//We'll call it users[]
if(localStorage.aUsers){
	users= JSON.parse(localStorage.aUsers);
}
else{
	users=[ {"id": "0", "name":"Sara", "lastname":"Vicente", "birthday":"01/04/1992", "country":"Catalonia", "email":"saravicentejimenez@gmail.com", "password": "asd", "messages":[ {"from":"KeaBook", "emailFrom":"KeaBook System", "subject":"Welcome to Keabook!", "content":"We are really happy to have you as a new member of our community. If you have any doubt don't hesitate to ask us. Thank you very much, KeaBook Team.", "read":"yes"}], "friends":[{ 'friendID':'1' , 'friendName':'Adrià Verdaguer', 'friendEmail':'adriaverdaguer@gmail.com', 'request':'pendent'}, {'friendID':'4' , 'friendName':'Erola Serra', 'friendEmail':'erola@kea.dk', 'request':'accepted'}], "role": "admin", "status":"active"},
			{"id": "1", "name":"Adrià", "lastname":"Verdaguer", "birthday":"16/09/1989", "country":"Catalonia", "email":"adriaverdaguer@gmail.com", "password": "asd", "messages":[{"from":"KeaBook", "emailFrom":"KeaBook System", "subject":"Welcome to Keabook!", "content":"We are really happy to have you as a new member of our community. If you have any doubt don't hesitate to ask us. Thank you very much, KeaBook Team.", "read":"yes"},{"from":"Sara Vicente", "emailFrom":"saravicentejimenez@gmail.com", "subject":"Urgent", "content":"Don't forget to bring the laptop!", "read":"no"}], "friends":[{'friendID':'0' , 'friendName':'Sara Vicente', 'friendEmail':'saravicentejimenez@gmail.com', 'request':'pendent'},{'friendID':'4' , 'friendName':'Erola Serra', 'friendEmail': 'erola@kea.dk', 'request':'accepted'}], "role": "user", "status":"active" },
			{"id": "2", "name":"Andrea", "lastname":"Del Rio", "birthday":"18", "country":"Catalonia", "email":"andrea@kea.dk", "password": "asd", "messages":[{"from":"KeaBook", "emailFrom":"KeaBook System", "subject":"Welcome to Keabook!", "content":"We are really happy to have you as a new member of our community. If you have any doubt don't hesitate to ask us. Thank you very much, KeaBook Team.", "read":"yes"}], "friends":[], "role": "user", "status":"active"},
			{"id": "3", "name":"Jordi", "lastname":"Marquez", "birthday":"21", "country":"Catalonia", "email":"jordimarquez@gmail.com", "password": "asd", "messages":[{"from":"KeaBook", "emailFrom":"KeaBook System", "subject":"Welcome to Keabook!", "content":"We are really happy to have you as a new member of our community. If you have any doubt don't hesitate to ask us. Thank you very much, KeaBook Team.", "read":"yes"}], "friends":[], "role": "user", "status":"active"},
			{"id": "4", "name":"Erola", "lastname":"Serra", "birthday":"30", "country":"France", "email":"erola@kea.dk", "password": "asd", "messages":[{"from":"KeaBook", "emailFrom":"KeaBook System", "subject":"Welcome to Keabook!", "content":"We are really happy to have you as a new member of our community. If you have any doubt don't hesitate to ask us. Thank you very much, KeaBook Team.", "read":"yes"}], "friends":[{'friendID':'0' , 'friendName':'Sara Vicente', 'friendEmail':'saravicentejimenez@gmail.com', 'request':'accepted'}, {'friendID':'1' , 'friendName':'Adrià Verdaguer', 'friendEmail':'adriaverdaguer@gmail.com', 'request':'accepted'}], "role": "user", "status":"blocked"},
			{"id": "5", "name":"Mireia", "lastname":"Casajuana", "birthday":"04", "country":"England", "email":"mireia@kea.dk", "password": "asd", "messages":[{"from":"KeaBook", "emailFrom":"KeaBook System", "subject":"Welcome to Keabook!", "content":"We are really happy to have you as a new member of our community. If you have any doubt don't hesitate to ask us. Thank you very much, KeaBook Team.", "read":"yes"}], "friends":[], "role": "user", "status":"blocked"}
			];
	localStorage.aUsers = JSON.stringify(users);
}

//SETTING ELEMENTS TO VARS
var myLogin = document.getElementById('myLogin');
var emailLogin = document.getElementById('inputEmailLogin');
var passwordLogin = document.getElementById('inputPasswordLogin');
var btnLogin = document.getElementById('btnLogin');
var nameRegister = document.getElementById('inputNameRegister');
var lastNameRegister = document.getElementById('inputLastNameRegister');
var birthdayRegister = document.getElementById('inputBirthdayRegister');
var countryRegister = document.getElementById('inputCountryRegister');
var emailRegister = document.getElementById('inputEmailRegister');
var passwordRegister = document.getElementById('inputPasswordRegister');
var repeatPasswordRegister = document.getElementById('inputRepeatPasswordRegister');
var btnRegister = document.getElementById('btnRegister');
var btnLogOut = document.getElementById('btnLogOut');
var messageTo = document.getElementById('inputMessageTo');
var messageSubject = document.getElementById('inputMessageSubject');
var messageContent = document.getElementById('inputMessageContent');
var btnNewMessage = document.getElementById('btnNewMessage');
var btnNewPost = document.getElementById('btnNewPost');
var postTitle = document.getElementById('inputPostTitle');
var postContent = document.getElementById('inputPostContent');

//ADD EVENTS
btnLogin.addEventListener('click', login);
nameRegister.addEventListener('keyup', validateName);
lastNameRegister.addEventListener('keyup', validateName);
birthdayRegister.addEventListener('keyup', validateBirthday);
countryRegister.addEventListener('keyup', validateName);
emailRegister.addEventListener('keyup', validateNewEmail);
passwordRegister.addEventListener('keyup', validatePassword);
repeatPasswordRegister.addEventListener('keyup', validateRepeatPassword);
btnRegister.addEventListener('click', register);
btnNewMessage.addEventListener('click', newMessage);
btnLogOut.addEventListener('click', logout);
btnNewPost.addEventListener('click', newPost);

//MENU
$(document).on("click", ".MyLink", function(){
	 //We will turn all the pages to display:none
     $(".MyPage").css({"display":"none"});
     //Then take the data-link attribute we've clicked
     var dataPage = $(this).attr("data-link");
     //Ad show the page which has the same attribute as a page attribute
     $('*[data-page="'+dataPage+'"]').fadeIn("slow");
     //We'll also remove the class active from all the links in menu
     $(".MyLink").removeClass("active");
     //And just add it to the one we've clicked
     $(this).addClass("active");
});

//FUNCTIONS
//GRAVATAR LOGIN: Once the user has write the email we show it's gravatar, if it has.
$("#inputEmailLogin").keyup(function () {
    var email = $(this).val();
    var verificar_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var md5 = $.md5(email);
    if (verificar_email.test(email)) {
        $("#avatar").attr("src", 'http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm');
    }
});

//LOGIN: This function will be called every time we click btnLogin (look up at ADD EVENTS)
function login(){
	//We call the validateUser function to see if there's any user with this info
	if(validateUser()){
		if(users[indexCurrentUser].status == 'blocked'){
			userBlocked();
		}
		else{
			//Update page, menu, users inbox with its messages
			startUser();
		}
        
	}
	else{
		console.log("not registered!");
	}
}
//This is the function that checks if the user is registered or not
function validateUser(){
	//We loop through aUsers array to see if there's any match with the emailLogin and the passwordLogin
	for(var i=0; i<users.length; i++){
		//If there's a match, we'll return true
		if(emailLogin.value == users[i].email && passwordLogin.value == users[i].password){
			indexCurrentUser=i;
			return true;
		}
	}
	//If there's no match after looping through the array, we'll return false
	return false;
}

//DATE PICKER
$( "#inputBirthdayRegister" ).datepicker({
    inline: true
});

//AUTOCOMPLETE EMAIL 
for(var e=0; e<users.length; e++){
	avaliableEmails.push(users[e].email);
}
$( "#inputMessageTo" ).autocomplete({
  source: avaliableEmails
});
$( "#inputEmailReply" ).autocomplete({
  source: avaliableEmails
});

//REGISTER
function register(){
	var lastUserIndex = users.length-1;
	var newid = (users[lastUserIndex].id)+1;
	indexCurrentUser = users.length;
	if( validateName() && validateBirthday() && validateNewEmail() && validateRepeatPassword() ){
		users.push({ "id": newid, "name":capitalize(nameRegister.value), "lastname":capitalize(lastNameRegister.value), "birthday":birthdayRegister.value, "country":capitalize(countryRegister.value), "email":emailRegister.value, "password": passwordRegister.value, "messages":[{"from":"KeaBook", "subject":"Welcome to Keabook!", "contentMessage":"We are really happy to have you as a new member of our community. If you have any doubt don't hesitate to ask us. Thank you very much, KeaBook Team."}], 'friends':[], "role": "user", "status":"active" });
		//We save it into localStorage
		var jsonString =  JSON.stringify(users);
		localStorage.setItem("aUsers",jsonString);
		//Welcome user
		$('*[data-page="Home"]').before("<div class='alert alert-success alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Welcome "+capitalize(nameRegister.value)+" "+capitalize(lastNameRegister.value)+"!</strong> Your register had been successful. Now you're in KeaBook community!</div>");
		//Update page, menu, users inbox and users list with its messages
	    startUser();
	}
	else{
		$('*[data-page="Keabook"]').before("<div class='alert alert-danger alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>ERROR!</strong> There has been an error while you registration. Please try again.</div>");
	}
}	

//PAGE USER BLOCKED
function userBlocked(){
	$(".MyLink").css({"display":"none"});
	$(".MyPage").css({"display":"none"});
    $(".liLogin").hide();
    $(".blockedPage").fadeIn("slow");
    $(".blockLogOut").fadeIn("slow");
    //Change home content
    $('.blockedPage').append('<div id="pageBlocked"><h3>Your user has been blocked.</h3><p>To ask to the admin to unblock you click here <span data-indexOfUserToUnblock="'+indexCurrentUser+'" class="askUnblocked glyphicon glyphicon-record"></span></p></div>');
}
	
//ASK UNBLOCK
$(document).on("click", "span.askUnblocked", function(){
	var indexOfUserToUnblock = $(this).attr('data-indexOfUserToUnblock');
	for(var a=0; a<users.length; a++){
		if(users[a].role == 'admin'){
			sendMessage(users[a].email, 'Unblock user', 'The user '+users[indexOfUserToUnblock].name+' '+users[indexOfUserToUnblock].lastname+' with the e-mail '+users[indexOfUserToUnblock].email+' would like you to unblock its user.');
		}
	}
	$('.blockedPage').prepend("<div class='alert alert-info alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>A message has been sent to the admin asking to unblock you. Just wait for him to unblock you. Thank you.</div>");

});	

//BLOCKED LOGOUT 
$(document).on("click", "li.blockLogOut", function(){
	logout();
	$('.keabookPage').fadeIn("slow");
});
	
//START USER
function startUser(){
	//Show the correct page and menu
	$(".MyLink").removeClass("active");
	$('*[data-link="Home"]').addClass("active");
	$(".MyPage").css({"display":"none"});
    $(".MyLink").fadeIn("slow");
    $(".link").fadeIn("slow");
    $('*[data-page="Home"]').fadeIn("slow");
    $(".liLogin").hide();
    //Home
    //User info
	var md5 = $.md5(users[indexCurrentUser].email);
	$(".lastestInfo").before('<div id="homeProfile" class="col-md-12 jumbotron"><img id="avatar" src="http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm" alt="avatar"><div class="homeProfileInfo"><p class="homeName">'+users[indexCurrentUser].name+' ' +users[indexCurrentUser].lastname+'</p><p class="homeMessages">'+users[indexCurrentUser].messages.length+' messages</p><p class="homePosts">'+checkOwnPosts()+' posts</p></div><div class="today">'+completeDate()+'</div></div></div>');
	//Lastest posts
	for(var p=posts.length-2; p<posts.length; p++){
		var author = posts[p].postAuthor ;
		var cross = ' ';
		if(users[indexCurrentUser].role == "admin"){
			cross = '<span class="deletePost glyphicon glyphicon-remove" data-deletePost="'+posts[p].postID+'"></span>';
			if(author == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname)){
				author= " ";
			}
		}
		else{
			if(author == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname) ){
				author= " ";
				cross = '<span class="deletePost glyphicon glyphicon-remove" data-deletePost="'+posts[p].postID+'"></span>';
			}
		}
		$("ul.lastestPosts").prepend('<li id="'+posts[p].postID+'" class="singlePost jumbotron">'+cross+'<h4 class="postTitle">'+posts[p].postTitle+'</h4><div class="postContent">'+posts[p].postContent+'</div><div class="postActions"><span class="seePosts glyphicon glyphicon-log-in" data-postid="'+posts[p].postID+'"></span><p class="commentsNum">See '+posts[p].comments.length+' comments</p><span class="seePostLikes glyphicon glyphicon-hand-right" data-postid="'+posts[p].postID+'"></span><p class="likesNum">See '+posts[p].likes.length+' likes</p><h5 style="float:right" class="postFrom">'+author+'</h5></div></li>');
	}
	//Lastest user messages
	var messagesShown=4;
	if( users[indexCurrentUser].messages.length < messagesShown){
		messagesShown = users[indexCurrentUser].messages.length; 
	}
	for(var m=users[indexCurrentUser].messages.length-messagesShown; m< users[indexCurrentUser].messages.length; m++){
		//If the message hasn't been read
		if(users[indexCurrentUser].messages[m].read == "no"){
			$("#lastestMessages table tbody").prepend('<tr id="'+m+'" class="singleMessage unread"><td>'+users[indexCurrentUser].messages[m].from+'</td><td>'+users[indexCurrentUser].messages[m].subject+'</td><td><span class="openMsg glyphicon glyphicon-log-in" data-msgid="'+m+'" data-toggle="modal" data-target="#msg'+m+'"></span></td></tr>');
		}
		//If the message has been read
		else{
			$("#lastestMessages table tbody").prepend('<tr id="'+m+'" class="singleMessage"><td>'+users[indexCurrentUser].messages[m].from+'</td><td>'+users[indexCurrentUser].messages[m].subject+'</td><td><span class="openMsg glyphicon glyphicon-log-in" data-msgid="'+m+'" data-toggle="modal" data-target="#msg'+m+'"></span></td></tr>');
		}
	}
	//Last users
	for(var u=users.length-3; u<users.length; u++){
		var md5 = $.md5(users[u].email);
		$("#lastestUsers ul").append('<li class="lastUser"><img id="avatar" src="http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm" alt="avatar"><p>'+users[u].name+' '+users[u].lastname+'</p></li>');
		
	}	
	//Posts Wall
    for(var p=0; p<posts.length; p++){
    	var author = posts[p].postAuthor ;
		var cross = ' ';
		var hand = '<li><span class="likePost glyphicon glyphicon-thumbs-up" data-indexpostidlike="'+p+'"></span></li>';
		//If the user logged is an admin
		if(users[indexCurrentUser].role == "admin"){
			//Will be able to delet all the posts
			cross = '<span class="deletePost glyphicon glyphicon-remove" data-deletePost="'+posts[p].postID+'"></span>';
			//But if the post is from itself we won't show the author
			if(author == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname)){
				author= " ";
			}
		}
		//If it's a simple user
		else{
			//Will only be able to delete the posts if they are from itself
			if(author == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname) ){
				author= " ";
				cross = '<span class="deletePost glyphicon glyphicon-remove" data-deletePost="'+posts[p].postID+'"></span>';
			}
		}
		//See if the current user has already add a like to the post
		if(posts[p].likes.length != 0){
			for(var l=0; l<posts[p].likes.length; l++){
				if( posts[p].likes[l] == users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname ){
					hand = ' ';
				}
			}
		}
    	//post
        $("ul#posts").prepend('<li id="'+posts[p].postID+'" class="singlePost jumbotron">'+cross+'<h4 class="postTitle">'+posts[p].postTitle+'</h4><div class="postContent">'+posts[p].postContent+'</div><div class="postActions"><span class="commentPost glyphicon glyphicon-edit" data-postidcomments="'+posts[p].postID+'"></span><p class="commentsNum">'+posts[p].comments.length+' comments</p><span class="seeLikes glyphicon glyphicon-thumbs-up" data-postidlikes="'+posts[p].postID+'"></span><p class="likesNum">'+posts[p].likes.length+' likes</p><h5 style="float:right" class="postFrom">'+author+'</h5></div><ul class="comments" style="display:none"><li class="singleComment newComment" ><input type="text" class="form-control" id="inputNewCommentFromPost'+posts[p].postID+'" placeholder="Comment"><button data-commentid="'+posts[p].comments.length+'" data-postid="'+posts[p].postID+'" class="btn btn-primary btn-lg btnNewComment">Comment</button></li></ul><ul class="likes" style="display:none">'+hand+'</ul></li>');
        //Comments
        for(var c=0; c<posts[p].comments.length; c++){
        	var authorComment = posts[p].comments[c].commentAuthor ;
			var crossComment = ' ';
			//If the user logged is an admin
			if(users[indexCurrentUser].role == "admin"){
				crossComment = '<span class="deleteComment glyphicon glyphicon-remove" data-deletepostid="'+posts[p].postID+'" data-deletecommentid="'+posts[p].comments[c].commentID+'"></span>';
				if(authorComment == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname)){
					authorComment= " ";
				}
			}
			//If it's a simple user
			else{
				//If the post is from the user logged
				if( posts[p].postAuthor == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname) ){
					//Will be able to delet all comments
					crossComment = '<span class="deleteComment glyphicon glyphicon-remove" data-deletepostid="'+posts[p].postID+'" data-deletecommentid="'+posts[p].comments[c].commentID+'"></span>';
					//But will only show the author of the comment if it's not his comment
					if(authorComment == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname)){
						authorComment= " ";
					}
				}
				//If the post is from an other user
				else{
					//If the comment is from the user logged
					if( posts[p].comments[c].commentAuthor == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname) ){
						authorComment= " ";
						crossComment = '<span class="deleteComment glyphicon glyphicon-remove" data-deletepostid="'+posts[p].postID+'" data-deletecommentid="'+posts[p].comments[c].commentID+'"></span>';
					}
					//If it's from an other user
					else{
						authorComment= posts[p].comments[c].commentAuthor;
						crossComment = ' ';
					}
				}
			}        
    	    $("ul#posts li#"+posts[p].postID+" ul.comments li.newComment").before("<li class='singleComment' id='"+posts[p].comments[c].commentID+"'>"+crossComment+"<p class='commentContent'>"+posts[p].comments[c].commentContent+"</p><div class='commentInfo'><p class='commentAuthor'>"+authorComment+"</p><p class='commentDate'>"+posts[p].comments[c].commentDate+"</p></div></li>");
        }
        //Likes
        for(var l=0; l<posts[p].likes.length; l++){
        	var nameLike = posts[p].likes[l];
        	if( posts[p].likes[l] == users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname ){
				nameLike = 'You';
			}
	        $("ul#posts li#"+posts[p].postID+" ul.likes").append('<li class="singleLike">'+nameLike+'</li>');
        }
    }
	//Users/Friends List
	for(var n=0; n<users.length; n++){
		var friend = false;
		if(users[n].email != users[indexCurrentUser].email){
			for(var f=0; f<users[indexCurrentUser].friends.length; f++){
				if( users[n].email == users[indexCurrentUser].friends[f].friendEmail){
					//Friend request accepted
					if(users[indexCurrentUser].friends[f].request == 'accepted'){
						if(users[indexCurrentUser].friends[f].friendEmail == users[indexCurrentUser].email){
							friend=true;
						}
						else{
							var md5 = $.md5(users[indexCurrentUser].friends[f].friendEmail);
							$("ul#friends").append('<li class="singleFriend col-md-6"><span data-friendId="'+users[indexCurrentUser].friends[f].friendID+'" class="denyRequest glyphicon glyphicon-remove"></span><img id="avatar" src="http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm" alt="avatar"><div class="friendInfo"><p class="friendName">'+users[indexCurrentUser].friends[f].friendName+'</p><p class="friendEmail">'+users[indexCurrentUser].friends[f].friendEmail+'</p></div></li>');
							friend=true;
						}
					}
					//Friend request pendent
					else{
						$('*[data-page="Users"]').prepend("<div class='alert alert-warning alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>You have a friend request from "+users[indexCurrentUser].friends[f].friendEmail+". Do you wanna accept it? <span data-friendId='"+users[indexCurrentUser].friends[f].friendID+"' class='acceptRequest glyphicon glyphicon-ok'> <span data-friendId='"+users[indexCurrentUser].friends[f].friendID+"' class='denyRequest glyphicon glyphicon-remove'></div>");
						friend=true;
					}
				}
			}
			//Have no friend request
			if( friend == false ){
				var md5 = $.md5(users[n].email);
				$("#allusers tbody").append('<tr class="singleUser"><td><span data-requestToFriendId="'+users[n].id+'" class="addFriend glyphicon glyphicon-plus"></span></td><td class="text-center"><img id="avatar" src="http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm" alt="avatar"></td><td>'+users[n].name+'</td><td>'+users[n].lastname+'</td><td>'+users[n].email+'</td></tr>');
			}
		}
	}
	//User messages
	for(var m=0; m< users[indexCurrentUser].messages.length; m++){
		//If the message hasn't been read
		if(users[indexCurrentUser].messages[m].read == "no"){
			$("#inbox tbody").prepend('<tr id="'+m+'" class="singleMessage unread"><td>'+users[indexCurrentUser].messages[m].from+'</td><td>'+users[indexCurrentUser].messages[m].subject+'</td><td><span data-msgid="'+m+'" class="seeMsg glyphicon glyphicon-eye-open" data-toggle="modal" data-target="#msg'+m+'"></span> <span data-id="'+m+'" class="deleteMsg glyphicon glyphicon-trash"></span></td></tr>');
		}
		//If the message has been read
		else{
			$("#inbox tbody").prepend('<tr id="'+m+'" class="singleMessage"><td>'+users[indexCurrentUser].messages[m].from+'</td><td>'+users[indexCurrentUser].messages[m].subject+'</td><td><span data-msgid="'+m+'" class="seeMsg glyphicon glyphicon-eye-open" data-toggle="modal" data-target="#msg'+m+'"></span> <span data-id="'+m+'" class="deleteMsg glyphicon glyphicon-trash"></span></td></tr>');
		}
		//We add a modal for each message
		$("#inbox").after('<div class="modal fade" id="msg'+m+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true"></span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+users[indexCurrentUser].messages[m].subject+'</h4><span data-id="'+m+'" class="replyMsg glyphicon glyphicon-share-alt"></span></div><div class="modal-body"><div class="msgContent">'+users[indexCurrentUser].messages[m].content+'</div><br><h5 class="msgFrom">'+users[indexCurrentUser].messages[m].from+'</h5></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
	}
	//User Profile
	var md5 = $.md5(users[indexCurrentUser].email);
	$("*[data-page='Profile']").append('<div id="userFile" class="jumbotron"><span class="glyphicon glyphicon-pencil editUser"></span><img id="avatar" src="http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm" alt="avatar"><div id="infoFile"><p class="nameFile singleFile">'+users[indexCurrentUser].name+'</p><p class="lastNameFile singleFile">'+users[indexCurrentUser].lastname+'</p><p class="emailFile singleFile">'+users[indexCurrentUser].email+'</p><p class="birthdayFile singleFile">'+users[indexCurrentUser].birthday+'</p><p class="countryFile singleFile">'+users[indexCurrentUser].country+'</p><p class="messagesFile singleFile">'+users[indexCurrentUser].messages.length+' messages</p><p class="roleFile singleFile">'+users[indexCurrentUser].role+'</p><p class="statusFile singleFile">'+users[indexCurrentUser].status+'</p></div></div>');
	//Admin Panel
	if(users[indexCurrentUser].role == "admin"){
		for(var n=0; n<users.length; n++){
			if(users[n].status == "active"){
				//If the user is an Admin
				if(users[n].role == "admin"){
					$("#admins tbody").append('<tr id="'+n+'"><td>'+n+'</td><td class="name">'+users[n].name+'</td><td class="lastname">'+users[n].lastname+'</td><td class="email">'+users[n].email+'</td><td><span data-id="'+n+'" class="block glyphicon glyphicon-ban-circle"></span> <span data-id="'+n+'" class="changerole glyphicon glyphicon-user"></span></td></tr>');
				}
				else{	//If it's a user
					$("#users tbody").append('<tr id="'+n+'"><td>'+n+'</td><td class="name">'+users[n].name+'</td><td class="lastname">'+users[n].lastname+'</td><td class="email">'+users[n].email+'</td><td><span data-id="'+n+'" class="block glyphicon glyphicon-ban-circle"></span> <span data-id="'+n+'" class="changerole glyphicon glyphicon-user"></span></td></tr>');
				}
			}
			else{	//If the user is blocked
				$("#blocked tbody").append('<tr id="'+n+'"><td>'+n+'</td><td class="name">'+users[n].name+'</td><td class="lastname">'+users[n].lastname+'</td><td class="email">'+users[n].email+'</td><td><span data-id="'+n+'" class="unblock glyphicon glyphicon-ok-circle"></span> <span data-id="'+n+'" class="delete glyphicon glyphicon-trash"></span> </td></tr>');
			}
		}
	}
	else{
		$('*[data-link="Admin"]').hide();
	}
}

//SEE POST COMMENTS (from the lastest post in home page)
$(document).on("click", "span.seePosts", function(){
	//We first go to the Wall page
 	 $(".MyPage").css({"display":"none"});
     $('*[data-page="Wall"]').fadeIn("slow");
     $(".MyLink").removeClass("active");
     $('*[data-link="Wall"]').addClass("active");
     //We slide the comments of the post we've clicked
     var postid = $(this).attr("data-postid");
	 $("li#"+postid+" ul.comments").slideToggle();
});

//SEE POST LIKES
$(document).on("click", "span.seePostLikes", function(){
	//We first go to the Wall page
	$(".MyPage").css({"display":"none"});
	$('*[data-page="Wall"]').fadeIn("slow");
	$(".MyLink").removeClass("active");
	$('*[data-link="Wall"]').addClass("active");
	//We slide the likes of the post we've clicked
	var postid = $(this).attr("data-postid");
	$("li#"+postid+" ul.likes").slideToggle();
});

//OPEN MESSAGE (from lastest messages in home page)
$(document).on("click", "span.openMsg", function(){
	//We first go to the Inbox page
 	 $(".MyPage").css({"display":"none"});
     $('*[data-page="Inbox"]').fadeIn("slow");
     $(".MyLink").removeClass("active");
     $('*[data-link="Inbox"]').addClass("active");
     //And then open the message clicked
     var msgid = $(this).attr("data-msgid");
     $("#lastestMessages .table tbody tr#"+msgid).removeClass("unread");
     $("#inbox tbody tr#"+msgid).removeClass("unread");
     $("#msg"+msgid).toggle();
     //Set the message as read
     users[indexCurrentUser].messages[msgid].read = 'yes';
     //(We save it into localStorage
	 var jsonString =  JSON.stringify(users);
	 localStorage.setItem("aUsers",jsonString);
});

//NEW POST
function newPost(){
	var lastPostIndex = (posts.length) - 1;
	var newPostId = parseInt( posts[lastPostIndex].postID ) + 1;
	//We add the new post to the wall
	$("ul#posts").prepend('<li id="'+newPostId+'" class="singlePost jumbotron"><span class="deletePost glyphicon glyphicon-remove" data-deletePost="'+newPostId+'"></span><h4 class="postTitle">'+postTitle.value+'</h4><div class="postContent">'+postContent.value+'</div><div class="postActions"><span class="commentPost glyphicon glyphicon-edit" data-postidcomments="'+newPostId+'"></span><p class="commentsNum">0 comments</p><span class="seeLikes glyphicon glyphicon-thumbs-up" data-postidlikes="'+newPostId+'"></span><p class="likesNum">0 likes</p><h5 style="float:right" class="postFrom"></h5></div><ul class="comments" style="display:none"><li class="singleComment newComment"><input type="text" class="form-control" id="inputNewCommentFromPost'+newPostId+'" placeholder="Comment"><button data-commentid="0" data-postid="'+newPostId+'" class="btn btn-primary btn-lg btnNewComment">Comment</button></li></ul><ul class="likes" style="display:none"><li><span class="likePost glyphicon glyphicon-thumbs-up" data-indexpostidlike="'+posts.length+'"></span></li></ul></li>');
	//And we save it into the array
	posts.push({ "postID": newPostId, "postAuthor":users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname, "postTitle":postTitle.value , "postContent": postContent.value, "comments":[], "postDate":completeDate(), 'likes':[] });
	//We save it into localStorage
	var jsonString =  JSON.stringify(posts);
	localStorage.setItem("aPosts",jsonString);
	//Change number of posts
	ownPosts+=1;
	$('#homeProfile .homePosts').text( ownPosts +' posts');
}

//DELETE POST
$(document).on("click", "span.deletePost", function(){
	var indexPost;
	var deletePost= $(this).attr("data-deletePost");
	//We remove the li from the list
	$(this).parent().remove();
	//We look for the index of the post
	indexPost = findItemIndex(posts, 'postID', deletePost);
	//We delete the post from the array
	posts.splice(indexPost, 1);
	//We save it into localStorage
	var jsonString =  JSON.stringify(posts);
	localStorage.setItem("aPosts",jsonString);
	//Change number of posts
	console.log(ownPosts);
	ownPosts-=1;
	$('#homeProfile .homePosts').text( ownPosts +' posts');
	console.log(ownPosts);});

//SLIDE LIKES
$(document).on("click", "span.seeLikes", function(){
	var postidlikes = $(this).attr("data-postidlikes");
	$("li#"+postidlikes+" ul.likes").slideToggle();
});

//ADD LIKE
$(document).on("click", "span.likePost", function(){
	var indexpostidlike = $(this).attr("data-indexpostidlike");
	console.log(indexpostidlike);
	$('li#'+posts[indexpostidlike].postID+' p.likesNum').text((posts[indexpostidlike].likes.length+1)+' likes');
	$('li#'+posts[indexpostidlike].postID+' ul.likes').append('<li class="singleLike">You</li>');
	$(this).remove();
	posts[indexpostidlike].likes.push(users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname);
	//We save it into localStorage
	var jsonString =  JSON.stringify(posts);
	localStorage.setItem("aPosts",jsonString);
});

//SLIDE COMMENTS
$(document).on("click", "span.commentPost", function(){
	var postidcomments = $(this).attr("data-postidcomments");
	$("li#"+postidcomments+" ul.comments").slideToggle();
});

//NEW COMMENT
$(document).on("click", "button.btnNewComment", function(){
	//We get the necessary info
	var postid = $(this).attr("data-postid");
	var newCommenId;
	var lastCommentIndex;
	if(posts[postid].comments.length == 0){
		newCommenId = 0;
	}
	else{
		lastCommentIndex = (posts[postid].comments.length) -1;
		newCommenId = parseInt(posts[postid].comments[lastCommentIndex].commentID) + 1;
	}
	var contentNewComment = document.getElementById('inputNewCommentFromPost'+postid);
	//We add the comment
	$('ul#posts li#'+postid+' ul.comments li.newComment').before("<li class='singleComment' id='"+newCommenId+"'><span class='deleteComment glyphicon glyphicon-remove' data-deletepostid='"+postid+"' data-deletecommentid='"+newCommenId+"'></span><p class='commentContent'>"+contentNewComment.value+"</p><div class='commentInfo'><p class='commentAuthor'></p><p class='commentDate'>"+completeDate()+"</p></div></li>");
	//And we save it into the array
	posts[postid].comments.push({ "commentID":newCommenId, "commentAuthor":users[indexCurrentUser].name+" "+users[indexCurrentUser].lastname, "commentContent": contentNewComment.value, "commentDate":completeDate() });
	//We save it into localStorage
	var jsonString =  JSON.stringify(posts);
	localStorage.setItem("aPosts",jsonString);
	//Change number of comments
	$('li#'+postid+' p.commentsNum').text(posts[postid].comments.length+' comments');
});

//DELETE COMMENT
$(document).on("click", "span.deleteComment", function(){
	var indexComment;
	var postid = $(this).attr("data-deletepostid");
	var commentid = $(this).attr("data-deletecommentid");
	//We remove the li from the list
	$(this).parent().remove();
	//We look for the index of the comment
	for (var i = 0; i < posts[postid].comments.length; i++) {
		if (posts[postid].comments[i].commentID == commentid) {
			indexComment=i;//return i;
		}
	}
	//And we delete the comment from the array
	posts[postid].comments.splice(indexComment, 1);
	//We save it into localStorage
	var jsonString =  JSON.stringify(posts);
	localStorage.setItem("aPosts",jsonString);
	//Change number of comments
	$('li#'+postid+' p.commentsNum').text(posts[postid].comments.length+' comments');
});

//ADD FRIEND REQUEST
$(document).on("click", "span.addFriend", function(){
	$(this).remove();
	var userIdOfTheFriendRequest = $(this).attr('data-requestToFriendId');
	var indexOf_userIdOfTheFriendRequest = findItemIndex(users, 'id', userIdOfTheFriendRequest);
	//Add both requests
	users[indexCurrentUser].friends.push({'friendID':userIdOfTheFriendRequest, 'friendName': users[indexOf_userIdOfTheFriendRequest].name+' '+users[indexOf_userIdOfTheFriendRequest].lastname, 'friendEmail':users[indexOf_userIdOfTheFriendRequest].email, 'request':'pendent'});
	users[indexOf_userIdOfTheFriendRequest].friends.push({'friendID':users[indexCurrentUser].id, 'friendName': users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname, 'friendEmail':users[indexCurrentUser].email, 'request':'pendent'});
	//We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	//Request sent
	$('*[data-page="Users"]').prepend("<div class='alert alert-warning alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>Request sent.</div>");
});

//ACCEPT FRIEND REQUEST
$(document).on("click", "span.acceptRequest", function(){
	var friendid = $(this).attr('data-friendId');
	$(this).parent().remove();
	//Get the indexOf from users[] where the users[].id is equal to the variable friendid
	var indexUserOfFriendid = findItemIndex(users, 'id', friendid);
	//Get the indexOf from current user friends[] where friends[].friendID is equal to the variable friendid
	var indexFriendFromCurrentUSer = findItemIndex(users[indexCurrentUser].friends, 'friendID', friendid);
	//Get the indexOf from  users[friend we wanna be friends].friends[] where friends[].friendID is equal to the variable friendid
	var indexFriendFromFriendid = findItemIndex(users[indexUserOfFriendid].friends, 'friendID', users[indexCurrentUser].id);
	//Change both requests to accepted
	users[indexCurrentUser].friends[indexFriendFromCurrentUSer].request='accepted';
	users[indexUserOfFriendid].friends[indexFriendFromFriendid].request='accepted';
	//We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	//Request Accepted
	$('*[data-page="Users"]').prepend("<div class='alert alert-success alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>Request accepted.</div>");
	//Add frient to friends list
	var md5 = $.md5(users[indexCurrentUser].friends[indexFriendFromCurrentUSer].friendEmail);
	$("ul#friends").append('<li class="singleFriend col-md-6"><span data-friendId="'+users[indexCurrentUser].friends[indexFriendFromCurrentUSer].friendID+'" class="denyRequest glyphicon glyphicon-remove"></span><img id="avatar" src="http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm" alt="avatar"><div class="friendInfo"><p class="friendName">'+users[indexCurrentUser].friends[indexFriendFromCurrentUSer].friendName+'</p><p class="friendEmail">'+users[indexCurrentUser].friends[indexFriendFromCurrentUSer].friendEmail+'</p></div></li>');
});

//DENY FRIEND REQUEST / DELET FRIEND
$(document).on("click", "span.denyRequest", function(){
	var friendid = $(this).attr('data-friendId');
	$(this).parent().remove();
	//Get the indexOf from users[] where the users[].id is equal to the variable friendid
	var indexUserOfFriendid = findItemIndex(users, 'id', friendid);
	//Get the indexOf from current user friends[] where friends[].friendID is equal to the variable friendid
	var indexFriendFromCurrentUSer = findItemIndex(users[indexCurrentUser].friends, 'friendID', friendid);
	//Get the indexOf from  users[friend we wanna be friends].friends[] where friends[].friendID is equal to the variable friendid
	var indexFriendFromFriendid = findItemIndex(users[indexUserOfFriendid].friends, 'friendID', friendid);
	//Delete both friends
	users[indexCurrentUser].friends.splice(indexFriendFromCurrentUSer, 1);
	users[indexUserOfFriendid].friends.splice(indexFriendFromFriendid, 1);
	//We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	//Friend denied
	$('*[data-page="Users"]').prepend("<div class='alert alert-danger alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>Friend deleted.</div>");
	//Add to people you may know
	var md5 = $.md5(users[indexUserOfFriendid].email);
	$("#allusers tbody").append('<tr class="singleUser"><td><span data-requestToFriendId="'+users[indexUserOfFriendid].id+'" class="addFriend glyphicon glyphicon-plus"></span></td><td class="text-center"><img id="avatar" src="http://www.gravatar.com/avatar.php?gravatar_id=' + md5 + '?d=mm" alt="avatar"></td><td>'+users[indexUserOfFriendid].name+'</td><td>'+users[indexUserOfFriendid].lastname+'</td><td>'+users[indexUserOfFriendid].email+'</td></tr>');
});

//NEW MESSAGE
function newMessage(){
	sendMessage(messageTo.value, messageSubject.value, messageContent.value);
}

//SEE MESSAGE (from inbox list)
$(document).on('click', 'span.seeMsg', function(){
	var msgid = $(this).attr("data-msgid");
	$("#inbox tbody tr#"+msgid).removeClass("unread");
	$("#lastestMessages .table tbody tr#"+msgid).removeClass("unread");
	//Set the message as read
    users[indexCurrentUser].messages[msgid].read = 'yes';
    //(We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
});

//REPLY MESSAGE
$(document).on("click", "span.replyMsg", function(){
	var idReply = $(this).attr("data-id");
	$("#msg"+idReply+" .modal-content").html('<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true"></span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">RE: '+users[indexCurrentUser].messages[idReply].subject+'</h4><span data-id="'+idReply+'" class="backMsg glyphicon glyphicon-circle-arrow-left"></span></div><div class="modal-body"><form class="form-horizontal" role="form"><div class="form-group"><label for="inputMessageTo" class="col-sm-2 control-label">To: </label><div class="col-sm-10 ui-widget"><input type="email" class="form-control" id="inputEmailReply" value="'+users[indexCurrentUser].messages[idReply].emailFrom+'"></div></div><div class="form-group"><label for="inputSubjectReply" class="col-sm-2 control-label">Subject: </label><div class="col-sm-10"><input type="text" class="form-control" id="inputSubjectReply" value="RE: '+users[indexCurrentUser].messages[idReply].subject+'"></div></div><div class="form-group"><label for="inputMessageContent" class="col-sm-2 control-label">Message: </label><div class="col-sm-10"><input type="textarea" class="form-control" id="inputContentReply" placeholder="Content"></div></div></form></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button><button type="button" class="btn btn-primary" id="btnReplyMessage" data-emailTo="'+users[indexCurrentUser].messages[idReply].emailFrom+'" data-dismiss="modal">Send</button></div>');
});

//SEND REPLY MESSAGE
$(document).on("click", "#btnReplyMessage", function(){
	var emailReply = document.getElementById("inputEmailReply").value;
	var subjectReply = document.getElementById("inputSubjectReply").value;
	var contentReply = document.getElementById("inputContentReply").value;
	sendMessage(emailReply, subjectReply, contentReply);
});

//FROM REPLY BACK TO MESSAGE
$(document).on("click", "span.backMsg", function(){
	var idReply = $(this).attr("data-id");
	$("#msg"+idReply+" .modal-content").html('<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true"></span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">'+users[indexCurrentUser].messages[idReply].subject+'</h4><span data-id="'+idReply+'" class="replyMsg glyphicon glyphicon-share-alt"></span></div><div class="modal-body"><div class="msgContent">'+users[indexCurrentUser].messages[idReply].content+'</div><br><h5 class="msgFrom">'+users[indexCurrentUser].messages[idReply].from+'</h5></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>');
});

//DELETE MESSAGE
$(document).on("click", "span.deleteMsg", function(){;
	var msgID = $(this).attr("data-id");
	$("#inbox tbody tr#"+msgID).remove();
	users[indexCurrentUser].messages.splice(msgID,1);
	//We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	//Message deleted
	$('*[data-page="Inbox"]').prepend("<div class='alert alert-danger alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>Message deleted.</div>");
});

//BLOCK USER
$(document).on("click", "span.block", function(){
	var dataID = $(this).attr("data-id");
	users[dataID].status="blocked";
	//We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	$("#users tbody tr#"+dataID).remove();
	$("#blocked tbody").append('<tr id="'+dataID+'"><td>'+dataID+'</td><td class="name">'+users[dataID].name+'</td><td class="lastname">'+users[dataID].lastname+'</td><td class="email">'+users[dataID].email+'</td><td><span data-id="'+dataID+'" class="unblock glyphicon glyphicon-ok-circle"></span> <span data-id="'+dataID+'" class="delete glyphicon glyphicon-trash"></span> </td></tr>');
	$('*[data-page="Admin"]').before("<div class='alert alert-danger alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>User blocked!</div>");			
});

//DELETE USER
$(document).on("click", "span.delete", function(){;
	var dataID = $(this).attr("data-id");
	$("tr#"+dataID).remove();
	users.splice(dataID,1);
	//We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	$('*[data-page="Admin"]').before("<div class='alert alert-danger alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>User deleted.</div>");
});

//CHANGE ROLE
$(document).on("click", "span.changerole", function(){
	console.log("change role");
	var dataID = $(this).attr("data-id");
	if(users[dataID].role == "admin"){
		users[dataID].role = "user";
		//We save it into localStorage
		var jsonString =  JSON.stringify(users);
		localStorage.setItem("aUsers",jsonString);
		$("#admins tbody tr#"+dataID).remove();
		$("#users tbody").append('<tr id="'+dataID+'"><td>'+dataID+'</td><td class="name">'+users[dataID].name+'</td><td class="lastname">'+users[dataID].lastname+'</td><td class="email">'+users[dataID].email+'</td><td><span data-id="'+dataID+'" class="block glyphicon glyphicon-ban-circle"></span> <span data-id="'+dataID+'" class="changerole glyphicon glyphicon-user"></span></td></tr>');
		users[dataID].role = "user";
	}
	else{
		users[dataID].role = "admin";
		//We save it into localStorage
		var jsonString =  JSON.stringify(users);
		localStorage.setItem("aUsers",jsonString);
		$("#users tbody tr#"+dataID).remove();
		$("#admins tbody").append('<tr id="'+dataID+'"><td>'+dataID+'</td><td class="name">'+users[dataID].name+'</td><td class="lastname">'+users[dataID].lastname+'</td><td class="email">'+users[dataID].email+'</td><td><span data-id="'+dataID+'" class="block glyphicon glyphicon-ban-circle"></span> <span data-id="'+dataID+'" class="changerole glyphicon glyphicon-user"></span></td></tr>');
		users[dataID].role = "admin";
	}
	$('*[data-page="Admin"]').before("<div class='alert alert-info alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>Role Changed.</div>");
});

//UNBLOCK USER
$(document).on("click", "span.unblock", function(){
	var dataID = $(this).attr("data-id");
	users[dataID].status="active";
	//We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	$("#blocked tbody tr#"+dataID).remove();
	$("#users tbody").append('<tr id="'+dataID+'"><td>'+dataID+'</td><td class="name">'+users[dataID].name+'</td><td class="lastname">'+users[dataID].lastname+'</td><td class="email">'+users[dataID].email+'</td><td><span data-id="'+dataID+'" class="block glyphicon glyphicon-ban-circle"></span> <span data-id="'+dataID+'" class="changerole glyphicon glyphicon-user"></span></td></tr>');
	users[dataID].role = "user";	
	$('*[data-page="Admin"]').before("<div class='alert alert-success alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>User unblocked!</div>");
	//Send a message to the user
	sendMessage(users[dataID].email, 'Unblocked!', 'The admin has unblocked you. Now your able to enjoy our social network! Thank you.');	
});

//EDIT PROFILE
$(document).on('click', 'span.editUser', function(){
	$(".nameFile").html('<input type="text" class="form-control" id="inputEditName" placeholder="'+users[indexCurrentUser].name+'">');
	$(".lastNameFile").html('<input type="text" class="form-control" id="inputEditLastName" placeholder="'+users[indexCurrentUser].lastname+'">');
	$(".emailFile").html('<input type="text" class="form-control" id="inputEditEmail" placeholder="'+users[indexCurrentUser].email+'">');
	$(".birthdayFile").html('<input type="text" class="form-control" id="inputEditBirthday" placeholder="'+users[indexCurrentUser].birthday+'">');
	$(".countryFile").html('<input type="text" class="form-control" id="inputEditCountry" placeholder="'+users[indexCurrentUser].country+'">');
	$(".countryFile").after('<button type="button" class="btn btn-default" id="saveUserChanges">Save</button>');
	document.getElementById('saveUserChanges').addEventListener('click', editUser);
});

//SAVE CHANGES (user edit)
function editUser(){
	var newName = document.getElementById('inputEditName').value;
	var newLastName = document.getElementById('inputEditLastName').value;
	var newEmail = document.getElementById('inputEditEmail').value;
	var newBirthday = document.getElementById('inputEditBirthday').value;
	var newCountry = document.getElementById('inputEditCountry').value;
	//We validate the inputs
	newName = capitalize( validateChange(newName, 'name') );
	newLastName = capitalize( validateChange(newLastName, 'lastname') );
	newEmail = validateChange(newEmail, 'email');
	newBirthday = validateChange(newBirthday, 'birthday');
	newCountry = capitalize( validateChange(newCountry, 'country') );
	//We remove inputs
	$('.singleFile input').remove();
	//Output the new information
	$(".nameFile").text(newName);
	$(".lastNameFile").text(newLastName);
	$(".emailFile").text(newEmail);
	$(".birthdayFile").text(newBirthday);
	$(".countryFile").text(newCountry);
	$(".homeName").text(newName+' '+newLastName);
	//Update the users array
	users[indexCurrentUser].name=newName;
	users[indexCurrentUser].lastname=newLastName;
	users[indexCurrentUser].email=newEmail;
	users[indexCurrentUser].birthday=newBirthday;
	users[indexCurrentUser].country=newCountry;
	//(We save it into localStorage
	var jsonString =  JSON.stringify(users);
	localStorage.setItem("aUsers",jsonString);
	//We say to the user that changes had been saved successfully
	$('*[data-page="Profile"]').before("<div class='alert alert-success alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>Changes saved!.</div>");
}

//VALIDATE CHANGE
function validateChange(inputToValidate, originalInput){
	if( inputToValidate == '' ){
		return users[indexCurrentUser][originalInput];
	}
	return inputToValidate;
}

//VALIDATE EXISTING EMAIL
function validateExistingEmail(emailGiven){
	for(var e=0; e < users.length; e++){
		if(emailGiven == users[e].email){
			return true;
		}
	}
	return false;
}

//VALIDATE NAME
function validateName(){
	if (15 > this.value.length && this.value.length > 2 ){
		$(this).css({"border":"1px solid green"});
		return true;
	}
	else{
		$(this).css({"border":"1px solid red"});
		return false;
	}
}

//VALIDATE BIRTHDAY
function validateBirthday(){
	var birth = this.value.slice(6);
	var year = completeDate().slice(6);
	if(birth < year){
		$(this).css({"border":"1px solid green"});
		return true;
	}
	else{
		$(this).css({"border":"1px solid red"});
		return false;
	}
}

//VALIDATE NEW EMAIL
function validateNewEmail(){
	if( realEmail(this.value) ){
		for(var u=0; u < users.length; u++){
			if(this.value == users[u].email){
				$(this).css({"border":"1px solid red"});
				return false;
			}
		}
		$(this).css({"border":"1px solid green"});
		return true;
	}
	else{
		$(this).css({"border":"1px solid red"});
		return false;
	}
}

//REAL EMAIL
function realEmail(email){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//VALIDATE PASSWORD
function validatePassword(){
	if (15 > this.value.length && this.value.length > 5 ){
		$(this).css({"border":"1px solid green"});
		return true;
	}
	else{
		$(this).css({"border":"1px solid red"});
		return false;
	}
}

//VALIDATE REPEAT PASSWORD
function validateRepeatPassword(){
	if ( this.value == passwordRegister.value ){
		$(this).css({"border":"1px solid green"});
		return true;
	}
	else{
		$(this).css({"border":"1px solid red"});
		return false;
	}
}

//SEND MESSAGE
function sendMessage(emailToSend, subjectToSend, contentToSend){
	if(validateExistingEmail(emailToSend)){
		for(var j=0; j<users.length; j++){
			if(users[j].email == emailToSend){
				users[j].messages.push({"msgID":users[j].messages.length, "from": users[indexCurrentUser].name+" "+users[indexCurrentUser].lastname, "emailFrom": users[indexCurrentUser].email, "subject":subjectToSend, "content":contentToSend, "read":"no" });
				//We save it into localStorage
				var jsonString =  JSON.stringify(users);
				localStorage.setItem("aUsers",jsonString);
			}
		}
		//Message sent
		$('*[data-page="Inbox"]').prepend("<div class='alert alert-success alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>Done!</strong> Your message has been successfully sent.</div>");
	}
	else{
		$('*[data-page="Inbox"]').prepend("<div class='alert alert-danger alert-dismissible' role='alert' style='margin-top: 20px;'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button><strong>ERROR</strong> Your message couldn't be sent because there's no user with this e-mail.</div>");
	}
}

//FIND ITEM INDEX IN AN OBJECT ARRAY
function findItemIndex(arrayToLookThrough, key, item) {
	for (var i = 0; i < arrayToLookThrough.length; i++) {
		if (arrayToLookThrough[i][key] == item) {
			return i;
		}
	}
	return null;
}

//CHECK OWN POSTS
function checkOwnPosts(){
	for(var o=0; o<posts.length; o++){
		if(posts[o].postAuthor == (users[indexCurrentUser].name+' '+users[indexCurrentUser].lastname) ){
			ownPosts+=1;
		}
	}
	return ownPosts;
}

//CAPITALIZE
function capitalize(word){
	word = word.charAt(0).toUpperCase() + word.substring(1);
	return word;
}

//COMPLETE DATE
function completeDate(){
	var d = new Date();
	var day = d.getDate();
	var month = d.getMonth()+1;
	month= month.toString();
	if(month.length == 1){
		month='0'+month;
	}
	var year = d.getFullYear();
	var dateNow = day+'/'+month+'/'+year;
	return dateNow;
}

//LOGOUT
function logout(){
	//We will turn all the pages to display:none and just display KEABOOK page
     $(".MyPage").css({"display":"none"});
     var dataPage = $(this).attr("data-link");
     $('*[data-page="'+dataPage+'"]').fadeIn("slow");	
     $(".MyLink").css({"display":"none"});
     $('*[data-link="'+dataPage+'"]').fadeIn("slow");
     $(".link").css({"display":"none"});
     $(".liLogin").fadeIn("slow");
     $(".blockLogOut").css({"display":"none"});
     $(".blockedPage").css({"display":"none"});
     //We'll remove all the posts, messages, users, etc 
     $('.singleMessage').remove();
     $('.singleUser').remove();
     $('.singlePost').remove();
     $('.lastUser').remove();
     $('#homeProfile').remove();
     $("#userFile").remove();
     $(".alert").remove();
     $('#pageBlocked').remove();
     $('#admins tbody tr').remove();
     $('#users tbody tr').remove();
     $('#blocked tbody tr').remove();
     $('.singleFriend').remove();
}