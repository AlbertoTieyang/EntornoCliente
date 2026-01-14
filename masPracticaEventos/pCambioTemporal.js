let p = document.getElementById("primero");

p.addEventListener("mouseover", function() {
    p.style.color = "red";
});

p.addEventListener("mouseleave", function(){
    p.style.color = "black"
})