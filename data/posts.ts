export type Post = {
  category: string;
  title: string;
  image: string;
  href: string;
};

export const posts: Post[] = [
  {
    category: "Development",
    title: "Getting tickets to the big show",
    image: "https://picsum.photos/seed/trydo-b1/800/900",
    href: "#",
  },
  {
    category: "Management",
    title: "A big ticket gone to be an interesting",
    image: "https://picsum.photos/seed/trydo-b2/800/900",
    href: "#",
  },
  {
    category: "Design",
    title: "The Home of the Future Could Be",
    image: "https://picsum.photos/seed/trydo-b3/800/900",
    href: "#",
  },
];
