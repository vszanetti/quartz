import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <header>
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
        </ul>
      </nav>
      {children.length > 0 && <div>{children}</div>}
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
`

export default (() => Header) satisfies QuartzComponentConstructor
