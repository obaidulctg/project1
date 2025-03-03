function customizeScrollbar() {
    var style = document.createElement('style');
    style.innerHTML = `
    /* পুরো স্ক্রল বারের জন্য */
::-webkit-scrollbar {
    width: 8px; /* স্ক্রল বারের প্রস্থ */
}

/* স্ক্রল বারের ট্র্যাক (ব্যাকগ্রাউন্ড) */
::-webkit-scrollbar-track {
    background: #fff; /* ট্র্যাকের রঙ */
}

/* স্ক্রল বারের থাম্ব (মুভিং অংশ) */
::-webkit-scrollbar-thumb {
    background: #333; /* থাম্বের রঙ */
    border-radius: 4px; /* গোলাকার প্রান্ত */
}

/* মাউস হোভার করলে থাম্বের রঙ */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

    `;
    document.head.appendChild(style);
}