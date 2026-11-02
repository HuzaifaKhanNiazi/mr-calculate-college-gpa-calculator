import { useEffect } from "react";

export default function useSeo({ title, description }) {
  useEffect(() => {
    document.title = title;

    // Duplicate tags hata kar ek hi sahi tag rakhein
    const tags = document.querySelectorAll('meta[name="description"]');
    tags.forEach((t, i) => i > 0 && t.remove());

    let tag = tags[0];
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);
  }, [title, description]);
}
