import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef, ReactNode } from "react";

export type LinkProps = NextLinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    children: ReactNode;
  };

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, ...props }, ref) => {
    const urlStr = href.toString();
    const isExternalOrProtocol = urlStr.includes(":");

    if (isExternalOrProtocol)
      return (
        <a
          ref={ref}
          href={urlStr}
          target={urlStr.startsWith("http") ? "_blank" : undefined}
          rel={urlStr.startsWith("http") ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );

    return (
      <NextLink ref={ref} href={href} {...props}>
        {children}
      </NextLink>
    );
  },
);

export default Link;

Link.displayName = "Link";
