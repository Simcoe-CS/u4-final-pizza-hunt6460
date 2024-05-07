function calc() {
    let t =
        document.getElementsByName("toppings");
    let s =
        document.getElementsByName("size");
    let p =
        document.getElementsByName("image")
    let rs = " ";
    let rt = " ";


    let total = 0

    if (s[0].checked) {
        total = total + Number(s[0].value);
        rs = "small"
    }
    if (s[1].checked) {
        total = total + Number(s[1].value);
        rs = "medium"
    }
    if (s[2].checked) {
        total = total + Number(s[2].value);
        rs = "large"
    }
    if (t[0].checked) {
        total = total + Number(t[0].value);
        p[1].style.opacity = .8
        rt = rt + " ham "
    }
    else {
        p[1].style.opacity = 0
    }
    if (t[1].checked) {
        total = total + Number(t[1].value);
        p[2].style.opacity = .8
        rt = rt + "pepperoni "
    }
    else {
        p[2].style.opacity = 0
    }
    if (t[2].checked) {
        total = total + Number(t[2].value);
        p[3].style.opacity = .8
        rt = rt + " onions "
    }
    else {
        p[3].style.opacity = 0
    }
    if (t[3].checked) {
        total = total + Number(t[3].value);
        p[4].style.opacity = .8
        rt = rt + " pineapple "
    }
    else {
        p[4].style.opacity = 0
    }
    if (t[4].checked) {
        total = total + Number(t[4].value);
        p[5].style.opacity = .8
        rt = rt + " more chesse "
    }
    else {
        p[5].style.opacity = 0

    }



    let tot = total * .13
    out1.innerHTML = "Your total before taxes is $" + total
    out2.innerHTML = "Your total taxes is $" + tot.toFixed(2)
    out3.innerHTML = "Your total is $" + (Number(total) + Number(tot)).toFixed(2)
    out4.innerHTML = "You ordered a " + rs + " pizza with " + rt

    for (let i =0; i< t.length;i++) {
        t[i].checked =false
}
for (let i =0; i< s.length;i++) {
    s[i].checked =false
}
}


function reset() {
    out1.innerHTML = "";
    out2.innerHTML = "";
    out3.innerHTML = "";
}

