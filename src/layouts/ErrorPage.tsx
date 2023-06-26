import { useRouteError } from "react-router-dom";

export function RootErrorBoundary() {
  let error = useRouteError() as Error;
  return (
    <div>
      <h1>呃哦，出了大问题 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        单击此处重新加载应用程序
      </button>
    </div>
  );
}
