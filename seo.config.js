/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    title: "NextTyTail",
    titleTemplate: "%s | NextJs Typescript TailwindCSS",
    defaultTitle: "NextJs Typescript TailwindCSS",
    description:
      "Personalized Nextjs Typescript TailwindCSS template",
    canonical: "https://beinawair.com",
    openGraph: {
      url: "https://beinawair.com",
      title: "Beinawair",
      description: "Beinawair Nextjs + Typescript + TailwindCSS template",
      type: "website",
      images: [
        {
          url: "https://beinawair.com/wp-content/uploads/2022/06/Wordmark-symbol-dark-128.svg",
          alt: "beinawair image",
          width: 800,
          height: 600,
        },
      ],
      site_name: "Beinawair",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
    additionalLinkTags: [
      {
        rel: "icon",
        href: "https://beinawair.com/wp-content/uploads/2022/06/Wordmark-symbol-dark-128.svg",
      },
    ],
  };
  
  export default defaultSEOConfig;