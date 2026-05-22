import React from "react";
import { Link, useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const [location] = useLocation();
  const paths = location.split("/").filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;
          const title = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

          return (
            <li key={path} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {title}
                </span>
              ) : (
                <Link href={href} className="hover:text-primary transition-colors">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
