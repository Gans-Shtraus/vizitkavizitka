// app/sitemap.tsx
export default function sitemap() {
  const baseUrl = "https://vizitkavizitka1.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFreq: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFreq: "weekly",
      priority: 0.9,
    },
  ];
}
