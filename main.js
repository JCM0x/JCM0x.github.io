(function () {
  "use strict";
  var D = window.PORTFOLIO, $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; };
  var link = function (u, t) { return u ? '<a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + t + "</a>" : '<span class="dim">' + t + ": N/A</span>"; };
  var put = function (sel, html) { var el = $(sel); if (el) el.innerHTML = html; };

  put("#ops-grid", D.ops.map(function (o) {
    return '<article class="card"><h3>' + esc(o.title) + '</h3><p class="kicker">TAREAS EN PRÁCTICA</p><ul class="tasks">' +
      o.tasks.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></article>";
  }).join(""));

  put("#project-list", D.projects.length ? D.projects.map(function (p) {
    var row = function (k, v) { return "<dt>" + k + "</dt><dd>" + esc(v) + "</dd>"; };
    return '<article class="card case"><p class="kicker">CASE FILE // PROJECT ' + esc(p.id) + "</p><h3>" + esc(p.title) + "</h3>" +
      '<p><span class="tag">' + esc(p.category) + '</span> <span class="tag">STATUS: ' + esc(p.status) + "</span></p><dl>" +
      row("OBJECTIVE", p.objective) + row("TOOLS", p.tools.join(" / ")) + row("METHODOLOGY", p.methodology) + row("EVIDENCE", p.evidence) +
      row("FINDINGS", p.findings) + row("RESULT", p.result) + row("LESSONS", p.lessons) + "</dl><p>" + link(p.repo, "Repo") + " · " + link(p.writeup, "Writeup") + "</p></article>";
  }).join("") : '<p class="empty">No hay proyectos aún; se añadirán a medida que avance mi formación.</p>');

  put("#lab-list", D.labs.map(function (l) {
    return '<article class="card"><p class="kicker">' + esc(l.tag) + "</p><h3>" + esc(l.name) + '</h3><p><span class="tag">' + esc(l.status) + "</span></p><p>" + esc(l.notes) + "</p><p>" + link(l.url, "Detalle") + "</p></article>";
  }).join(""));

  put("#skill-grid", D.skills.map(function (g) {
    return '<div class="sgroup"><h3>' + esc(g.group) + '</h3><ul class="skills">' + g.items.map(function (s) {
      return '<li class="skill lv-' + s[1].toLowerCase() + '"><span>' + esc(s[0]) + "</span><b>" + s[1] + "</b></li>";
    }).join("") + "</ul></div>";
  }).join(""));

  put("#training-list", D.training.map(function (t) {
    return '<article class="card"><span class="badge" aria-hidden="true">' + esc(t.badge) + "</span><h3>" + esc(t.name) + '</h3><p class="kicker">' + esc(t.org) + " · " + esc(t.date) + "</p><p>" + esc(t.desc) + "</p><p>" + link(t.url, "Credencial") + "</p></article>";
  }).join(""));

  put("#contact-list", [["GitHub", D.links.github], ["TryHackMe", D.links.tryhackme], ["LinkedIn", D.links.linkedin]].map(function (c) {
    return '<li><a class="btn" href="' + esc(c[1]) + '" target="_blank" rel="noopener noreferrer">' + c[0] + "</a></li>";
  }).join("") + '<li><a class="btn" href="mailto:' + esc(D.links.email) + '">Email: ' + esc(D.links.email) + "</a></li>");

  document.querySelectorAll("[data-link]").forEach(function (a) { a.href = D.links[a.getAttribute("data-link")]; });

  var t = $(".nav-toggle"), n = $("#nav"), v = $(".veil"), x = $(".dclose");
  if (t && n) {
    var setO = function (o) { n.classList.toggle("open", o); t.setAttribute("aria-expanded", o); t.setAttribute("aria-label", o ? "Cerrar menú de navegación" : "Abrir menú de navegación"); if (v) v.hidden = !o; if (o) { var a = n.querySelector("a[aria-current],a"); if (a) a.focus(); } else t.focus(); };
    t.addEventListener("click", function () { setO(!n.classList.contains("open")); });
    if (x) x.addEventListener("click", function () { setO(false); });
    if (v) v.addEventListener("click", function () { setO(false); });
    document.addEventListener("keydown", function (e) {
      if (!n.classList.contains("open")) return;
      if (e.key === "Escape") { setO(false); return; }
      if (e.key === "Tab") { var f = n.querySelectorAll("a,button"), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }
    });
  }
})();
