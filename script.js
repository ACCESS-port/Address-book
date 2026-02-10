
const form = document.getElementById("form");
const stored = document.getElementById("stored");


let count = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || number === "") {
    alert("Name and phone number are required");
    return;
  }

  count++; 

  
  stored.innerHTML += `
    <p>
      <strong>${count}.</strong>
      ${name} | ${number} | ${email}
    </p>
  `;

  
  form.reset();
});
