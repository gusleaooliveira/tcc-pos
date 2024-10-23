import Image from "next/image";
import { useSession } from "next-auth/react";
import { LoadingImage } from "../LoadingImage";

interface IProps {
  big?: boolean;
}

export default function Avatar({ big = false }: IProps) {
  const { data: session } = useSession();
  const user = session?.user?.user;
  const avatarURL =
    user?.avatar?.url || LoadingImage({ w: big ? 114 : 48, h: big ? 114 : 48 });
  const nameUser = user?.name || "Usuário";

  return (
    <div className={`relative ${big ? "h-[114px] w-[114px]" : "h-12 w-12"}`}>
      <Image
        src={avatarURL}
        alt={`Avatar de ${nameUser}`}
        height={big ? 114 : 48}
        width={big ? 114 : 48}
        priority
        className={`rounded-full`}
      />
    </div>
  );
}
