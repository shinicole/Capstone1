import html from "html-literal";

export default () => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="Home.html">Home</a></li>
      <li><a href="Contact.html">Contact</a></li>
      <li><a href="Events.html">Events</a></li>
      <li><a href="Members.html">Members</a></li>
    </ul>
  </nav>
`;
