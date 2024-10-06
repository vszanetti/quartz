import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <header>
      <script
        defer
        src="http://129.148.30.45:3000/script.js"
        data-website-id="95159691-bbc2-42e3-9147-4ebf634e05b7"
      ></script>
      <nav>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about/privacy">Privacy</a>
          </li>
        </ul>
      </nav>
      {children && children.length > 0 && <div>{children}</div>}
    </header>
  )
}

// CSS styling to resemble Morrick.me's layout
Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Ensures space between the title and the menu */
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem; /* Space between menu items */
}

nav ul li {
  display: inline;
}

nav ul li a {
  text-decoration: none;
  font-size: 1rem;
  color: #B22222; /* You can customize the color */
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #007BFF; /* Add hover effect for better UX */
}

/* Basic nav styles */
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  position: relative;
  margin-right: 20px;
}

/* Hide the dropdown by default */
nav ul li ul.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  background-color: white;
  padding: 0;
  margin: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

/* Show the dropdown on hover */
nav ul li:hover ul.dropdown {
  display: block;
}

/* Dropdown item styles */
nav ul li ul.dropdown li {
  margin: 0;
}

nav ul li ul.dropdown li a {
  padding: 6px 8px;
  display: block;
  text-decoration: none;
  color: black;
  white-space: nowrap;
}

nav ul li ul.dropdown li a:hover {
  background-color: #B22222;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
