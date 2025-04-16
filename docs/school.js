window.addEventListener("load", setup);

async function setup() {
    create_DOM_inference();
    add_event_listener();
}


function create_DOM_inference() {
        //for the cards reference
        HL_card_refer = document.getElementById("HL_card");
        SCU_card_refer = document.getElementById("SCU_card");
        upitt_card_refer = document.getElementById("upitt_card");
        //for cards
        cards = document.getElementById("cards");
        HL_D = document.getElementById("HL_D");
        SCU_D = document.getElementById("SCU_D");
        upitt_D = document.getElementById("upitt_D");
}


function add_event_listener() {
    // for the cards eventlistener
    HL_card_refer.addEventListener("click", update_HL_card);
    SCU_card_refer.addEventListener("click", update_SCU_card);
    upitt_card_refer.addEventListener("click", update_UPITT_card);

}

// for the cards
function update_HL_card() {
    HL_D.style.display = "block";
    cards.style.display = "none";
}
function update_SCU_card() {
    SCU_D.style.display = "block";
    cards.style.display = "none";
}
function update_UPITT_card() {
    upitt_D.style.display = "block";
    cards.style.display = "none";
}

function backToCards() {
    cards.style.display = "grid";
    HL_D.style.display = "none";
    SCU_D.style.display = "none";
    upitt_D.style.display = "none";
}

