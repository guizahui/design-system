import logo from "@axa-fr/design-system-slash-css/logo-axa.svg";
import "@axa-fr/design-system-slash-css/dist/Layout/Footer/Footer.scss";
import { PropsWithChildren, forwardRef } from "react";

type FooterProps = {
  href?: string;
  title?: string;
  alt?: string;
  icon?: string;
  className?: string;
  version?: string;
};

export const Footer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<FooterProps>
>(
  (
    {
      className = "af-footer",
      href = "https://www.axa.fr/",
      title = "Site Axa",
      icon = logo,
      alt = "Logo Axa",
      version,
      children = `© ${new Date().getFullYear()} AXA Tous droits réservés`,
      ...props
    },
    ref,
  ) => (
    <footer ref={ref} className={className} {...props}>
      <div className="container-fluid container">
        {Boolean(icon) && (
          <a
            className="af-logo"
            href={href}
            title={title}
            target="blank"
            rel="noopener noreferrer"
          >
            <img className="af-logo__brand" src={icon} alt={alt} />
          </a>
        )}
        <div className="af-footer-content">{children}</div>
        {version && (
          <span className="af-footer-version">Version {version}</span>
        )}
      </div>
    </footer>
  ),
);
Footer.displayName = "Footer";
