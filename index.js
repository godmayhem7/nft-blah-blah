document.querySelector(".img1").addEventListener("mouseover",()=>{
    document.querySelector(".appear").classList.remove("lik")
})
setTimeout(()=>{
    document.querySelector(".img1").addEventListener("mouseleave",()=>{
    document.querySelector(".appear").classList.add("lik")
})},300)