type MaybeString = string | undefined | null;

const defaultSiteUrl = "https://www.stellacollege.edu.au";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function stripHtml(value: MaybeString) {
  if (!value) {
    return "";
  }

  return value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerpt(value: MaybeString, maxLength = 160) {
  const text = stripHtml(value);
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trim()}…`;
}

export function toIsoDate(value: MaybeString) {
  if (!value) {
    return undefined;
  }

  const d = new Date(value);
  if (Number.isNaN(d.getTime())) {
    return undefined;
  }

  return d.toISOString();
}

export function getCourseSchema(input: {
  title: string;
  description?: string;
  urlPath: string;
  providerName?: string;
  category?: string;
  image?: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: input.title,
    description: input.description || "",
    provider: {
      "@type": "Organization",
      name: input.providerName || "Stella College",
      sameAs: siteUrl,
    },
    url: absoluteUrl(input.urlPath),
    ...(input.category ? { educationalCredentialAwarded: input.category } : {}),
    ...(input.image ? { image: input.image } : {}),
  };
}

export function getBlogPostingSchema(input: {
  title: string;
  description?: string;
  urlPath: string;
  image?: string;
  publishedAt?: string;
  authorName?: string;
  articleSection?: string;
}) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description || "",
    mainEntityOfPage: absoluteUrl(input.urlPath),
    url: absoluteUrl(input.urlPath),
    ...(input.image ? { image: [input.image] } : {}),
    ...(input.publishedAt ? { datePublished: input.publishedAt } : {}),
    dateModified: input.publishedAt || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: input.authorName || "Stella College Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Stella College",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/23.png`,
      },
    },
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
  };
}
