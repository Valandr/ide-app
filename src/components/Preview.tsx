import { useSelector } from "react-redux";
const Preview = () => {
  const tabState = useSelector((state) => state.tabs);

  function getCode(lang: string) {
    return tabState?.find((obj) => obj.lang === lang).code;
  }
  const srcDoc = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>${getCode("css")}</style>
    </head>
    <body>
      ${getCode("html")}
      <script>${getCode("js")}</script>
    </body>
  </html>
  `;
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-zinc-900">
      <iframe
        className="block w-full h-full"
        srcDoc={srcDoc}
        sandbox="allow-scripts allow-modals"
      ></iframe>
    </div>
  );
};

export default Preview;
