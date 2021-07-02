import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

test("Exibição do footer", () => {
  render(<Footer />);
  expect(
    screen.getByText("Receba ofertas e novidades por e-mail"),
  ).toBeInTheDocument();
});
