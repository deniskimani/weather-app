import { render } from "@testing-library/react";

import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description 1",
    icon: "stubIcon1",
    temperature: {
      max: 22,
      min: 12,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
