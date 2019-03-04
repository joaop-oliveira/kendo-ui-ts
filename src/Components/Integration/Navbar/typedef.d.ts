import { ReactNode } from "react";
import { match } from "react-router-dom";
import { History, Location } from "history";

export interface NavbarProps {
  history: History;
  location: Location;
  match: match;
}
