// app/category/[slug]/page.jsx

import { notFound } from "next/navigation";
import { businesses } from "@/lib/constants/businesses";
import CategoryPage from "@/components/category/CategoryPage";

export default async function CategoryPageServer({ params }) {
  const { slug } = await params;

  // Filter businesses by category slug
  const filtered = businesses.filter((biz) => biz.category.slug === slug);

  // Get category name (from the filtered business)
  const categoryName = filtered[0]?.category?.name;

  if (!categoryName) notFound(); // If no category found, show 404 page

  return <CategoryPage categoryName={categoryName} filtered={filtered} />;
}
