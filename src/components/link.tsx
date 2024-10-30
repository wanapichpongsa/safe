import Link from "next/link";

export default function LinkComponent() {
  
  return (
    <div className="flex mt-4" id="link">
    <Link href="/login">CASE STUDIES</Link>
    </div>
  );
}