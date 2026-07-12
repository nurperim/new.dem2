const form = document.querySelector("form");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    alert("✅ Ваше обращение отправлено. Спасибо, что доверяете New.Dem. Мы свяжемся с вами при необходимости.");


    form.reset();

});
