// smooth header active link + mobile menu + reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  // year
    document.getElementById("year").textContent = new Date().getFullYear();

      const links = document.querySelectorAll(".nav-link");
        const sections = Array.from(links).map(l => document.querySelector(l.getAttribute("href")));
          const navLinks = document.getElementById("navLinks");
            const menuToggle = document.getElementById("menuToggle");

              // mobile menu toggle
                menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));

                  // update active nav as you scroll
                    function onScroll(){
                        const y = window.scrollY + 120; // offset for fixed header
                            let current = sections[0];
                                for (const s of sections) if (s && s.offsetTop <= y) current = s;
                                    links.forEach(l => l.classList.toggle("active", document.querySelector(l.getAttribute("href")) === current));
                                      }
                                        window.addEventListener("scroll", onScroll);
                                          onScroll();

                                            // reveal fade-in elements
                                              const fadeEls = document.querySelectorAll(".fade-in, .section");
                                                const obs = new IntersectionObserver(entries => {
                                                    entries.forEach(e => {
                                                          if (e.isIntersecting) e.target.classList.add("visible");
                                                              });
                                                                }, { threshold: 0.12 });
                                                                  fadeEls.forEach(el => obs.observe(el));

                                                                    // smooth anchor scroll (works with CSS scroll-behavior too)
                                                                      links.forEach(l => l.addEventListener("click", e => {
                                                                          if (navLinks.classList.contains("open")) navLinks.classList.remove("open");
                                                                            }));
                                                                            });