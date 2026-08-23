import { useParams } from "react-router-dom";
import Seo from "../lib/Seo";
import { getGuideBySlug } from "../data/guides";
import NotFound from "./NotFound";

// Route is wired up ahead of content so guides can be added later without
// any routing changes — see src/data/guides.js.
export default function GuideDetail() {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  if (!guide) return <NotFound />;

  return (
    <>
      <Seo title={guide.title} description={guide.description} path={`/guides/${guide.slug}`} />
      <div className="section">
        <div className="section-inner">
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
        </div>
      </div>
    </>
  );
}
