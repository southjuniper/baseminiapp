const connectBtn = document.getElementById("connectBtn");
const addressBox = document.getElementById("addressBox");

async function connectWallet() {
  try {
    if (!window.ethereum) {
      alert("Mini App provider not found. Open inside Base Apps.");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const address = accounts[0];

    addressBox.innerHTML = `<b>Connected Address:</b><br>${address}`;
    addressBox.classList.remove("hidden");
  } catch (err) {
    console.error(err);
    alert("Connection error");
  }
}

connectBtn.addEventListener("click", connectWallet);
