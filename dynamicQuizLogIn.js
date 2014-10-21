$("document").ready(function () {
  $("#login").click(function() {
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    if (username == localStorage.username && password == localStorage.password) {
     var cookieText = encodeURIComponent("username")+"="+encodeURIComponent(username);
     document.cookie = cookieText;
     window.location.href = "file:///home/stabby/Documents/dynamicQuiz/dynamicQuiz.html";
    }
  });
});
