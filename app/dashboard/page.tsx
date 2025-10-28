import { lusitana } from "../ui/fonts";
import SignOutButton from "../ui/sign-out-button";

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>Top performer</div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <div>Chart</div>
            </div>
            <SignOutButton />
        </main>
    );
}
