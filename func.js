et display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                document.getElementById("input").innerText = '';
                break;
            case '=':
                try{
                    document.getElementById("input").innerText = eval(display.innerText);
                } catch {
                    document.getElementById("input").innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                    document.getElementById("input").innerText = gdocument.getElementById("input").innerText.slice(0, -1);
                }
                break;
            default:
                document.getElementById("input").innerText  += document.getElementById("input").innerText ;
        }
    });
});
