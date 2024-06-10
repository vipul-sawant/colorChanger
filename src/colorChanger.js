const colorChanger = (btns, app) => {

    btns.forEach((btn)=>{

        btn.addEventListener('click', (e)=>{

            // const body = document.body;
            // body.style.backgroundColor = e.target.textContent;
            app.style.backgroundColor = e.target.textContent;
            // e.target.style.border = "1.5px solid black";
            e.target.classList.add('btnBorder');

            btns.forEach((button)=>{
                if (button !== btn) {
                    button.classList.remove('btnBorder');
                }
            });

        });

    });

};

export { colorChanger };