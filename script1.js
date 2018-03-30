function onSignIn(googleUser)
{
     var profile=googleUser.getBasicProfile();
     $("#g-signin2").hide;
     $("#data").show;
    
     $("#signoutcontainer").show;
     $("#pic").attr("src", profile.getImageUrl());
     $("#email").text(profile.getEmail());
     console.log('pic' + profile.getImageUrl());
     console.log('email:' + profile.getEmail());
    
    
}

 function signout()() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }