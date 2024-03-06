import Header from "@/components/admin/header";

export default function AdminSettings({ user }) {
    return (
        <div>
            <Header user={user} />
            <h1>Settings</h1>
        </div>
    );
}