$("document").ready(function () {
  $("#login").click(function() {
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    if (username == localStorage.username && password == localStorage.password) {
     window.location.href = "file:///home/stabby/Documents/dynamicQuiz/dynamicQuiz.html";
    }
  });
});
