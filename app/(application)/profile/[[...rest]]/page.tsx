import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div className="w-full flex justify-center">
      <UserProfile />
    </div>
  );
}
