/* -----------------------------DISABLE DEFAULT VALIDATION COMMUNICAT-------------------------- */
document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);

/* -----------------------------------------VALIDATION----------------------------------------- */
const bookingForm = document.getElementById('booking-form');
const bookingName = document.getElementById('name');
const bookingEmail = document.getElementById('email');
const bookingPhone = document.getElementById('phone');
const bookingNumber = document.getElementById('number');
const bookingDate = document.getElementById('date');
const bookingTime = document.getElementById('time');
const bookingMessage = document.getElementById('message');
const bookingErrorText = document.getElementById('error-info');
const bookingSendButton = document.getElementById('send');

bookingDate.addEventListener("focus", function() {
  setTimeout(function () {
    bookingDate.type = "date";
    bookingDate.style.cursor = "text";
  }, 100);
});

bookingDate.addEventListener("focusout", function() {
  if(bookingDate.value == "") {
    bookingDate.type = "text";
  }
});

bookingTime.addEventListener("focus", function() {
  setTimeout(function () {
    bookingTime.type = "time";
    bookingTime.style.cursor = "text";
  }, 100);
});

bookingTime.addEventListener("focusout", function() {
  if(bookingTime.value == "") {
    bookingTime.type = "text";
  }
});

bookingMessage.addEventListener("focus", function() {
  bookingMessage.classList.add('notempty');
});

bookingMessage.addEventListener("focusout", function() {
  if(bookingMessage.value == "") {
    bookingMessage.classList.remove('notempty');
  }
});

function validate() {
  let correctValidation = true;

  bookingName.style.borderColor = "#FF850A";
  bookingEmail.style.borderColor = "#FF850A";
  bookingPhone.style.borderColor = "#FF850A";
  bookingNumber.style.borderColor = "#FF850A";
  bookingDate.style.borderColor = "#FF850A";
  bookingTime.style.borderColor = "#FF850A";
  bookingMessage.style.borderColor = "#FF850A";

  if(bookingName.value.length < 3) {
    correctValidation = false;
    bookingName.style.borderColor = "#FF5858";
  }

  let emailValidation = String(bookingEmail.value)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
  if(!emailValidation) {
    correctValidation = false;
    bookingEmail.style.borderColor = "#FF5858";
  }

  let phoneValidation = String(bookingPhone.value)
    .toLowerCase()
    .match(/^\d{9}$/);
  
  if(!phoneValidation) {
    correctValidation = false;
    bookingPhone.style.borderColor = "#FF5858";
  }

  if(bookingNumber.value < 1) {
    correctValidation = false;
    bookingNumber.style.borderColor = "#FF5858";
  }

  if(bookingNumber.value < 1) {
    correctValidation = false;
    bookingNumber.style.borderColor = "#FF5858";
  }

  if(bookingDate.value < new Date().toLocaleDateString('en-ca')) {
    correctValidation = false;
    bookingDate.style.borderColor = "#FF5858";
  }

  if(bookingTime.value == "") {
    correctValidation = false;
    bookingTime.style.borderColor = "#FF5858";
  }

  if(bookingDate.value == new Date().toLocaleDateString('en-ca') && Number(bookingTime.value.slice(0,2)) < Number(new Date().getHours()) + 1) {
    correctValidation = false;
    bookingTime.style.borderColor = "#FF5858";
  }

  if(bookingMessage.value.length < 2) {
    correctValidation = false;
    bookingMessage.style.borderColor = "#FF5858";
  }

  if(correctValidation) {
    bookingErrorText.style.display = "none";
    sendBookingForm();
  } else {
    bookingErrorText.style.display = "block";
  }
}

function sendBookingForm() {
  bookingForm.submit();
  alert("Your booking has been confirmed");
}

bookingSendButton.addEventListener("click", function() {
  validate();
});