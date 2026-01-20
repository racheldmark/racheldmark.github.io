document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          form.style.display = "none";
          success.style.display = "block";
          form.reset();
        } else {
          alert("Something went wrong. Please try again later.");
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  });
});
