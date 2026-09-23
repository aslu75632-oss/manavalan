async function verifyCertificate() {
  const input = document.getElementById("certificateId");
  const result = document.getElementById("result");

  const id = input.value.trim().toUpperCase();

  if (id === "") {
    result.innerHTML = "Please enter an ID.";
    return;
  }

  try {
    const response = await fetch("certificates.json");

    if (!response.ok) {
      throw new Error("Could not load certificates.json");
    }

    const certificates = await response.json();

    if (certificates[id]) {
      const certificate = certificates[id];

      result.innerHTML = `
        <div id="certificateFullscreen">

          <button id="closeCertificate" onclick="closeCertificate()">
            ×
          </button>

          <img 
  src="/images/IMG-20260922-WA0001.jpg" 
  alt="Certificate" 
  id="fullCertificateImage" 
>

        </div>
      `;

    } else {
      result.innerHTML = "No certificate found for this ID.";
    }

  } catch (error) {
    console.error(error);
    result.innerHTML = "Error loading certificate data.";
  }
}


function closeCertificate() {
  const certificate = document.getElementById("certificateFullscreen");

  if (certificate) {
    certificate.remove();
  }
}
