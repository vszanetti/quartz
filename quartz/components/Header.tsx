import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <header>
      <script
        defer
        src="https://serrazanetti.xyz/script.js" // Use absolute URL
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

export default (() => Header) satisfies QuartzComponentConstructor
