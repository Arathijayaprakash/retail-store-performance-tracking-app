'use client';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
    const router = useRouter();

    async function handleSignOut() {
        await fetch('/api/signout', { method: 'POST' });
        router.push('/');
    }

    return (
        <button onClick={handleSignOut} className="p-2 rounded bg-gray-100 hover:bg-gray-200">
            Sign Out
        </button>
    );
}
