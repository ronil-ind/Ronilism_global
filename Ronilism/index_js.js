// function cont_logistics() {
//     var head_txt = "Shipping, Aviation & Logistics";
//     var content_txt = "At AP Moller Maersk, a global shipping giant, supported the function managing global mobility of containers through analytics and process ownership. </br> Experience of being a consultant for Emirates to assist in optimisation of cargo operations at key airports using data engineering.";
//     var address_head = document.querySelector("#domain_text > h4").innerHTML;
//     var address_p = document.querySelector("#domain_text > p").innerHTML;
//     address_head=head_txt;
//     address_p=content_txt;
// }

// Dynamic banner

// traits = ["Stage Actor & Play-writer", ,"Analytics Engineer", "Web Developer", "People Leader"]


const delay = ms => new Promise(res => setTimeout(res, ms));
traits = ["ABC","DEx"];
viz=[];
let message="";

async function hold(n) {    
        return delay(n);
}

async function runAnimation() {
    for(i=0; i<traits.length;i++) 
    {
        //await delay(500);
        hold(10000);

        for(j=0;j<traits[i].length;j++){
            message += traits[i].slice(j,j+1);
        //    $("#container_main_content > p").text(message);
        //    console.log(message);
        //await delay(500);
            hold(10000);
        }
        message="";   
    }
}

runAnimation();

//alert("Hello");