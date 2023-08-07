import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-10">
      <SignUp />
    </div>
  );
}
