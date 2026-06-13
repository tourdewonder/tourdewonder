import { useEffect } from "react";

interface UseHeadOptions {
  title: string;
  description?: string;
}

const useHead = ({ title, description }: UseHeadOptions) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let metaDesc: HTMLMetaElement | null = null;

    if (description) {
      metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      } else {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        metaDesc.setAttribute("content", description);
        document.head.appendChild(metaDesc);
      }
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc) {
        metaDesc.setAttribute("content", metaDesc.getAttribute("content") || "");
      }
    };
  }, [title, description]);
};

export default useHead;
