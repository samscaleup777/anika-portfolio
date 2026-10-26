"use client";

import { useEffect, useRef } from "react";

const portfolioMarkup = "<div class=\"portfolio-root\"><header class=\"site-header\"><a class=\"brand\" href=\"#top\" aria-label=\"Anika home\"><span class=\"brand-mark\">a.</span><span><b>Anika</b><small>FRONTEND DEVELOPER</small></span></a><button class=\"menu-toggle\" aria-expanded=\"false\" aria-label=\"Toggle menu\">Menu ☰</button><nav class=\"main-nav\" aria-label=\"Main navigation\"><a href=\"#top\">Home</a><a href=\"#about\">About</a><a href=\"#stack\">Skills</a><a href=\"#work\">Projects</a><a href=\"#education\">Education</a><a href=\"#resume\">Resume</a><a class=\"nav-cta\" href=\"#lets-talk\">Let’s Talk <span aria-hidden=\"true\">↗</span></a></nav></header><main id=\"top\"><section class=\"hero-section\"><div class=\"container hero-grid\"><div class=\"hero-copy\"><p class=\"kicker\"><span class=\"line\"></span> FRONTEND DEVELOPER <span class=\"lime\">✳</span> REACT &amp; NEXT.JS</p><h1>Thoughtful<br/>interfaces.<br/><span>Modern web</span><br/>experiences.</h1><p class=\"hero-text\">Hi, I’m Anika — I build responsive, accessible and carefully considered web experiences with JavaScript, React, Next.js and Tailwind CSS.</p><div class=\"actions\"><a class=\"button primary\" href=\"#work\">Explore my work <span aria-hidden=\"true\">↗</span></a><a class=\"button secondary\" href=\"#lets-talk\">Let’s Talk <span>↘</span></a></div><div class=\"stack-strip\"><small>MY EVERYDAY TOOLS</small><div><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Tailwind CSS</span><span>React.js</span><span>Next.js</span></div></div></div><div class=\"hero-art\" aria-label=\"Decorative illustration of a website interface\"><div class=\"orbit orbit-a\"></div><div class=\"orbit orbit-b\"></div><span class=\"spark spark-a\">✳</span><span class=\"spark spark-b\">✦</span><div class=\"interface-window\"><div class=\"window-bar\"><span class=\"dots\">● ● ●</span><span>anika / web experience</span><span>•••</span></div><div class=\"window-body\"><aside><b>a.</b><i></i><i></i><i></i><i></i></aside><div class=\"window-content\"><small>YOUR NEXT IDEA, BEAUTIFULLY BUILT.</small><h2>Good design<br/>makes things <em>clear.</em></h2><div class=\"mini-line\"></div><div class=\"mini-cards\"><div><b>↗</b><i></i><i></i></div><div><b>✳</b><i></i><i></i></div></div><div class=\"mini-footer\"><span></span><span></span><span></span></div></div></div></div><div class=\"code-card\"><div><i></i><i></i><i></i><small>interface.js</small></div><pre><span>const</span> craft = <!-- -->{<br/>  responsive: <b>true</b>,<br/>  accessible: <b>true</b>,<br/>  details: <em>&quot;thoughtful&quot;</em><br/>}<!-- -->;</pre></div><div class=\"art-label\"><i></i> BUILT WITH INTENTION</div></div></div><div class=\"container hero-foot\"><span>DESIGN-MINDED DEVELOPMENT</span><span>✳   BUILT FOR PEOPLE, NOT JUST PIXELS   ✳</span><a href=\"#work\">SCROLL TO EXPLORE ↓</a></div><div class=\"container live-weather-wrap\"><div class=\"live-weather\" id=\"live-weather\" aria-live=\"polite\"><div class=\"weather-glyph\" id=\"weather-glyph\" aria-hidden=\"true\">◌</div><div class=\"weather-copy\"><span class=\"weather-eyebrow\"><i></i> LIVE LOCAL CONDITIONS</span><strong id=\"weather-main\">Checking your local weather…</strong><small id=\"weather-place\">Using approximate IP location and local time zone</small></div><div class=\"weather-temperature\"><strong id=\"weather-temp\">--°</strong><small id=\"weather-feels\">CURRENT</small></div><div class=\"weather-clock\"><small>LOCAL TIME</small><strong id=\"local-clock\">--:--</strong><span id=\"local-timezone\">Detecting time zone</span></div></div><p class=\"weather-source\">Weather data by <a href=\"https://open-meteo.com/\" target=\"_blank\" rel=\"noreferrer\">Open-Meteo</a></p></div></section><section class=\"section work-section\" id=\"work\"><div class=\"container\"><div class=\"section-heading\"><div><p class=\"eyebrow\">01 / SELECTED WORK</p><h2>Projects with <span>purpose.</span></h2></div><p class=\"section-intro\">A selection of starter concepts showing the kinds of digital experiences I enjoy building. Replace them with your real projects before publishing.</p></div><div class=\"filters\" aria-label=\"Filter projects\"><button class=\"filter active\">All</button><button class=\"filter\">Dashboard</button><button class=\"filter\">E-commerce</button><button class=\"filter\">Website</button></div><div class=\"project-grid\"><article class=\"project-card\"><div class=\"project-art lavender\"><div class=\"mock-browser\"><div class=\"mock-top\"><span>● ● ●</span><small>analytics-dashboard<!-- -->.app</small><b>↗</b></div><div class=\"mock-inner\"><div class=\"mock-kicker\">A THOUGHTFUL DIGITAL EXPERIENCE</div><h3>Make data<br/>feel <em>clear.</em></h3><div class=\"mock-blocks\"><span></span><span></span><span></span></div><div class=\"mock-cta\"></div></div></div><span class=\"project-number\">01<!-- --> / CONCEPT</span></div><div class=\"project-info\"><div class=\"tag-row\"><span>Dashboard</span><span>UI CONCEPT</span></div><h3>Analytics Dashboard</h3><p>A considered dashboard UI concept with readable metrics, activity summaries and a clear visual hierarchy.</p><div class=\"project-stack\"><span>React</span><span>JavaScript</span><span>CSS</span></div></div></article><article class=\"project-card\"><div class=\"project-art peach\"><div class=\"mock-browser\"><div class=\"mock-top\"><span>● ● ●</span><small>e-commerce-storefront<!-- -->.app</small><b>↗</b></div><div class=\"mock-inner\"><div class=\"mock-kicker\">A THOUGHTFUL DIGITAL EXPERIENCE</div><h3>Objects for<br/>everyday <em>living.</em></h3><div class=\"mock-blocks\"><span></span><span></span><span></span></div><div class=\"mock-cta\"></div></div></div><span class=\"project-number\">02<!-- --> / CONCEPT</span></div><div class=\"project-info\"><div class=\"tag-row\"><span>E-commerce</span><span>UI CONCEPT</span></div><h3>E-commerce Storefront</h3><p>A product-first storefront concept designed around calm browsing, responsive cards and simple navigation.</p><div class=\"project-stack\"><span>Next.js</span><span>Tailwind CSS</span></div></div></article><article class=\"project-card\"><div class=\"project-art mint\"><div class=\"mock-browser\"><div class=\"mock-top\"><span>● ● ●</span><small>saas-landing-page<!-- -->.app</small><b>↗</b></div><div class=\"mock-inner\"><div class=\"mock-kicker\">A THOUGHTFUL DIGITAL EXPERIENCE</div><h3>A better way<br/>to <em>get things done.</em></h3><div class=\"mock-blocks\"><span></span><span></span><span></span></div><div class=\"mock-cta\"></div></div></div><span class=\"project-number\">03<!-- --> / CONCEPT</span></div><div class=\"project-info\"><div class=\"tag-row\"><span>Website</span><span>UI CONCEPT</span></div><h3>SaaS Landing Page</h3><p>A focused marketing page concept with strong content structure and a clear path to action.</p><div class=\"project-stack\"><span>Next.js</span><span>Tailwind CSS</span></div></div></article></div><p class=\"disclaimer\">Project cards are concept placeholders, not claims about completed client work. Add your live demos and source repositories here.</p></div></section><section class=\"section about-section\" id=\"about\"><div class=\"container about-grid\"><div><p class=\"eyebrow\">02 / A LITTLE ABOUT ME</p><h2>Useful first.<br/><span>Beautiful, too.</span></h2><div class=\"about-stamp\">DESIGNED WITH ✳ THE DETAILS IN MIND</div></div><div class=\"about-copy\"><p class=\"lead\">I believe the best interfaces make complicated things feel simple.</p><p>I’m Anika, a frontend developer interested in the place where thoughtful design and dependable code meet. I enjoy shaping clear layouts, building reusable UI and making sure an experience feels natural on every screen size.</p><p>My focus is on solid structure, responsive behaviour, accessible interactions and the small details that make a product feel considered.</p><div class=\"value-list\"><div><b>01</b><span><strong>Responsive by default</strong><small>Designed to work across screen sizes.</small></span></div><div><b>02</b><span><strong>Purposeful details</strong><small>Visual choices that support the message.</small></span></div><div><b>03</b><span><strong>Maintainable UI</strong><small>Reusable components and thoughtful structure.</small></span></div></div></div></div></section><section class=\"section skills-section\" id=\"stack\"><div class=\"container\"><p class=\"eyebrow\">03 / THE TOOLKIT</p><div class=\"section-heading\"><h2>The tools behind <span>the craft.</span></h2><p class=\"section-intro\">A focused frontend toolkit for turning ideas into clear, consistent user experiences.</p></div><div class=\"skill-grid\"><article class=\"skill-card\"><div class=\"skill-card-top\"><span>01</span><b>✳</b></div><h3>Structure</h3><p>Solid foundations</p><div class=\"skill-pills\"><span>HTML5</span><span>Semantic HTML</span><span>CSS3</span></div></article><article class=\"skill-card\"><div class=\"skill-card-top\"><span>02</span><b>✳</b></div><h3>Styling</h3><p>Polished responsive UI</p><div class=\"skill-pills\"><span>Tailwind CSS</span><span>Responsive design</span><span>CSS animations</span></div></article><article class=\"skill-card\"><div class=\"skill-card-top\"><span>03</span><b>✳</b></div><h3>Development</h3><p>Interactive experiences</p><div class=\"skill-pills\"><span>JavaScript</span><span>React.js</span><span>Next.js</span></div></article></div></div></section><section class=\"process-section\"><div class=\"container\"><p class=\"eyebrow\">04 / HOW I WORK</p><h2>A good process leads to <span>better work.</span></h2><div class=\"process-grid\"><article><span>01</span><h3>Understand</h3><p>Clarify the goal, audience and essential user journey.</p></article><article><span>02</span><h3>Shape</h3><p>Create a clear structure and visual direction.</p></article><article><span>03</span><h3>Build</h3><p>Develop responsive components with care.</p></article><article><span>04</span><h3>Refine</h3><p>Review screen sizes, states and finishing details.</p></article></div></div></section><section class=\"section education-section\" id=\"education\"><div class=\"container\"><div class=\"section-heading\"><div><p class=\"eyebrow\">05 / EDUCATION</p><h2>Always learning.<br/><span>Always building.</span></h2></div><p class=\"section-intro\">My learning journey is built around hands-on projects, coding practice and a growing understanding of modern frontend development.</p></div><div class=\"education-card\"><div class=\"education-number\">01</div><div class=\"education-details\"><h3>Frontend Development</h3><p>Ongoing learning through practical work with HTML, CSS, JavaScript, Tailwind CSS, React.js and Next.js.</p><div class=\"education-stack\"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Tailwind CSS</span><span>React.js</span><span>Next.js</span></div></div><span class=\"education-status\">CONTINUOUS LEARNING</span></div><p class=\"education-note\">Formal education details can be added here once the institution, qualification and dates are confirmed.</p></div></section><section class=\"section resume-section\" id=\"resume\"><div class=\"container\"><div class=\"resume-card\"><div><p class=\"eyebrow\">06 / RESUME</p><h2>My background,<br/><span>at a glance.</span></h2><p class=\"resume-copy\">Looking for a quick overview of my skills and frontend journey? Get in touch to request my latest resume.</p></div><a class=\"button primary\" href=\"#lets-talk\">Request my resume <span aria-hidden=\"true\">↗</span></a></div></div></section><section class=\"contact-section\" id=\"lets-talk\"><div class=\"container\"><div class=\"contact-card\"><div><p class=\"eyebrow\">07 / LET’S TALK</p><h2>Have something<br/>good in <span>mind?</span></h2><p class=\"contact-copy\">Have a project in mind or looking for frontend help? Let’s start a conversation and turn the rough idea into a thoughtful web experience.</p><a class=\"button primary\" href=\"mailto:hello@example.com\">Let’s Talk <span aria-hidden=\"true\">↗</span></a><small class=\"placeholder-note\">Demo email — update to Anika’s real email before publishing.</small></div><div class=\"contact-art\"><div class=\"contact-ring ring-one\"></div><div class=\"contact-ring ring-two\"></div><div class=\"contact-orb\">a.</div><span>✳</span></div></div></div></section></main><footer class=\"site-footer\"><div class=\"container footer-inner\"><a class=\"brand\" href=\"#top\"><span class=\"brand-mark\">a.</span><span><b>Anika</b><small>FRONTEND DEVELOPER</small></span></a><p>Designed with intention. Built with care.</p><span>© <!-- -->2026<!-- --> Anika</span></div></footer></div>";

export default function HomePage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const root = mountRef.current;
    if (!root) return undefined;
    let alive = true;

    // Reveal content as it enters the viewport; keep everything visible if reduced motion is preferred.
    const revealTargets = Array.from(root.querySelectorAll(
      ".hero-foot, .live-weather-wrap, .section-heading, .project-card, .about-grid > div, .skill-card, .process-grid article, .education-card, .resume-card, .contact-card, .site-footer"
    ));
    let revealObserver = null;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealTargets.forEach((element, index) => {
        element.classList.add("reveal-on-scroll");
        element.style.transitionDelay = `${(index % 4) * 85}ms`;
      });
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
      revealTargets.forEach((element) => revealObserver.observe(element));
    }
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

    const nav = root.querySelector(".main-nav");
    const menuToggle = root.querySelector(".menu-toggle");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    // Give each line of the hero headline its own staggered entrance.
    const heroHeading = root.querySelector(".hero-copy h1");
    if (heroHeading && !heroHeading.dataset.motionLines) {
      const lines = [];
      let currentLine = [];
      while (heroHeading.firstChild) {
        const node = heroHeading.firstChild;
        heroHeading.removeChild(node);
        if (node.nodeName === "BR") {
          lines.push(currentLine);
          currentLine = [];
        } else {
          currentLine.push(node);
        }
      }
      lines.push(currentLine);
      heroHeading.replaceChildren(...lines.map((nodes, index) => {
        const line = document.createElement("span");
        const accentLine = nodes.some((node) => node.nodeType === 1 && node.tagName === "SPAN");
        line.className = accentLine ? "hero-line hero-line-accent" : "hero-line";
        line.style.setProperty("--line-index", String(index));
        nodes.forEach((node) => line.appendChild(node));
        return line;
      }));
      heroHeading.dataset.motionLines = "true";
    }

    // Turn the existing tool pills into a seamless, duplicated ticker.
    const stackRow = root.querySelector(".stack-strip > div");
    if (stackRow && !reduceMotion && !stackRow.classList.contains("tech-marquee-viewport")) {
      const items = Array.from(stackRow.children);
      if (items.length) {
        const track = document.createElement("div");
        track.className = "tech-marquee-track";
        items.forEach((item) => track.appendChild(item));
        items.forEach((item) => {
          const duplicate = item.cloneNode(true);
          duplicate.setAttribute("aria-hidden", "true");
          track.appendChild(duplicate);
        });
        stackRow.classList.add("tech-marquee-viewport");
        stackRow.replaceChildren(track);
      }
    }

    // A tiny progress rail gives the long page a subtle sense of movement.
    const progress = document.createElement("div");
    progress.className = "motion-progress";
    progress.setAttribute("aria-hidden", "true");
    root.prepend(progress);
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    // Desktop pointer light and gentle magnetic motion; no extra work on touch devices.
    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    if (finePointer && !reduceMotion) root.addEventListener("pointermove", handlePointerMove, { passive: true });

    const tiltCards = [];
    const magneticButtons = [];
    if (finePointer && !reduceMotion) {
      root.querySelectorAll(".project-card").forEach((card) => {
        const onMove = (event) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty("--card-tilt-x", `${(x - .5) * 7}deg`);
          card.style.setProperty("--card-tilt-y", `${(.5 - y) * 7}deg`);
          card.style.setProperty("--card-light-x", `${x * 100}%`);
          card.style.setProperty("--card-light-y", `${y * 100}%`);
        };
        const onLeave = () => {
          card.style.setProperty("--card-tilt-x", "0deg");
          card.style.setProperty("--card-tilt-y", "0deg");
          card.style.setProperty("--card-light-x", "50%");
          card.style.setProperty("--card-light-y", "50%");
        };
        card.addEventListener("pointermove", onMove, { passive: true });
        card.addEventListener("pointerleave", onLeave);
        tiltCards.push([card, onMove, onLeave]);
      });
      root.querySelectorAll(".button").forEach((button) => {
        const onMove = (event) => {
          const rect = button.getBoundingClientRect();
          button.style.setProperty("--magnet-x", `${(event.clientX - rect.left - rect.width / 2) * .12}px`);
          button.style.setProperty("--magnet-y", `${(event.clientY - rect.top - rect.height / 2) * .12}px`);
        };
        const onLeave = () => {
          button.style.setProperty("--magnet-x", "0px");
          button.style.setProperty("--magnet-y", "0px");
        };
        button.addEventListener("pointermove", onMove, { passive: true });
        button.addEventListener("pointerleave", onLeave);
        magneticButtons.push([button, onMove, onLeave]);
      });
    }
    const closeMenu = () => {
      nav?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    };
    const toggleMenu = () => {
      const isOpen = nav?.classList.toggle("open") ?? false;
      menuToggle?.setAttribute("aria-expanded", String(isOpen));
    };
    menuToggle?.addEventListener("click", toggleMenu);
    nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    const filters = Array.from(root.querySelectorAll(".filters .filter"));
    const cards = Array.from(root.querySelectorAll(".project-card"));
    const filterHandlers = filters.map((button) => {
      const handler = () => {
        const selected = (button.textContent || "All").trim().toLowerCase();
        filters.forEach((item) => item.classList.toggle("active", item === button));
        cards.forEach((card) => {
          const tags = (card.querySelector(".tag-row")?.textContent || "").toLowerCase();
          card.hidden = selected !== "all" && !tags.includes(selected);
        });
      };
      button.addEventListener("click", handler);
      return [button, handler];
    });

    const clock = root.querySelector("#local-clock");
    const timezoneLabel = root.querySelector("#local-timezone");
    const main = root.querySelector("#weather-main");
    const place = root.querySelector("#weather-place");
    const temperature = root.querySelector("#weather-temp");
    const feels = root.querySelector("#weather-feels");
    const glyph = root.querySelector("#weather-glyph");

    const refreshThemeAndClock = () => {
      if (!alive) return;
      const now = new Date();
      const hour = Number(new Intl.DateTimeFormat("en-GB", {
        timeZone, hour: "2-digit", hourCycle: "h23"
      }).format(now));
      const period = hour >= 5 && hour < 11 ? "morning"
        : hour >= 11 && hour < 17 ? "afternoon"
        : hour >= 17 && hour < 21 ? "evening" : "night";
      document.documentElement.dataset.period = period;
      document.documentElement.dataset.time = hour >= 6 && hour < 18 ? "day" : "night";
      if (clock) clock.textContent = new Intl.DateTimeFormat("en-US", {
        timeZone, hour: "numeric", minute: "2-digit"
      }).format(now);
      if (timezoneLabel) timezoneLabel.textContent = timeZone.replaceAll("_", " ");
    };

    const describeWeather = (code) => {
      if (code === 0) return {condition:"clear", label:"Clear skies", icon:"☀"};
      if ([1, 2, 3].includes(code)) return {condition:"cloudy", label:"Partly cloudy", icon:"☁"};
      if ([45, 48].includes(code)) return {condition:"fog", label:"Foggy", icon:"🌫"};
      if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return {condition:"rain", label:"Rain nearby", icon:"🌧"};
      if ([71, 73, 75, 77, 85, 86].includes(code)) return {condition:"snow", label:"Snow", icon:"❄"};
      if ([95, 96, 99].includes(code)) return {condition:"storm", label:"Thunderstorm", icon:"⛈"};
      return {condition:"cloudy", label:"Changeable conditions", icon:"☁"};
    };

    const loadWeather = async () => {
      try {
        const locationResponse = await fetch("https://ipwho.is/", {cache:"no-store"});
        if (!locationResponse.ok) throw new Error("Location service unavailable");
        const location = await locationResponse.json();
        if (!location.success || !Number.isFinite(Number(location.latitude)) || !Number.isFinite(Number(location.longitude))) {
          throw new Error("Approximate location unavailable");
        }
        if (!alive) return;
        timeZone = location.timezone?.id || timeZone;
        const label = [location.city, location.region, location.country].filter(Boolean).join(", ");
        if (place) place.textContent = (label || "Your approximate location") + " · Approximate IP location";

        const params = new URLSearchParams({
          latitude: String(location.latitude),
          longitude: String(location.longitude),
          current: "temperature_2m,apparent_temperature,weather_code,is_day,wind_speed_10m",
          timezone: "auto"
        });
        const weatherResponse = await fetch("https://api.open-meteo.com/v1/forecast?" + params.toString(), {cache:"no-store"});
        if (!weatherResponse.ok) throw new Error("Weather service unavailable");
        const data = await weatherResponse.json();
        const current = data.current;
        if (!current || typeof current.weather_code !== "number") throw new Error("Weather data unavailable");
        const weather = describeWeather(current.weather_code);
        document.documentElement.dataset.weather = weather.condition;
        if (main) main.textContent = weather.label;
        if (temperature) temperature.textContent = Math.round(current.temperature_2m) + "°C";
        if (feels) feels.textContent = "FEELS " + Math.round(current.apparent_temperature) + "°C";
        if (glyph) glyph.textContent = weather.icon;
        refreshThemeAndClock();
      } catch (error) {
        if (!alive) return;
        if (main) main.textContent = "Weather temporarily unavailable";
        if (place) place.textContent = "Local time still updates · Weather service will retry";
        if (glyph) glyph.textContent = "◌";
        refreshThemeAndClock();
      }
    };

    refreshThemeAndClock();
    loadWeather();
    const clockTimer = window.setInterval(refreshThemeAndClock, 15000);
    const weatherTimer = window.setInterval(() => {
      if (document.visibilityState === "visible") loadWeather();
    }, 15 * 60 * 1000);
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        refreshThemeAndClock();
        loadWeather();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      alive = false;
      revealObserver?.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (finePointer && !reduceMotion) root.removeEventListener("pointermove", handlePointerMove);
      tiltCards.forEach(([card, onMove, onLeave]) => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
      magneticButtons.forEach(([button, onMove, onLeave]) => {
        button.removeEventListener("pointermove", onMove);
        button.removeEventListener("pointerleave", onLeave);
      });
      progress.remove();
      menuToggle?.removeEventListener("click", toggleMenu);
      nav?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
      filterHandlers.forEach(([button, handler]) => button.removeEventListener("click", handler));
      window.clearInterval(clockTimer);
      window.clearInterval(weatherTimer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <div ref={mountRef} dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}
