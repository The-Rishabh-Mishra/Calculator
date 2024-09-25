let ans= document.querySelector("#display_text")
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function sinf(){
    let angleInRadians = degreesToRadians(ans.value);
    ans.value=Math.sin(angleInRadians);
}
function cosf(){
    let angleInRadians = degreesToRadians(ans.value);
    ans.value=Math.cos(angleInRadians)< 1e-10 ? 0 : angleInRadians;;
}
function tanf(){
    let angleInDegrees = ans.value;
    let angleInRadians = degreesToRadians(ans.value);
    if ((angleInDegrees % 180) === 90 || (angleInDegrees % 180) === -90) {
        ans.value = "Infinity";
    } else {
        ans.value = Math.tan(angleInRadians);
    }
}
function sqrtf(){
    let angleInRadians = degreesToRadians(ans.value);
    ans.value=Math.sqrt(angleInRadians);
}



