document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.style.right = navMenu.classList.contains('active') ? '0' : '-100%';
  });
});

const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const namaLengkap = document.getElementById('namaLengkap').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const alamat = document.getElementById('alamat').value;
  const nomorTelepon = document.getElementById('nomorTelepon').value;
  const tempatLahir = document.getElementById('tempatLahir').value;
  const tanggalLahir = document.getElementById('tanggalLahir').value;
  const jenisKelamin = document.getElementById('jenisKelamin').value;
  const semester = document.getElementById('semester').value;

  if (namaLengkap === '' || email === '' || password === '' || confirmPassword === '' || alamat === '' || nomorTelepon === '' || tempatLahir === '' || tanggalLahir === '' || jenisKelamin === '' || semester === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Harap isi semua kolom formulir!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  if (!validateEmail(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Alamat email tidak valid!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  if (!validatePassword(password)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password harus minimal 8 karakter dan mengandung setidaknya satu angka!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Konfirmasi password tidak cocok!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
    return;
  }

  form.submit();
});

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  if (!validateEmail(emailInput.value)) {
    displayError(emailInput, 'Please enter a valid email address.');
    isValid = false;
  } else {
    clearError(emailInput);
  }

  if (!validatePassword(passwordInput.value)) {
    displayError(passwordInput, 'Password must be at least 8 characters long and contain at least one number.');
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    displayError(confirmPasswordInput, 'Passwords do not match.');
    isValid = false;
  } else {
    clearError(confirmPasswordInput);
  }

  if (isValid) {
    form.submit();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Formulir tidak valid!',
      customClass: {
        confirmButton: 'swal2-confirm-button-custom'
      },
    });
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
  return re.test(password);
}

function displayError(inputField, message) {
  const errorSpan = document.createElement('span');
  errorSpan.textContent = message;
  errorSpan.style.color = 'red';
  inputField.parentNode.insertBefore(errorSpan, inputField.nextSibling);
}

function clearError(inputField) {
  const errorSpan = inputField.parentNode.querySelector('span');
  if (errorSpan) {
    errorSpan.remove();
  }
}

$(document).ready(function () {
  function animateContainer(container, animationIn, animationOut) {
    var containerTop = $(container).offset().top;
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (windowTop + windowHeight > containerTop && windowTop < containerTop + $(container).height()) {
      $(container).addClass(animationIn).removeClass(animationOut);
    } else {
      $(container).addClass(animationOut).removeClass(animationIn);
    }
  }

  $(window).scroll(function () {
    animateContainer('.container-isi', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-2', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-3', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-4', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-5', 'fadeInUp', 'fadeOutDown');
    animateContainer('.container-isi-6', 'fadeInUp', 'fadeOutDown');
  });
});