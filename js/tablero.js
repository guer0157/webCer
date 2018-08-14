let app={
    init: function(){
        
    let btns=document.querySelectorAll(".switch");
    btns.forEach(swt=>{
        swt.addEventListener("click", app.getId);
    })
    },
    getId: function(ev){
    let ids=ev.currentTarget.getAttribute("id");
        switch(ids){
            case "op1":
            (document.getElementById("op1").classList.add("clicked"))&&(document.getElementById("op2").classList.toggle("clicked"));
                app.showText1()
                break;
            case "op2":
        document.getElementById("op2").style.backgroundColor="white"
//                &&(document.getElementById("op1").style.backgroundColor="transparent")
                app.showText2();
                break;
        }
},
    showText1: function(){
        console.log("This is text 1")
    },
    showText2: function(){
        console.log("this is text 2")
    }
}
document.addEventListener("DOMContentLoaded", app.init);
