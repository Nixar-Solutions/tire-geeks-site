export interface Author {
  slug: string;
  name: string;
  fullName: string;
  title: string;
  yearsInIndustry: number;
  expertise: string[];
  bio: string;
  shortBio: string;
  imagePath: string;
}

export const authors: Author[] = [
  {
    slug: 'moni-tariq',
    name: 'Moni Tariq',
    fullName: 'Moni Tariq',
    title: 'Owner, Tire Geeks',
    yearsInIndustry: 20,
    expertise: [
      'Lift kits',
      'Leveling kits',
      'Lowering work',
      'Custom builds',
      'Suspension',
      'Alignment',
      'Vehicle fitment',
    ],
    bio: "Moni Tariq owns Tire Geeks and runs both shops in person — Florin Road in South Sacramento and Arden Way on the north end. Twenty years in the trade, most of it spent under the trucks the chain shops won't touch: 4-inch lifts on Tacomas, leveling kits on F-150s and Silverados, coilover installs on 10th-gen Civics, post-lift alignment on lifted 4Runners. Moni does the fitment math the chains skip — backspacing, brake clearance, control-arm angles, bump-stop measurements. No upsells, no database-lookup recommendations, no two-week appointment book. Walk in, talk through your build, drive out with it dialed. Don't trust a nerd for your needs — go with the geeks.",
    shortBio:
      "Owner of Tire Geeks. Twenty years installing lifts, lowering kits, and coilovers and dialing in post-build alignment across Sacramento. The fitment math the chains skip — that's his work.",
    imagePath: '/images/team/moni-tariq.jpg',
  },
  {
    slug: 'erika',
    name: 'Erika',
    fullName: 'Erika from Tire Geeks',
    title: 'Tire & Wheel Specialist',
    yearsInIndustry: 10,
    expertise: [
      'Tire selection',
      'Wheel fitment',
      'Customer financing',
      'Acima approvals',
      'Walk-in service',
    ],
    bio: "Erika has been in the tire industry for 10 years and runs the counter at Tire Geeks. Her job: get you into the right tire and the right wheel for what you actually drive and what you actually need to spend. She'll walk you through the fitment math on a custom wheel package — offset, bolt pattern, brake clearance — without making you feel like a beginner for asking. She'll also walk you through Acima approval in five minutes flat: soft pull only, $5,000 cap, 100 days no interest. No credit shame, no upsell, no judgment. If you walk in unsure, you walk out rolling. Ride now. Pay later.",
    shortBio:
      'Tire and wheel specialist at Tire Geeks. Ten years walking customers through tire selection, custom wheel fitment, and Acima approval. No credit shame, no upsell, no judgment.',
    imagePath: '/images/team/erika.jpg',
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
