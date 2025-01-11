// WARNING: This has to stay a **server component**
// NOTE: Rememer loaders/suspense

import MyClientComponent from "@/components/MyClientComponent";

export default async function Home() {
  // WARNING: you cannot remove this line.
  await new Promise((resolve) => setTimeout(resolve, 3_000));
  return <MyClientComponent />;
}
