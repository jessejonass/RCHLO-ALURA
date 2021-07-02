import React from "react";
import { render, screen } from "@testing-library/react";

import { MenuItem } from "./Menu";

describe("Exibição do menu de categorias", () => {
  it("Item do menu de categorias", () => {
    render(<MenuItem label="MenuItem" />);
    expect(screen.getByText("MenuItem")).toBeInTheDocument();
  });
});
