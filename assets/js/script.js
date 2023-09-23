gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
gsap.from(".right", { duration: 1, delay: 1, x: "-100vw", ease: "power2.in" });
gsap.from(".left", { duration: 1, delay: 1, x: "100vw", ease: "power2.in" });
gsap.from(".footer", { duration: 1, ease: "elastic", y: 100, delay: 2.5 });
