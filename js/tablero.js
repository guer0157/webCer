let app={
    init: function(){
    let ulContent=document.getElementById
    let btns=document.querySelectorAll(".switch");
    btns.forEach(swt=>{
        swt.addEventListener("click", app.getId);
    })
    },
    getId: function(ev){
    let ids=ev.currentTarget.getAttribute("id");
        console.log(ids);
        switch(ids){
            case "op1":
            (document.getElementById("op1").className="clicked")&&(document.getElementById("op2").className="switch");
                console.log("Op1: Worked");
                app.showText1()
                break;
            case "op2":
         (document.getElementById("op2").className="clicked")&&(document.getElementById("op1").className="switch");
                console.log("Op2: Worked");
                app.showText2();
                break;
        }
},
    showText1: function(){
        let ulTranslate=document.querySelector(".translate");
        ulTranslate.removeAttribute("id");
        ulTranslate.setAttribute("id","normalPos")
        let ulTranslate2=document.querySelector(".translate2");
        ulTranslate2.setAttribute("id","backtoNormal")
    },
    showText2: function(){
        let ulTranslate=document.querySelector(".translate");
        ulTranslate.setAttribute("id","serv");
        let ulTranslate2=document.querySelector(".translate2");

        ulTranslate2.setAttribute("id","normalPos");
    }
}
document.addEventListener("DOMContentLoaded", app.init);
