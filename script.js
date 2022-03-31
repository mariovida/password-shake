$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    if ($("input[name='password']").val() === "joj") {
      alert("Login successful!");
      $("form")[0].reset();
      window.location = "index.html";
    } else {
      $(this).addClass("shake").delay(500).queue(function(){
        $(this).removeClass("shake");
        //$("input[name='password']").focus().select();
        $(this).dequeue();
      });
    }
  });
});

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
