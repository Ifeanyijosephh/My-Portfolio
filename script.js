                const hambuger = document.querySelector(".hamburger");
                const navLinks = document.querySelector(".nav-links");

                hambuger.addEventListener("click", () => {
                    hamburger.classList.toggle("active");
                    navMenu.classList.toggle("active");

                    document.querySelectorALL(".nav-link").forEach(n => n.addEventListener("click", () => {
                        hamburger.classList.remove("active");
                        navMenu.classList.remove("active");
                    }))
                })