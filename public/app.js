document.getElementById("host").textContent = window.location.host;

const status = document.getElementById("status");

fetch("/api/health")
  .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
  .then((data) => {
    status.textContent = `Servern svarar (version ${data.version}).`;
    status.className = "ok";
  })
  .catch(() => {
    status.textContent = "Kunde inte nå servern.";
    status.className = "error";
  });
