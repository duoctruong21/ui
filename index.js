function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    setTimeout(function () {
      main.removeChild(toast);
    }, duration);

    toast.onclick = function (e) {
      if (e.target.closest("toast__close")) {
        main.removeChild(toast);
      }
    };

    const icons = {
      success: "fa-check",
      error: "fa-exclamation",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 1s, fadeOut ease 0.5s 2s forwards`;
    toast.innerHTML = `
          <div class="toast__icon">
            <i class="fa-solid ${icon}"></i>
          </div>
          <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
          </div>
          <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
          </div>`;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Success",
    message: "you are true",
    type: "success",
    duration: 3000,
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message: "you are false",
    type: "error",
    duration: 3000,
  });
}
