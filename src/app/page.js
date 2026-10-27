"use client";

import { useEffect, useRef } from "react";

const portfolioMarkup = "<div class=\"portfolio-root\"><canvas class=\"cursor-scene\" aria-hidden=\"true\"></canvas><div class=\"ambient-field\" aria-hidden=\"true\"><div class=\"ambient-field-grid\"></div><div class=\"ambient-orbit ambient-orbit-wide\"><i class=\"orbit-point point-a\"></i><i class=\"orbit-point point-b\"></i><i class=\"orbit-point point-c\"></i></div><div class=\"ambient-orbit ambient-orbit-tall\"><i class=\"orbit-point point-d\"></i><i class=\"orbit-point point-e\"></i></div><div class=\"ambient-orbit ambient-orbit-dashed\"></div><div class=\"ambient-panel ambient-panel-left\"><div class=\"ambient-panel-head\"><i></i><i></i><i></i><span>motion.core</span></div><div class=\"ambient-panel-code\"><b></b><b></b><b></b><b></b><b></b></div><div class=\"ambient-panel-footer\"><span></span><span></span></div></div><div class=\"ambient-panel ambient-panel-right\"><div class=\"ambient-panel-head\"><i></i><i></i><i></i><span>interface.map</span></div><div class=\"ambient-panel-chart\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class=\"ambient-panel-footer\"><span></span><span></span><span></span></div></div><div class=\"ambient-glass-tile tile-one\"><span></span><i></i></div><div class=\"ambient-glass-tile tile-two\"><span></span><i></i></div><div class=\"ambient-glass-tile tile-three\"><span></span><i></i></div><div class=\"ambient-crosshair crosshair-one\"></div><div class=\"ambient-crosshair crosshair-two\"></div><div class=\"ambient-scan-line\"></div><div class=\"ambient-cursor-halo\"></div><div class=\"ambient-particle-stream stream-one\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class=\"ambient-particle-stream stream-two\"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class=\"ambient-particle-stream stream-three\"><i></i><i></i><i></i><i></i><i></i></div><div class=\"ambient-neural-line neural-one\"></div><div class=\"ambient-neural-line neural-two\"></div><div class=\"ambient-neural-line neural-three\"></div><div class=\"ambient-micro-orbit micro-orbit-one\"><i></i></div><div class=\"ambient-micro-orbit micro-orbit-two\"><i></i></div><div class=\"ambient-micro-orbit micro-orbit-three\"><i></i></div><div class=\"ambient-hex-cluster hex-cluster-one\"><i></i><i></i><i></i><i></i></div><div class=\"ambient-hex-cluster hex-cluster-two\"><i></i><i></i><i></i></div><div class=\"ambient-data-ribbon ribbon-one\"></div><div class=\"ambient-data-ribbon ribbon-two\"></div></div><header class=\"site-header\"><a class=\"brand\" href=\"#top\" aria-label=\"Annika home\"><span class=\"brand-mark brand-logo-mark\"><img src=\"/as-mark-31b3d8.webp\" alt=\"AS logo\" width=\"48\" height=\"48\" /></span><span><b>Annika</b><small>FRONTEND DEVELOPER</small></span></a><button class=\"menu-toggle\" aria-expanded=\"false\" aria-label=\"Toggle menu\">Menu ☰</button><nav class=\"main-nav\" aria-label=\"Main navigation\"><a href=\"#top\">Home</a><a href=\"#about\">About</a><a href=\"#stack\">Skills</a><a href=\"#work\">Projects</a><a href=\"#education\">Education</a><a href=\"#resume\">Resume</a><a class=\"nav-cta\" href=\"#lets-talk\">Let’s Talk <span aria-hidden=\"true\">↗</span></a></nav></header><main id=\"top\"><section class=\"hero-section\"><div class=\"container hero-grid\"><div class=\"hero-copy\"><p class=\"kicker\">FRONTEND DEVELOPER <span class=\"lime\">✳</span> REACT &amp; NEXT.JS</p><h1>Thoughtful<br/>interfaces.<br/><span>Modern web</span><br/>experiences.</h1><p class=\"hero-text\">Hi, I’m Annika, I build responsive, accessible and carefully considered web experiences with JavaScript, React, Next.js and Tailwind CSS.</p><div class=\"actions\"><a class=\"button primary\" href=\"#work\">Explore my work <span aria-hidden=\"true\">↗</span></a><a class=\"button secondary\" href=\"#lets-talk\">Let’s Talk <span>↘</span></a></div><div class=\"stack-strip\"><small>MY EVERYDAY TOOLS</small><div><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Tailwind CSS</span><span>React.js</span><span>Next.js</span><span>Figma</span><span>Motion</span></div></div></div><div class=\"hero-portrait\"><div class=\"portrait-orbit portrait-orbit-one\"></div><div class=\"portrait-orbit portrait-orbit-two\"></div><div class=\"portrait-photo-frame\"><img src=\"/annika-portrait.webp\" alt=\"Annika, a Muslim woman frontend developer wearing a navy hijab, working at her desk\" width=\"480\" height=\"480\" fetchPriority=\"high\" /></div><div class=\"portrait-badge portrait-badge-top\"><span>✳</span><div><strong>Annika</strong><small>FRONTEND DEVELOPER</small></div></div><div class=\"portrait-badge portrait-badge-bottom\"><span>⌘</span><div><strong>Design minded code</strong><small>React · Next.js · Figma · Motion</small></div></div></div></div><div class=\"container hero-foot\"><span>DESIGN MINDED DEVELOPMENT</span><span>✳   BUILT FOR PEOPLE, NOT JUST PIXELS   ✳</span><a href=\"#work\">SCROLL TO EXPLORE ↓</a></div><div class=\"container live-weather-wrap\"><div class=\"live-weather\" id=\"live-weather\" aria-live=\"polite\"><div class=\"weather-glyph\" id=\"weather-glyph\" aria-hidden=\"true\">◌</div><div class=\"weather-copy\"><span class=\"weather-eyebrow\"><i></i> LIVE LOCAL CONDITIONS</span><strong id=\"weather-main\">Checking your local weather…</strong><small id=\"weather-place\">Using approximate IP location and local time zone</small></div><div class=\"weather-temperature\"><strong id=\"weather-temp\">…°</strong><small id=\"weather-feels\">CURRENT</small></div><div class=\"weather-clock\"><small>LOCAL TIME</small><strong id=\"local-clock\">…</strong><span id=\"local-timezone\">Detecting time zone</span></div></div><p class=\"weather-source\">Weather data by <a href=\"https://open-meteo.com/\" target=\"_blank\" rel=\"noreferrer\">Open Meteo</a> · Theme adapts to approximate IP location</p></div></section><section class=\"section work-section\" id=\"work\"><div class=\"container\"><div class=\"section-heading\"><div><p class=\"eyebrow\">SELECTED WORK</p><h2>Projects with <span>purpose.</span></h2></div><p class=\"section-intro\">Selected work that brings thoughtful design and practical frontend engineering together. Explore each live project to see the experience in context.</p></div><div class=\"filters\" aria-label=\"Filter projects\"><button class=\"filter active\">All</button><button class=\"filter\">Content Platform</button><button class=\"filter\">Market Platform</button><button class=\"filter\">React App</button><button class=\"filter\">Fitness App</button></div> <div class=\"project-grid\">   <article class=\"project-card\">     <div class='project-art lavender project-art-expand'><a class='project-preview-link project-mock-link' href='https://annika-website-one.vercel.app/' target='_blank' rel='noopener noreferrer' aria-label='Open the Annïka, Faith and Lifestyle live project'><div class='faith-site-preview' aria-hidden='true'><div class='faith-site-nav'><span class='faith-site-logo'>a.</span><b>annïka</b><span>Faith</span><span>Journal</span><span>Living</span><i>☾</i></div><div class='faith-site-body'><span class='faith-site-eyebrow'>FAITH · REFLECTION · EVERYDAY</span><h4>A softer space<br/>to grow in faith.</h4><p>Gentle reminders for a more purposeful life.</p><span class='faith-site-cta'>Explore the journal ↗</span><div class='faith-site-orb'></div><div class='faith-site-feature'><b>✳</b><span>Quran &amp; Hadith</span><span>Mindful living</span><span>Modest style</span></div></div></div><span class='preview-chip'><i></i> LIVE PROJECT <b>↗</b></span></a></div><div class=\"project-info\">       <div class=\"tag-row\"><span>Content Platform</span><span>LIVE PROJECT</span></div>       <h3>Annïka, Faith &amp; Lifestyle</h3>       <p>A calm, multiple section platform for modest fashion, Quran and Hadith, practical safety guidance, lifestyle resources and articles.</p>       <div class=\"project-stack\"><span>HTML</span><span>CSS</span><span>JavaScript</span></div><button type='button' class='project-sound-button' data-project-sound='0' aria-label='Play a unique short instrumental sound for project 1' title='Play project sound'><span aria-hidden='true'>♫</span><span>Play sound</span></button>       <a class=\"project-live-link\" href=\"https://annika-website-one.vercel.app/\" target=\"_blank\" rel=\"noopener noreferrer\">Explore live site <span aria-hidden=\"true\">↗</span></a>     </div>   </article>   <article class=\"project-card\">     <div class='project-art mint project-art-expand'><a class='project-preview-link project-mock-link' href='https://annika-hk777.vercel.app/' target='_blank' rel='noopener noreferrer' aria-label='Open Bazar Dor market prices live project'><div class='market-site-preview' aria-hidden='true'><div class='market-site-nav'><b>বাজার<span>দর</span></b><span>আজকের বাজার</span><span>দাম তুলনা</span><i>⌕</i></div><div class='market-site-body'><span class='market-eyebrow'>BANGLADESH MARKET WATCH</span><h4>আজকের বাজারদর,<br/>এক জায়গায়।</h4><p>নিত্যপ্রয়োজনীয় পণ্যের দাম দেখুন ও তুলনা করুন।</p><div class='market-price-row'><span>চাল <b>৳ ৬৮/kg</b></span><span>ডিম <b>৳ ১৪৪/dozen</b></span><span>পেঁয়াজ <b>৳ ৮০/kg</b></span></div></div></div><span class='preview-chip'><i></i> LIVE PROJECT <b>↗</b></span></a></div><div class=\"project-info\">       <div class=\"tag-row\"><span>Market Platform</span><span>LIVE PROJECT</span></div>       <h3>Bazar Dor, Market Prices</h3>       <p>A Bengali focused platform for exploring everyday essentials and market prices across Bangladesh in one place.</p>       <div class=\"project-stack\"><span>Next.js</span><span>React</span><span>Tailwind CSS</span></div><button type='button' class='project-sound-button' data-project-sound='1' aria-label='Play a unique short instrumental sound for project 2' title='Play project sound'><span aria-hidden='true'>♫</span><span>Play sound</span></button>       <a class=\"project-live-link\" href=\"https://annika-hk777.vercel.app/\" target=\"_blank\" rel=\"noopener noreferrer\">Explore live site <span aria-hidden=\"true\">↗</span></a>     </div>   </article> <article class='project-card'><div class='project-art sky'><a class='project-preview-link' href='https://react-dev-stack-annika2004.netlify.app/' target='_blank' rel='noopener noreferrer' aria-label='Open React Dev Stack live website'><img class='project-preview-image' src='/project-devstack.png' alt='Actual screenshot preview of the React Dev Stack application' loading='lazy' /><span class='preview-chip'><i></i> LIVE PREVIEW <b>↗</b></span></a></div><div class='project-info'><div class='tag-row'><span>React App</span><span>LIVE PROJECT</span></div><h3>React Dev Stack — Annika</h3><p>A React-focused frontend showcase for exploring a developer stack and modern interface work. Open the live build to experience its layout and responsive UI directly.</p><div class='project-stack'><span>React</span><span>JavaScript</span><span>Frontend UI</span></div><button type='button' class='project-sound-button' data-project-sound='2' aria-label='Play a unique short instrumental sound for project 3' title='Play project sound'><span aria-hidden='true'>♫</span><span>Play sound</span></button><a class='project-live-link' href='https://react-dev-stack-annika2004.netlify.app/' target='_blank' rel='noopener noreferrer'>Explore live site <span aria-hidden='true'>↗</span></a></div></article><article class='project-card'><div class='project-art coral'><a class='project-preview-link' href='https://my-6th-asg-fitlog.vercel.app/' target='_blank' rel='noopener noreferrer' aria-label='Open FitLog live website'><img class='project-preview-image' src='/project-fitlog.png' alt='Actual screenshot preview of the FitLog fitness application' loading='lazy' /><span class='preview-chip'><i></i> LIVE PREVIEW <b>↗</b></span></a></div><div class='project-info'><div class='tag-row'><span>Fitness App</span><span>LIVE PROJECT</span></div><h3>FitLog — Workout Library</h3><p>A fitness-focused web project for exploring workouts and training categories, helping visitors scan exercise options and choose a routine.</p><div class='project-stack'><span>Fitness UI</span><span>Workout Library</span><span>Web App</span></div><button type='button' class='project-sound-button' data-project-sound='3' aria-label='Play a unique short instrumental sound for project 4' title='Play project sound'><span aria-hidden='true'>♫</span><span>Play sound</span></button><a class='project-live-link' href='https://my-6th-asg-fitlog.vercel.app/' target='_blank' rel='noopener noreferrer'>Explore live site <span aria-hidden='true'>↗</span></a></div></article></div><p class=\"disclaimer\">Two live projects, built for real audiences. Open each site to explore the experience in context.</p></div></section><section class=\"section about-section\" id=\"about\"><div class=\"container about-grid\"><div><p class=\"eyebrow\">A LITTLE ABOUT ME</p><h2>Useful first.<br/><span>Beautiful, too.</span></h2><div class=\"about-stamp\">DESIGNED WITH ✳ THE DETAILS IN MIND</div></div><div class=\"about-copy\"><p class=\"lead\">I believe the best interfaces make complicated things feel simple.</p><p>I’m Annika, a frontend developer interested in the place where thoughtful design and dependable code meet. I enjoy shaping clear layouts, building reusable UI and making sure an experience feels natural on every screen size.</p><p>My focus is on solid structure, responsive behaviour, accessible interactions and the small details that make a product feel considered.</p><div class=\"value-list\"><div><b>01</b><span><strong>Responsive by default</strong><small>Designed to work across screen sizes.</small></span></div><div><b>02</b><span><strong>Purposeful details</strong><small>Visual choices that support the message.</small></span></div><div><b>03</b><span><strong>Maintainable UI</strong><small>Reusable components and thoughtful structure.</small></span></div></div></div></div></section><section class=\"section skills-section\" id=\"stack\"><div class=\"container\"><p class=\"eyebrow\">ENGINEERING TOOLKIT</p><div class=\"tech-stack-heading\"><div><span class=\"tech-stack-overline\">ENGINEERING / TOOLKIT</span><h2>My tech <span>stack.</span></h2></div><p class=\"section-intro\">A blend of design and frontend tools for shaping polished interfaces, responsive experiences and purposeful motion.</p></div><div class=\"tech-stack-grid\" role=\"list\" aria-label=\"My technology stack\"><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-html\" aria-hidden=\"true\"><svg class=\"tech-mark\" viewBox=\"0 0 48 48\"><path fill=\"#E44D26\" d=\"M7 3h34l-3.2 36L24 43 10.2 39 7 3Z\"/><path fill=\"#F16529\" d=\"M24 6h13.2l-2.8 31.7L24 41V6Z\"/><path fill=\"#fff\" d=\"M13 11h22l-.4 4.5H18l.4 4.5h16l-1.5 12.2L24 35l-8.7-2.4-.6-6h4.7l.3 2.9 4.3 1.1 4.4-1.1.5-5.1H13.7L13 11Z\"/></svg></div><div class=\"tech-stack-copy\"><h3>HTML5</h3><p>Semantic structure</p></div></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-css\" aria-hidden=\"true\"><svg class=\"tech-mark\" viewBox=\"0 0 48 48\"><path fill=\"#264DE4\" d=\"M7 3h34l-3.2 36L24 43 10.2 39 7 3Z\"/><path fill=\"#2965F1\" d=\"M24 6h13.2l-2.8 31.7L24 41V6Z\"/><path fill=\"#fff\" d=\"M13.2 11h22.1l-.4 4.6H18.3l.4 4.6h16l-1.4 12.1L24 35l-8.7-2.4-.5-5.8h4.6l.3 2.9 4.3 1.1 4.4-1.1.5-5.1H13.8L13.2 11Z\"/></svg></div><div class=\"tech-stack-copy\"><h3>CSS3</h3><p>Visual styling</p></div></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-js\" aria-hidden=\"true\"><svg class=\"tech-mark js-mark\" viewBox=\"0 0 48 48\"><rect x=\"3\" y=\"3\" width=\"42\" height=\"42\" rx=\"4\" fill=\"#F7DF1E\"/><text x=\"8\" y=\"36\" font-family=\"Arial,sans-serif\" font-weight=\"800\" font-size=\"19\" fill=\"#171717\">JS</text></svg></div><div class=\"tech-stack-copy\"><h3>JavaScript</h3><p>Interactive behaviour</p></div></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-tailwind\" aria-hidden=\"true\"><svg class=\"tech-mark tailwind-mark\" viewBox=\"0 0 48 32\"><path fill=\"#38BDF8\" d=\"M24 0C17.6 0 13.6 3.2 12 9.6 14.4 6.4 17.2 5.2 20.4 6c1.8.4 3.1 1.8 4.6 3.3 2.4 2.5 5.2 5.3 11 5.3 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3.1-1.8-4.6-3.3C32.6 2.8 29.8 0 24 0ZM12 16C5.6 16 1.6 19.2 0 25.6c2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3.1 1.8 4.6 3.3 2.4 2.5 5.2 5.3 11 5.3 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3.1-1.8-4.6-3.3C20.6 18.8 17.8 16 12 16Z\"/></svg></div><div class=\"tech-stack-copy\"><h3>Tailwind CSS</h3><p>Utility based styling</p></div></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-react\" aria-hidden=\"true\"><svg class=\"tech-mark react-mark\" viewBox=\"0 0 48 48\"><g fill=\"none\" stroke=\"#61DAFB\" stroke-width=\"2.25\"><ellipse cx=\"24\" cy=\"24\" rx=\"21\" ry=\"8.2\"/><ellipse cx=\"24\" cy=\"24\" rx=\"21\" ry=\"8.2\" transform=\"rotate(60 24 24)\"/><ellipse cx=\"24\" cy=\"24\" rx=\"21\" ry=\"8.2\" transform=\"rotate(120 24 24)\"/></g><circle cx=\"24\" cy=\"24\" r=\"3.8\" fill=\"#61DAFB\"/></svg></div><div class=\"tech-stack-copy\"><h3>React.js</h3><p>Reusable UI components</p></div></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-next\" aria-hidden=\"true\"><svg class=\"tech-mark next-mark\" viewBox=\"0 0 48 48\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"44\" rx=\"9\" fill=\"#08090D\"/><path fill=\"#fff\" d=\"M12 35V13h5.2l13.1 14.9V13H36v22h-5.1L17.8 20.1V35H12Z\"/><path fill=\"#777\" d=\"M30.3 29.4 35 35h-4.1l-3.4-4.1z\"/></svg></div><div class=\"tech-stack-copy\"><h3>Next.js</h3><p>Modern web applications</p></div></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-figma\" aria-hidden=\"true\"><svg class=\"tech-mark figma-mark\" viewBox=\"0 0 38 57\"><path fill=\"#F24E1E\" d=\"M9.5 0H19v19H9.5a9.5 9.5 0 0 1 0-19Z\"/><path fill=\"#FF7262\" d=\"M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0Z\"/><path fill=\"#A259FF\" d=\"M9.5 19H19v19H9.5a9.5 9.5 0 0 1 0-19Z\"/><circle cx=\"28.5\" cy=\"28.5\" r=\"9.5\" fill=\"#1ABCFE\"/><path fill=\"#0ACF83\" d=\"M9.5 38H19v9.5a9.5 9.5 0 1 1-9.5-9.5Z\"/></svg></div><div class=\"tech-stack-copy\"><h3>Figma</h3><p>UI design &amp; prototyping</p></div></article><article class=\"tech-stack-item\" role=\"listitem\"><div class=\"tech-stack-icon icon-motion\" aria-hidden=\"true\"><svg class=\"tech-mark motion-mark\" viewBox=\"0 0 48 48\"><rect x=\"2\" y=\"2\" width=\"44\" height=\"44\" rx=\"12\" fill=\"#181428\"/><path fill=\"#A78BFA\" d=\"M8 14h10l8 10 8-10h6L26 35 18 25l-5 9H7l8-14z\"/><path fill=\"#fff\" d=\"M19 14h6l8 10 7-10h-7l-8 10z\" opacity=\".9\"/></svg></div><div class=\"tech-stack-copy\"><h3>Motion</h3><p>UI animation &amp; transitions</p></div></article></div><div class=\"tech-stack-focus\"><span class=\"tech-stack-focus-label\">FOCUS AREAS</span><div><span>Frontend Development</span><span>Responsive UI</span><span>Reusable Components</span><span>Web Interactions</span></div></div></div></section><section class=\"process-section\"><div class=\"container\"><p class=\"eyebrow\">HOW I WORK</p><h2>A good process leads to <span>better work.</span></h2><div class=\"process-grid\"><article><h3>Understand</h3><p>Clarify the goal, audience and essential user journey.</p></article><article><h3>Shape</h3><p>Create a clear structure and visual direction.</p></article><article><h3>Build</h3><p>Develop responsive components with care.</p></article><article><h3>Refine</h3><p>Review screen sizes, states and finishing details.</p></article></div></div></section><section class=\"section education-section\" id=\"education\"><div class=\"container\"><div class=\"section-heading\"><div><p class=\"eyebrow\">EDUCATION</p><h2>Always learning.<br/><span>Always building.</span></h2></div><p class=\"section-intro\">My learning journey is built around practical projects, coding practice and a growing understanding of modern frontend development.</p></div><div class=\"education-card\"><div class=\"education-number\">01</div><div class=\"education-details\"><h3>Frontend Development</h3><p>Ongoing learning through practical work with HTML, CSS, JavaScript, Tailwind CSS, React.js and Next.js.</p><div class=\"education-stack\"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Tailwind CSS</span><span>React.js</span><span>Next.js</span></div></div><span class=\"education-status\">CONTINUOUS LEARNING</span></div><p class=\"education-note\">Formal education details can be added here once the institution, qualification and dates are confirmed.</p></div></section><section class=\"section resume-section\" id=\"resume\"><div class=\"container\"><div class=\"resume-card\"><div><p class=\"eyebrow\">RESUME</p><h2>My background,<br/><span>at a glance.</span></h2><p class=\"resume-copy\">Looking for a quick overview of my skills and frontend journey? Get in touch to request my latest resume.</p></div><a class=\"button primary\" href=\"#lets-talk\">Request my resume <span aria-hidden=\"true\">↗</span></a></div></div></section><section class=\"contact-section\" id=\"lets-talk\"><div class=\"container\"><div class=\"contact-card contact-card-expanded\"><div class=\"contact-intro\"><p class=\"eyebrow\">LET’S TALK</p><span class=\"contact-overline\">GOOD IDEAS START WITH A CONVERSATION</span><h2>Have a project?<br/>Let’s make it <span>real.</span></h2><p class=\"contact-copy\">I build responsive, thoughtful web experiences for real people and real goals. For freelance projects, collaborations or frontend opportunities, choose a channel and reach out.</p><div class=\"contact-actions\"><a class=\"button primary\" href=\"#social-links\">Find my contact links <span aria-hidden=\"true\">↘</span></a><a class=\"button secondary\" href=\"https://github.com/samscaleup777\" target=\"_blank\" rel=\"noopener noreferrer\">View GitHub <span aria-hidden=\"true\">↗</span></a></div><small class=\"placeholder-note\">Email and profile links marked “Add profile URL” will be connected when the details are ready.</small></div><div class=\"social-panel\" id=\"social-links\"><div class=\"social-panel-heading\"><div><span class=\"social-kicker\">PROFESSIONAL NETWORK</span><h3>Connect with me.</h3></div><span class=\"social-count\">06 CHANNELS</span></div><div class=\"social-grid\"><a class=\"social-link\" href=\"https://github.com/samscaleup777\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Visit GitHub profile\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.07-1.15 3.07-1.15.62 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z\"/></svg><span class=\"social-copy\"><strong>GitHub</strong><small>Code &amp; projects</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></a><div class=\"social-link is-placeholder\" aria-label=\"LinkedIn profile link to be added later\"><span class=\"social-icon linkedin\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M5.2 3.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.1 7.2h3.8v15.1H1.1zM7.3 7.2H11v2.1h.1c.5-1 1.8-2.5 4.5-2.5 4.8 0 5.7 3.1 5.7 7.1v8.4h-3.9v-7.4c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.5H8.2V7.2z\"/></svg></span><span class=\"social-copy\"><strong>LinkedIn</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"X / Twitter profile link to be added later\"><span class=\"social-icon x\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.8 22H1.7l7.3-8.4L1 2h6.4l4.5 7.5L18.9 2Zm-1.1 18h1.7L6.5 3.9H4.7L17.8 20Z\"/></svg></span><span class=\"social-copy\"><strong>X / Twitter</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"Fiverr profile link to be added later\"><span class=\"social-icon fiverr\"><span class=\"wordmark-icon\">fi</span></span><span class=\"social-copy\"><strong>Fiverr</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"Upwork profile link to be added later\"><span class=\"social-icon upwork\"><span class=\"wordmark-icon\">up</span></span><span class=\"social-copy\"><strong>Upwork</strong><small>Add profile URL</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div><div class=\"social-link is-placeholder\" aria-label=\"Email profile link to be added later\"><span class=\"social-icon email\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 5.5h18v13H3zM3.5 6l8.5 7 8.5-7\"/></svg></span><span class=\"social-copy\"><strong>Email</strong><small>Add email address</small></span><span class=\"social-arrow\" aria-hidden=\"true\">↗</span></div></div><p class=\"social-panel-note\">GitHub is linked now. The remaining destinations are clearly marked placeholders, not invented profile URLs.</p></div></div></div></section></main><footer class=\"site-footer\"><div class=\"container footer-inner\"><a class=\"brand\" href=\"#top\"><span class=\"brand-mark brand-logo-mark\"><img src=\"/as-mark-31b3d8.webp\" alt=\"AS logo\" width=\"48\" height=\"48\" /></span><span><b>Annika</b><small>FRONTEND DEVELOPER</small></span></a><p>Designed with intention. Built with care.</p><span>© <!-- -->2026<!-- --> Annika</span></div></footer></div>";

export default function HomePage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const navigationEntry = window.performance?.getEntriesByType?.("navigation")?.[0];
    if (navigationEntry?.type === "reload") {
      if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      // Repeat after the browser has applied any delayed scroll restoration.
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => window.scrollTo(0, 0)));
      window.setTimeout(() => window.scrollTo(0, 0), 80);
    }
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
      sceneDpr = Math.min(window.devicePixelRatio || 1, 1.5);
      sceneCanvas.width = Math.round(sceneWidth * sceneDpr);
      sceneCanvas.height = Math.round(sceneHeight * sceneDpr);
      sceneCanvas.style.width = sceneWidth + "px";
      sceneCanvas.style.height = sceneHeight + "px";
      sceneCtx.setTransform(sceneDpr, 0, 0, sceneDpr, 0, 0);
      const desiredCount = reduceMotion ? 28 : Math.max(34, Math.min(76, Math.round(sceneWidth * sceneHeight / 21000)));
      while (sceneParticles.length < desiredCount) {
        sceneParticles.push({
          x: Math.random() * sceneWidth,
          y: Math.random() * sceneHeight,
          vx: (Math.random() - .5) * .34,
          vy: (Math.random() - .5) * .34,
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
      const fieldShiftX = Math.max(-54, Math.min(54, (event.clientX - window.innerWidth * .5) * .065));
      const fieldShiftY = Math.max(-40, Math.min(40, (event.clientY - window.innerHeight * .5) * .065));
      const fieldStyle = document.documentElement.style;
      fieldStyle.setProperty("--field-shift-x", fieldShiftX.toFixed(1) + "px");
      fieldStyle.setProperty("--field-shift-y", fieldShiftY.toFixed(1) + "px");
      fieldStyle.setProperty("--field-pointer-x", event.clientX + "px");
      fieldStyle.setProperty("--field-pointer-y", event.clientY + "px");
      fieldStyle.setProperty("--field-pointer-alpha", "1");
    };
    const handleScenePointerOut = (event) => {
      if (!event.relatedTarget) {
        sceneCursor.active = false;
        document.documentElement.style.setProperty("--field-pointer-alpha", "0");
      }
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
      if (!reduceMotion && timestamp - sceneLastFrame < 33) {
        sceneAnimationFrame = window.requestAnimationFrame(drawScene);
        return;
      }
      const delta = sceneLastFrame ? Math.min(2, (timestamp - sceneLastFrame) / 16.67) : 1;
      sceneLastFrame = timestamp;
      const ctx = sceneCtx;
      const now = timestamp * .001;
      ctx.clearRect(0, 0, sceneWidth, sceneHeight);
      // Orbit Loom: animated orbit rings, floating glass tiles and pointer-linked geometry.
      {
        const pointerShiftX = sceneCursor.active && finePointer ? (sceneCursor.drawX - sceneWidth * .5) * .025 : 0;
        const pointerShiftY = sceneCursor.active && finePointer ? (sceneCursor.drawY - sceneHeight * .5) * .025 : 0;
        const anchorX = sceneWidth * (sceneWidth > 900 ? .66 : .5) + pointerShiftX;
        const anchorY = sceneHeight * .46 + pointerShiftY;
        const unit = Math.min(sceneWidth, sceneHeight);
        const tracks = [
          { rx: unit * .37, ry: unit * .245, tilt: -.22, speed: .032, color: scenePalette.two, alpha: .27, dash: [] },
          { rx: unit * .29, ry: unit * .34, tilt: .55, speed: -.024, color: scenePalette.one, alpha: .22, dash: [5, 10] },
          { rx: unit * .405, ry: unit * .31, tilt: .9, speed: .017, color: scenePalette.three, alpha: .18, dash: [2, 12] }
        ];
        ctx.save();
        ctx.translate(anchorX, anchorY);
        tracks.forEach((track, index) => {
          ctx.save();
          ctx.rotate(track.tilt + now * track.speed);
          ctx.globalAlpha = track.alpha;
          ctx.strokeStyle = track.color;
          ctx.lineWidth = index === 0 ? 1.15 : .8;
          ctx.setLineDash(track.dash);
          ctx.beginPath();
          ctx.ellipse(0, 0, track.rx, track.ry, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.globalAlpha = track.alpha * 1.6;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(0, 0, track.rx, track.ry, 0, now * .08 + index * 1.9, now * .08 + index * 1.9 + .62);
          ctx.stroke();
          for (let tile = 0; tile < 3; tile++) {
            const angle = now * (track.speed * 2.3) + tile * (Math.PI * 2 / 3) + index * .8;
            const x = Math.cos(angle) * track.rx;
            const y = Math.sin(angle) * track.ry;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-track.tilt - now * track.speed + Math.sin(now + tile) * .08);
            if ((tile + index) % 2 === 0) {
              const boxSize = tile === 0 ? 28 : 21;
              ctx.globalAlpha = .55;
              ctx.fillStyle = "rgba(14, 18, 31, .68)";
              ctx.fillRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize);
              ctx.strokeStyle = track.color;
              ctx.lineWidth = 1;
              ctx.strokeRect(-boxSize / 2, -boxSize / 2, boxSize, boxSize);
              ctx.globalAlpha = .72;
              ctx.fillStyle = track.color;
              ctx.fillRect(-boxSize / 2 + 5, -boxSize / 2 + 5, 3, 3);
              ctx.fillRect(boxSize / 2 - 8, boxSize / 2 - 8, 3, 3);
              ctx.globalAlpha = .45;
              ctx.strokeStyle = track.color;
              ctx.beginPath();
              ctx.moveTo(-boxSize / 2 + 5, 1);
              ctx.lineTo(boxSize / 2 - 5, 1);
              ctx.stroke();
            } else {
              ctx.globalAlpha = .7;
              ctx.fillStyle = track.color;
              ctx.beginPath();
              ctx.arc(0, 0, 2.2, 0, Math.PI * 2);
              ctx.fill();
              ctx.globalAlpha = .28;
              ctx.beginPath();
              ctx.arc(0, 0, 7, 0, Math.PI * 2);
              ctx.strokeStyle = track.color;
              ctx.stroke();
            }
            ctx.restore();
          }
          ctx.restore();
        });
        ctx.globalAlpha = .11;
        ctx.strokeStyle = scenePalette.two;
        ctx.lineWidth = .6;
        ctx.beginPath();
        ctx.moveTo(-unit * .42, 0); ctx.lineTo(unit * .42, 0);
        ctx.moveTo(0, -unit * .39); ctx.lineTo(0, unit * .39);
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 1;
      }


      if (sceneCursor.active && finePointer && !reduceMotion) {
        sceneCursor.drawX += (sceneCursor.x - sceneCursor.drawX) * .16;
        sceneCursor.drawY += (sceneCursor.y - sceneCursor.drawY) * .16;
        const glow = ctx.createRadialGradient(sceneCursor.drawX, sceneCursor.drawY, 0, sceneCursor.drawX, sceneCursor.drawY, 300);
        glow.addColorStop(0, scenePalette.one);
        glow.addColorStop(.36, scenePalette.two);
        glow.addColorStop(1, "transparent");
        ctx.globalAlpha = document.documentElement.dataset.time === "day" ? .095 : .15;
        ctx.fillStyle = glow;
        ctx.fillRect(sceneCursor.drawX - 300, sceneCursor.drawY - 300, 600, 600);
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
            if (distance > 1 && distance < 220) {
              const force = (1 - distance / 170) * .24 * delta;
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
          if (distance < 158) {
            const nearCursor = sceneCursor.active && Math.hypot((particle.x + other.x) / 2 - sceneCursor.drawX, (particle.y + other.y) / 2 - sceneCursor.drawY) < 230;
            ctx.globalAlpha = (1 - distance / 158) * (nearCursor ? .38 : .16);
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
        ctx.arc(particle.x, particle.y, particle.size * (sceneCursor.active && Math.hypot(particle.x - sceneCursor.drawX, particle.y - sceneCursor.drawY) < 165 ? 1.85 : 1), 0, Math.PI * 2);
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
      const rootStyle = document.documentElement.style;
      rootStyle.setProperty("--pointer-x", `${event.clientX}px`);
      rootStyle.setProperty("--pointer-y", `${event.clientY}px`);
      rootStyle.setProperty("--field-pointer-x", `${event.clientX}px`);
      rootStyle.setProperty("--field-pointer-y", `${event.clientY}px`);
      rootStyle.setProperty("--field-pointer-alpha", "1");
      const shiftX = Math.max(-56, Math.min(56, (event.clientX - window.innerWidth * .5) * .075));
      const shiftY = Math.max(-42, Math.min(42, (event.clientY - window.innerHeight * .5) * .075));
      rootStyle.setProperty("--field-shift-x", `${shiftX.toFixed(1)}px`);
      rootStyle.setProperty("--field-shift-y", `${shiftY.toFixed(1)}px`);
    };
    if (finePointer && !reduceMotion) root.addEventListener("pointermove", handlePointerMove, { passive: true });

    const tiltCards = [];
    const magneticButtons = [];
    if (finePointer && !reduceMotion) {
      root.querySelectorAll(".project-card").forEach((card) => {
        const tilt = {
          currentX: 0, currentY: 0, targetX: 0, targetY: 0,
          inside: false, frame: 0
        };
        const animateTilt = () => {
          tilt.frame = 0;
          const follow = tilt.inside ? 0.38 : 0.24;
          tilt.currentX += (tilt.targetX - tilt.currentX) * follow;
          tilt.currentY += (tilt.targetY - tilt.currentY) * follow;
          const settled = Math.abs(tilt.targetX - tilt.currentX) < 0.035
            && Math.abs(tilt.targetY - tilt.currentY) < 0.035;
          if (settled) {
            tilt.currentX = tilt.targetX;
            tilt.currentY = tilt.targetY;
          }
          card.style.setProperty("--card-tilt-x", `${tilt.currentX.toFixed(2)}deg`);
          card.style.setProperty("--card-tilt-y", `${tilt.currentY.toFixed(2)}deg`);
          card.style.setProperty(
            "transform",
            `perspective(760px) rotateX(${tilt.currentY.toFixed(2)}deg) rotateY(${tilt.currentX.toFixed(2)}deg) translateY(${tilt.inside ? -5 : 0}px)`,
            "important"
          );
          if (tilt.inside) {
            if (!settled) tilt.frame = window.requestAnimationFrame(animateTilt);
          } else if (!settled) {
            tilt.frame = window.requestAnimationFrame(animateTilt);
          } else {
            card.classList.remove("is-tilting");
            card.style.removeProperty("transform");
            card.style.removeProperty("z-index");
          }
        };
        const queueTilt = () => {
          if (!tilt.frame) tilt.frame = window.requestAnimationFrame(animateTilt);
        };
        const onMove = (event) => {
          const rect = card.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
          const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
          // Larger travel gives a deeper but still natural 3D response (up to ~12°).
          tilt.targetX = (.5 - x) * 24;
          tilt.targetY = (y - .5) * 20;
          tilt.inside = true;
          card.classList.add("is-tilting");
          card.style.setProperty("--card-light-x", `${x * 100}%`);
          card.style.setProperty("--card-light-y", `${y * 100}%`);
          card.style.setProperty("z-index", "20", "important");
          queueTilt();
        };
        const onLeave = () => {
          tilt.inside = false;
          tilt.targetX = 0;
          tilt.targetY = 0;
          card.style.setProperty("--card-light-x", "50%");
          card.style.setProperty("--card-light-y", "50%");
          queueTilt();
        };
        const stopTilt = () => {
          if (tilt.frame) window.cancelAnimationFrame(tilt.frame);
          tilt.frame = 0;
          card.classList.remove("is-tilting");
          card.style.removeProperty("transform");
          card.style.removeProperty("z-index");
        };
        card.addEventListener("pointermove", onMove, { passive: true });
        card.addEventListener("pointerleave", onLeave);
        tiltCards.push([card, onMove, onLeave, stopTilt]);
      });
      if (!reduceMotion) {
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
    // Project sound controls plus unique, short click signatures for all interactive buttons/CTAs.
    const soundButtons = [];
    const clickSoundHandlers = [];
    const playClickSound = async (index) => {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audio = new AudioContextClass();
      try {
        await audio.resume();
        const start = audio.currentTime + 0.012;
        const intervalSets = [
          [4, 7], [3, 7], [5, 9], [2, 7], [4, 9], [3, 8],
          [5, 7], [2, 9], [4, 7], [3, 9], [5, 8], [2, 5]
        ];
        const intervals = intervalSets[index % intervalSets.length];
        const baseMidi = 48 + index * 1.17;
        const midiToFrequency = (midi) => 440 * Math.pow(2, (midi - 69) / 12);
        const frequencies = [baseMidi, baseMidi + intervals[0], baseMidi + intervals[1]];
        const waveforms = ["sine", "triangle", "sine", "triangle", "sine", "triangle"];
        frequencies.forEach((midi, noteIndex) => {
          const oscillator = audio.createOscillator();
          const gain = audio.createGain();
          const noteStart = start + noteIndex * (0.075 + (index % 3) * 0.012);
          oscillator.type = waveforms[index % waveforms.length];
          oscillator.frequency.setValueAtTime(midiToFrequency(midi), noteStart);
          gain.gain.setValueAtTime(0.0001, noteStart);
          gain.gain.exponentialRampToValueAtTime(0.065, noteStart + 0.018);
          gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.17);
          oscillator.connect(gain);
          gain.connect(audio.destination);
          oscillator.start(noteStart);
          oscillator.stop(noteStart + 0.185);
        });
        window.setTimeout(() => audio.close().catch(() => {}), 650);
      } catch (error) {
        audio.close().catch(() => {});
      }
    };

    // Dedicated short instrumental signatures for the four individual projects.
    const projectSoundHandlers = [];
    const projectSoundProfiles = [
      { notes:[523.25,659.25,783.99,1046.5], wave:"sine" },
      { notes:[392,493.88,587.33,783.99], wave:"triangle" },
      { notes:[440,554.37,659.25,880], wave:"sine" },
      { notes:[329.63,392,493.88,659.25], wave:"triangle" }
    ];
    const playProjectSound = async (index) => {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audio = new AudioContextClass();
      const profile = projectSoundProfiles[index % projectSoundProfiles.length];
      try {
        await audio.resume();
        const start = audio.currentTime + 0.015;
        profile.notes.forEach((frequency, noteIndex) => {
          const oscillator = audio.createOscillator();
          const gain = audio.createGain();
          const at = start + noteIndex * 0.105;
          oscillator.type = profile.wave;
          oscillator.frequency.setValueAtTime(frequency, at);
          gain.gain.setValueAtTime(0.0001, at);
          gain.gain.exponentialRampToValueAtTime(0.052, at + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.235);
          oscillator.connect(gain);
          gain.connect(audio.destination);
          oscillator.start(at);
          oscillator.stop(at + 0.25);
        });
        window.setTimeout(() => audio.close().catch(() => {}), 900);
      } catch (error) {
        audio.close().catch(() => {});
      }
    };
    root.querySelectorAll(".project-sound-button").forEach((button) => {
      const index = Number(button.dataset.projectSound || 0);
      const handler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        playProjectSound(index);
        button.classList.add("sound-clicked");
        window.setTimeout(() => button.classList.remove("sound-clicked"), 260);
      };
      button.addEventListener("click", handler);
      projectSoundHandlers.push([button, handler]);
    });

    // Actual buttons, button-styled CTAs, project links and main navigation each get
    // a unique sound identity, rather than one generic click noise for the whole site.
    const soundTargets = Array.from(root.querySelectorAll(
      "button:not(.project-sound-button), a[href], [role='button']"
    ));
    soundTargets.forEach((element, index) => {
      const handler = () => {
        playClickSound(index);
        element.classList.add("sound-clicked");
        window.setTimeout(() => element.classList.remove("sound-clicked"), 240);
      };
      element.dataset.clickSoundIndex = String(index);
      element.addEventListener("click", handler, true);
      clickSoundHandlers.push([element, handler]);
    });
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
      tiltCards.forEach(([card, onMove, onLeave, stopTilt]) => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
        stopTilt?.();
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
      clickSoundHandlers.forEach(([element, handler]) => element.removeEventListener("click", handler, true));
      projectSoundHandlers.forEach(([button, handler]) => button.removeEventListener("click", handler));
      window.clearInterval(clockTimer);
      window.clearInterval(weatherTimer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <div ref={mountRef} dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}
