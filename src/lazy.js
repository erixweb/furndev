window.addEventListener("load", () => {
    const elements = document.querySelectorAll("img")
    
    
    const Lazy = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.nodeName.toLocaleLowerCase() === "img") {
                    const img = entry.target
                    console.log(img)
                    img.setAttribute("src", img.getAttribute("data-src"))
                    img.classList.add("fade")
                    observer.disconnect()
                }
            })
        })
        io.observe(target)
    }
    document.querySelector(".furniture-wrap").addEventListener("change", () => {
        console.log("z")
    })
    elements.forEach(Lazy)
})