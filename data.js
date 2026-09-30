/* ===== CONTENIDO DEL PORTAFOLIO ===== */
window.PORTFOLIO = {
  links: {
    github: "https://github.com/JCM0x",
    tryhackme: "https://tryhackme.com/p/DraB0",
    linkedin: "https://www.linkedin.com/in/jhonatan-steven",
    email: "jonetenprime@gmail.com"
  },

  ops: [
    {
      title: "LOG ANALYSIS",
      tasks: [
        "Analizar logs de autenticación y sistema en Linux",
        "Buscar intentos fallidos y patrones por IP y hora",
        "Documentar hallazgos y posibles indicadores"
      ]
    },
    {
      title: "NETWORK ANALYSIS",
      tasks: [
        "Enumerar puertos y servicios con Nmap en laboratorios",
        "Capturar y filtrar tráfico con Wireshark",
        "Analizar protocolos y comportamiento TCP/IP"
      ]
    },
    {
      title: "INCIDENT ANALYSIS",
      tasks: [
        "Construir líneas de tiempo a partir de evidencias",
        "Registrar fuentes y hallazgos",
        "Practicar documentación de incidentes en laboratorios"
      ]
    },
    {
      title: "THREAT DETECTION",
      tasks: [
        "Identificar IOC en logs y tráfico",
        "Relacionar comportamientos con MITRE ATT&CK",
        "Practicar enumeración web en entornos autorizados"
      ]
    },
    {
      title: "PENTESTING",
      tasks: [
        "Reconocimiento y enumeración",
        "Enumeración de servicios y aplicaciones web",
        "Validación de hallazgos en CTF y laboratorios autorizados"
      ]
    }
  ],

  projects: [],

  labs: [
    {
      tag: "TRYHACKME",
      name: "The Blob Blog",
      status: "COMPLETED",
      notes: "Reconocimiento, port knocking, FTP, esteganografía, Vigenère, command injection y escalada de privilegios.",
      url: "https://github.com/JCM0x/CTFS/tree/main/Blob_Blog"
    },
    {
      tag: "TRYHACKME",
      name: "Lian_Yu",
      status: "COMPLETED",
      notes: "Enumeración, FTP, esteganografía, extracción de credenciales, SSH, sudo y escalada con pkexec.",
      url: "https://github.com/JCM0x/CTFS"
    },
    {
      tag: "TRYHACKME",
      name: "Skynet",
      status: "COMPLETED",
      notes: "Reconocimiento, SMB, SquirrelMail, Cuppa CMS, RFI y escalada de privilegios mediante wildcard.",
      url: "https://github.com/JCM0x/CTFS"
    },
    {
      tag: "TRYHACKME",
      name: "Team",
      status: "IN PROGRESS",
      notes: "Laboratorio en progreso; se añadirá el writeup cuando esté terminado.",
      url: "https://github.com/JCM0x/CTFS"
    }
  ],

  skills: [
    {
      group: "NETWORK SECURITY",
      items: [
        ["TCP/IP", "ACTIVE"],
        ["Networking", "ACTIVE"],
        ["Nmap", "ACTIVE"],
        ["Network Enumeration", "LEARNING"],
        ["Service Enumeration", "LEARNING"],
        ["Wireshark", "LEARNING"],
        ["Traffic Analysis", "LEARNING"]
      ]
    },
    {
      group: "WEB SECURITY",
      items: [
        ["HTTP/HTTPS", "LEARNING"],
        ["Web Enumeration", "LEARNING"],
        ["Burp Suite", "FAMILIAR"],
        ["Reconnaissance", "LEARNING"],
        ["Basic Web Security", "LEARNING"],
        ["SMB/FTP Enumeration", "LEARNING"]
      ]
    },
    {
      group: "BLUE TEAM",
      items: [
        ["Log Analysis", "LEARNING"],
        ["IOC Analysis", "LEARNING"],
        ["Incident Analysis", "LEARNING"],
        ["MITRE ATT&CK Fundamentals", "FAMILIAR"]
      ]
    },
    {
      group: "SYSTEMS",
      items: [
        ["Linux", "LEARNING"],
        ["Linux CLI", "LEARNING"],
        ["Bash", "LEARNING"],
        ["Permissions", "LEARNING"]
      ]
    },
    {
      group: "TOOLCHAIN",
      items: [
        ["Nmap", "ACTIVE"],
        ["Wireshark", "LEARNING"],
        ["Burp Suite", "FAMILIAR"],
        ["Gobuster", "FAMILIAR"],
        ["FFUF", "FAMILIAR"],
        ["Hydra", "FAMILIAR"]
      ]
    }
  ],

  training: [
    {
      name: "Tecnólogo en Gestión de Redes de Datos",
      org: "SENA",
      date: "En curso",
      url: "",
      badge: "SENA",
      desc: "Formación actual en redes de datos, infraestructura y fundamentos relacionados con seguridad informática."
    },
    {
      name: "Junior Cybersecurity Analyst Career Path",
      org: "Cisco",
      date: "Expedición: jul 2026",
      url: "",
      badge: "CISCO",
      desc: "Formación/certificación de Cisco orientada a fundamentos de ciberseguridad y análisis."
    },
    {
      name: "Networking Basic",
      org: "Cisco Networking Academy",
      date: "Expedición: may 2026",
      url: "",
      badge: "CISCO",
      desc: "Formación en fundamentos de networking."
    },
    {
      name: "FortiGate 7.6 Operator",
      org: "Fortinet",
      date: "Expedición: may 2026",
      url: "",
      badge: "FTNT",
      desc: "Formación/certificación relacionada con operación de FortiGate."
    },
    {
      name: "NSE 3 Certified in Cybersecurity",
      org: "Fortinet",
      date: "Expedición: may 2026 · Vence: may 2028",
      url: "",
      badge: "FTNT",
      desc: "Certificación de fundamentos de ciberseguridad de Fortinet."
    }
  ]
};
