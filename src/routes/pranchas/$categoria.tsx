import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { getBoardCategory } from "@/data/catalog";

export const Route = createFileRoute("/pranchas/$categoria")({
  beforeLoad: ({ params }) => {
    if (!getBoardCategory(params.categoria)) throw notFound();
  },
  component: Outlet,
});
