async function check() {
    const input = document.getElementById("id");
    const result = document.getElementById("result");

    const value = input.value.trim().toUpperCase();

    if (value === "") {
        result.innerHTML = "";
        return;
    }

    try {
        const response = await fetch("certificates.json");

        if (!response.ok) {
            throw new Error("Data unavailable");
        }

        const data = await response.json();

        if (data[value]) {

            result.innerHTML = `
                <div id="display">

                    <button id="close" onclick="closeDisplay()">
                        ×
                    </button>

                    <img
                        src="/images/IMG-20260922-WA0001.jpg"
                        alt=""
                        id="image"
                    >

                </div>
            `;

        } else {
            result.innerHTML = "";
        }

    } catch (error) {
        console.error(error);
        result.innerHTML = "";
    }
}


function closeDisplay() {
    const display = document.getElementById("display");

    if (display) {
        display.remove();
    }
}
