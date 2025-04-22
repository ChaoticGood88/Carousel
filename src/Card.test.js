import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

const CARD_PROPS = {
  caption: "Cute Puppy",
  src: "https://example.com/puppy.jpg",
  currNum: 1,
  totalNum: 5,
};

describe("Card component", () => {
  it("renders without crashing", () => {
    render(<Card {...CARD_PROPS} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Card {...CARD_PROPS} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
