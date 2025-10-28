import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const user = auth?.user;
            const isLoggedIn = !!user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');
            const isOnEmployee = nextUrl.pathname.startsWith('/employee');

            if (!isLoggedIn && (isOnDashboard || isOnAdmin || isOnEmployee)) {
                return false; // redirect to /login
            }
            // Logged in → redirect based on role
            if (isLoggedIn && nextUrl.pathname === '/login') {
                if (user.role === 'admin') {
                    return Response.redirect(new URL('/admin', nextUrl));
                } else if (user.role === 'employee') {
                    return Response.redirect(new URL('/employee', nextUrl));
                }
            }
            return true;
        },
        // Add user data (like role) to the session
        async session({ session, token }) {
            if (token?.role) {
                session.user.role = token.role as 'admin' | 'employee';
            }
            return session;
        },

        // Add custom claims (role) to the JWT token
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
    },

    providers: [],
} satisfies NextAuthConfig;