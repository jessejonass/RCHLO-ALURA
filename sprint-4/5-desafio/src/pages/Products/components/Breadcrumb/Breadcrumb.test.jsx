import React from "react";
import { render, screen } from "@testing-library/react";
import { BreadcrumbItem } from "./Breadcrumbs";

describe("Exibição breadcrumb", () => {
  it("Exibir Item de breadcrumb", () => {
    render(<BreadcrumbItem label="BreadcrumbItem" />);
    expect(screen.getByText("BreadcrumbItem")).toBeInTheDocument();
  });
});
