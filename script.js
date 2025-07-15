document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  alert("メッセージありがとうございます, " + name + "さん!");
});
