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
