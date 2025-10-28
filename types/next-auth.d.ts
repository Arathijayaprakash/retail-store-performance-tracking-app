import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        name: string;
        email: string;
        role: "admin" | "employee";
    }

    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            role: "admin" | "employee";
        };
    }

    interface JWT {
        id: string;
        role: "admin" | "employee";
    }
}
