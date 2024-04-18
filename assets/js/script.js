const sidebar = document.getElementById("sidebar");
const sidenav = document.getElementById("sidenav");

function sidebarToggle(active) {
     if (active) {
          sidebar.classList.add("opacity-100", "visible");
          sidebar.classList.remove("opacity-0", "invisible");
          sidenav.classList.add("translate-x-0");
          sidenav.classList.remove("translate-x-[400px]");
     } else {
          sidebar.classList.remove("opacity-100", "visible");
          sidebar.classList.add("opacity-0", "invisible");
          sidenav.classList.remove("translate-x-0");
          sidenav.classList.add("translate-x-[400px]");
     }
}

