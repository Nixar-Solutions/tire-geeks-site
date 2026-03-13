import { galleryBuilds, getBuildBySlug } from '@/data/galleryBuilds';
import BuildDetailClient from '@/components/gallery/BuildDetailClient';

export async function generateStaticParams() {
  return galleryBuilds.map((build) => ({ slug: build.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const build = getBuildBySlug(slug);
  if (!build) return {};
  return {
    title: `${build.vehicle} Build | Tire Geeks Sacramento`,
    description: `${build.description} — ${build.wheels}, ${build.tires}, ${build.suspension}`,
    openGraph: {
      title: `${build.vehicle} | Built by Tire Geeks`,
      description: build.description,
      images: [{ url: build.images[0], width: 1200, height: 630 }],
    },
  };
}

export default async function BuildDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const build = getBuildBySlug(slug);
  return <BuildDetailClient build={build} />;
}
