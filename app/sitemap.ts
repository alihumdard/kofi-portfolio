import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kofioforimensah.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more pages here when inner pages are built:
    // { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // { url: `${baseUrl}/research`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}