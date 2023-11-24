function toggleDropdown(element) {
  element.classList.toggle("is-active");
  element.parentNode.classList.toggle("is-active");
  const dropdown = element.parentNode.querySelector(".nav-dropdown-content")
  dropdown.classList.toggle("is-active");
}