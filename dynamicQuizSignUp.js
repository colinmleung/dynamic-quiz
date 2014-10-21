$("document").ready(function () {
  $("button#signup").click(function () {
    localStorage.username = $("input[name='username']").val();
    localStorage.password = $("input[name='password']").val();
    window.location.href = "file:///home/stabby/Documents/dynamicQuiz/dynamicQuiz.html";
  });
});
