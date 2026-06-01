import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://osasweb.com",
      lastModified: new Date(),
    },
  ];
}