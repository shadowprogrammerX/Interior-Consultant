const toggled = ()=>{
    const toggle = document.getElementById('toggle');
    const lists = document.getElementById('btn');
    const close = document.getElementById('close');
    if (toggle && lists && close) {
        lists.addEventListener("click", ()=>{
            toggle.classList.toggle("active");
        });

        close.addEventListener("click", ()=>{
            toggle.classList.remove("active");
        });
    }
};

toggled();