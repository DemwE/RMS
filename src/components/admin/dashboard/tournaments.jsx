import Header from "@/components/admin/header";

export default function AdminTournaments({ user }) {
    return (
        <div>
            <Header user={user} />
            <h1>Tournaments</h1>
        </div>
    );
}