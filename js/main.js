function myFunction() {
  // Объявить переменные
  let input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByClassName("card");

  // Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h4")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}