import Image from "next/image";
import { Link, Avatar, Chip } from "@nextui-org/react";
import NavHeader from "./components/NavHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-3">
      <NavHeader />
      <div className="container mx-auto ">
        <h1 className="text-4xl text-center py-3">Software Developer</h1>
        <Avatar
          isBordered
          radius="lg"
          // className="w-70 h-70"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
        <Link href="#" size="lg" color="secondary">
          muthomi g pius
        </Link>
        <div className="flex gap-4">
          <Chip color="warning" variant="shadow">
            Shadow
          </Chip>{" "}
          <Chip color="warning" variant="shadow">
            Shadow
          </Chip>{" "}
          <Chip color="warning" variant="shadow">
            Shadow
          </Chip>
        </div>
      </div>
    </main>
  );
}
