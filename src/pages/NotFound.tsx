import { Link } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const NotFound = () => {
  usePageMetadata({
    title: "Page Not Found — Qiqi",
    description: "The requested portfolio page could not be found.",
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center">
        <p className="text-primary text-sm font-mono tracking-wider uppercase">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you requested does not exist, or the project slug is not available.
        </p>
        <Link
          to="/#works"
          className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
