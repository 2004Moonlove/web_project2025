function toggleDetail(id, btn) {
    const detail = document.getElementById(id);
    const isOpen = detail.style.display === "block";
    detail.style.display = isOpen ? "none" : "block";
    btn.innerText = isOpen ? "View Details" : "Hide Details";
  }
  
  function toggleDetail(card) {
    card.classList.toggle("open");
  }
  