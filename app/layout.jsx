import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="grid h-screen place-items-center bg-verylightgrayishblue">
        {children}
      </body>
    </html>
  );
}
