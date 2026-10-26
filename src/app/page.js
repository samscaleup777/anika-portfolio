"use client";

import { useEffect, useRef } from "react";

const portfolioMarkup = "<div class=\"portfolio-root\"><canvas class=\"cursor-scene\" aria-hidden=\"true\"></canvas><header class=\"site-header\"><a class=\"brand\" href=\"#top\" aria-label=\"Anika home\"><span class=\"brand-mark brand-logo-mark\"><img src=\"/as-mark-31b3d8.webp\" alt=\"AS logo\" width=\"48\" height=\"48\" /></span><span><b>Anika</b><small>FRONTEND DEVELOPER</small></span></a><button class=\"menu-toggle\" aria-expanded=\"false\" aria-label=\"Toggle menu\">Menu ☰</button><nav class=\"main-nav\" aria-label=\"Main navigation\"><a href=\"#top\">Home</a><a href=\"#about\">About</a><a href=\"#stack\">Skills</a><a href=\"#work\">Projects</a><a href=\"#education\">Education</a><a href=\"#resume\">Resume</a><a class=\"nav-cta\" href=\"#lets-talk\">Let’s Talk <span aria-hidden=\"true\">↗</span></a></nav></header><main id=\"top\"><section class=\"hero-section\"><div class=\"container hero-grid\"><div class=\"hero-copy\"><p class=\"kicker\"><span class=\"line\"></span> FRONTEND DEVELOPER <span class=\"lime\">✳</span> REACT &amp; NEXT.JS</p><h1>Thoughtful<br/>interfaces.<br/><span>Modern web</span><br/>experiences.</h1><p class=\"hero-text\">Hi, I’m Anika — I build responsive, accessible and carefully considered web experiences with JavaScript, React, Next.js and Tailwind CSS.</p><div class=\"actions\"><a class=\"button primary\" href=\"#work\">Explore my work <span aria-hidden=\"true\">↗</span></a><a class=\"button secondary\" href=\"#lets-talk\">Let’s Talk <span>↘</span></a></div><div class=\"stack-strip\"><small>MY EVERYDAY TOOLS</small><div><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Tailwind CSS</span><span>React.js</span><span>Next.js</span><span>Figma</span><span>Motion</span></div></div></div><div class=\"hero-art\" aria-label=\"Decorative illustration of a website interface\"><div class=\"orbit orbit-a\"></div><div class=\"orbit orbit-b\"></div><span class=\"spark spark-a\">✳</span><span class=\"spark spark-b\">✦</span><div class=\"interface-window\"><div class=\"window-bar\"><span class=\"dots\">● ● ●</span><span>anika / web experience</span><span>•••</span></div><div class=\"window-body\"><aside><b>a.</b><i></i><i></i><i></i><i></i></aside><div class=\"window-content\"><small>YOUR NEXT IDEA, BEAUTIFULLY BUILT.</small><h2>Good design<br/>makes things <em>clear.</em></h2><div class=\"mini-line\"></div><div class=\"mini-cards\"><div><b>↗</b><i></i><i></i></div><div><b>✳</b><i></i><i></i></div></div><div class=\"mini-footer\"><span></span><span></span><span></span></div></div></div></div><div class=\"code-card\"><div><i></i><i></i><i></i><small>interface.js</small></div><pre><span>const</span> craft = <!-- -->{<br/>  responsive: <b>true</b>,<br/>  accessible: <b>true</b>,<br/>  details: <em>&quot;thoughtful&quot;</em><br/>}<!-- -->;</pre></div><div class=\"art-label\"><i></i> BUILT WITH INTENTION</div></div></div><div class=\"container hero-foot\"><span>DESIGN-MINDED DEVELOPMENT</span><span>✳   BUILT FOR PEOPLE, NOT JUST PIXELS   ✳</span><a href=\"#work\">SCROLL TO EXPLORE ↓</a></div><div class=\"container live-weather-wrap\"><div class=\"live-weather\" id=\"live-weather\" aria-live=\"polite\"><div class=\"weather-glyph\" id=\"weather-glyph\" aria-hidden=\"true\">◌</div><div class=\"weather-copy\"><span class=\"weather-eyebrow\"><i></i> LIVE LOCAL CONDITIONS</span><strong id=\"weather-main\">Checking your local weather…</strong><small id=\"weather-place\">Using approximate IP location and local time zone</small></div><div class=\"weather-temperature\"><strong id=\"weather-temp\">--°</strong><small id=\"weather-feels\">CURRENT</small></div><div class=\"weather-clock\"><small>LOCAL TIME</small><strong id=\"local-clock\">--:--</strong><span id=\"local-timezone\">Detecting time zone</span></div></div><p class=\"weather-source\">Weather data by <a href=\"https://open-meteo.com/\" target=\"_blank\" rel=\"noreferrer\">Open-Meteo</a> · Theme adapts to approximate IP location</p></div></section><section class=\"section work-section\" id=\"work\"><div class=\"container\"><div class=\"section-heading\"><div><p class=\"eyebrow\">01 / SELECTED WORK</p><h2>Projects with <span>purpose.</span></h2></div><p class=\"section-intro\">A selection of starter concepts showing the kinds of digital experiences I enjoy building. Replace them with your real projects before publishing.</p></div><div class=\"filters\" aria-label=\"Filter projects\"><button class=\"filter active\">All</button><button class=\"filter\">Content Platform</button><button class=\"filter\">Market Platform</button></div> <div class=\"project-grid\">   <article class=\"project-card\">     <div class=\"project-art lavender\">       <div class=\"mock-browser\">         <div class=\"mock-top\"><span>● ● ●</span><small>annika-website-one.vercel.app</small><b>↗</b></div>         <div class=\"mock-inner\">           <div class=\"mock-kicker\">A THOUGHTFUL SPACE FOR EVERY MUSLIMAH</div>           <h3>Faith in heart.<br/>Strength in <em>life.</em></h3>           <div class=\"mini-line\"></div><div class=\"mock-blocks\"><span></span><span></span><span></span></div><div class=\"mock-cta\"></div>         </div>       </div>       <span class=\"project-number\">01 / LIVE PROJECT</span>     </div>     <div class=\"project-info\">       <div class=\"tag-row\"><span>Content Platform</span><span>LIVE PROJECT</span></div>       <h3>Annïka — Faith &amp; Lifestyle</h3>       <p>A calm, multi-section platform for modest fashion, Quran and Hadith, practical safety guidance, lifestyle resources and articles.</p>       <div class=\"project-stack\"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>       <a class=\"project-live-link\" href=\"https://annika-website-one.vercel.app/\" target=\"_blank\" rel=\"noopener noreferrer\">Explore live site <span aria-hidden=\"true\">↗</span></a>     </div>   </article>   <article class=\"project-card\">     <div class=\"project-art mint\">       <div class=\"mock-browser\">         <div class=\"mock-top\"><span>● ● ●</span><small>annika-hk777.vercel.app</small><b>↗</b></div>         <div class=\"mock-inner\">           <div class=\"mock-kicker\">BANGLADESH MARKET PRICE GUIDE</div>           <h3>Know the price.<br/>Choose <em>clearly.</em></h3>           <div class=\"mini-line\"></div><div class=\"mock-blocks\"><span></span><span></span><span></span></div><div class=\"mock-cta\"></div>         </div>       </div>       <span class=\"project-number\">02 / LIVE PROJECT</span>     </div>     <div class=\"project-info\">       <div class=\"tag-row\"><span>Market Platform</span><span>LIVE PROJECT</span></div>       <h3>Bazar Dor — Market Prices</h3>       <p>A Bengali-first platform for exploring everyday essentials and market prices across Bangladesh in one place.</p>       <div class=\"project-stack\"><span>Next.js</span><span>React</span><span>Tailwind CSS</span></div>       <a class=\"project-live-link\" href=\"https://annika-hk777.vercel.app/\" target=\"_blank\" rel=\"noopener noreferrer\">Explore live site <span aria-hidden=\"true\">↗</span></a>     </div>   </article> </div><p class=\"disclaimer\">Two live projects, built for real audiences. Open each site to explore the experience in context.</p></div></section><section class=\"section about-section\" id=\"about\"><div class=\"container about-grid\"><div><p class=\"eyebrow\">02 / A LITTLE ABOUT ME</p><h2>Useful first.<br/><span>Beautiful, too.</span></h2><div class=\"about-stamp\">DESIGNED WITH ✳ THE DETAILS IN MIND</div></div><div class=\"about-copy\"><p class=\"lead\">I believe the best interfaces make complicated things feel simple.</p><p>I’m Anika, a frontend developer interested in the place where thoughtful design and dependable code meet. I enjoy shaping clear layouts, building reusable UI and making sure an experience feels natural on every screen size.</p><p>My focus is on solid structure, responsive behaviour, accessible interactions and the small details that make a product feel considered.</p><div class=\"value-list\"><div><b>01</b><span><strong>Responsive by default</strong><small>Designed to work across screen sizes.</small></span></div><div><b>02</b><span><strong>Purposeful details</strong><small>Visual choices that support the message.</small></span></div><div><b>03</b><span><strong>Maintainable UI</strong><small>Reusable components and thoughtful structure.</small></span></div></div></div></div></section><section class=\"section skills-section\" id=\"stack\"><div class=\"container\"><p class=\"eyebrow\">03 / ENGINEERING TOOLKIT</p><div class=\"tech-stack-heading\"><div><span class=\"tech-stack-overline\">ENGINEERING / TOOLKIT</span><h2>My tech <span>stack.</span></h2></div><p class=\"section-intro\">A blend of design and frontend tools for shaping polished interfaces, responsive experiences and purposeful motion.</p></div><div class=\"tech-stack-grid\" role=\"list\" aria-label=\"My technology stack\"><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-html\" aria-hidden=\"true\">5</div><div class=\"tech-stack-copy\"><h3>HTML5</h3><p>Semantic structure</p></div><span class=\"tech-stack-index\">01</span></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-css\" aria-hidden=\"true\">#</div><div class=\"tech-stack-copy\"><h3>CSS3</h3><p>Visual styling</p></div><span class=\"tech-stack-index\">02</span></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-js\" aria-hidden=\"true\">JS</div><div class=\"tech-stack-copy\"><h3>JavaScript</h3><p>Interactive behaviour</p></div><span class=\"tech-stack-index\">03</span></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-tailwind\" aria-hidden=\"true\">TW</div><div class=\"tech-stack-copy\"><h3>Tailwind CSS</h3><p>Utility-first styling</p></div><span class=\"tech-stack-index\">04</span></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-react\" aria-hidden=\"true\">⚛</div><div class=\"tech-stack-copy\"><h3>React.js</h3><p>Reusable UI components</p></div><span class=\"tech-stack-index\">05</span></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-next\" aria-hidden=\"true\">N</div><div class=\"tech-stack-copy\"><h3>Next.js</h3><p>Modern web applications</p></div><span class=\"tech-stack-index\">06</span></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-figma\" aria-hidden=\"true\">F</div><div class=\"tech-stack-copy\"><h3>Figma</h3><p>UI design &amp; prototyping</p></div><span class=\"tech-stack-index\">07</span></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-motion\" aria-hidden=\"true\">M</div><div class=\"tech-stack-copy\"><h3>Motion</h3><p>UI animation &amp; transitions</p></div><span class=\"tech-stack-index\">08</span></article></div><div class=\"tech-stack-focus\"><span class=\"tech-stack-focus-label\">FOCUS AREAS</span><div><span>Frontend Development</span><span>Responsive UI</span><span>Reusable Components</span><span>Web Interactions</span></div></div></div></section><section class=\"process-section\"><div class=\"container\"><p class=\"eyebrow\">04 / HOW I WORK</p><h2>A good process leads to <span>better work.</span></h2><div class=\"process-grid\"><article><span>01</span><h3>Understand</h3><p>Clarify the goal, audience and essential user journey.</p></article><article><span>02</span><h3>Shape</h3><p>Create a clear structure and visual direction.</p></article><article><span>03</span><h3>Build</h3><p>Develop responsive components with care.</p></article><article><span>04</span><h3>Refine</h3><p>Review screen sizes, states and finishing details.</p></article></div></div></section><section class=\"section education-section\" id=\"education\"><div class=\"container\"><div class=\"section-heading\"><div><p class=\"eyebrow\">05 / EDUCATION</p><h2>Always learning.<br/><span>Always building.</span></h2></div><p class=\"section-intro\">My learning journey is built around hands-on projects, coding practice and a growing understanding of modern frontend development.</p></div><div class=\"education-card\"><div class=\"education-number\">01</div><div class=\"education-details\"><h3>Frontend Development</h3><p>Ongoing learning through practical work with HTML, CSS, JavaScript, Tailwind CSS, React.js and Next.js.</p><div class=\"education-stack\"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Tailwind CSS</span><span>React.js</span><span>Next.js</span></div></div><span class=\"education-status\">CONTINUOUS LEARNING</span></div><p class=\"education-note\">Formal education details can be added here once the institution, qualification and dates are confirmed.</p></div></section><section class=\"section resume-section\" id=\"resume\"><div class=\"container\"><div class=\"resume-card\"><div><p class=\"eyebrow\">06 / RESUME</p><h2>My background,<br/><span>at a glance.</span></h2><p class=\"resume-copy\">Looking for a quick overview of my skills and frontend journey? Get in touch to request my latest resume.</p></div><a class=\"button primary\" href=\"#lets-talk\">Request my resume <span aria-hidden=\"true\">↗</span></a></div></div></section><section class=\"contact-section\" id=\"lets-talk\"><div class=\"container\"><div class=\"contact-card contact-card-expanded\"><div class=\"contact-intro\"><p class=\"eyebrow\">07 / LET’S TALK</p><span class=\"contact-overline\">GOOD IDEAS START WITH A CONVERSATION</span><h2>Have a project?<br/>Let’s make it <span>real.</span></h2><p class=\"contact-copy\">I build responsive, thoughtful web experiences for real people and real goals. For freelance projects, collaborations or frontend opportunities, choose a channel and reach out.</p><div class=\"contact-actions\"><a class=\"button primary\" href=\"#social-links\">Find my contact links <span aria-hidden=\"true\">↘</span></a><a class=\"button secondary\" href=\"https://github.com/samscaleup777\" target=\"_blank\" rel=\"noopener noreferrer\">View GitHub <span aria-hidden=\"true\">↗</span></a></div><small class=\"placeholder-note\">Email and profile links marked “Add profile URL” will be connected when the details are ready.</small></div><div class=\"social-panel\" id=\"social-links\"><div class=\"social-panel-heading\"><div><span class=\"social-kicker\">PROFESSIONAL NETWORK</span><h3>Connect with me.</h3></div><span class=\"social-count\">06 CHANNELS</span></div><div class=\"social-grid\"><a class=\"social-link\" href=\"https://github.com/samscaleup777\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Visit GitHub profile\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.07-1.15 3.07-1.15.62 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z\"/></svg><span class=\"social-copy\"><strong>GitHub</strong><small>Code &amp; projects</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></a><div class=\"social-link is-placeholder\" aria-label=\"LinkedIn profile link to be added later\"><span class=\"social-icon linkedin\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M5.2 3.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.1 7.2h3.8v15.1H1.1zM7.3 7.2H11v2.1h.1c.5-1 1.8-2.5 4.5-2.5 4.8 0 5.7 3.1 5.7 7.1v8.4h-3.9v-7.4c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.5H8.2V7.2z\"/></svg></span><span class=\"social-copy\"><strong>LinkedIn</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"X / Twitter profile link to be added later\"><span class=\"social-icon x\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.8 22H1.7l7.3-8.4L1 2h6.4l4.5 7.5L18.9 2Zm-1.1 18h1.7L6.5 3.9H4.7L17.8 20Z\"/></svg></span><span class=\"social-copy\"><strong>X / Twitter</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"Fiverr profile link to be added later\"><span class=\"social-icon fiverr\"><span class=\"wordmark-icon\">fi</span></span><span class=\"social-copy\"><strong>Fiverr</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"Upwork profile link to be added later\"><span class=\"social-icon upwork\"><span class=\"wordmark-icon\">up</span></span><span class=\"social-copy\"><strong>Upwork</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"Email profile link to be added later\"><span class=\"social-icon email\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7\"/></svg></span><span class=\"social-copy\"><strong>Email</strong><small>Add email address</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div></div><p class=\"social-panel-note\">GitHub is linked now. The remaining destinations are clearly marked placeholders, not invented profile URLs.</p></div></div></div></section></main><footer class=\"site-footer\"><div class=\"container footer-inner\"><a class=\"brand\" href=\"#top\"><span class=\"brand-mark brand-logo-mark\"><img src=\"/as-mark-31b3d8.webp\" alt=\"AS logo\" width=\"48\" height=\"48\" /></span><span><b>Anika</b><small>FRONTEND DEVELOPER</small></span></a><p>Designed with intention. Built with care.</p><span>© <!-- -->2026<!-- --> Anika</span></div></footer></div>";

export default function HomePage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const root = mountRef.current;
    if (!root) return undefined;
    let alive = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    // Climate Constellation: a lightweight canvas field that shifts with local time,
    // regional season and current weather, and gently responds to cursor movement.
    const sceneCanvas = root.querySelector(".cursor-scene");
    const sceneCtx = sceneCanvas?.getContext("2d", { alpha: true });
    let sceneWidth = 0;
    let sceneHeight = 0;
    let sceneDpr = 1;
    let sceneAnimationFrame = 0;
    let sceneLastFrame = 0;
    let sceneParticles = [];
    const sceneRipples = [];
    const sceneCursor = { x: -1000, y: -1000, drawX: -1000, drawY: -1000, active: false };
    const scenePalette = { one: "#c4ff76", two: "#b49aff", three: "#54b8c7" };

    const refreshScenePalette = () => {
      const styles = window.getComputedStyle(document.documentElement);
      scenePalette.one = styles.getPropertyValue("--cursor-one").trim() || styles.getPropertyValue("--lime").trim() || "#c4ff76";
      scenePalette.two = styles.getPropertyValue("--cursor-two").trim() || styles.getPropertyValue("--violet").trim() || "#b49aff";
      scenePalette.three = styles.getPropertyValue("--cursor-three").trim() || "#54b8c7";
    };
    refreshScenePalette();
    const sceneThemeObserver = new MutationObserver(refreshScenePalette);
    sceneThemeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-period", "data-time", "data-weather", "data-season", "data-climate"]
    });

    const resizeScene = () => {
      if (!sceneCanvas || !sceneCtx) return;
      sceneWidth = window.innerWidth;
      sceneHeight = window.innerHeight;
      sceneDpr = Math.min(window.devicePixelRatio || 1, 1.7);
      sceneCanvas.width = Math.round(sceneWidth * sceneDpr);
      sceneCanvas.height = Math.round(sceneHeight * sceneDpr);
      sceneCanvas.style.width = sceneWidth + "px";
      sceneCanvas.style.height = sceneHeight + "px";
      sceneCtx.setTransform(sceneDpr, 0, 0, sceneDpr, 0, 0);
      const desiredCount = reduceMotion ? 36 : Math.max(34, Math.min(86, Math.round(sceneWidth * sceneHeight / 19000)));
      while (sceneParticles.length < desiredCount) {
        sceneParticles.push({
          x: Math.random() * sceneWidth,
          y: Math.random() * sceneHeight,
          vx: (Math.random() - .5) * .24,
          vy: (Math.random() - .5) * .24,
          size: Math.random() * 1.35 + .45,
          phase: Math.random() * Math.PI * 2
        });
      }
      sceneParticles.length = desiredCount;
      sceneParticles.forEach((particle) => {
        if (particle.x > sceneWidth) particle.x = Math.random() * sceneWidth;
        if (particle.y > sceneHeight) particle.y = Math.random() * sceneHeight;
      });
    };

    const handleScenePointerMove = (event) => {
      if (!finePointer || event.pointerType === "touch") return;
      sceneCursor.x = event.clientX;
      sceneCursor.y = event.clientY;
      sceneCursor.active = true;
    };
    const handleScenePointerOut = (event) => {
      if (!event.relatedTarget) sceneCursor.active = false;
    };
    const handleScenePointerDown = (event) => {
      if (!finePointer || event.pointerType === "touch") return;
      sceneRipples.push({ x: event.clientX, y: event.clientY, age: 0, colorIndex: sceneRipples.length % 3 });
      if (sceneRipples.length > 5) sceneRipples.shift();
    };

    const drawScene = (timestamp = 0) => {
      if (!sceneCtx || !sceneCanvas || !alive) return;
      if (document.visibilityState === "hidden") {
        if (!reduceMotion) sceneAnimationFrame = window.requestAnimationFrame(drawScene);
        return;
      }
      const delta = sceneLastFrame ? Math.min(2, (timestamp - sceneLastFrame) / 16.67) : 1;
      sceneLastFrame = timestamp;
      const ctx = sceneCtx;
      const now = timestamp * .001;
      ctx.clearRect(0, 0, sceneWidth, sceneHeight);

      if (sceneCursor.active && finePointer && !reduceMotion) {
        sceneCursor.drawX += (sceneCursor.x - sceneCursor.drawX) * .16;
        sceneCursor.drawY += (sceneCursor.y - sceneCursor.drawY) * .16;
        const glow = ctx.createRadialGradient(sceneCursor.drawX, sceneCursor.drawY, 0, sceneCursor.drawX, sceneCursor.drawY, 230);
        glow.addColorStop(0, scenePalette.one);
        glow.addColorStop(.36, scenePalette.two);
        glow.addColorStop(1, "transparent");
        ctx.globalAlpha = document.documentElement.dataset.time === "day" ? .075 : .12;
        ctx.fillStyle = glow;
        ctx.fillRect(sceneCursor.drawX - 230, sceneCursor.drawY - 230, 460, 460);
        ctx.globalAlpha = 1;
      }

      for (let i = 0; i < sceneParticles.length; i++) {
        const particle = sceneParticles[i];
        if (!reduceMotion) {
          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;
          particle.phase += .008 * delta;
          if (particle.x < -10) particle.x = sceneWidth + 10;
          if (particle.x > sceneWidth + 10) particle.x = -10;
          if (particle.y < -10) particle.y = sceneHeight + 10;
          if (particle.y > sceneHeight + 10) particle.y = -10;

          if (sceneCursor.active && finePointer) {
            const dx = particle.x - sceneCursor.drawX;
            const dy = particle.y - sceneCursor.drawY;
            const distance = Math.hypot(dx, dy);
            if (distance > 1 && distance < 170) {
              const force = (1 - distance / 170) * .18 * delta;
              particle.vx += (dx / distance) * force - (dy / distance) * force * .17;
              particle.vy += (dy / distance) * force + (dx / distance) * force * .17;
            }
          }
          particle.vx *= .993;
          particle.vy *= .993;
          const speed = Math.hypot(particle.vx, particle.vy);
          if (speed > .68) {
            particle.vx = particle.vx / speed * .68;
            particle.vy = particle.vy / speed * .68;
          }
        }

        for (let j = i + 1; j < sceneParticles.length; j++) {
          const other = sceneParticles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 138) {
            const nearCursor = sceneCursor.active && Math.hypot((particle.x + other.x) / 2 - sceneCursor.drawX, (particle.y + other.y) / 2 - sceneCursor.drawY) < 190;
            ctx.globalAlpha = (1 - distance / 138) * (nearCursor ? .29 : .115);
            ctx.strokeStyle = (i + j) % 5 === 0 ? scenePalette.two : scenePalette.one;
            ctx.lineWidth = nearCursor ? 1 : .7;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      sceneParticles.forEach((particle, index) => {
        const shimmer = reduceMotion ? .72 : .48 + (Math.sin(now * .75 + particle.phase) + 1) * .22;
        ctx.globalAlpha = shimmer;
        ctx.fillStyle = index % 7 === 0 ? scenePalette.three : index % 3 === 0 ? scenePalette.two : scenePalette.one;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * (sceneCursor.active && Math.hypot(particle.x - sceneCursor.drawX, particle.y - sceneCursor.drawY) < 135 ? 1.65 : 1), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      if (sceneCursor.active && finePointer && !reduceMotion) {
        ctx.strokeStyle = scenePalette.two;
        ctx.lineWidth = 1;
        ctx.globalAlpha = .24;
        ctx.setLineDash([3, 7]);
        ctx.beginPath();
        ctx.ellipse(sceneCursor.drawX, sceneCursor.drawY, 33 + Math.sin(now * 1.1) * 5, 16 + Math.cos(now * .9) * 3, now * .12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = .55;
        ctx.fillStyle = scenePalette.one;
        ctx.beginPath();
        ctx.arc(sceneCursor.drawX, sceneCursor.drawY, 2.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      for (let i = sceneRipples.length - 1; i >= 0; i--) {
        const ripple = sceneRipples[i];
        ripple.age += delta;
        const radius = 13 + ripple.age * 4.2;
        ctx.globalAlpha = Math.max(0, 1 - ripple.age / 38) * .52;
        ctx.strokeStyle = [scenePalette.one, scenePalette.two, scenePalette.three][ripple.colorIndex];
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        if (ripple.age > 38) sceneRipples.splice(i, 1);
      }
      ctx.globalAlpha = 1;
      if (!reduceMotion) sceneAnimationFrame = window.requestAnimationFrame(drawScene);
    };

    if (sceneCanvas && sceneCtx) {
      resizeScene();
      window.addEventListener("resize", resizeScene);
      window.addEventListener("pointermove", handleScenePointerMove, { passive: true });
      window.addEventListener("pointerout", handleScenePointerOut);
      window.addEventListener("pointerdown", handleScenePointerDown, { passive: true });
      drawScene();
    }


    // Reveal content as it enters the viewport; keep everything visible if reduced motion is preferred.
    const revealTargets = Array.from(root.querySelectorAll(
      ".hero-foot, .live-weather-wrap, .section-heading, .project-card, .about-grid > div, .tech-stack-item, .process-grid article, .education-card, .resume-card, .contact-card, .site-footer"
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
    let latitude = null;
    let countryCode = "";
    let locationLabel = "";
    let weatherCondition = "clear";

    const getSeason = (month) => {
      // Bangladesh uses its six familiar seasonal phases (approximate Gregorian mapping).
      if (countryCode === "BD") {
        if ([12, 1].includes(month)) return { key: "winter", label: "Winter · Sheet" };
        if ([2, 3].includes(month)) return { key: "spring", label: "Spring · Boshonto" };
        if ([4, 5].includes(month)) return { key: "summer", label: "Summer · Grishmo" };
        if ([6, 7].includes(month)) return { key: "monsoon", label: "Monsoon · Borsha" };
        if ([8, 9].includes(month)) return { key: "autumn", label: "Autumn · Shorot" };
        return { key: "late-autumn", label: "Late autumn · Hemonto" };
      }

      // Tropical regions don't share one universal rainy-season calendar.
      // Use the live condition as a cautious visual cue instead of claiming a formal season.
      if (!Number.isFinite(latitude) || Math.abs(latitude) < 23.5) {
        return ["rain", "storm"].includes(weatherCondition)
          ? { key: "wet-tropical", label: "Tropical · wet conditions" }
          : { key: "tropical", label: "Tropical climate" };
      }

      // Flip the meteorological season calendar for the southern hemisphere.
      const localSeasonMonth = latitude < -23.5 ? ((month + 5) % 12) + 1 : month;
      if ([12, 1, 2].includes(localSeasonMonth)) return { key: "winter", label: "Winter" };
      if ([3, 4, 5].includes(localSeasonMonth)) return { key: "spring", label: "Spring" };
      if ([6, 7, 8].includes(localSeasonMonth)) return { key: "summer", label: "Summer" };
      return { key: "autumn", label: "Autumn" };
    };

    const nav = root.querySelector(".main-nav");
    const menuToggle = root.querySelector(".menu-toggle");

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
      const month = Number(new Intl.DateTimeFormat("en-GB", {
        timeZone, month: "2-digit"
      }).format(now));
      const period = hour >= 5 && hour < 11 ? "morning"
        : hour >= 11 && hour < 17 ? "afternoon"
        : hour >= 17 && hour < 21 ? "evening" : "night";
      const season = getSeason(month);
      document.documentElement.dataset.period = period;
      document.documentElement.dataset.time = hour >= 6 && hour < 18 ? "day" : "night";
      document.documentElement.dataset.season = season.key;
      document.documentElement.dataset.climate = Number.isFinite(latitude) && Math.abs(latitude) >= 23.5
        ? (latitude < 0 ? "southern" : "northern")
        : (countryCode === "BD" ? "monsoon" : "tropical");
      if (locationLabel && place) {
        place.textContent = `${locationLabel} · Approx. IP location · ${season.label}`;
      }
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
        latitude = Number.isFinite(Number(location.latitude)) ? Number(location.latitude) : null;
        countryCode = String(location.country_code || "").toUpperCase();
        locationLabel = [location.city, location.region, location.country].filter(Boolean).join(", ") || "Your approximate location";
        if (place) place.textContent = locationLabel + " · Approximate IP location";

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
        weatherCondition = weather.condition;
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
      sceneThemeObserver.disconnect();
      window.removeEventListener("resize", resizeScene);
      window.removeEventListener("pointermove", handleScenePointerMove);
      window.removeEventListener("pointerout", handleScenePointerOut);
      window.removeEventListener("pointerdown", handleScenePointerDown);
      if (sceneAnimationFrame) window.cancelAnimationFrame(sceneAnimationFrame);
      if (sceneCtx && sceneCanvas) sceneCtx.clearRect(0, 0, sceneWidth, sceneHeight);
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
