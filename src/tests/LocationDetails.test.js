import { render } from "@testing-library/react";

import LocationDetails from "../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const validProps = {
      country: "UK",
      city: "Manchester",
    };
    const { getByText } = render(<LocationDetails location={validProps} />);

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
