import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/c1542410-8c4f-484a-bf26-6d513f17ad3d-ass4vq.30-TOUT.jpg",
  "https://utfs.io/f/ec9cd37b-f28d-440c-a058-fbf0778c1945-agv40q.jpg",
  "https://utfs.io/f/30eb7888-93cf-4998-a161-73e18c2161bb-hfi7fi.jpg",
  "https://utfs.io/f/b3538bc9-f2a1-4d05-b1b8-4c27f19b1edb-uyz6p5.jpg",
  "https://utfs.io/f/45210813-6561-43d3-a3b1-eb45d2a80781-uqe41n.jpg",
  "https://utfs.io/f/b0cc903e-a34d-406e-9919-3697d8f8c1f4-9lxfti.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
