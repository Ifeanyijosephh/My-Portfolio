                const hambuger = document.querySelector(".hamburger");
                const navLinks = document.querySelector(".nav-links");

                hambuger.addEventListener("click", () => {
                    hambuger.classList.toggle("active");
                    navMenu.classList.toggle("active");

                    document.querySelectorALL(".nav-link").forEach(n => n.addEventListener("click", () => {
                        hambuger.classList.remove("active");
                        navMenu.classList.remove("active");
                    }))
                });