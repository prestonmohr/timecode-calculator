const title = document.createElement('div');
title.style.position = 'fixed';
title.style.top = '5px';
title.style.left = '36px';
title.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
title.style.padding = '5px 10px';
title.style.borderRadius = '20px';
title.style.fontSize = '12px';
title.style.fontFamily = 'Arial, Helvetica, sans-serif';
title.style.color = 'rgba(255, 255, 255, 0.75)';
title.style.zIndex = '999999';
title.textContent = `timecode-calculator`;
document.body.appendChild(title);

const backArrow = document.createElement('div');
backArrow.style.position = 'fixed';
backArrow.style.top = '5px';
backArrow.style.left = '5px';
backArrow.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
backArrow.style.padding = '5px 10px';
backArrow.style.borderRadius = '20px';
backArrow.style.fontSize = '12px';
backArrow.style.fontFamily = 'Arial, Helvetica, sans-serif';
backArrow.style.color = 'rgba(255, 255, 255, 0.75)';
backArrow.style.zIndex = '999999';
var linkGit = document.createElement("a");
linkGit.href = "https://github.com/prestonmohr/timecode-calculator";
linkGit.textContent = "<";
linkGit.target="_blank"
linkGit.style.fontSize = '12px';
linkGit.style.fontFamily = 'Arial, Helvetica, sans-serif';
linkGit.style.color = 'rgba(255, 255, 255, 0.75)';
linkGit.style.textDecoration = 'none';
backArrow.appendChild(linkGit);
document.body.appendChild(backArrow);

const displayPalette = document.createElement('div');
displayPalette.style.position = 'fixed';
displayPalette.style.bottom = '5px';
displayPalette.style.left = '5px';
displayPalette.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayPalette.style.padding = '5px 10px';
displayPalette.style.borderRadius = '20px';
displayPalette.style.fontSize = '12px';
displayPalette.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayPalette.style.color = 'rgba(255, 255, 255, 0.75)';
displayPalette.style.zIndex = '999999';
var linkSMPTE = document.createElement("a");
linkSMPTE.href = "https://www.smpte.org";
linkSMPTE.textContent = "SMPTE";
linkSMPTE.target="_blank"
linkSMPTE.style.fontSize = '12px';
linkSMPTE.style.fontFamily = 'Arial, Helvetica, sans-serif';
linkSMPTE.style.color = 'rgba(255, 255, 255, 0.75)';
linkSMPTE.style.textDecoration = 'none';
displayPalette.appendChild(linkSMPTE);
document.body.appendChild(displayPalette);

const displayCredit = document.createElement('div');
displayCredit.style.position = 'fixed';
displayCredit.style.bottom = '5px';
displayCredit.style.right = '5px';
displayCredit.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayCredit.style.padding = '5px 10px';
displayCredit.style.borderRadius = '20px';
displayCredit.style.fontSize = '12px';
displayCredit.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayCredit.style.color = 'rgba(255, 255, 255, 0.75)';
displayCredit.style.zIndex = '999999';
var link = document.createElement("a");
link.href = "https://www.prestonmohr.com";
link.textContent = "preston mohr";
link.target="_blank"
link.style.fontSize = '12px';
link.style.fontFamily = 'Arial, Helvetica, sans-serif';
link.style.color = 'rgba(255, 255, 255, 0.75)';
link.style.textDecoration = 'none';
displayCredit.appendChild(link);
document.body.appendChild(displayCredit);

const displayYear = document.createElement('div');
displayYear.style.position = 'fixed';
displayYear.style.bottom = '33px';
displayYear.style.right = '5px';
displayYear.style.backgroundColor = 'rgba(35, 35, 35, 0.75)';
displayYear.style.padding = '5px 10px';
displayYear.style.borderRadius = '20px';
displayYear.style.fontSize = '12px';
displayYear.style.fontFamily = 'Arial, Helvetica, sans-serif';
displayYear.style.color = 'rgba(255, 255, 255, 0.75)';
displayYear.style.zIndex = '999999';
displayYear.textContent = '2023';
document.body.appendChild(displayYear);


//timecode addition/subtraction
const fps = document.getElementById("fps");
const hour1 = document.getElementById("hour1");
const min1 = document.getElementById("min1");
const sec1 = document.getElementById("sec1");
const frame1 = document.getElementById("frame1");
const operator = document.getElementById("operator");
const hour2 = document.getElementById("hour2");
const min2 = document.getElementById("min2");
const sec2 = document.getElementById("sec2");
const frame2 = document.getElementById("frame2");
const resultTC = document.getElementById("resultTC");
const resultImages = document.getElementById("resultImages")
const resultSeconds = document.getElementById("resultSeconds")
const resultKhz = document.getElementById("resultKhz")

const formatter = new Intl.NumberFormat("en-US", {
minimumIntegerDigits: 2,
useGrouping: false
});

hour1.value = formatter.format(0);
min1.value = formatter.format(0);
sec1.value = formatter.format(0);
frame1.value = formatter.format(0);
hour2.value = formatter.format(0);
min2.value = formatter.format(0);
sec2.value = formatter.format(0);
frame2.value = formatter.format(0);

const calculate = () => {
    if (isNaN(hour1.value)) {hour1.value = "00"}
    if (isNaN(min1.value)) {min1.value = "00"}
    if (isNaN(sec1.value)) {sec1.value = "00"}
    if (isNaN(frame1.value)) {frame1.value = "00"}
    if (isNaN(hour2.value)) {hour2.value = "00"}
    if (isNaN(min2.value)) {min2.value = "00"}
    if (isNaN(sec2.value)) {sec2.value = "00"}
    if (isNaN(frame2.value)) {frame2.value = "00"}
    
    let hour1Val = parseInt(hour1.value);
    let min1Val = parseInt(min1.value);
    let sec1Val = parseInt(sec1.value);
    let frame1Val = parseInt(frame1.value);
    
    let hour2Val = parseInt(hour2.value);
    let min2Val = parseInt(min2.value);
    let sec2Val = parseInt(sec2.value);
    let frame2Val = parseInt(frame2.value);
    
    let fpsVal = parseFloat(fps.value);
    let fpsValCalc = parseFloat(fps.value);
    
    /*
     if (parseFloat(fps.value) == 23.976){
     let fpsVal = 24;
     let fpsValCalc = parseFloat(fps.value);
     }
     */
    if (parseFloat(fps.value) == 29.97){
        let fpsVal = 30;
        let fpsValCalc = parseFloat(fps.value);
    }
    if (parseFloat(fps.value) == 59.94){
        let fpsVal = 60;
        let fpsValCalc = parseFloat(fps.value);
    }
    
    let images1 = hour1Val * fpsVal * 3600 + min1Val * fpsVal * 60 + sec1Val * fpsVal + frame1Val;
    let images2 = hour2Val * fpsVal * 3600 + min2Val * fpsVal * 60 + sec2Val * fpsVal + frame2Val;
    
    let images1Calc = hour1Val * fpsValCalc * 3600 + min1Val * fpsValCalc * 60 + sec1Val * fpsValCalc + frame1Val;
    let images2Calc = hour2Val * fpsValCalc * 3600 + min2Val * fpsValCalc * 60 + sec2Val * fpsValCalc + frame2Val;
    
    let images = operator.value === "+" ? images1Calc + images2Calc : images1Calc - images2Calc;
    let frames = operator.value === "+" ? images1 + images2 : images1 - images2;
    
    let hour = Math.floor(frames / (fpsVal * 3600));
    frames -= hour * fpsVal * 3600;
    
    let min = Math.floor(frames / (fpsVal * 60));
    frames -= min * fpsVal * 60;
    
    let sec = Math.floor(frames / fpsVal);
    frames -= sec * fpsVal;
    
    //timecode result
    hour = formatter.format(hour);
    min = formatter.format(min);
    sec = formatter.format(sec);
    frames = formatter.format(Math.floor(frames));
    
    if (hour == "NaN") { hour = "00"};
    if (min == "NaN") { min = "00"};
    if (sec == "NaN") { sec = "00"};
    if (frames == "NaN") { frames = "00"};
    
    resultTC.textContent = `${hour}:${min}:${sec}:${frames} @ ${fpsVal}fps`
    resultImages.textContent = `${Math.ceil(images)} frames`;
    resultSeconds.textContent = `${(images / fpsValCalc).toFixed(3)} seconds`;
    resultKhz.textContent = `${Math.floor(images * 48000 / fpsValCalc)} samples @ 48Khz`;
};

fps.addEventListener("change", calculate);

hour1.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 99));
    calculate();
});

min1.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 59));
    calculate();
});

sec1.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 59));
    calculate();
});

frame1.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), Math.ceil(fps.value) - 1));
    calculate();
});

operator.addEventListener("change", calculate);

hour2.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 99));
    calculate();
});

min2.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 59));
    calculate();
});

sec2.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 59));
    calculate();
});

frame2.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), Math.ceil(fps.value) - 1));
    calculate();
});

/*
 ***********************************************
 ***********************************************
 ***********************************************
 */

//timecode & frames addition/subtraction
const fps2 = document.getElementById("fps2");
const operator2 = document.getElementById("operator2");
const hour3 = document.getElementById("hour3");
const min3 = document.getElementById("min3");
const sec3 = document.getElementById("sec3");
const frame3 = document.getElementById("frame3");
const frame4 = document.getElementById("frame4");
const resultTC2 = document.getElementById("resultTC2");
const resultImages2 = document.getElementById("resultImages2")
const resultSeconds2 = document.getElementById("resultSeconds2")
const resultKhz2 = document.getElementById("resultKhz2")

hour3.value = formatter.format(0);
min3.value = formatter.format(0);
sec3.value = formatter.format(0);
frame3.value = formatter.format(0);
frame4.value = formatter.format(0);

const calculate2 = () => {
    if (isNaN(hour3.value)) {hour3.value = "00"}
    if (isNaN(min3.value)) {min3.value = "00"}
    if (isNaN(sec3.value)) {sec3.value = "00"}
    if (isNaN(frame3.value)) {frame3.value = "00"}
    if (isNaN(frame4.value)) {frame4.value = "00"}
    
    let hour3Val = parseInt(hour3.value);
    let min3Val = parseInt(min3.value);
    let sec3Val = parseInt(sec3.value);
    let frame3Val = parseInt(frame3.value);
    let frame4Val = parseInt(frame4.value);
    
    let fps2Val = parseFloat(fps2.value);
    let fps2ValCalc = parseFloat(fps2.value);
    
    /*
     if (parseFloat(fps.value) == 23.976){
     let fpsVal = 24;
     let fpsValCalc = parseFloat(fps.value);
     }
     */
    if (parseFloat(fps2.value) == 29.97){
        let fps2Val = 30;
        let fps2ValCalc = parseFloat(fps2.value);
    }
    if (parseFloat(fps2.value) == 59.94){
        let fps2Val = 60;
        let fps2ValCalc = parseFloat(fps2.value);
    }
    
    let images3 = hour3Val * fps2Val * 3600 + min3Val * fps2Val * 60 + sec3Val * fps2Val + frame3Val;
    let images4 = frame4Val;
    
    let images3Calc = hour3Val * fps2ValCalc * 3600 + min3Val * fps2ValCalc * 60 + sec3Val * fps2ValCalc + frame3Val;
    let images4Calc = frame4Val;
    
    let images2 = operator2.value === "+" ? images3Calc + images4Calc : images3Calc - images4Calc;
    let frames2 = operator2.value === "+" ? images3 + images4 : images3 - images4;
    
    let hour2 = Math.floor(frames2 / (fps2Val * 3600));
    frames2 -= hour2 * fps2Val * 3600;
    
    let min2 = Math.floor(frames2 / (fps2Val * 60));
    frames2 -= min2 * fps2Val * 60;
    
    let sec2 = Math.floor(frames2 / fps2Val);
    frames2 -= sec2 * fps2Val;
    
    //timecode result
    hour2 = formatter.format(hour2);
    min2 = formatter.format(min2);
    sec2 = formatter.format(sec2);
    frames2 = formatter.format(Math.floor(frames2));
    
    if (hour2 == "NaN") { hour2 = "00"};
    if (min2 == "NaN") { min2 = "00"};
    if (sec2 == "NaN") { sec2 = "00"};
    if (frames2 == "NaN") { frames2 = "00"};
    
    resultTC2.textContent = `${hour2}:${min2}:${sec2}:${frames2} @ ${fps2Val}fps`
    resultImages2.textContent = `${Math.ceil(images2)} frames`;
    resultSeconds2.textContent = `${(images2 / fps2ValCalc).toFixed(3)} seconds`;
    resultKhz2.textContent = `${Math.floor(images2 * 48000 / fps2ValCalc)} samples @ 48Khz`;
};

fps2.addEventListener("change", calculate2);

hour3.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 99));
    calculate2();
});

min3.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 59));
    calculate2();
});

sec3.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 59));
    calculate2();
});

frame3.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), Math.ceil(fps2.value) - 1));
    calculate2();
});

operator2.addEventListener("change", calculate2);

frame4.addEventListener("input", function() {
    this.value = formatter.format(Math.min(parseInt(this.value), 999999999));
    calculate2();
});
