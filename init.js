const topNav = document.getElementById("top-nav");
if (topNav) {
  const pathname = window.location.pathname;
  const urls = ["home", "about-us", "register", "login", "pricing"];

  topNav.innerHTML = `
    <ul>
      ${urls
        .map((el) => {
          return `<li ${
            `/${el}.html` === pathname ? "class='active'" : ""
          }><a href="/${el}.html">${el.replaceAll("-", " ")}</a></li>`;
        })
        .join("")}
    </ul>
  `;
}
// const arrowBtns = document.querySelectorAll("button.arrow").forEach((el) => {
//   el.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
// });
