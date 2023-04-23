import { render } from "@testing-library/react";
import App from "../components/App";

// import forecast from "../data/forecast.json";

describe("App", () => {
  it("renders App component correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
