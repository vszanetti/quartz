import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <header>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZESHF4GBRJ"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZESHF4GBRJ');
          `,
        }}
      />
      <nav
        style={{
          padding: "10px 0",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "flex-start", // Align items to the left
          }}
        >
          <li style={{ marginRight: "20px" }}>
            <a href="/aboutme" style={{ textDecoration: "none", color: "crimson" }}>
              About
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="/posts" style={{ textDecoration: "none", color: "crimson" }}>
              Posts
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="/contact" style={{ textDecoration: "none", color: "crimson" }}>
              Contact
            </a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="/privacy" style={{ textDecoration: "none", color: "crimson" }}>
              Privacy
            </a>
          </li>
        </ul>
      </nav>
      {children && children.length > 0 && <div>{children}</div>}
    </header>
  )
}

export default (() => Header) satisfies QuartzComponentConstructor
