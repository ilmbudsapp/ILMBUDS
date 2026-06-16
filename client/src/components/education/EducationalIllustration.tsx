export type IllustrationKey = "kaaba" | "ibrahim" | "friends" | "bilal";

const ILLUSTRATIONS: Record<
  IllustrationKey,
  { src: string; alt: string; width: number; height: number }
> = {
  kaaba: {
    src: "/images/kaaba-vector.svg",
    alt: "Stilizovana ilustracija Kaabe — simbol učenja o ibadeti i putovanju",
    width: 640,
    height: 480,
  },
  ibrahim: {
    src: "/images/ibrahim-idols.svg",
    alt: "Ilustracija proroka Ibrahima — tema vjere i strpljenja za djecu",
    width: 640,
    height: 480,
  },
  friends: {
    src: "/images/good-friends.svg",
    alt: "Ilustracija djece koja uče dobar ahlak i prijateljstvo",
    width: 640,
    height: 480,
  },
  bilal: {
    src: "/images/bilal-muezzin.svg",
    alt: "Ilustracija Bilala (r.a.) — učenje o azanu i zvuku islama",
    width: 640,
    height: 480,
  },
};

type Props = {
  illustration: IllustrationKey;
  caption?: string;
  className?: string;
};

export default function EducationalIllustration({ illustration, caption, className = "" }: Props) {
  const img = ILLUSTRATIONS[illustration];

  return (
    <figure className={`my-8 overflow-hidden rounded-2xl border border-emerald-100 bg-white ${className}`}>
      <img
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading="lazy"
        decoding="async"
        className="mx-auto h-auto w-full max-w-md object-contain p-6"
      />
      {caption ? (
        <figcaption className="border-t border-emerald-50 px-4 py-3 text-center text-sm text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function illustrationForHadithCategory(category: string): IllustrationKey {
  const c = category.toLowerCase();
  if (c.includes("namaz") || c.includes("ibadet")) return "kaaba";
  if (c.includes("porodica") || c.includes("bratstvo")) return "friends";
  if (c.includes("znanje") || c.includes("jezik")) return "bilal";
  return "friends";
}

export function illustrationForBlogTopic(topic: string): IllustrationKey {
  switch (topic) {
    case "prophets":
      return "ibrahim";
    case "prayer":
    case "quran":
    case "ramadan":
      return "kaaba";
    case "arabic":
    case "duas":
      return "bilal";
    default:
      return "friends";
  }
}
