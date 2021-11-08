function storeValue(){
    localStorage.setItem("cardName", cname.value);
    localStorage.setItem("cardNum", cn.value);
    localStorage.setItem("cvvNum", cvv.value);
}

function clearFunction(){
    if (document.getElementById('clear').checked){
        storeValue();
        document.getElementById('cname').value = "";
        document.getElementById('cn').value = "";
        document.getElementById('cvv').value = "";
    }
    else{
        document.getElementById('cname').value = localStorage.getItem("cardName");
        document.getElementById('cn').value = localStorage.getItem("cardNum");
        document.getElementById('cvv').value = localStorage.getItem("cvvNum");
    }
}

function createImg(){
    const img = document.createElement("img");
    img.setAttribute("alt","MasterCard");
    img.setAttribute("width","5%");
    img.setAttribute("id","shows");
    return img;
}
function validateName(){
    if(!nameReg.test(cname.value)){
        cname.value="";
        cname.classList.add("error");
        return false;
    }
    cname.classList.remove("error");
    return true;
}
function validate(){
    if(fl===false){
        alert("Please enter valid Card Number");
        return false;
    }
    if(!validateName()){
        alert("Card Holder name should only contain alphabets");        
        return false;
    }
    if(cvv.value.length!=3){   
        cvv.classList.add("error");      
        alert("Enter a valid CVV");
        return false;
    }
    alert("Payment Successful!!");
    return true;
}
const masterCard = new RegExp("^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$"),
    visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$"),
    amex = new RegExp("^3[47][0-9]{13}$"),
    maestro = new RegExp("^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$"),
    nameReg = new RegExp("^[A-Za-z\s]+$");
const cn = document.querySelector("#cn"),
    cname = document.querySelector("#cname"),
    imgShow = document.querySelector("#img-show"),
    name = document.querySelector("#cname"),
    cvv = document.querySelector("#cvv"),
    input = document.querySelectorAll("input");
var fl=false;

cn.addEventListener("input",function(e){
    fl=false;
    var shows = document.querySelector("#shows");
    var num = e.target.value;
    if(shows!=null){        
        imgShow.removeChild(shows);
    }    
    e.target.classList.remove("error");
    const img = createImg();
    if(masterCard.test(num)){
        img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/1200px-MasterCard_early_1990s_logo.svg.png");
        imgShow.appendChild(img);
        fl=true;      
    }else if(visa.test(num)){
        img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/786px-Old_Visa_Logo.svg.png");
        imgShow.appendChild(img);
        fl=true;  
    }else if(amex.test(num)){
        img.setAttribute("src","https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2018/04/4-you-might-not-notice-amex-new-brand.jpg");
        imgShow.appendChild(img);
        fl=true;
    }else if(maestro.test(num)){
        img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/180px-Maestro_2016.svg.png");
        imgShow.appendChild(img);
        fl=true;
    }
    if(num.length>=16 && fl===false){
        e.target.classList.add("error");
    }
})

cvv.addEventListener("input",function(e){
    if(e.target.value.length>3){
        e.target.classList.add("error");
    }else if(e.target.value.length<=3){
        e.target.classList.remove("error");
    }

})

for(var i=0;i<input.length;i++){
    input[i].addEventListener("focusin",function(e){
        this.classList.add("input-focus");
    })
    input[i].addEventListener("focusout",function(e){
        this.classList.remove("input-focus");
    })
}
