const loginRemember = document.querySelector(".login-remember");
const checkBox = document.getElementById("rememberme");
const label = document.getElementsByTagName("label");

// checkBox.onclick = function () {
//   if (this.checked) {
//     // text.style.display = "block";
//     // console.log("checkBox");
//     // checkBox.firstChild
//     // const isModal = checkBox.closest();
//     // console.log(checkBox.firstChild);
//     // console.log(checkBox.parentElement);
//     loginRemember.next().addClass("active");
//     const label = checkBox.parentElement;
//     console.log(label);
//     // $(this).closest("label").addClass("label_active");
//     // .addClass("active");
//     // label.toggle("active");
//   }
// };

$(function () {
  $("#rememberme").on("click", function () {
    if ($(this).is(":checked")) {
      $(this).addClass("qqqq");
    } else {
      $(this).removeClass("qqqq");
    }
  });
});
