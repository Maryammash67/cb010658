let btnSubmit=document.getElementById("submit");

let fAdults = document.getElementById("a1");

btnSubmit.addEventListener("click",submit);

function submit(event){

   
    event.preventDefault();

    let optActivities =document.getElementById("activities");
    let activities =optActivities.options[optActivities.selectedIndex].value;
    console.log("Activities:"+activities);

    console.log("No. Of Tickets Foreigner(Adult):",document.getElementById("a1").value);
    /console.log("No. Of Tickets Foreigner(Child):",document.getElementById("a2").value);/

    let timef=document.querySelector("input[name='timef']:checked");
    console.log("Duration:"+timef);

    console.log("Extras Annual Pass:",document.getElementById("extra2").value);
    console.log("Extras Food Token:",document.getElementById("xx1").value); 
}

let btnSubmit1=document.getElementById("submit1");
btnSubmit.addEventListener("click",submit1);

function submit1(){

    //Local
    let optActivities1 =document.getElementById("activities1");
    let activities1 =optActivities1.options[optActivities1.selectedIndex].value;
    console.log("Activities:"+activities1);

    console.log("No. Of Tickets Local (Adult)",document.getElementById("no4").value);
    console.log("No. Of Tickets Local(Child Below 16):",document.getElementById("no5").value);
    console.log("No. Of Tickets Local(Child Below 6):",document.getElementById("no6").value);

    let duration=document.getElementById("duration").value;
    let time;
    if (duration == "Three Hours") {
        time = document.getElementById("time1").value 
    }
    else if (duration == "Half Day") {
        time = document.getElementById("time2").value
    }
    else if (duration == "Full Day") {
        time = document.getElementById("time3").value
    }
    else if (duration == "Two Days") {
        time = document.getElementById("time4").value
    }
    console.log("Duration:"+ time);

    console.log("Extras Annual Pass:",document.getElementById("extra1").value);
    console.log("Extras Food Token:",document.getElementById("xx").value);

    let totaltickets = parseInt(document.getElementById("a1").value) + parseInt(document.getElementById("a2").value) + parseInt(document.getElementById("no4").value) + parseInt(document.getElementById("no5").value) + parseInt(document.getElementById("no6").value) + parseInt(document.getElementById("extra2").value) + parseInt(document.getElementById("xx1").value) + parseInt(document.getElementById("extra1").value) + parseInt(document.getElementById("xx").value);
    console.log(totaltickets);
    
    //foreign
    document.getElementById("price2").innerText = totaltickets;

    let totalPrice = parseInt(document.getElementById("a1").value * 3000) + parseInt(document.getElementById("a2").value * 2500) + parseInt(document.getElementById("no4").value * 2500) + parseInt(document.getElementById("no5").value * 1000) + parseInt(document.getElementById("no6").value * 500) + parseInt(document.getElementById("extra2").value * 5000) + parseInt(document.getElementById("xx1").value * 500) + parseInt(document.getElementById("extra1").value * 5000) + parseInt(document.getElementById("xx").value * 500);
    console.log(totalPrice);

    document.getElementById("price4").innerText = totalPrice;

}
    function myFunction() {

    let duration=document.getElementById("duration").value;
    let time;
    if (duration == "Three Hours") {
        time = document.getElementById("time1").value 
    }
    else if (duration == "Half Day") {
        time = document.getElementById("time2").value
    }
    else if (duration == "Full Day") {
        time = document.getElementById("time3").value
    }
    else if (duration == "Two Days") {
        time = document.getElementById("time4").value
    }

        document.getElementById("price1").innerText = "";
        document.getElementById("price3").innerText = "";
    }

    function myFunction1() {

        let activity1 = document.getElementById("activities1").value
        let activity2 = document.getElementById("activities").value
        if (activity1 == "" && activity2 == "")


        {
            alert("Incomplete Order!!");
        }
        if (activity1 == "HIKING" || activity2 == "HIKING")
        {
            alert("your reservation is sucess");
        }
        else if (activity1 == "SCUBA DIVING" || activity2 == "SCUBA DIVING")
        {
            alert("your reservation is sucess");
        }
        else if (activity1 == "SURFING" || activity2 == "SURFING")
        {
            alert("your reservation is sucess");
        }
        else if (activity1 == "HOT BALLON RIDE" || activity2 == "HOT BALLON RIDE")
        {
            alert("your reservation is sucess");
        }
        else if (activity1 == "DEVIL STAIR TREKKING TOUR" || activity2 == "DEVIL STAIR TREKKING TOUR")
        {
            alert("your reservation is sucess");
        }

    }

    let tickets = [];
    function addCurrent(){
        console.log("ebvuufb")

        let currentTickets = parseInt(document.getElementById("a1").value) + parseInt(document.getElementById("a2").value) + parseInt(document.getElementById("extra2").value) + parseInt(document.getElementById("xx1").value);
        console.log(currentTickets) + parseInt(document.getElementById("extra1").value) + parseInt(document.getElementById("xx").value);

        //foreign
        document.getElementById("price1").innerText = currentTickets;

        let currentPrice = parseInt(document.getElementById("a1").value * 3000) + parseInt(document.getElementById("a2").value * 2500) + parseInt(document.getElementById("extra2").value * 5000) + parseInt(document.getElementById("xx1").value * 500) + parseInt(document.getElementById("extra1").value * 5000) + parseInt(document.getElementById("xx").value * 500);
        console.log(currentPrice);

        document.getElementById("price3").innerText = currentPrice;
       
        
    }

let btnSubmit2=document.getElementById("submit2");
btnSubmit2.addEventListener("click",submit2);

function submit2(){
    
    console.log("Cardholder Name:",document.getElementById("cname").value);
    console.log("Card Number:",document.getElementById("ccnum").value);
    console.log("Valid Through:",document.getElementById("expyear").value);
    console.log("CVV / CVC:",document.getElementById("cvv").value);
}

function myFunction2() {

    let crdnumber = document.getElementById("ccnum").value
    if (crdnumber == "")
    {
        alert("Incomplete Order!!");
    }
    else{
        alert("Placed Order Successfully!!")
    }

  };