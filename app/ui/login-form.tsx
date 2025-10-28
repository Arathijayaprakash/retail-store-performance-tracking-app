'use client'

import { useActionState } from "react"
import { authenticate } from "../lib/actions"

export default function LoginForm() {
    const [error, formAction, isPending] = useActionState(authenticate, undefined)
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form action={formAction}
                className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md"
            >
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Login
                </h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                    />
                </div>

                {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

                <button
                    type="submit"
                    disabled={isPending}
                    className={`w-full rounded-md py-2 text-white ${isPending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {isPending ? 'Signing in...' : 'Sign In'}
                </button>

            </form>
        </div>
    )
}