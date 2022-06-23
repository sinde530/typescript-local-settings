import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders App Components", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("hy");
  });
});
