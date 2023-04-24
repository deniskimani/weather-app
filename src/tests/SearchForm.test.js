import { render } from "@testing-library/react";

import SearchForm from "../components/SearchForm";

describe("App", () => {
  it("renders App component correctly", () => {
    const { asFragment } = render(<SearchForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct city and location props", () => {
    const { getByText } = render(<SearchForm />);

    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
