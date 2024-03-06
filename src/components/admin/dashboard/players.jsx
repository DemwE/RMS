import Header from "@/components/admin/header";

export default function AdminPlayers({ user }) {
    return (
        <div>
            <Header user={user} />
            <h1>Players</h1>
        </div>
    );
}