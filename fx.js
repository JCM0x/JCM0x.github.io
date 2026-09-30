(function () {
  "use strict";
  var D = window.PORTFOLIO, $ = function (s) { return document.querySelector(s); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");
  var cur = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll("#nav a").forEach(function (a) { if (a.getAttribute("href") === cur) a.setAttribute("aria-current", "page"); });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || reduce || e.metaKey || e.ctrlKey || e.shiftKey || e.button || a.target || !/^[a-z]+\.html$/.test(a.getAttribute("href"))) return;
    e.preventDefault(); document.body.classList.add("leaving"); setTimeout(function () { location.href = a.getAttribute("href"); }, 240);
  });
  addEventListener("pageshow", function () { document.body.classList.remove("leaving"); });

  /* Fondo: red de nodos (decorativo) */
  var cv = $("#bg");
  if (cv && cv.getContext) {
    var c = cv.getContext("2d"), W, H, P = [], E = [];
    var size = function () { W = cv.width = innerWidth; H = cv.height = innerHeight;
      E = []; for (var q = 0; q < Math.min(45, W / 30); q++) E.push({ x: Math.random() * W, y: Math.random() * H, v: .3 + Math.random() * .7, r: Math.random() * 1.6 + .5, p: Math.random() * 6 });
      P = []; for (var i = 0, n = Math.min(70, Math.floor(W * H / 26000)); i < n; i++) P.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }); };
    var draw = function () {
      c.clearRect(0, 0, W, H);
      for (var i = 0; i < P.length; i++) { var a = P[i];
        if (!reduce) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }
        c.fillStyle = "rgba(200,162,90,.5)"; c.fillRect(a.x, a.y, 2, 2);
        for (var j = i + 1; j < P.length; j++) { var b = P[j], dx = a.x - b.x, dy = a.y - b.y, q = dx * dx + dy * dy;
          if (q < 14000) { c.strokeStyle = "rgba(229,56,59," + (.22 * (1 - q / 14000)) + ")"; c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke(); } } }
      for (var k = 0; k < E.length; k++) { var e = E[k];
        if (!reduce) { e.y -= e.v; e.p += .03; e.x += Math.sin(e.p) * .3; if (e.y < -4) { e.y = H + 4; e.x = Math.random() * W; } }
        c.fillStyle = "rgba(255,110,40," + (.28 + .2 * Math.sin(e.p * 3)) + ")"; c.fillRect(e.x, e.y, e.r, e.r); }
      if (!reduce && !document.hidden) requestAnimationFrame(draw);
    };
    size(); draw(); addEventListener("resize", function () { size(); if (reduce) draw(); });
    document.addEventListener("visibilitychange", function () { if (!document.hidden && !reduce) draw(); });
  }

  /* Brillo en tarjetas según el cursor */
  document.addEventListener("pointermove", function (e) {
    var t = e.target.closest && e.target.closest(".card"); if (!t) return;
    var r = t.getBoundingClientRect(); t.style.setProperty("--mx", (e.clientX - r.left) + "px"); t.style.setProperty("--my", (e.clientY - r.top) + "px");
  });

  /* Aparición al hacer scroll */
  var items = document.querySelectorAll(".card,.skill,section>h2,.sgroup");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .1 });
    items.forEach(function (el) { el.classList.add("rv"); io.observe(el); });
  }

  /* Filtro de skills */
  var sg = $("#skill-grid");
  if (sg) {
    var bar = document.createElement("div"); bar.className = "filters"; bar.setAttribute("role", "group"); bar.setAttribute("aria-label", "Filtrar skills");
    ["ALL", "ACTIVE", "LEARNING", "FAMILIAR"].forEach(function (f, i) {
      var b = document.createElement("button"); b.type = "button"; b.textContent = f; b.setAttribute("aria-pressed", i === 0);
      b.addEventListener("click", function () {
        bar.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        sg.querySelectorAll(".skill").forEach(function (s) { s.hidden = f !== "ALL" && !s.classList.contains("lv-" + f.toLowerCase()); });
      }); bar.appendChild(b);
    });
    sg.parentNode.insertBefore(bar, sg);
  }

  /* Rol rotativo */
  var role = $("#role");
  if (role && !reduce) { var R = ["BLUE TEAM", "SOC", "NETWORK SECURITY", "PENTESTER", "RED TEAM"], k = 0;
    setInterval(function () { k = (k + 1) % R.length; role.textContent = R[k]; }, 2200); }

  /* Terminal interactiva (solo muestra información de este sitio) */
  var term = $("#term"), cmd = $("#cmd");
  if (term && cmd) {
    var out = function (t) { term.textContent += (term.textContent ? "\n" : "") + t; term.scrollTop = term.scrollHeight; };
    var list = function (a, f) { return a.map(f).join("\n"); };
    var C = {
      help: function () { return "Comandos: whoami, roles, projects, labs, skills, links, clear"; },
      whoami: function () { return "JCM0x — estudiante de ciberseguridad y redes (SENA). Blue Team / SOC / redes, con práctica en pentesting."; },
      roles: function () { return "BLUE TEAM // SOC // NETWORK SECURITY // PENTESTER // RED TEAM (en aprendizaje)"; },
      projects: function () { return D.projects.length ? list(D.projects, function (p) { return "[" + p.id + "] " + p.title + " — " + p.status; }) : "No hay proyectos aún; se añadirán a medida que avance mi formación."; },
      labs: function () { return list(D.labs, function (l) { return "[" + l.tag + "] " + l.name; }); },
      skills: function () { return D.skills.map(function (g) { return g.group + ": " + g.items.map(function (s) { return s[0] + " (" + s[1] + ")"; }).join(", "); }).join("\n"); },
      links: function () { return "GitHub: " + D.links.github + "\nLinkedIn: " + D.links.linkedin + "\nTryHackMe: " + D.links.tryhackme; },
      clear: function () { term.textContent = ""; return ""; }
    };
    var boot = ["> INITIALIZING SECURITY OPERATIONS...", "[OK] NETWORK MODULE", "[OK] LOG ANALYSIS", "[OK] THREAT MONITORING", "[OK] PORTFOLIO DATABASE", "SYSTEM STATUS: ONLINE", "Escribe 'help' para ver comandos."];
    if (reduce) out(boot.join("\n")); else { var i = 0; (function nx() { if (i < boot.length) { out(boot[i++]); setTimeout(nx, 380); } })(); }
    cmd.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return; var v = cmd.value.trim().toLowerCase(); cmd.value = ""; if (!v) return;
      out("> " + v); var r = C[v] ? C[v]() : "Comando no reconocido: '" + v + "'. Prueba 'help'."; if (r) out(r);
    });
  }

  /* Pantalla de arranque (una vez por sesión, se puede saltar) */
  var bt = $("#boot");
  if (bt) {
    var seen = false; try { seen = sessionStorage.getItem("boot") === "1"; sessionStorage.setItem("boot", "1"); } catch (e) {}
    var done = function () { bt.classList.add("off"); setTimeout(function () { bt.remove(); }, 500); };
    if (seen || reduce) bt.remove(); else { setTimeout(done, 1800); bt.addEventListener("click", done); document.addEventListener("keydown", done, { once: true }); }
  }

  /* Inclinación 3D de los módulos */
  if (!reduce) document.querySelectorAll(".mod").forEach(function (m) {
    m.addEventListener("pointermove", function (e) { var r = m.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      m.style.transform = "perspective(700px) rotateY(" + x * 9 + "deg) rotateX(" + (-y * 9) + "deg) translateY(-4px)"; });
    m.addEventListener("pointerleave", function () { m.style.transform = ""; });
  });
})();
