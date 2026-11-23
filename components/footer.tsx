export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-600 dark:text-gray-300">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Trilok Bhattacharya
      </small>
      <p className="text-xs">
        Built with ByteGrad&apos;s portfolio template.{" "}
        <a
          className="underline underline-offset-4"
          href="https://github.com/triii10/portfolio-website"
          data-umami-event="source-code-click"
        >
          View source code
        </a>
      </p>
    </footer>
  );
}
