// Server component — required for generateStaticParams in static export
import CourseDetailsClient from "./CourseDetailsClient";

// All known course slugs — pre-generates static HTML for each course
export function generateStaticParams() {
  return [
    { slug: "sap-mm" },
    { slug: "sap-abap" },
    { slug: "sap-ariba" },
    { slug: "sap-pm" },
    { slug: "sap-basis" },
    { slug: "sap-cloud" },
    { slug: "ai-engineering" },
    { slug: "data-engineering" },
  ];
}

export default function Page() {
  return <CourseDetailsClient />;
}
